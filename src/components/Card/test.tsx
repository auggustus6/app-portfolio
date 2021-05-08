/* eslint-disable no-undef */

import React from 'react';
import Card from '.';
import { CardProps } from '.';
import { render } from '../../utils/tests/helpers';

const cardProps: CardProps = {
  label: 'Restaurantes',
  imageSource: require('../../assets/images/header.png'),
  index: 0,
};

it('should render correctly', () => {
  const { toJSON } = render(<Card {...cardProps} />);
  expect(toJSON()).toMatchSnapshot();
});

it('should render label', () => {
  const { getByText } = render(<Card {...cardProps} />);
  const text = getByText(/Restaurantes/i);
  expect(text).toBeDefined();
});

it('should render some image source', async () => {
  const { getByTestId } = render(<Card {...cardProps} />);
  const imageElement = getByTestId('card.background');

  expect(imageElement.props.source).toBe(cardProps.imageSource);
});

it('should add margin left if index is odd', async () => {
  const { getByTestId } = render(<Card {...cardProps} index={1} />);
  const container = getByTestId('card.container');

  expect(container).toHaveStyleRule('margin-left', 20);
});
