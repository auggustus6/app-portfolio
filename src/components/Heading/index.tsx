import React from 'react';
import { TextStyle } from 'react-native';
import * as Styles from './styles';

export type TitleProps = {
  size?: 'large' | 'medium' | 'small';
  label: string | React.ReactNode;
  align?: 'left' | 'center' | 'right';
  colorLabel?: 'primary' | 'black' | 'white' | 'gray' | 'lightGray';
  strong?: boolean;
  style?: TextStyle;
};

const Heading = ({
  size = 'large',
  align = 'left',
  label,
  colorLabel = 'black',
  strong = false,
  style,
}: TitleProps) => {
  return (
    <Styles.Text
      style={style}
      size={size}
      colorLabel={colorLabel}
      strong={strong}
      align={align}>
      {label}
    </Styles.Text>
  );
};

export default Heading;
