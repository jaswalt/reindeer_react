import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { rootReducer } from './reducers';

/**
 * Initialize the store with the Root Reducer
 * TODO: Remove __REDUX_DEVTOOLS_EXTENSION_COMPOSE__ for production
 */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk, logger)),
);

export default store;
