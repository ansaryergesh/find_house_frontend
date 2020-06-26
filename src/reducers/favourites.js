export const favourites = (state = {
    errMess: null,
    favourites: []
}, action) => {
    switch (action.type) {
        case 'ADD_FAVOURITE':
            return { ...state, isLoading: false, errMess: null, favourites: action.payload };

        case 'FAVOURITE_FAILED':
            return { ...state, isLoading: false, errMess: action.payload, favourites: [] };
        default:
            return state;
    }
}

export default favourites;