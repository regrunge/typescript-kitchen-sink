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

import { NavigationContainer } from '@react-navigation/native';

import React from 'react';
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';

import { Provider } from 'react-redux';
import store from './src/redux';

import MainStack from "./src/navigation/MainStack";

declare const global: {HermesInternal: null | {}};

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
          <StatusBar barStyle="dark-content" />
          <MainStack />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
