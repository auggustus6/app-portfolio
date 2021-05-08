/* eslint-disable no-undef */

import React from 'react';
import Home from '.';

import { render } from '../../utils/tests/helpers';

const mockedDispatch = jest.fn();

jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: mockedDispatch,
    }),
  };
});

jest.mock('styled-components', () => {
  jest.requireActual('styled-components');
  return {
    useTheme: () => ({
      gray: '#666',
    }),
  };
});

it('should render screen correctly', () => {
  const { toJSON } = render(<Home />);

  expect(toJSON()).toMatchSnapshot();
});
