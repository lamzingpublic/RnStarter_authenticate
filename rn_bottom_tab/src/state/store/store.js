import AsyncStorage from '@react-native-async-storage/async-storage';
import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';

import reducers from '../reducer/index.js';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: [
    'authCheck',
  ]
};

const persistedReducer = persistReducer(persistConfig, reducers);

export default () => {
  let store = createStore(persistedReducer, {}, applyMiddleware(thunk));
  let persistor = persistStore(store);
  return { store, persistor };
};