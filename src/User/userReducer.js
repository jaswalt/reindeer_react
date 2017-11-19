import { initialState } from '../app/store';

export default function (state = initialState.users, action) {
    switch (action.type) {
    case 'ADD_USER':
        return [...state, action.user];
    case 'REMOVE_USER':
        return; // TODO: Implement
    case 'BEFRIEND_USER':
        return; // TODO: Implement
    default:
        return state;
    }
}
