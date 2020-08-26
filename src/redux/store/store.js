import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from "redux-devtools-extension";
import { rootReducer } from './rootReducer'; 

// create store, passing in store enhancers to enable devTools, and to use redux-thunk
export const store = createStore(rootReducer,  composeWithDevTools(applyMiddleware(thunk)));