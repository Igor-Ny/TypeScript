import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';
import { DialogItem } from './DialogItem/DialogsItem';
import MessageItem from "./MessageItem/MessageItem";


export const Dialogs = (props: any) => {
   
    let dialogsElement = props.state.dialogsData.map((d: any) =>  <DialogItem name={d.name} id={d.id} ava={d.ava} /> );

    let messagesElement = props.state.messagesData.map((m: any) =>  (<MessageItem message={m.message}  /> ) );

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                { dialogsElement }
            </div>
            <div className={s.messeges}>
                { messagesElement }               
            </div>
        </div>
    );
}

