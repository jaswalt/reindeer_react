export default function gifts(state = [], action) {
    switch (action.type) {
    case 'ADD_GIFT':
        return [...state, action.gift];
    default:
        return state;
    }
}
