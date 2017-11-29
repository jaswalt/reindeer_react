import * as types from '../actions';

const initialState = {
    loading: false,
    error: false,
    wishlists: [],
    gifts: [],
};

export default function (state = initialState, action) {
    switch (action.type) {
        case types.ADD_WISHLIST: {
            return Object.assign({}, state, {
                wishlists: [...state.wishlists, { ...action.wishlist }],
            });
        }
        case types.REMOVE_WISHLIST: {
            const { wishlistId } = action;
            const wishlists = state.wishlists.filter(wishlist => wishlist.id !== wishlistId);
            return Object.assign({}, state, {
                wishlists,
            });
        }
        case types.WISHLISTS_FETCH_SUCCESS: {
            return Object.assign({}, state, {
                loading: false,
                error: false,
                wishlists: [...action.wishlists],
            });
        }
        case types.WISHLISTS_FETCH_FAILURE: {
            return Object.assign({}, state, {
                error: true,
                loading: false,
            });
        }
        case types.WISHLISTS_ARE_LOADING: {
            return Object.assign({}, state, {
                loading: true,
                error: false,
            });
        }
        case types.ADD_GIFT_TO_WISHLIST: {
            const { giftId } = action;
            const addGift = state.gifts.filter(gift => gift.id === giftId);
            return Object.assign({}, state, {
                gifts: [...state.gifts, { addGift }],
            });
        }
        case types.REMOVE_GIFT_FROM_WISHLIST: {
            const { giftId } = action;
            const gifts = state.gifts.filter(gift => gift.id !== giftId);
            return Object.assign({}, state, {
                gifts: [...gifts]
            });
        }
        case types.WISHLIST_GIFTS_ARE_LOADING: {
            return Object.assign({}, state, {
                loading: true,
                error: false,
            });
        }
        case types.WISHLIST_GIFTS_FETCH_SUCCESS: {
            return Object.assign({}, state, {
                loading: false,
                error: false,
                gifts: [...action.gifts],
            });
        }
        case types.WISHLIST_GIFTS_FETCH_FAILURE: {
            return Object.assign({}, state, {
                loading: false,
                error: true,
            });
        }
        default: {
            return state;
        }
    }
}
