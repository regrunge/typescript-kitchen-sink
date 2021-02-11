/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import 'react-native-gesture-handler';

import {NavigationContainer} from '@react-navigation/native';

import React from 'react';
import {StatusBar} from 'react-native';

import {Provider} from 'react-redux';
import redux from './src/redux';
import { PersistGate } from 'redux-persist/integration/react'

import MainStack from './src/navigation/MainStack';

const { store, persistor } = redux();

declare const global: {HermesInternal: null | {}};

const App = () => {
  return (
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <NavigationContainer>
            <StatusBar barStyle="dark-content" />
            <MainStack />
          </NavigationContainer>
        </PersistGate>
    </Provider>
  );
};

export default App;
