const singleHouse = (state = {
  singleHouse: [],
}, action) => {
  switch (action.type) {
    case 'SINGLE_HOUSE':
      return {
        ...state, singleHouse: action.payload,
      };
    default:
      return state;
  }
};

export default singleHouse;
