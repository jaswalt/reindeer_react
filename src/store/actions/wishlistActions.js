import * as types from './index';

export function createWishlist(user, wishlist) {
    return {
        type: types.CREATE_WISHLIST,
        user,
        wishlist,
    };
}

export function deleteWishlist(wishlistId) {
    return {
        type: types.DELETE_WISHLIST,
        wishlistId,
    };
}

export function addGiftToWishlist(gift, wishlist) {
    return {
        type: types.ADD_GIFT_TO_WISHLIST,
        gift,
        wishlist,
    };
}

export function removeGiftFromWishlist(giftId, wishlistId) {
    return {
        type: types.REMOVE_GIFT_FROM_WISHLIST,
        giftId,
        wishlistId,
    };
}
