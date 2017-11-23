import * as types from '../app/types';
import { apiCheckUsernameIsValid } from '../app/api';

export function addUser(user) {
    return {
        type: types.ADD_USER,
        user,
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
    }
}

export function usernameIsNotValid() {
    return {
        type: types.USERNAME_VALID_FAILURE,
    }
}

export function checkUserNameIsValid(username) {
    return (dispatch) => {
        apiCheckUsernameIsValid(username).then(
            resp => dispatch(usernameIsValid()),
            () => dispatch(usernameIsNotValid()),
        );
    }
}
