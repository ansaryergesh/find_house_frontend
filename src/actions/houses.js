export const houseLoading = () => ({
  type: 'HOUSES_LOADING',
})

export const housesFailed = errmess => ({
    type: 'HOUSES_FAILED',
    payload: errmess,
});
export const postHouseSuccess = (house) => ({
    type: 'POST_HOUSE_SUCCESS',
    payload: house
});
export const housesPostFailed = errmess => ({
    type: 'ERROR_MESSAGE',
    payload: errmess,
})

export const successMessage = message => ({
    type: 'SUCCESS_MESSAGE',
    payload: message
})

export const houseSuccess=(house) => ({
    type: 'HOUSE_SUCCESS',
    payload: house
})
export const emptyMessage =()=> ({
    type: 'EMPTY_MESSAGE'
})
export const singleHouse = (singleHouse) => ({
    type: 'SINGLE_HOUSE',
    payload: singleHouse
})

export const postHouse = (name,descripton,price)=> {
    return /*FUNCTION*/ (dispatch) => {
        dispatch({ type: 'HOUSE_POST_LOADING' })
        fetch(`${process.env.REACT_APP_API_ENDPOINT}/api/v1/homes`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                Authorization: `Bearer ${localStorage.getItem('jwt')}`
            },
            body: JSON.stringify({
                    name: name,
                    descripton: descripton,
                    price: price
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
        .then(response=>dispatch(houseSuccess(response)))
        .then(setTimeout(() => {
            dispatch(emptyMessage())
            }, 3000))
        .catch(response=> response.json().then(e => dispatch(housesPostFailed('Please fill all the form'))))
    }
}

export const fetchHouses = () => dispatch => {
    dispatch(houseLoading(true));
    return fetch(`${process.env.REACT_APP_API_ENDPOINT}/api/v1/homes`,{
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
    .then(homes =>dispatch(postHouseSuccess(homes)))
    .catch(error=> dispatch(housesFailed(error.message)));
}

export const fetchHouse = (houseId) => dispatch => {
    dispatch(houseLoading(true));
    return fetch(`${process.env.REACT_APP_API_ENDPOINT}/api/v1/homes/${houseId}`,{
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
    .then(homes =>dispatch(postHouseSuccess(homes)))
    .catch(error=> dispatch(housesFailed(error.message)));
}