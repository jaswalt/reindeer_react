import { createStore, combineReducers } from 'redux';
import gift from '../gift/giftReducer';

export default createStore(combineReducers({
    gift,
}));
