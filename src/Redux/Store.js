
import {applyMiddleware, compose, combineReducers, createStore} from 'redux';
import {EntryReducer} from "./Reducers/EntryReducer";
import {reducer} from "./Actions";

const asyncMiddleware = storeAPI  => next=> action=> {
    if(typeof action === 'function')
        return action(storeAPI.dispatch, storeAPI.getState)
    next(action)
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;

const rootReducer = combineReducers({
    EntryReducer,
    reducer
})
export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(asyncMiddleware)))