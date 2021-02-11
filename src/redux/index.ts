import { createStore, combineReducers } from 'redux';
import thingsReducer from "./reducers/things"; // TODO: Seva!
import { persistStore, persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-community/async-storage';

const rootReducer = combineReducers({ things: thingsReducer }); // TODO: Seva!

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default () => {
    let store = createStore(persistedReducer);
    let persistor = persistStore(store);

    return { store, persistor }
}
