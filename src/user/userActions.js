export function addUser(user) {
    return {
        type: 'ADD_USER',
        user,
    };
}

export function removeUser(user) {
    return {
        type: 'REMOVE_USER',
        user,
    };
}

export function addFriendToUser(user, friend) {
    return {
        type: 'BEFRIEND_USER',
        user,
        friend,
    };
}
