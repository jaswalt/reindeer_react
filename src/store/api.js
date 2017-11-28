import axios from 'axios';

const BASE_URL = 'http://localhost:8000';
const API_URL = BASE_URL + '/api/v1';

// Add all API call functions here

export function apiGetUserGifts(userId) {
    return axios.get(`${API_URL}/users/${userId}/gifts/`);
}

export function apiAddUserGift(userId, gift) {
    return axios.post(`${API_URL}/users/${userId}/gifts/add/`, {
        gift,
    });
}

export function apiDeleteUserGift(userId, giftId) {
    return axios.delete(`${API_URL}/users/${userId}/gifts/${giftId}`);
}

export function apiCheckUsernameIsValid(username) {
    return axios.post(`${API_URL}/users/checkname`, {
        username,
    });
}

export function apiBefriendUser(userId, friendId) {
    return axios.patch(`${API_URL}/users/${userId}/befriend/${friendId}`);
}

export function apiRegisterUser(userForm) {
    return axios.put(`${API_URL}/users/`, userForm);
}

export function apiLoginUser(loginForm) {
    return axios.post(`${BASE_URL}/api-token-auth/`, loginForm);
}

export function apiGetSearchedGifts(search) {
    return axios.get(`${API_URL}/gifts/search/${search}`);
}

export function apiGetUserWishlists(userId) {
    return axios.get(`${API_URL}/users/${userId}/gifts/wishlists/`);
}

export function apiDeleteUserWishlist(userId, wishlistId) {
    return axios.delete(`${API_URL}/users/${userId}/wishlists/${wishlistId}`);
}

export function apiSearchUsers(name) {
    return axios.get(`${API_URL}/users/search/${name}`);
}

export function apiGetWishlistGifts(wishlistId) {
    return axios.get(`${API_URL}/user/profile/${wishlistId}`);
}

export function apiDeleteWishlistGift(wishlistId, giftId) {
    return axios.delete(`${API_URL}/user/profile/${wishlistId}/gifts/${giftId}`);
}
