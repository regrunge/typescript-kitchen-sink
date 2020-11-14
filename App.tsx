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

import TutorialComponent from './src/components/tutorial/TutorialComponent';
import HomeComponent from './src/components/HomeComponent';

declare const global: {HermesInternal: null | {}};

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      {/*<TutorialComponent />*/}
      <HomeComponent />
    </>
  );
};

export default App;
