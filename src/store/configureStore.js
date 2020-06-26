import { createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension'
import usersReducer from '../reducers/usersReducer'
import housesReducer from '../reducers/housesReducer';
import favourites from '../reducers/favourites';
export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            usersReducer: usersReducer,
            houses: housesReducer,
            favourites: favourites,
        }),
        composeWithDevTools((applyMiddleware(thunk, logger)))
    );
    
    return store;
}