import * as types from './index';
import { apiGetUserWishlists, apiDeleteUserWishlist, apiGetWishlistGifts, apiDeleteWishlistGift } from '../api';


export function addWishlist(user, wishlist) {
    return {
        type: types.ADD_WISHLIST,
        user,
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

export function addGiftToWishlist(wishlistId, gift) {
    return {
        type: types.ADD_GIFT_TO_WISHLIST,
        wishlistId,
        gift,
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


export function fetchUserWishlists() {
    return (dispatch, getState) => {
        dispatch(wishlistsAreLoading(true));

        apiGetUserWishlists(getState().users.profile.user_id)
            .then(
                resp => dispatch(wishlistsFetchSuccess(resp.data)),
                () => dispatch(wishlistsFetchFailure(true)),
            )
    };
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

export function deleteWishlistGift(giftId) {
    return (dispatch, getState) => {
        apiDeleteWishlistGift(getState().users.profile.user_id, getState().wishlists.wishlists.pk, giftId)
            .then(() => dispatch(removeGiftFromWishlist(giftId)));
    };
}