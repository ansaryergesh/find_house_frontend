/* eslint-disable no-use-before-define */
export const loginUser = (username, password) => (dispatch) => {
  dispatch({ type: 'AUTHENTICATING_USER' });
  fetch(`${process.env.REACT_APP_API_ENDPOINT}/api/v1/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      user: {
        username,
        password,
      },
    }),
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw response;
    })
    .then((JSONResponse) => {
      localStorage.setItem('jwt', JSONResponse.jwt);
      dispatch({ type: 'SET_CURRENT_USER', payload: JSONResponse.user });
    })
    .catch((r) => r.json().then((e) => dispatch({ type: 'FAILED_LOGIN', payload: e.message })));
};

export const registerUser = (username, password, bio) => (dispatch) => {
  dispatch({ type: 'AUTHENTICATING_USER' });
  fetch(`${process.env.REACT_APP_API_ENDPOINT}/api/v1/users`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      username,
      password,
      bio,
    }),
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw response;
    })
    .then((JSONResponse) => {
      localStorage.setItem('jwt', JSONResponse.jwt);
      dispatch({ type: 'SET_CURRENT_USER', payload: JSONResponse.user });
    })
    .catch((r) => r.json().then((e) => dispatch({ type: 'FAILED_LOGIN', payload: e.message })));
};

export const fetchCurrentUser = () => (dispatch) => {
  dispatch(authenticatingUser());
  fetch(`${process.env.REACT_APP_API_ENDPOINT}/api/v1/profile`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${localStorage.getItem('jwt')}`,
    },
  })
    .then((response) => response.json())
    .then((JSONResponse) => dispatch(setCurrentUser(JSONResponse.user)));
};

export const setCurrentUser = (userData) => ({
  type: 'SET_CURRENT_USER',
  payload: userData,
});

export const logoutUser = () => ({
  type: 'LOGOUT_USER',
});

export const failedLogin = (errorMsg) => ({
  type: 'FAILED_LOGIN',
  payload: errorMsg,
});

export const authenticatingUser = () => ({ type: 'AUTHENTICATING_USER' });
