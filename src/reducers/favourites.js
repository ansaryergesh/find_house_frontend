export const favourites = (state = {
  isLoading: false,
  errMess: null,
  favourites: [],
}, action) => {
  switch (action.type) {
    case 'ADD_FAVOURITE':
      return {
        ...state, isLoading: false, errMess: null, favourites: action.payload,
      };
    case 'FAVOURITE_LOADING':
      return {
        ...state, isLoading: true, errMess: null, favourites: [],
      };

    case 'FAVOURITE_FAILED':
      return {
        ...state, isLoading: false, errMess: action.payload, favourites: [],
      };
    default:
      return state;
  }
};

export default favourites;
