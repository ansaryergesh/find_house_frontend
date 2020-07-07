export const status =(state = {
    status: null
},action) => {
    switch(action.type) {
        case 'STATUS_FAVOURITE':
            return {
                ...state, status: action.payload
            }
        default:
            return state;
    }
}

export default status;