import { render, RenderOptions } from '@testing-library/react-native';
import theme from '../../styles/theme/theme';
import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import 'jest-styled-components/native';

const AllTheProviders: React.FC = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

const customRender = (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, 'queries'>,
) => render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react-native';

export { customRender as render };
