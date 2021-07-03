import React from 'react';
import { deleteUsers, getUsers, postUsers } from '../api/API';

const FOLLOW = 'FOLLW';
const UNFOLLOW = 'UNFOLLW';
const SET_USERS = 'UNFSET_USERSOLLW';
let photo = 'data:image/png;base64,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';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const SET_IS_FETCHING = 'SET_IS_FETCHING';
const TOGGEL_IS_FOLLOWING_PROGRESS = 'TOGGEL_IS_FOLLOWING_PROGRESS';

let initionState = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [],
};

// const reducerFollowUnfollow = (items: any, userId: any, objectName: any, newObject: any) => {
//     items.map((u: any) => {
//         if (u[objectName] === userId) {
//             return { ...u, newObject }
//         }
//         return u;
//     })
// }

export const usersReduser = (state: any = initionState, action: any) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map((u: { id: any; }) => {
                    if (u.id === action.userId) {
                        return { ...u, followed: true }
                    }
                    return u;
                })
            };

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map((u: { id: any; }) => {
                    if (u.id === action.userId) {
                        return { ...u, followed: false }
                    }
                    return u;
                })
            };
        case SET_USERS:
            return { ...state, users: action.users }
        case SET_CURRENT_PAGE:
            return { ...state, currentPage: action.currentPage }
        case SET_TOTAL_USERS_COUNT:
            return { ...state, totalUsersCount: action.count }
        case SET_IS_FETCHING:
            return { ...state, isFetching: action.isFetching }
        case TOGGEL_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.followingInProgress
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter((id: any) => id != action.userId)
            }
        default:
            return state;
    }
}

export const followAC = (userId: any) => ({ type: FOLLOW, userId })
export const unfollowAC = (userId: any) => ({ type: UNFOLLOW, userId })
export const setUsersAC = (users: any) => ({ type: SET_USERS, users })
export const setCurrentPageAC = (currentPage: any) => ({ type: SET_CURRENT_PAGE, currentPage })
export const setTotalUsersCountAC = (totalUsersCount: any) => ({ type: SET_TOTAL_USERS_COUNT, count: totalUsersCount })
export const setIsFetchingAC = (isFetching: any) => ({ type: SET_IS_FETCHING, isFetching })
export const toggoleFollowingProgress = (followingInProgress: any, userId: any) => ({ type: TOGGEL_IS_FOLLOWING_PROGRESS, followingInProgress, userId })

export const getUsersThunkCreator = (currentPage: any, pageSize: any) => {
    return async (dispatch: any) => {
        dispatch(setIsFetchingAC(true))
        dispatch(setCurrentPageAC(currentPage))

        let response = await getUsers(currentPage, pageSize)
        dispatch(setUsersAC(response.data.items));
        dispatch(setTotalUsersCountAC(response.data.totalCount));
        dispatch(setIsFetchingAC(false))
    }
}

const followUnfollowFlow = async (dispatch: any, userId: any, apiMethod: any, actionCreater: any) => {
    dispatch(toggoleFollowingProgress(true, userId))
    let response = await apiMethod(userId)
    if (response.data.resultCode == 0) {
        dispatch(actionCreater(userId));
    }
    dispatch(toggoleFollowingProgress(false, userId))
}

export const followTC = (userId: any) => {
    return async (dispatch: any) => {
        let apiMethod = postUsers.bind(postUsers)
        followUnfollowFlow(dispatch, userId, apiMethod, followAC)
    }
}

export const unfollowTC = (userId: any) => {
    return async (dispatch: any) => {
        let apiMethod = deleteUsers.bind(deleteUsers)
        followUnfollowFlow(dispatch, userId, apiMethod, unfollowAC)
    }
}