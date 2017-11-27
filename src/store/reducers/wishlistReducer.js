import * as types from '../actions';

const initialState = {
    wishlists: [],
    gifts: [],
};

export default function (state = initialState, action) {
    switch (action.type) {
        case types.CREATE_WISHLIST: {
            return Object.assign({}, state, {
                wishlists: { ...action.wishlist },
            });
        }
        case types.DELETE_WISHLIST: {
            const { wishlistId } = action;
            const wishlists = state.wishlists.filter(wishlist => wishlist.pk !== wishlistId);
            return Object.assign({}, state, {
                wishlists,
            });
        }
        case types.ADD_GIFT_TO_WISHLIST: {
            return Object.assign({}, state, {
                wishlists: { ...action.wishlists },
                gifts: { ...action.gifts },
            });
        }
        case types.REMOVE_GIFT_FROM_WISHLIST: {
            const { giftId, wishlistId } = action;
            const gifts = state.gifts.filter(gift => gift.pk !== giftId);
            const wishlists = state.wishlists.filter(wishlist => wishlist.pk !== wishlistId);
            return Object.assign({}, state, {
                wishlists,
                gifts,
            });
        }
        default: {
            return state;
        }
    }
}
