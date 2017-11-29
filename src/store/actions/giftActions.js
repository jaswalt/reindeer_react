import * as types from './index';
import {
    apiDeleteUserGift,
    apiGetUserGifts,
    apiGetSearchedGifts,
    apiAddUserGift,
    apiHoldGift,
    apiRemoveHoldGift, } from '../api';


/**
 *   NORMAL PURE ACTIONS
 *
 */

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

export function holdGiftSuccess() {
    return {
        type: types.HOLD_GIFT_SUCCESS,
    };
}

export function holdGiftFailure() {
    return {
        type: types.HOLD_GIFT_FAILURE,
    };
}

export function removeHoldGiftSuccess() {
    return {
        type: types.REMOVE_HOLD_GIFT_SUCCESS,
    };
}

export function removeHoldGiftFailure() {
    return {
        type: types.REMOVE_HOLD_GIFT_FAILURE,
    };
}

/**
 *   ASYNC THUNK ACTIONS
 *
 */

export function fetchUserGifts(userId) {
    return (dispatch, getState) => {
        dispatch(giftsAreLoading(true));
        const token = localStorage.getItem('token');

        apiGetUserGifts(userId, token)
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

export function deleteGift(giftId) {
    return (dispatch, getState) => {
        apiDeleteUserGift(getState().users.profile.user_id, giftId)
            .then(() => dispatch(removeGiftFromGifts(giftId)));
    };
}

export function searchGift(search) {
    return (dispatch) => {
        apiGetSearchedGifts(search)
            .then(resp => dispatch(searchGifts(resp.data)));
    };
}

export function holdGift(userId, giftId) {
    return (dispatch) => {
        const token = localStorage.getItem('token');

        apiHoldGift(userId, giftId, token).then(
            resp => dispatch(holdGiftSuccess()),
            () => dispatch(holdGiftFailure())
        );
    };
}

export function removeHoldGift(userId, giftId) {
    return (dispatch) => {
        const token = localStorage.getItem('token');

        apiRemoveHoldGift(userId, giftId, token).then(
            resp => dispatch(holdGiftSuccess()),
            () => dispatch(holdGiftFailure())
        );
    };
}