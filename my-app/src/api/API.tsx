import React from 'react';
import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': 'a333895f-5ea4-461a-b5c0-c38520ea7b23'
    },
});

export const getUsers = (currentPage: any, pageSize: any) => {
    return (
        instance.get(`users?page=${currentPage}&count=${pageSize}`,)
    )
}

export const postUsers = (id: any) => {
    return instance.post(`follow/${id}`)
}

export const deleteUsers = (id: any) => {
    return instance.delete(`follow/${id}`)
}

export const dataMe = () => {
    return instance.get(`auth/me`)
}
export const login = (email: any, password: any, rememberMe: any) => {
    return instance.post(`auth/login`, { email, password, rememberMe });
}
export const logout = () => {
    return instance.delete(`auth/login`);
}


export const getProfile = (userId: any) => {
    console.warn('Obsolete method. Please profileAPI object');
    return profileAPI.getProfile(userId)
}

export const profileAPI = {
    getProfile(userId: any) {
        return instance.get(`profile/${userId}`);
    },
    getStatus(userId: any) {
        return instance.get(`profile/status/${userId}`);
    },
    updateStatus(status: any) {
        return instance.put(`profile/status/`, { status: status })
    }
}

