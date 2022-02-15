import React from 'react';
import {
  View,
} from 'react-native';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import {AlertDialog, NativeBaseProvider,Button, useColorModeValue} from 'native-base';
import persist from './src/state/store/store.js';

import Container from './src/container/Container.js';
const persistStore = persist();


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }



  render() {
    return (
      <NativeBaseProvider>
        <Provider store={persistStore.store}>
          <PersistGate loading={null} persistor={persistStore.persistor}>
       
            <Container />
          </PersistGate>
        </Provider>
      </NativeBaseProvider>
    );
  }
}