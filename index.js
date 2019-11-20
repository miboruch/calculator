/**
 * @format
 */
import React from 'react';
import {AppRegistry} from 'react-native';
import LandscapeContextProvider from './Calculator/context/LandscapeContext';
import App from './Calculator/App';
import {name as appName} from './app.json';

const AppWrapper = () => {
  return (
    <LandscapeContextProvider>
      <App />
    </LandscapeContextProvider>
  );
};

AppRegistry.registerComponent(appName, () => AppWrapper);
