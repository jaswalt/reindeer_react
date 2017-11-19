import { createStore, combineReducers } from 'redux';
import gift from '../gift/giftReducer';

const rootReducer = combineReducers({
    gift,
});

export default createStore(rootReducer);
