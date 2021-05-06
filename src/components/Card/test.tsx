/* eslint-disable no-undef */

import React from 'react';
import Card from '.';

import { render } from '../../utils/tests/helpers';

it('should render label', () => {
  const { getByText, toJSON } = render(<Card label="Doações" />);
  const text = getByText(/Doações/i);
  expect(text).toBeDefined();
  expect(toJSON()).toMatchSnapshot();
});

it('should render header by default', () => {
  const { getByTestId } = render(<Card label="texto" />);
  const header = getByTestId(/header-icon/i);
  expect(header).toBeDefined();
});

it('should not render header if property isIcon has false', () => {
  const { queryByTestId } = render(<Card label="texto" isIcon={false} />);
  const header = queryByTestId(/header-icon/i);
  expect(header).toBeNull();
});
