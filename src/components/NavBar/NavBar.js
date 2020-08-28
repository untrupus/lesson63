import React from 'react';
import './NavBar.css';
import {NavLink} from 'react-router-dom';

const NavBar = () => {
    return (
        <div className="header container">
            <h1>My Blog</h1>
            <nav className="main-nav">
                <ul>
                    <li><NavLink to="/posts"
                                 className="navLink"

                    >Home</NavLink></li>
                    <li><NavLink to="/posts/add"
                                 className="navLink"
                                 activeStyle={{
                                     fontWeight: "bold",
                                 }}
                    >Add</NavLink></li>
                    <li><NavLink to="/about"
                                 className="navLink"
                                 activeStyle={{
                                     fontWeight: "bold",
                                 }}
                    >About</NavLink></li>
                    <li><NavLink to="/contacts"
                                 className="navLink"
                                 activeStyle={{
                                     fontWeight: "bold",
                                 }}
                    >Contacts</NavLink></li>
                </ul>
            </nav>
        </div>
    );
};

export default NavBar;