import 'react-native-gesture-handler';
import React from 'react';
import Route from './src/routes';
import { ThemeProvider } from 'styled-components';
import theme from './src/styles/theme/theme';
import { Provider } from 'react-redux';
import { store } from './src/store';

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Route />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
