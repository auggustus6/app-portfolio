import 'react-native-gesture-handler';
import React from 'react';
import Route from './src/routes';
import { RestaurantProvider } from './src/hooks/useRestaurant';
import { ThemeProvider } from 'styled-components';
import theme from './src/styles/theme/theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <RestaurantProvider>
        <Route />
      </RestaurantProvider>
    </ThemeProvider>
  );
};

export default App;
