import axios from 'axios';
import React from 'react';
import { useState } from "react";
import { useHistory } from 'react-router-dom';
import "../components/registration.css";

function Election() {
    let history = useHistory();
    const [electionid, setelectionid] = useState("");
    const [title, settitle] = useState("");
    const [category, setCategory] = useState("");
    const [description, setdescription] = useState("");
    async function handleSubmit(event) {
        event.preventDefault();
        try {

            await axios.post("http://localhost:8003/saveElection",
                {

                    title: title,
                    category: category,
                    description: description,
                    electionid: electionid,

                });

            alert("User Registation Successfully");
            setelectionid("");
            settitle("");
            setCategory("");
            setdescription("");



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
                        <h1>Elections List</h1>
                        {window.electionlist.map((voters) => {
                            const list = (
                                <>
                                    <ul>
                                        <li>title: {voters.title}</li>
                                        <li>category: {voters.category}</li>
                                        <li>description: {voters.description}</li>

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
                            <h1>Create Election</h1>
                            <p>Fill in the Information Below</p>

                            <input type="text"
                                name="title"
                                placeholder="title"
                                size={60}
                                onChange={(event) => {
                                    settitle(event.target.value);
                                }}
                            />

                            <input type="text"
                                name="category"
                                placeholder="category"
                                onChange={(event) => {
                                    setCategory(event.target.value);
                                }}
                            />

                            <input type="text"
                                name="description"
                                placeholder="description"

                                onChange={(event) => {
                                    setdescription(event.target.value);
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

export default Election;