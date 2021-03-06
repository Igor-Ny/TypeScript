import React from "react";
import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import { authReducer } from "./auth-reducer";
import { dialogsReducer } from "./dialogs-reducer";
import { profileReducer } from "./profile-reducer";
import { usersReduser } from "./users-reducer";
import thunk from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';
import { appReducer } from "./app-reducer";

 
let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReduser,
    auth: authReducer,
    form: formReducer,
    app: appReducer
});


// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

let store = createStore(reducers, applyMiddleware(thunk));

export default store;