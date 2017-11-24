import * as types from '../app/types';
import { apiCheckUsernameIsValid, apiRegisterUser } from '../app/api';

export function addUserSuccess(user) {
    return {
        type: types.ADD_USER_SUCCESS,
        user,
    };
}

export function addUserFailure() {
    return {
        type: types.ADD_USER_FAILURE,
    };
}

export function removeUser(user) {
    return {
        type: types.REMOVE_USER,
        user,
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
        apiRegisterUser(userForm).then(
            resp => dispatch(addUserSuccess(JSON.parse(resp.data))),
            () => dispatch(addUserFailure()),
        );
    };
}
