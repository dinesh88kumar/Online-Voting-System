import axios from 'axios';
import React from 'react';
import { useState } from "react";
import { useHistory } from 'react-router-dom';
import "../components/registration.css";
function Candidate() {
    let history = useHistory();
    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [designation, setdesignation] = useState("");
    const [bio, setbio] = useState("");
    const [electionid, setelectionid] = useState("");

    async function handleSubmit(event) {
        event.preventDefault();
        try {

            await axios.post("http://localhost:8004/saveCandidate",
                {

                    name: name,
                    email: email,
                    designation: designation,
                    bio: bio,
                    electionid: electionid,
                    counts: 0

                });

            alert("User Registation Successfully");
            setname("");
            setemail("");
            setdesignation("");
            setbio("");
            setelectionid("");




        }
        catch (err) {
            alert("User Registation Failed" + err);
        }
    }


    return (
        <div>
            <div className="register-container" >
                <div class="split left">
                    <div class="centered">

                        <h1>Candidates List</h1>
                        {window.candidatelist.map((e) => {
                            const list = (
                                <>
                                    <ul>
                                        <li>name: {e.name}</li>
                                        <li>email: {e.email}</li>
                                        <li>designation: {e.designation}</li>

                                    </ul>
                                    <hr />
                                </>
                            );
                            return list;
                        })}
                    </div>
                </div>

                <div class="split right">
                    <div class="centered">


                        <form className="register-form" onSubmit={handleSubmit}>
                            <br></br>
                            <h1>Create Candidate</h1>
                            <p>Fill in the Information Below</p>

                            <input type="text"
                                name="name"
                                placeholder="name"
                                size={60}
                                onChange={(event) => {
                                    setname(event.target.value);
                                }}
                            />

                            <input type="text"
                                name="email"
                                placeholder="email"
                                onChange={(event) => {
                                    setemail(event.target.value);
                                }}
                            />

                            <input type="text"
                                name="designation"
                                placeholder="designation"

                                onChange={(event) => {
                                    setdesignation(event.target.value);
                                }}
                            />
                            <input type="text"
                                name="bio"
                                placeholder="bio"

                                onChange={(event) => {
                                    setbio(event.target.value);
                                }}
                            />
                            <input type="text"
                                name="electionid"
                                placeholder="electionid"

                                onChange={(event) => {
                                    setelectionid(event.target.value);
                                }}
                            />






                            <button type="submit">Create</button>


                        </form>


                    </div>
                </div>

            </div >
        </div>
    );
};

export default Candidate;