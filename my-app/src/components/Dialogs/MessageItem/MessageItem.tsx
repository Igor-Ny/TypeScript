import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './MessageItem.module.css';


const MessageItem = (props: any) => {
    return (
        <div className={s.message}>{props.message}</div>
    );
}

export default MessageItem;
