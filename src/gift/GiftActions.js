export function AddGift(user, gift) {
    return {
        type: 'ADD_GIFT',
        user,
        gift,
    };
}

export function RemoveGift(user, gift) {
    return {
        type: 'REMOVE_GIFT',
        user,
        gift,
    };
}
