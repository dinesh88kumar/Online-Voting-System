import axios from 'axios';
import React from 'react';
import { useState } from "react";
import { useHistory } from 'react-router-dom';
import "../components/registration.css";
function Vote() {
    let history = useHistory();
    const [clist, setclist] = useState([]);

    function getCandidates(a) {
        setclist([])
        console.log("Clicked ......." + a)

        window.candidatelist.forEach(element => {
            if (element.electionid == a) {

                // clist.push(element);
                setclist(prevclist => [...prevclist, element]);
                console.log(clist + "here");
            }
        });
    }
    function onVote(id, name, email, des, bio, eleid, c) {


        console.log("called" + c)
        // axios.get("http://localhost:8030/candidate/" + a
        // ).then((response) => ());

        axios.put("http://localhost:8004/editC/" + id, {

            name: name,
            email: email,
            designation: des,
            bio: bio,
            electionid: eleid,
            counts: c + 1,

        }

        )

        axios.get("http://localhost:8004/getCandidates"
        ).then((response) => (window.candidatelist = response.data)
        );
        console.log(window.candidatelist.counts + "llll")
        alert("Voted Successfully");
        history.push('/home')


    }
    return (
        <div className='bb'>
            <br></br>
            <br></br>
            <div className="register-container" >
                <div class="split left">
                    <div class="centered">
                        <h1>Elections List</h1>
                        {window.electionlist.map((voters) => {
                            const list = (
                                <>
                                    <div className='card'>
                                        <p>{voters.title}</p>
                                        <p>{voters.category}</p>
                                        <p>{voters.description}</p>

                                        <br></br>
                                        <button onClick={() => getCandidates(voters.electionid)}>Select</button>

                                    </div>
                                    <hr />
                                </>
                            );
                            return list;
                        })}

                    </div>
                </div>

                <div class="split right">
                    <div class="centered">

                        <h1>Candidates List</h1>

                        {clist.map((e) => {
                            const list = (
                                <>
                                    <div className='card'>
                                        <p>name: {e.name}</p>
                                        <p>email: {e.email}</p>
                                        <p>designation: {e.designation}</p>

                                        <br></br>
                                        <button onClick={() => onVote(e.id, e.name, e.email, e.designation, e.bio, e.electionid, e.counts)}>Vote</button>
                                    </div>
                                    <hr />
                                </>
                            );
                            return list;
                        })}



                    </div>
                </div>

            </div >
            <br></br>
            <br></br>
        </div>
    );
};

export default Vote;