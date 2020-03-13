import React, { useState } from 'react';
import { useDarkMode } from './useDarkMode';
import {
  Navbar,
  Button,
  Nav,
  NavbarText
} from 'reactstrap';

const NavBar = () => {
    const [darkMode, setDarkMode] = useDarkMode(false);
    const toggleMode = e => {
        e.preventDefault();
        setDarkMode(!darkMode);
      };
    
    return (
        <div>
            <Navbar>
                <Nav>
                <Button onClick={toggleMode}></Button>
                <NavbarText>Google Trends, June-July 2019</NavbarText>

                </Nav>
            
            </Navbar>
        </div>
    )
}

export default NavBar