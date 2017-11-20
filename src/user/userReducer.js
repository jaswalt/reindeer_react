export default function (state = [], action) {
    switch (action.type) {
    case 'ADD_USER':
        return [...state, Object.assign({}, action.user)];
    case 'REMOVE_USER':
        return; // TODO: Implement
    case 'BEFRIEND_USER':
        return; // TODO: Implement
    default:
        return state;
    }
}
