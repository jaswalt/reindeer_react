export function createWishlist(title) {
    return {
        type: 'CREATE_WISHLIST',
        title,
    };
}

export function deleteWishlist(wishlist) {
    return {
        type: 'DELETE_WISHLIST',
        wishlist,
    };
}

export function addGiftToWishlist(gift, wishlist) {
    return {
        type: 'ADD_GIFT_TO_WISHLIST',
        gift,
        wishlist,
    };
}

export function removeGiftFromWishlist(gift, wishlist) {
    return {
        type: 'REMOVE_GIFT_FROM_WISHLIST',
        gift,
        wishlist,
    };
}
