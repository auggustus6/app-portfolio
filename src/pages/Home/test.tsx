/* eslint-disable no-undef */

import React from 'react';
import Home from '.';

import {render} from '../../utils/tests/helpers';

it('should render screen correctly', () => {
  const {toJSON} = render(<Home />);

  expect(toJSON()).toMatchSnapshot();
});
