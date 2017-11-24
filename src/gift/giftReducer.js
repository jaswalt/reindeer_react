import * as types from '../app/types';

const initialState = {
    isLoading: false,
    hasError: false,
    items: [],
};

export default function (state = initialState, action) {
    switch (action.type) {
        case types.ADD_GIFT: {
            const { gift } = action;
            return Object.assign({}, state, {
                items: [...state.items, gift],
            });
        }
        case types.REMOVE_GIFT: {
            const { giftId } = action;
            const items = state.items.filter(gift => gift.pk !== giftId);
            return Object.assign({}, state, {
                items,
            });
        }
        case types.GIFTS_FETCH_SUCCESS: {
            return Object.assign({}, state, {
                loading: false,
                error: false,
                items: [...action.gifts],
            });
        }
        case types.GIFTS_FETCH_FAILURE: {
            return Object.assign({}, state, {
                error: true,
                loading: false,
            });
        }
        case types.GIFTS_ARE_LOADING: {
            return Object.assign({}, state, {
                loading: true,
                error: false,
            });
        }
        default: {
            return state;
        }
    }
}
