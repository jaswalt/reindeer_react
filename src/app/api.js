import axios from 'axios';

const BASE_API_URL = 'http://localhost:8000/api/v1';

// Add all API call functions here

export function apiGetUserGifts(userId) {
    return axios.get(`${BASE_API_URL}/users/${userId}/gifts/`);
}

export function apiDeleteUserGift(userId, giftId) {
    return axios.delete(`${BASE_API_URL}/users/${userId}/gifts/${giftId}`);
}

export function apiCheckUsernameIsValid(username) {
    return axios.post(`${BASE_API_URL}/users/checkname`, {
        username,
    });
}

export function apiRegisterUser(userForm) {
    return axios.put(`${BASE_API_URL}/users/`, userForm);
}
