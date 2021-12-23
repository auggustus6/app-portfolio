import 'react-native-gesture-handler';
import React from 'react';
import Route from './src/routes';
import { ThemeProvider } from 'styled-components/native';
import theme from './src/styles/theme/theme';
import { Provider } from 'react-redux';
import { store } from './src/store';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Route />
      </Provider>
    </ThemeProvider>
  );
};

export default App;
