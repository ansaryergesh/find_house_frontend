/* eslint-disable import/prefer-default-export */
/* eslint-disable import/no-named-as-default */
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import usersReducer from '../reducers/usersReducer';
import messages from '../reducers/messages';
import status from '../reducers/status';
import housesReducer from '../reducers/housesReducer';
import favourites from '../reducers/favourites';

export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      message: messages,
      usersReducer,
      houses: housesReducer,
      favourites,
      status,
    }),
    composeWithDevTools((applyMiddleware(thunk))),
  );

  return store;
};
