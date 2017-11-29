import * as types from '../actions';
import { themesList } from '../../themes';

const initialState = {
    loading: false,
    error: false,
    usernameError: false,
    profile: null,
    vprofile: null,
    usersSearch: [],
    friends: [],
    themes: { ...themesList },
    activeTheme: null,
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
        case types.LOAD_FRIENDS_SUCCESS: {
            return Object.assign({}, state, {
                loading: false,
                error: false,
                friends: [...action.friends],
            });
        }
        case types.LOAD_FRIENDS_FAILURE: {
            return Object.assign({}, state, {
                loading: false,
                error: true,
            });
        }
        case types.LOAD_INFORMATION_SUCCESS: {
            return Object.assign({}, state, {
                loading: false,
                error: false,
                vprofile: { ...action.profileInfo },
            });
        }
        case types.LOAD_INFORMATION_FAILURE: {
            return Object.assign({}, state, {
                loading: false,
                error: true,
            });
        }
        case types.CHANGE_THEME: {
            const theme = state.themes[action.themeKey];
            return Object.assign({}, state, {
                activeTheme: { ...theme },
            });
        }
        default: {
            return state;
        }
    }
}
