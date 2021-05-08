/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import * as Styles from './styles';

export type WrapperProps = {
  children: React.ReactNode;
  increaseSize?: boolean;
  fullHeight?: boolean;
};

const Wrapper = ({
  children,
  increaseSize = false,
  fullHeight = false,
}: WrapperProps) => {
  return (
    <Styles.Container increaseSize={increaseSize} fullHeight={fullHeight}>
      {children}
    </Styles.Container>
  );
};

export default Wrapper;
