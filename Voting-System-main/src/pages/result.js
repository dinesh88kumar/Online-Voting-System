import React from "react";
import { useState } from "react";
import "../components/registration.css";
function Result() {
    var arr = [];
    var c = 0;
    window.candidatelist.forEach(element => {
        if (element.counts > c) {
            arr = [];
            c = element.counts;
            arr.push(element)


        }
    });
    return (

        <div className="bb">
            <br></br>
            <br></br>
            <div className="register-container" >
                <div class="split left">
                    <div class="centered">
                        <h1>Leading Candidate</h1>
                        {arr.map((e) => {
                            const list = (
                                <>
                                    <div className="card">
                                        <p>name: {e.name}</p>
                                        {/* <p>email: {e.email}</p> */}
                                        <p>designation: {e.designation}</p>
                                        <h1>Counts: {e.counts}</h1>
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
                        {window.candidatelist.map((e) => {
                            const list = (
                                <>
                                    <ul>
                                        <h2>{e.name}</h2>

                                        <h1>Counts: {e.counts}</h1>
                                    </ul>
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
}
export default Result