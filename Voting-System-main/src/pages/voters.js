import axios from 'axios';
import React from 'react';
import './table.css';

function Voters() {






    return (
        <div>
            <h2 className='table'>Voters List</h2>
            <table>
                                <tr>
                                <th>Voters Id</th>
                                <th>Name</th>
                                <th>Phone no</th>
                                <th>Email</th>
                                </tr>
                            </table>

            {window.voterslist.map((voters) => {
                const list = (
                    <>
                        
                            
                            {/*<li>Id: {voters.id}</li><br></br>
                            <li>Name: {voters.name}</li><br></br>
                            <li>Phone: {voters.phone}</li><br></br>
                <li>Email: {voters.email}</li><br></br>*/}
                           
                            <table>
                            <tr>
                                <td>{voters.id}</td>
                                <td>{voters.name}</td>
                                <td>{voters.phone}</td>
                                <td>{voters.email}</td>

                            </tr>
                            </table>
                        
                        
                    </>
                );
                return list;
            })}
        </div>
    );
};

export default Voters;