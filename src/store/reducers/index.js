import { combineReducers } from 'redux';
import users from './userReducer';
import gifts from './giftReducer';
import wishlists from './wishlistReducer';

/**
 * Create the Root Reducer by combining all
 * other reducers
 */
export const rootReducer = combineReducers({
    users,
    gifts,
    wishlists,
});
