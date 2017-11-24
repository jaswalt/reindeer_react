import * as types from '../app/types';

const initialState = {
    loading: false,
    error: false,
    usernameError: false,
    profile: null,
};

export default function (state = initialState, action) {
    switch (action.type) {
        case types.ADD_USER_SUCCESS: {
            return Object.assign({}, state, {
                loading: false,
                error: false,
                profile: { ...action.profile },
            });
        }
        case types.ADD_USER_FAILURE: {
            return Object.assign({}, state, {
                loading: false,
                error: true,
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
