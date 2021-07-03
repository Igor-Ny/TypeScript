const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let avatar: string = "https://img1.freepng.ru/20180529/bxp/kisspng-user-profile-computer-icons-login-user-avatars-5b0d9430b12e35.6568935815276165607257.jpg";


let initialState = {
    dialogsData: [
        { id: 1, name: "Kup", ava: avatar },
        { id: 2, name: "Jun", ava: avatar },
        { id: 3, name: "Pavlo", ava: avatar },
        { id: 4, name: "Gaara", ava: avatar },
        { id: 5, name: "Nytre", ava: avatar },
    ],
    messagesData: [
        { id: 1, message: "Hi" },
        { id: 2, message: "How are you?" },
        { id: 3, message: "Fine" },
    ],
    newMessage: '',
};  

export const dialogsReducer = (state: any = initialState, action: any) => {
    
     if (action.type === ADD_MESSAGE) {
        let newMess = {
            id: 4,
            message: action.newMessage,
        };
        return{
            ...state,
            newMessage: '',
            messagesData: [...state.messagesData, newMess]
        };
    }
    // else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
    //     return{
    //         ...state,
    //         newMessage: action.newMessageText,
    //     }
    // }
    else return state;
}

export const addMessageCreate = (newMessage: any) => ({ type: ADD_MESSAGE, newMessage })
export const onMessageChangeCreate = (text: any) => ({ type: UPDATE_NEW_MESSAGE_TEXT, newMessageText: text, })