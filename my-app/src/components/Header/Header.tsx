import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = (props: any) => {
    return (
        <header className="header">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/DC_Comics_logo.png/600px-DC_Comics_logo.png" alt="Ничего нет" />
            <span className="time">{new Date().toLocaleTimeString()} </span>
            <div className="authBlock">
                {props.isAuth ? <div>{props.login} - <button onClick={props.logoutMe}>Log out</button></div>
                    : <NavLink to={'/login'}>Login</NavLink>}

            </div>
        </header>
    );
}


export default Header;