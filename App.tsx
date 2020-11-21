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
import { COLOR, ThemeContext, getTheme } from 'react-native-material-ui';

import TutorialComponent from './src/components/tutorial/TutorialComponent';
import HomeComponent from './src/components/HomeComponent';

// you can set your style right here, it'll be propagated to application
const uiTheme = {
    palette: {
        primaryColor: COLOR.pink500,
        secondaryColor: COLOR.amber500,
        accentColor: COLOR.green300,
    },
};

declare const global: {HermesInternal: null | {}};

const App = () => {
  return (
      <ThemeContext.Provider value={getTheme(uiTheme)}>
        <>
          <StatusBar barStyle="dark-content" />
          {/*<TutorialComponent />*/}
          <HomeComponent />
        </>
      </ThemeContext.Provider>
  );
};

export default App;
