import * as types from '../app/types';

const initialState = {
    isLoading: false,
    hasError: false,
    usernameError: false,
    items: [],
};

export default function (state = initialState, action) {
    switch (action.type) {
        case types.ADD_USER_SUCCESS: {
            const { user } = action;
            return Object.assign({}, state, {
                isLoading: false,
                hasError: false,
                items: [...state.items, user],
            });
        }
        case types.ADD_USER_FAILURE: {
            return Object.assign({}, state, {
                isLoading: false,
                hasError: true,
            });
        }
        case types.REMOVE_USER: {
            const { userId } = action;
            const items = state.items.filter(user => user.pk !== userId);
            return Object.assign({}, state, {
                items,
            });
        }
        case types.USERNAME_VALID_SUCCESS: {
            return Object.assign({}, state, {
                usernameError: false,
            });
        }
        case types.USERNAME_VALID_FAILURE: {
            return Object.assign({}, state, {
                usernameError: true,
            });
        }
        case types.BEFRIEND_USER:
        default: {
            return state;
        }
    }
}
