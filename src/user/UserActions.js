import * as types from '../app/types';

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
