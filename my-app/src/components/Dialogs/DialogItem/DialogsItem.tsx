import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './DialogItem.module.css'

export const DialogItem = (props: any) => {
    let path = "/dialogs/" + props.id

    return (
        <div className={s.dialog}>

            <NavLink activeClassName={s.blue} to={path}>
                <img src={props.ava} />
                {props.name}
            </NavLink>
        </div>
    );
}

