import React from 'react';
import * as Styles from './styles';

type ContainerProps = {
  children: React.ReactNode;
  testID?: string;
};

const Container = ({ children, testID }: ContainerProps) => {
  return <Styles.Container testID={testID}>{children}</Styles.Container>;
};

export default Container;
