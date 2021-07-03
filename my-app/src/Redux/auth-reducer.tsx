import React from 'react';
import { stopSubmit } from 'redux-form';
import { dataMe, login, logout } from '../api/API';

const SET_USERS_DATA = 'SET_USERS_DATA';

let initionState = {
    userID: null,
    email: null,
    login: null,
    isAuth: false
};

export const authReducer = (state: any = initionState, action: any) => {

    switch (action.type) {
        case SET_USERS_DATA:
            return {
                ...state,
                ...action.data,
            }
        default:
            return state;
    }
}

export const setAuthUserData = (userID: any, email: any, login: any, isAuth: any) =>
    ({ type: SET_USERS_DATA, data: { userID, email, login, isAuth } })

export const getMe = () => async (dispatch: any) => {
    let response = await dataMe()

    if (response.data.resultCode === 0) {
        let { id, email, login } = response.data.data;
        dispatch(setAuthUserData(id, email, login, true));
    }
};



export const loginMe = (email: any, password: any, rememberMe: any) => async (dispatch: any) => {
    let response = await login(email, password, rememberMe)

    if (response.data.resultCode === 0) {
        dispatch(getMe())
    }
    else {
        let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error';
        dispatch(stopSubmit("login", { _error: message }))
    }
};

export const logoutMe = () => async (dispatch: any) => {
    let response = await logout()

    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
    }
};
