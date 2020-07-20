export const messages = (state = {
  success: null,
  error: null,
}, action) => {
  switch (action.type) {
    case 'SUCCESS_MESSAGE':
      return {
        ...state, success: action.payload, error: null,
      };
    case 'ERROR_MESSAGE':
      return {
        ...state, success: null, error: action.payload,
      };
    case 'EMPTY_MESSAGE':
      return {
        ...state, success: null, error: null,
      };
    default:
      return state;
  }
};

export default messages;
