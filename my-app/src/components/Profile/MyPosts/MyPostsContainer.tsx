import React from 'react';
import s from './MyPosts.module.css';
import { addPostActionCreate, onPostChangeActionCreate } from './../../../Redux/profile-reducer';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';


let mapStateToProps = (state: any) => {
    return {
        posts: state.profilePage.postData,
        newPostText: state.profilePage.newPostText,
    };
}

let mapDispatchToProps = (dispatch: any) => {
    return {
        addPost: (newPostText: any) => {
            dispatch(addPostActionCreate(newPostText));
        },
        updateNewPostText: (text: any) => {
            let action = onPostChangeActionCreate(text);
            dispatch(action);
        },
    };
}


export const MyPostsContainer = connect (mapStateToProps, mapDispatchToProps) (MyPosts);