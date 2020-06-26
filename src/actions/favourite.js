export const addFavourite = (favourite) => ({
    type: 'ADD_FAVOURITE',
    payload: favourite
});
export const favouriteFailed = errmess => ({
    type: 'FAVOURITE_FAILED',
    payload: errmess,
})


export const  postFavourite = () => {
    return /*FUNCTION*/ (dispatch) => {
        fetch(`${process.env.REACT_APP_API_ENDPOINT}/api/v1/favourites`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                Authorization: `Bearer ${localStorage.getItem('jwt')}`
            },
        })
        .then(response => {
            if (response.ok) {
              return response.json()
            } else {
              throw response
            }
        })
        .then(response=>response.json())
        .then(response=>dispatch(addFavourite(response)))
        .catch(response=> response.json().then(e => dispatch(favouriteFailed(e.message))))
    }
}