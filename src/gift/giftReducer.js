const initialState = {
    isLoading: false,
    hasError: false,
    items: [],
};

export default function (state = initialState, action) {
    switch (action.type) {
    case 'ADD_GIFT':
        return [...state, Object.assign({}, action.gift)];
    case 'LOAD_GIFTS_SUCCESS':
        return Object.assign({}, state, {
            isLoading: false,
            hasError: false,
            items: action.gifts,
        });
    case 'LOAD_GIFTS_FAILURE':
        return Object.assign({}, state, {
            hasError: true,
            isLoading: false,
        });
    case 'LOAD_GIFTS':
        return Object.assign({}, state, {
            isLoading: true,
            hasError: false,
        });
    default:
        return state;
    }
}
