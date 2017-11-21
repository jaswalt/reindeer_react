import * as types from '../app/types';

const initialState = {
    isLoading: false,
    hasError: false,
    items: [],
};

export default function (state = initialState, action) {
    switch (action.type) {
        case types.ADD_USER: {
            const { user } = action;
            return Object.assign({}, state, {
                items: [...state.items, user],
            });
        }
        case types.REMOVE_USER: {
            const { userId } = action;
            const items = state.items.filter(user => user.pk !== userId);
            return Object.assign({}, state, {
                items,
            });
        }
        case types.BEFRIEND_USER:
        default: {
            return state;
        }
    }
}
