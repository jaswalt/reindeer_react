const initialState = {
    gifts: [],
};

export default function giftReducer(state = initialState, action) {
    switch (action.type) {
    case 'ADD_GIFT':
        return Object.assign({}, state, {
            gifts: state.gifts.concat(action.gift),
        });
    default:
        return state;
    }
}
