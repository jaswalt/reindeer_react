import * as types from './index';
import { 
    apiGetUserWishlists, 
    apiDeleteUserWishlist, 
    apiGetWishlistGifts, 
    apiAddGiftToWishlist,
    apiDeleteWishlistGift,
    apiCreateUserWishlist
 } from '../api';


export function addWishlist(userId, wishlist) {
    return {
        type: types.ADD_WISHLIST,
        userId,
        wishlist,
    };
}

export function removeWishlist(wishlistId) {
    return {
        type: types.REMOVE_WISHLIST,
        wishlistId,
    };
}

export function wishlistsAreLoading(bool) {
    return {
        type: types.WISHLISTS_ARE_LOADING,
        isLoading: bool,
    };
}

export function wishlistsFetchSuccess(wishlists) {
    return {
        type: types.WISHLISTS_FETCH_SUCCESS,
        wishlists,
    };
}

export function wishlistsFetchFailure(bool) {
    return {
        type: types.WISHLISTS_FETCH_FAILURE,
        hasError: bool,
    };
}

export function addGiftToWishlist(wishlistId, giftId) {
    return {
        type: types.ADD_GIFT_TO_WISHLIST,
        wishlistId,
        giftId,
    };
}

export function removeGiftFromWishlist(giftId) {
    return {
        type: types.REMOVE_GIFT_FROM_WISHLIST,
        giftId
    };
}

export function wishlistGiftsAreLoading(bool) {
    return {
        type: types.WISHLIST_GIFTS_ARE_LOADING,
        isLoading: bool,
    };
}

export function wishlistGiftsFetchSuccess(gifts) {
    return {
        type: types.WISHLIST_GIFTS_FETCH_SUCCESS,
        gifts
    }
}

export function wishlistGiftsFetchFailure(bool) {
    return {
        type: types.WISHLIST_GIFTS_FETCH_FAILURE,
        hasError: bool,
    }
}


export function fetchUserWishlists(userId) {
    return (dispatch) => {
        dispatch(wishlistsAreLoading(true));

        apiGetUserWishlists(userId)
            .then(
                resp => dispatch(wishlistsFetchSuccess(resp.data)),
                () => dispatch(wishlistsFetchFailure(true)),
            )
    };
}

export function createWishlist(wishlist) {
    return (dispatch, getState) => {
        apiCreateUserWishlist(getState().users.profile.user_id, wishlist)
            .then(() => dispatch(addWishlist(getState().users.profile.user_id, wishlist)))
    }
}

export function deleteWishlist(userId, wishlistId) {
    return (dispatch) => {
        apiDeleteUserWishlist(userId, wishlistId)
            .then(() => dispatch(removeWishlist(wishlistId)));
    };
}

export function fetchWishlistGifts(wishlistId) {
    return (dispatch, getState) => {
        apiGetWishlistGifts(getState().users.profile.user_id, wishlistId)
            .then(
                resp => dispatch(wishlistGiftsFetchSuccess(resp.data)),
                () => dispatch(wishlistGiftsFetchFailure(true)),
            )
    };
}

export function addWishlistGift(wishlistId, giftId) {
    return (dispatch, getState) => {
        apiAddGiftToWishlist(getState().users.profile.user_id, wishlistId, giftId)
            .then(() => dispatch(addGiftToWishlist(wishlistId, giftId)));
    };
}

export function deleteWishlistGift(wishlistId, giftId) {
    return (dispatch, getState) => {
        apiDeleteWishlistGift(getState().users.profile.user_id, wishlistId, giftId)
            .then(() => dispatch(removeGiftFromWishlist(giftId)));
    };
}