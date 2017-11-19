import { initialState } from '../app/store';

export default function (state = initialState.gifts, action) {
    switch (action.type) {
    case 'ADD_GIFT':
        return [...state, action.gift];
    default:
        return state;
    }
}
