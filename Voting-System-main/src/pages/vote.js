import axios from 'axios';
import React from 'react';
import { useState } from "react";
function Vote() {
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


        console.log("called")
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

                                        <br></br>
                                        <button onClick={() => getCandidates(voters.electionid)}>Select</button>

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

                        <h1>Candidates List</h1>

                        {clist.map((e) => {
                            const list = (
                                <>
                                    <ul>
                                        <li>name: {e.name}</li>
                                        <li>email: {e.email}</li>
                                        <li>designation: {e.designation}</li>

                                        <br></br>
                                        <button onClick={() => onVote(e.id, e.name, e.email, e.designation, e.bio, e.electionid, e.counts)}>Vote</button>
                                    </ul>
                                    <hr />
                                </>
                            );
                            return list;
                        })}



                    </div>
                </div>

            </div >
        </div>
    );
};

export default Vote;