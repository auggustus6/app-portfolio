import React from 'react';
import { TextStyle } from 'react-native';
import * as Styles from './styles';

export type TitleProps = {
  size?: 'large' | 'medium' | 'small';
  label: string | React.ReactNode;
  align?: 'left' | 'center' | 'right';
  colorLabel?: string;
  strong?: boolean;
  style?: TextStyle;
  testID?: string;
};

const Heading = ({
  size = 'large',
  align = 'left',
  label,
  colorLabel = '#333',
  testID,
  strong = false,
  style,
}: TitleProps) => {
  return (
    <Styles.Text
      style={style}
      testID={testID}
      size={size}
      colorLabel={colorLabel}
      strong={strong}
      align={align}>
      {label}
    </Styles.Text>
  );
};

export default Heading;
