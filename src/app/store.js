import { createStore, combineReducers } from 'redux';
import gift from '../gift/giftReducer';
import user from '../user/userReducer';

const rootReducer = combineReducers({
    gift,
    user,
});

export default createStore(rootReducer);
