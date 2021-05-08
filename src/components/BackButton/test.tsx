/* eslint-disable no-undef */

import React from 'react';
import BackButon from '.';
import { fireEvent, render } from '../../utils/tests/helpers';

const backIcon = require('../../assets/images/chevron_left_black.png');

const mockedDispatch = jest.fn();

jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    useNavigation: () => ({
      goBack: mockedDispatch,
    }),
  };
});

it('should render correctly', async () => {
  const { toJSON } = render(<BackButon backIcon={backIcon} />);
  expect(toJSON()).toMatchSnapshot();
});

it('should call the navigation function', async () => {
  const { getByRole } = render(<BackButon backIcon={backIcon} />);
  const btnElement = getByRole('button');

  fireEvent.press(btnElement);
  expect(mockedDispatch).toBeCalled();
});

it('should render some image source', async () => {
  const { getByRole } = render(<BackButon backIcon={backIcon} />);
  const imageElement = getByRole('image');

  expect(imageElement.props.source).toBe(backIcon);
});
