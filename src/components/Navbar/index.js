import React from 'react';
import {
  Nav,
  NavLink,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './NavbarElements';

import logo from "./img/logo.jpg"
  
const Navbar = () => {
  return (
    <>
      <Nav>
     
        <NavMenu>
        <img src={logo}  alt="Logo"  style={{width:'200px', height:'50px', marginRight:'750px'}}/>
          <NavLink to='/about' activeStyle>
            Services
          </NavLink>
          <NavLink to='/events' activeStyle>
            Market Place
          </NavLink>
          <NavLink to='/annual' activeStyle>
            Feature
          </NavLink>
          <NavLink to='/team' activeStyle>
            About
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/signin'>Start Free Trial</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};
  
export default Navbar;