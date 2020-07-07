import { createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension'
import usersReducer from '../reducers/usersReducer'
import messages from '../reducers/messages'
import status from '../reducers/status'
import housesReducer from '../reducers/housesReducer';
import favourites from '../reducers/favourites';
export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            message: messages,
            usersReducer: usersReducer,
            houses: housesReducer,
            favourites: favourites,
            status: status
        }),
        composeWithDevTools((applyMiddleware(thunk, logger)))
    );
    
    return store;
}