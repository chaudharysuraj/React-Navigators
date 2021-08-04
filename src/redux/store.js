import { createStore, combineReducers } from 'redux';
import reducer from './reducer/reducer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer } from 'redux-persist';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['reducer']
};

const rtReducer = combineReducers({
    'reducer': reducer
});

const rootReducer = persistReducer(persistConfig, rtReducer);

export const store = createStore(rootReducer);
export const persistor = persistStore(store);
