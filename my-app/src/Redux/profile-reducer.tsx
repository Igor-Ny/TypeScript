import { getProfile, profileAPI } from "../api/API";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
    postData: [
        { id: 1, message: 'Hi, how are you?', likes: 15 },
        { id: 2, message: 'It is "my first post"', likes: 3 },
    ],
    newPostText: '',
    profile: null,
    status: ''
};

export const profileReducer = (state: any = initialState, action: any) => {
    let stateCopy = { ...state };
    if (action.type === ADD_POST) {
        let newPost = {
            id: 5,
            message: action.newPostText,
            likes: 0,
        };
        stateCopy.postData = [...state.postData];
        stateCopy.postData.push(newPost);
        stateCopy.newPostText = '';
    }
    else if (action.type === UPDATE_NEW_POST_TEXT) {
        stateCopy.newPostText = action.newText;
    }
    else if (action.type === SET_USER_PROFILE) {
        stateCopy.profile = action.profile;
    }
    else if (action.type === SET_STATUS) {
        stateCopy.status = action.status;
    }
    return stateCopy;
}

export const addPostActionCreate = (newPostText: any) => ({ type: ADD_POST, newPostText })
export const onPostChangeActionCreate = (text: any) => ({ type: UPDATE_NEW_POST_TEXT, newText: text, })
export const setUserProfile = (profile: any) => ({ type: SET_USER_PROFILE, profile })
export const setStatus = (status: any) => ({ type: SET_STATUS, status })

export const profileTC = (userId: any) => async (dispatch: any) => {
    let response = await getProfile(userId)
    dispatch(setUserProfile(response.data))
}



export const getStatus = (status: any) => async (dispatch: any) => {
    let response = await profileAPI.getStatus(status)
    dispatch(setStatus(response.data))
};


export const updateStatus = (status: any) => async (dispatch: any) => {
    let response = await profileAPI.updateStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status));
    }
};

