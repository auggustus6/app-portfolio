/* eslint-disable no-undef */

import React from 'react';
import Heading from '.';
import { render } from '../../utils/tests/helpers';

it('should render correctly', async () => {
  const { getByText, toJSON } = render(<Heading label="Titulo" />);
  const text = getByText(/Titulo/i);
  expect(text).toBeDefined();
  expect(toJSON()).toMatchSnapshot();
});

it('should render text color black by default', async () => {
  const { getByText } = render(<Heading label="Titulo" />);
  const text = getByText(/Titulo/i);
  expect(text).toHaveStyleRule('color', '#333');
});

it('should render font size large by default', async () => {
  const { getByText } = render(<Heading label="Titulo" />);
  const text = getByText(/Titulo/i);

  expect(text).toHaveStyleRule('font-size', 24);
});

it('should render font size medium', async () => {
  const { getByText } = render(<Heading label="Titulo" size="medium" />);
  const text = getByText(/Titulo/i);

  expect(text).toHaveStyleRule('font-size', 18);
});

it('should render font size small', async () => {
  const { getByText } = render(<Heading label="Titulo" size="small" />);
  const text = getByText(/Titulo/i);

  expect(text).toHaveStyleRule('font-size', 16);
});

it('should align the font in the left ', async () => {
  const { getByText } = render(<Heading label="Titulo" size="small" />);
  const text = getByText(/Titulo/i);

  expect(text).toHaveStyleRule('text-align', 'left');
});

it('should render the font weight bold ', async () => {
  const { getByText } = render(<Heading label="Titulo" strong />);
  const text = getByText(/Titulo/i);

  expect(text).toHaveStyleRule('font-family', 'Poppins-Black');
});
