import React from 'react';
import { TextInputProps } from 'react-native';
import { useTheme } from 'styled-components';
import * as Styles from './styles';

const icon = require('../../assets/images/search_red.png');

const InputSearch = (props: TextInputProps) => {
  const theme = useTheme();
  return (
    <Styles.Container>
      <Styles.Icon source={icon} />
      <Styles.Input
        {...props}
        placeholder="Encontre um restaurante"
        placeholderTextColor={theme.colors.gray}
      />
    </Styles.Container>
  );
};

export default InputSearch;
