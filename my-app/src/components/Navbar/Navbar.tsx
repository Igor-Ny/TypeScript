import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={classes.nav}>
            <ul>
                <li><NavLink activeClassName={`${classes.gold}`} to="/profile">Profile</NavLink></li>
                <li><NavLink activeClassName={`${classes.gold}`} to="/dialogs">Messege</NavLink></li>
                <li><NavLink activeClassName={`${classes.gold}`} to="/users">Users</NavLink></li>
                <li><NavLink activeClassName={`${classes.gold}`} to="/news">News</NavLink></li>
                <li><NavLink activeClassName={`${classes.gold}`} to="/music">Music</NavLink></li>
                <li><NavLink activeClassName={`${classes.gold}`} to="/settings">Settings</NavLink></li>
            </ul>
        </nav>
    );
}

export default Navbar;