import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainRouter from './MainRoutes/main.routes';

export default function Route() {
  return (
    <NavigationContainer>
      <MainRouter />
    </NavigationContainer>
  );
}
