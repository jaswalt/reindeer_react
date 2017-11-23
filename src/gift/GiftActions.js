import * as types from '../app/types';
import { apiDeleteUserGift, apiGetUserGifts } from '../app/api';

export function addGift(user, gift) {
    return {
        type: types.ADD_GIFT,
        user,
        gift,
    };
}

export function removeGift(giftId) {
    return {
        type: types.REMOVE_GIFT,
        giftId,
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

export function fetchUserGifts(userId) {
    return (dispatch) => {
        dispatch(giftsAreLoading(true));

        apiGetUserGifts(userId)
            .then(
                resp => dispatch(giftsFetchSuccess(JSON.parse(resp.data))),
                err => dispatch(giftsFetchFailure(true))
            );
    };
}

export function deleteGift(userId, giftId) {
    return (dispatch) => {
        apiDeleteUserGift(userId, giftId)
            .then(() => dispatch(removeGift(giftId)));
    };
}
