import React from 'react';
import s from './Dialogs.module.css';
import { DialogItem } from './DialogItem/DialogsItem';
import MessageItem from "./MessageItem/MessageItem";
import { Redirect } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';


export const Dialogs = (props: any) => {
    let state = props.dialogsPage;

    let dialogsElement = state.dialogsData.map((d: any) =>
        <DialogItem name={d.name} key={d.id} ava={d.ava} />);

    let messagesElement = state.messagesData.map((m: any) =>
        (<MessageItem message={m.message} key={m.id} />));

    // let onMessageElement: any = React.createRef();

    // let addMessage = () => {
    //     props.addNewMessage()
    // };

    // let onMessageChange = () => {
    //     let message = onMessageElement.current.value;
    //     props.updateNewMessage(message);
    // };

    let addNewMessage = (value: any) => {
        props.addNewMessage(value.newMessage);
    };

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={s.messeges}>
                {messagesElement}
                <br />
                <AddMessageFormRedux onSubmit={addNewMessage} />
            </div>
        </div>
    );
}

const AddMessageForm = (props: any) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={'textarea'} name='newMessage' cols={50} rows={3} placeholder='Enter message' />
            <div>
                <button>Send message</button>
            </div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({ form: 'addMessageForm' })(AddMessageForm)