import axios from 'axios';

const BASE_URL = 'http://localhost:8000';
const API_URL = BASE_URL + '/api/v1';

// Add all API call functions here

export function apiGetUserGifts(userId) {
    return axios.get(`${API_URL}/users/${userId}/gifts/`);
}

export function apiDeleteUserGift(userId, giftId) {
    return axios.delete(`${API_URL}/users/${userId}/gifts/${giftId}`);
}

export function apiCheckUsernameIsValid(username) {
    return axios.post(`${API_URL}/users/checkname`, {
        username,
    });
}

export function apiRegisterUser(userForm) {
    return axios.put(`${API_URL}/users/`, userForm);
}

export function apiLoginUser(loginForm) {
    return axios.post(`${BASE_URL}/api-token-auth/`, loginForm);
}

export function apiUpdateUser(userId, updateUserForm) {
    return axios.put(`${API_URL}/users/${userId}/profile`, updateUserForm);
}

export function apiGetSearchedGifts(search) {
    return axios.get(`${API_URL}/gifts/search/${search}`);
}

<<<<<<< HEAD
export function apiGetUserWishlists(userId) {
    return axios.get(`${API_URL}/users/${userId}/wishlists/`);
}

export function apiDeleteUserWishlist(userId, wishlistId) {
    return axios.delete(`${API_URL}/users/${userId}/wishlists/${wishlistId}`);
}
=======
export function apiSearchUsers(name) {
    return axios.get(`${API_URL}/users/search/${name}`);
}

>>>>>>> 49b97d197537dc9c127d3be65517910ef83a2106
