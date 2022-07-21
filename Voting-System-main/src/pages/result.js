import React from "react";
import { useState } from "react";

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

        <div>
            <div className="register-container" >
                <div class="split left">
                    <div class="centered">
                        <h1>Winner Candidate</h1>
                        {arr.map((e) => {
                            const list = (
                                <>
                                    <ul>
                                        <li>name: {e.name}</li>
                                        <li>email: {e.email}</li>
                                        <li>designation: {e.designation}</li>
                                        <h1>Counts: {e.counts}</h1>
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
                        {window.candidatelist.map((e) => {
                            const list = (
                                <>
                                    <ul>
                                        <h2>name: {e.name}</h2>

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
        </div>
    );
}
export default Result