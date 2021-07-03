import { dialogsReducer } from "./dialogs-reducer";
import { profileReducer } from "./profile-reducer";


let avatar: string = "https://img1.freepng.ru/20180529/bxp/kisspng-user-profile-computer-icons-login-user-avatars-5b0d9430b12e35.6568935815276165607257.jpg";

let store = {
    _state: {
        profilePage: {
            postData: [
                { id: 1, message: 'Hi, how are you?', likes: 15 },
                { id: 2, message: 'It is "my first post"', likes: 3 },
            ],
            newPostText: '',
        },

        messagePage: {
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
        }
    },
    _callSubscriber() { },

    getState() {
        return this._state
    },
    subscribe(observer: any) {
        this._callSubscriber = observer;
    },

    _addMessage() {
        let newMessage = {
            id: 4,
            message: this._state.messagePage.newMessage,
        }
        this._state.messagePage.messagesData.push(newMessage);
        this._state.messagePage.newMessage = '';
        this._callSubscriber();
    },
    _updateNewMessageText(newTextMessage: any) {
        this._state.messagePage.newMessage = newTextMessage;
        this._callSubscriber();
    },

    _addPost() {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likes: 0,
        };

        this._state.profilePage.postData.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber();
    },
    _updateNewPostText(newText: string) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber();
    },

    dispatch(action: any) {
        
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagePage = dialogsReducer(this._state.messagePage, action);
        this._callSubscriber();
    },
}


export default store;