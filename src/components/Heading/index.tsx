import React from 'react';
import * as Styles from './styles';

export type TitleProps = {
  size?: 'large' | 'medium' | 'small';
  label: string | React.ReactNode;
  colorLabel?: 'primary' | 'black' | 'white';
};

const Heading = ({size = 'large', label, colorLabel = 'black'}: TitleProps) => {
  return (
    <Styles.Text size={size} colorLabel={colorLabel}>
      {label}
    </Styles.Text>
  );
};

export default Heading;
