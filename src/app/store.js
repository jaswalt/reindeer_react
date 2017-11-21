import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import gifts from '../gift/giftReducer';
import users from '../user/userReducer';
import { fetchUserGifts } from '../gift/giftActions';

/**
 * Create the Root Reducer by combining all
 * other reducers
 */
const rootReducer = combineReducers({
    users,
    gifts,
});

/**
 * Initialize the store with the Root Reducer
 * TODO: Remove devToolsEnhancer() for production
 */
const store = createStore(
    rootReducer,
    applyMiddleware(thunk, logger),
);

store.dispatch(fetchUserGifts(17));

export default store;
