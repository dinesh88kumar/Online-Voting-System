import axios from "axios";
import { useState } from "react";
import "../components/registration.css";
import { useHistory, Route } from "react-router-dom";
window.arid = "";
window.arpassword = "";
window.voterslist = "";
window.electionlist = "";
window.candidatelist = "";
function AdminLogin() {

    let history = useHistory();
    const [id, setid] = useState("");
    const [password, setPassword] = useState("");




    async function handleSubmit(event) {
        event.preventDefault();
        try {
            console.log(id + "&&&&&&&&&&&&&&${id}")
            await axios.get("http://localhost:8005/admin/" + id
            ).then((response) => (window.arid = response.data.id, window.arpassword = response.data.password));
            console.log("Email id :" + window.aremail)
            if (window.arid == id && window.arpassword == password) {
                history.push('/adminpanel')
                console.log("User Login Successfully");
            } else {
                alert("User Login FAILED");
            }

            await axios.get("http://localhost:8000/getall"
            ).then((response) => (window.voterslist = response.data)
            );

            await axios.get("http://localhost:8003/getElections"
            ).then((response) => (window.electionlist = response.data)
            );
            await axios.get("http://localhost:8004/getCandidates"
            ).then((response) => (window.candidatelist = response.data)
            );


        }
        catch (err) {
            alert("User Registation Failed" + err);
        }
    }
    return (
        <div>
            <ul className="header">
                <li><h2 className='header'>Online Voting System</h2></li>
                <li><a href="/"><button className='button-4'>Home</button></a></li>
                <li><button className='button-4' onClick={() => { history.push('/login') }}>Login</button></li>
                <li><button className='button-4' onClick={() => { history.push('/registration') }}>Register</button></li>
            </ul>

            <div className="register-container">

                <form className="register-form" onSubmit={handleSubmit}>
                    <br></br>
                    <h1>Admin Login</h1>
                    <p>Fill in the Information Below</p>






                    <input type="text"
                        name="id"
                        placeholder="id"
                        onChange={(event) => {
                            setid(event.target.value);
                        }}
                    />
                    <input type="text"
                        name="password"
                        placeholder="password"
                        onChange={(event) => {
                            setPassword(event.target.value);
                        }}
                    />





                    <button type="submit">Login</button>


                </form>


            </div>
        </div>
    )
}

export default AdminLogin;