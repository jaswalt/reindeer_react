import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import gifts from '../gift/giftReducer';
import users from '../user/userReducer';

const sagaMiddleware = createSagaMiddleware();

/**
 * The layout of the Store with
 * slices of which passed to individual reducers
 */
export const initialState = {
    users: [],
    gifts: [],
};

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
export const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware()),
);

sagaMiddleware.run(); //FIXME: Add root saga
