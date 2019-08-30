import {createStore, applyMiddleware} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../reducers/rootReducer';
import thunk from 'redux-thunk';

export const configStore = () =>{
    const middlewares = [thunk];

    const composeEnhancers = composeWithDevTools(applyMiddleware(...middlewares))

    const store = createStore(rootReducer , composeEnhancers);

    return store;
} 

