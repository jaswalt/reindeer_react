import * as jwtDecode from 'jwt-decode';
import * as types from './index';
import {
    apiCheckUsernameIsValid,
    apiRegisterUser,
    apiLoginUser,
    apiUpdateUser,
    apiSearchUsers,
    apiBefriendUser, } from '../api';


/*
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

export function updateUserSuccess(profile) {
    return {
        type: types.UPDATE_USER_SUCCESS,
        profile,
    };
}

export function updateUserFailure() {
    return {
        type: types.UPDATE_USER_FAILURE,
    };
}

export function addFriendToUser(user, friend) {
    return {
        type: types.UPDATE_USER_SUCCESS,
        profile,
    };
}

export function updateUserFailure() {
    return {
        type: types.UPDATE_USER_FAILURE,
    };
}

export function addFriendToUserSuccess(friend) {
    return {
        type: types.BEFRIEND_USER_SUCCESS,
        friend,
    };
}

export function addFriendToUserFailure() {
    return {
        type: types.BEFRIEND_USER_FAILURE,
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

export function searchUsersPending() {
    return {
        type: types.SEARCH_USERS,
    }
}

export function searchUsersSuccess(users) {
    return {
        type: types.SEARCH_USERS_SUCCESS,
        users,
    }
}

export function searchUsersFailure() {
    return {
        type: types.SEARCH_USERS_FAILURE,
    }
}

/*
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

export function updateUser(updateUserForm) {
    return (dispatch) => {
        apiUpdateUser(updateUserForm).then(resp => {
                const profile = jwtDecode(resp.data.token);
                dispatch(updateUserSuccess(profile))
            },
        () => dispatch(updateUserFailure()),
        );
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
        dispatch(searchUsersPending);

        apiSearchUsers(name).then(
            resp =>  dispatch(searchUsersSuccess(resp.data)),
            () => dispatch(searchUsersFailure()),
        );
    };
}

export function addFriendToUser(friendId) {
    return (dispatch, getState) => {
        dispatch({ type: types.BEFRIEND_USER_LOADING  }) // TODO: Add this type

        const { user_id } = getState().users.profile;

        apiBefriendUser(user_id, friendId).then(
            resp => addFriendToUserSuccess(resp.data),
            () => addFriendToUserFailure(),
        )
    }
}
