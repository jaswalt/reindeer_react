import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import gifts from '../gift/giftReducer';
import users from '../user/userReducer';

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
    applyMiddleware(thunkMiddleware),
);

export default store;
