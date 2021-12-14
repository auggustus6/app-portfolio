/* eslint-disable no-undef */

import React from 'react';
import Card from '.';
import { CardProps } from '.';
import { render } from '../../utils/tests/helpers';

const cardProps: CardProps = {
  label: 'Imóveis',
  imageSource: require('../../assets/images/header.png'),
  price: 100,
  bathrooms: 2,
  bedrooms: 2,
  parkingSpaces: 5,
};

beforeAll(() => {
  render(<Card {...cardProps} />);
});

it('should render correctly', () => {
  const { toJSON } = render(<Card {...cardProps} />);
  expect(toJSON()).toMatchSnapshot();
});

it('should render label', () => {
  const { getByText } = render(<Card {...cardProps} />);
  const text = getByText(/Imóveis/i);
  expect(text).toBeDefined();
});

it('should render some image source', async () => {
  const { getByTestId } = render(<Card {...cardProps} />);
  const imageElement = getByTestId('card.background');

  expect(imageElement.props.source).toBe(cardProps.imageSource);
});
