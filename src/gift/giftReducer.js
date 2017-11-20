export default function (state = [], action) {
    switch (action.type) {
    case 'ADD_GIFT':
        return [...state, action.gift];
    default:
        return state;
    }
}

action = {
    type: 'ADD_GIFT',
    user: {},
    gift: {    }
}