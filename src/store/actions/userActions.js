import * as jwtDecode from 'jwt-decode';
import * as types from './index';
import {
    apiCheckUsernameIsValid,
    apiRegisterUser,
    apiLoginUser,
    apiSearchUsers } from '../api';

/**
 *
 *   NORMAL ACTIONS
 *
 */

export function addUserSuccess(profile) {
    return {
        type: types.ADD_USER_SUCCESS,
        profile,
    };
}

export function addUserFailure() {
    return {
        type: types.ADD_USER_FAILURE,
    };
}

export function addFriendToUser(user, friend) {
    return {
        type: types.BEFRIEND_USER,
        user,
        friend,
    };
}

export function usernameIsValid() {
    return {
        type: types.USERNAME_VALID_SUCCESS,
    };
}

export function usernameIsNotValid() {
    return {
        type: types.USERNAME_VALID_FAILURE,
    };
}


/**
 *
 *   ASYNC THUNK ACTIONS
 *
 */

export function checkUserNameIsValid(username) {
    return (dispatch) => {
        apiCheckUsernameIsValid(username).then(
            () => dispatch(usernameIsValid()),
            () => dispatch(usernameIsNotValid()),
        );
    };
}

export function registerUser(userForm) {
    return (dispatch) => {
        // dispatch sending user form pending
        apiRegisterUser(userForm).then(resp => {
                localStorage.setItem('token', resp.data.token);
                const profile = jwtDecode(resp.data.token);
                dispatch(addUserSuccess(profile))
            },
            () => dispatch(addUserFailure()),
        );
    };
}

export function loginUser(loginForm) {
    return (dispatch) => {
        // dispatch sending user form pending
        apiLoginUser(loginForm).then(resp => {
                localStorage.setItem('token', resp.data.token);
                const profile = jwtDecode(resp.data.token);
                dispatch(addUserSuccess(profile))
            },
            () => dispatch(addUserFailure()),
        );
    };
}

export function checkUserToken() {
    return (dispatch) => {
        const token = localStorage.getItem('token');
        if (token) {
            const profile = jwtDecode(token);
            dispatch(addUserSuccess(profile))
        }
    };
}

export function logoutUser() {
    return (dispatch) => {
        localStorage.removeItem('token');
        dispatch({ type: types.LOGOUT_SUCCESS });
    };
}


export function searchUsers(name) {
    return (dispatch) => {
        // dispatch sending user form pending
        apiSearchUsers(name).then(
            resp =>  dispatch(searchUsersSuccess(resp.data)),
            () => dispatch(searchUsersFailure()),
        );
    };
}
