import { combineReducers } from 'redux';
import users from './userReducer.js';
import gifts from './giftReducer.js';

/**
 * Create the Root Reducer by combining all
 * other reducers
 */
export const rootReducer = combineReducers({
    users,
    gifts,
});
