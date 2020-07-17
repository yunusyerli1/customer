import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import {customerReducer} from './redux/reducers/customerReducers';


const initialState = {};
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    combineReducers({
        list: customerReducer
    }),
    initialState,
    composeEnhancer(applyMiddleware(thunk))
    
);
export default store;