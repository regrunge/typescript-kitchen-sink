/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';

import { Provider } from 'react-redux';
import store from './src/redux';

// import TutorialComponent from './src/components/tutorial/TutorialComponent';
import HomeComponent from './src/components/HomeComponent';


declare const global: {HermesInternal: null | {}};

const App = () => {
  return (
  <Provider store={store}>
      <StatusBar barStyle="dark-content" />
      {/*<TutorialComponent />*/}
      <HomeComponent />
  </Provider>
  );
};

export default App;
