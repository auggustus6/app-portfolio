/* eslint-disable prettier/prettier */
import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';
import * as Styles from './styles';

type CustomButtonProps = {
  label:string;
} & RectButtonProps

const Button = (props: CustomButtonProps) => {
  return (
    <Styles.Button {...props}>
      <Styles.ButtonText>{props.label}</Styles.ButtonText>
    </Styles.Button>
  );
};

export default Button;
