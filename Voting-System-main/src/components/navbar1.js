import React from "react";
import { Nav, NavLink, NavMenu } from "./NavbarElement";
import './nav.css';

const Navbar1 = () => {
    return (
        <>


            <Nav>
                <NavMenu>

                    <NavLink to="/voters" activeStyle>
                        Voters
                    </NavLink>

                    <NavLink to="/candidates" activeStyle>
                        Candidate
                    </NavLink>

                    <NavLink to="/election" activeStyle>
                        Election
                    </NavLink>
                    <a href="/login"><button className="logout">
                        Logout
                    </button></a>
                </NavMenu>
            </Nav>
        </>
    );
};

export default Navbar1;
