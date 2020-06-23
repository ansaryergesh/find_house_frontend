const housesReducer = (state={
    isLoading: false,
    errMess: null,
    houses: []
},action) => {
    switch(action.type) {
        case 'POST_HOUSE_SUCCESS':
            return {
                ...state,isLoading: false, errMess: null, houses: action.payloead,
            };
        case 'HOUSES_LOADING':
            return {
                ...state, isLoading: true, errMess: null, houses: [],
            };
        case 'HOUSES_FAILED':
            return {
                ...state, isLoading: false, errMess: action.payloead, houses: [],
            }
    }
}

export default housesReducer

  