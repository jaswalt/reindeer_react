import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
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
 * TODO: Remove __REDUX_DEVTOOLS_EXTENSION_COMPOSE__ for production
 */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk, logger)),
);

store.dispatch(fetchUserGifts(1));

export default store;
