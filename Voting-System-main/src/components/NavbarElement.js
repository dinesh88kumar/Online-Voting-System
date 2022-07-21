
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
background: #fffff;
height: 60px;
display: flex;
justify-content: space-between;
padding: 0px;
z-index: 12;
margin-right: 0px;
align-items: left;
text-align: left;
`;

export const NavLink = styled(Link)`
color: black;
display: flex;
align-items: left;
text-decoration: none;
padding: 0 1rem;
height: 50%;
cursor: pointer;
&.active {
  color: #4d4dff;
}
`;



export const NavMenu = styled.div`
display: flex;
align-items: center;
margin-right: -24px;
/* Second Nav */
/* margin-right: 24px; */
/* Third Nav */
/* width: 100vw;
white-space: nowrap; */
@media screen and (max-width: 768px) {
  display: none;
}
`;
