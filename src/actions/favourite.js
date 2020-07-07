import {successMessage, emptyMessage} from './houses';

export const addFavourite = (favourite) => ({
    type: 'ADD_FAVOURITE',
    payload: favourite
});
export const favouriteFailed = errmess => ({
    type: 'FAVOURITE_FAILED',
    payload: errmess,
})


export const favouriteStatus = status => ({
    type: 'STATUS_FAVOURITE',
    payload: status
})

export const favouriteLoading = () => ({
    type: 'FAVOURITE_LOADING'
})
export const  postFavourite = (homeId) => {
    return /*FUNCTION*/ (dispatch) => {
        fetch(`${process.env.REACT_APP_API_ENDPOINT}/api/v1/favourites`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                Authorization: `Bearer ${localStorage.getItem('jwt')}`
            },
            body: JSON.stringify({
                home_id: homeId,
        })
        })
        .then(response => {
            if (response.ok) {
              return response
            } else {
              throw response
            }
        })
        .then(response=>response.json())
        .then(response=>dispatch(addFavourite(response)))
        .then(dispatch(successMessage('The house added to the favorites')))
        .then(setTimeout(() => {
            dispatch(emptyMessage())
            }, 800))
        .catch(error => {
            alert('Error:\n' + error.message)
        })
    }
}


export const  deleteFavourite = (homeId) => {
    return /*FUNCTION*/ (dispatch) => {
        fetch(`${process.env.REACT_APP_API_ENDPOINT}/api/v1/favourites/${homeId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                Authorization: `Bearer ${localStorage.getItem('jwt')}`
            },
        })
        .then(response => {
            if (response.ok) {
              return response
            } else {
              throw response
            }
        })
        .then(response=>response.json())
        .then(dispatch(successMessage('The house deleted from the favourites')))
        .then(setTimeout(() => {
            dispatch(emptyMessage())
            }, 800))
        .then(response=>dispatch(addFavourite(response)))
        .catch(error => {
            alert('Error:\n' + error.message)
        })
    }
}

export const fetchFavourites = () => dispatch => {
    dispatch(favouriteLoading(true));
    return fetch(`${process.env.REACT_APP_API_ENDPOINT}/api/v1/favourites`,{
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: `Bearer ${localStorage.getItem('jwt')}`
        },
    })
    .then(response=> {
        if(response.ok) {
            return response;
        }

        const error = new Error(`Error ${response.status}: ${response.statusText}`);
        error.response =response;
        throw error;
    },
    error=> {
        const errmess = new Error(error.message);
        throw errmess;
    })
    .then(response => response.json())
    .then(favourites =>dispatch(addFavourite(favourites)))
    .catch(error=> dispatch(favouriteFailed(error.message)));
}


export const isFavoure = (homeId) => dispatch => {
    dispatch(favouriteLoading(true));
    return fetch(`${process.env.REACT_APP_API_ENDPOINT}/api/v1/favourites/${homeId}`,{
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: `Bearer ${localStorage.getItem('jwt')}`
        },
    })
    .then(response=> {
        if(response.ok) {
            return response;
        }

        const error = new Error(`Error ${response.status}: ${response.statusText}`);
        error.response =response;
        throw error;
    },
    error=> {
        const errmess = new Error(error.message);
        throw errmess;
    })
    .then(response => response.json())
    .then(status =>dispatch(favouriteStatus(status)))
    .catch(error=> dispatch(successMessage(error.message)));
}