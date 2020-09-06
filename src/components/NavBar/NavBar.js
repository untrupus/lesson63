import React from 'react';
import './NavBar.css';
import {NavLink} from 'react-router-dom';

const NavBar = () => {
    return (
        <div className="header container">
            <h1>My Blog</h1>
            <nav className="main-nav">
                <ul>
                    <li><NavLink to="/posts" exact
                                 className="navLink"
                                 activeStyle={{
                                    fontWeight: "bold",
                                }}
                    >Home</NavLink></li>
                </ul>
            </nav>
        </div>
    );
};

export default NavBar;