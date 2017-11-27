import * as types from './index';
import { apiGetUserWishlists, apiDeleteUserWishlist } from '../api';


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


export function fetchUserWishLists() {
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
