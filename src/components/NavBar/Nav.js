import React, {Component} from 'react'
import NavLinks from './NavLinks'
import './NavBar.css'

const Nav = () => {
    return (
        <nav className="nav">
            <NavLinks />
        </nav>
    );
}

export default Nav;