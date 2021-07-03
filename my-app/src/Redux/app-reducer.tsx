import React from 'react';
import { getMe } from './auth-reducer';

const SET_INITIONLIZED = 'SET_INITIONLIZED';

let initionState = {
    initialized: false,
};

export const appReducer = (state: any = initionState, action: any) => {
    switch (action.type) {
        case SET_INITIONLIZED:
            return {
                ...state,
                initialized: true,
            }
        default:
            return state;
    }
}

export const setInitialized = () => ({ type: SET_INITIONLIZED })

export const initialize = () => (dispatch: any) => {
    let promise = dispatch(getMe());

    Promise.all([promise])
        .then(() => {
            dispatch(setInitialized());
        });
}

