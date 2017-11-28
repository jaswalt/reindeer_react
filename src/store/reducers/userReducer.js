import * as types from '../actions';

const initialState = {
    loading: false,
    error: false,
    usernameError: false,
    profile: null,
    usersSearch: [],
    friends: [],
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
        case types.LOGOUT_SUCCESS: {
            return { ...state, profile: null };
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
        case types.SEARCH_USERS_SUCCESS: {
            return Object.assign({}, state, {
                usersSearch: [...action.users],
            });
        }
        case types.BEFRIEND_USER_LOADING: {
            return Object.assign({}, state, {
                loading: true,
            });
        }
        case types.BEFRIEND_USER_SUCCESS: {
            return Object.assign({}, state, {
                loading: false,
                error: false,
                friends: [...state.friends, { ...action.friend }],
            });
        }
        case types.BEFRIEND_USER_FAILURE: {
            return Object.assign({}, state, {
                loading: false,
                error: true,
            });
        }
        default: {
            return state;
        }
    }
}
