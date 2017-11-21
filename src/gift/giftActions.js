export function addGift(user, gift) {
    return {
        type: 'ADD_GIFT',
        user,
        gift,
    };
}

export function removeGift(user, gift) {
    return {
        type: 'REMOVE_GIFT',
        user,
        gift,
    };
}

export function giftsAreLoading(bool) {
    return {
        type: 'GIFTS_ARE_LOADING',
        isLoading: bool,
    };
}

export function giftsFetchSuccess(gifts) {
    return {
        type: 'GIFTS_FETCH_SUCCESS',
        gifts,
    };
}

export function giftsFetchFailure(bool) {
    return {
        type: 'GIFTS_FETCH_FAILURE',
        hasError: bool,
    };
}

export function fetchUserGifts(userId = 1) {
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
