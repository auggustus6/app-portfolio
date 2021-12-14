/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import * as Styles from './styles';

export type WrapperProps = {
  children: React.ReactNode;
};

const Wrapper = ({ children }: WrapperProps) => {
  return <Styles.Container>{children}</Styles.Container>;
};

export default Wrapper;
