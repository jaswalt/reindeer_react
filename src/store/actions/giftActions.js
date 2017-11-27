import * as types from './index';
import { apiDeleteUserGift, apiGetUserGifts, apiGetSearchedGifts, apiAddUserGift } from '../api';

export function addGiftToGifts(userId, gift) {
    return {
        type: types.ADD_GIFT,
        userId,
        gift,
    };
}

export function removeGiftFromGifts(giftId) {
    return {
        type: types.REMOVE_GIFT,
        giftId,
    };
}

export function searchGifts(searchResults) {
    return {
        type: types.SEARCH_GIFT,
        searchResults,
    };
}

export function giftsAreLoading(bool) {
    return {
        type: types.GIFTS_ARE_LOADING,
        isLoading: bool,
    };
}

export function giftsFetchSuccess(gifts) {
    return {
        type: types.GIFTS_FETCH_SUCCESS,
        gifts,
    };
}

export function giftsFetchFailure(bool) {
    return {
        type: types.GIFTS_FETCH_FAILURE,
        hasError: bool,
    };
}

export function fetchUserGifts() {
    return (dispatch, getState) => {
        dispatch(giftsAreLoading(true));

        apiGetUserGifts(getState().users.profile.user_id)
            .then(
                resp => dispatch(giftsFetchSuccess(resp.data)),
                () => dispatch(giftsFetchFailure(true)),
            );
    };
}

export function addGiftToAllGifts(userId, gift) {
    return (dispatch) => {
        apiAddUserGift(userId, gift)
            .then(
                resp => dispatch(addGiftToGifts(userId, gift))
            )
    }
}

export function deleteGift(userId, giftId) {
    return (dispatch) => {
        apiDeleteUserGift(userId, giftId)
            .then(() => dispatch(removeGiftFromGifts(giftId)));
    };
}

export function searchGift(search) {
    return (dispatch) => {
        apiGetSearchedGifts(search)
            .then(resp => dispatch(searchGifts(resp.data)));
    };
}
