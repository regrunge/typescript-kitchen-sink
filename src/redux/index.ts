import { createStore, combineReducers } from 'redux';
import thingsReducer from "./reducers/things";

const rootReducer = combineReducers({ things: thingsReducer });

const store = createStore(rootReducer, {});

export default store;
