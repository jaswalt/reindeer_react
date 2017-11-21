import { giftsAreLoading, giftsFetchSuccess, giftsFetchFailure } from '../gift/giftActions';
import axios from 'axios';

const BASE_API_URL = 'http://localhost:8000/api/v1';

// Add all API call functions here

export function loadUserGifts(userId = 1) {
    return (dispatch) => {
        dispatch(giftsAreLoading(true));

        axios.get(`${BASE_API_URL}/users/${userId}/gifts`)
            .then((response) => {
                dispatch(giftsAreLoading(false));
                return response;
            })
            .then(response => response.json())
            .then(gifts => dispatch(giftsFetchSuccess(gifts)))
            .catch(() => dispatch(giftsFetchFailure(true)));
    };
}
