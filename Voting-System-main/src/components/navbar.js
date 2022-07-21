import React from "react";
import { Nav, NavLink, NavMenu } from "./NavbarElement";
import './nav.css';


const Navbar = () => {
    return (
        

            <Nav className="nav">
                <NavMenu>

                    <NavLink to="/dashboard" activeStyle>
                        Dashboard
                    </NavLink>

                    <NavLink to="/vote" activeStyle>
                        Vote
                    </NavLink>

                    <NavLink to="/result" activeStyle>
                        Results
                    </NavLink>
                    
                        <a href="/login"><button className="logout">
                        Logout
                        
                        </button></a>
                    
                </NavMenu>
            </Nav>
                        
    );
};

export default Navbar;
