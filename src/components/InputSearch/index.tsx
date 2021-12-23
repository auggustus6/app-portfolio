import React from 'react';
import { TextInputProps } from 'react-native';
import { useTheme } from 'styled-components';
import * as Styles from './styles';

const icon = require('../../assets/images/search.png');

const InputSearch = (props: TextInputProps) => {
  const theme = useTheme();
  return (
    <Styles.Container>
      <Styles.Icon source={icon} />
      <Styles.Input
        onChangeText={props.onChangeText}
        testID={props.testID}
        placeholder={props.placeholder || 'Encontre o imóvel do seu sonho'}
        placeholderTextColor={theme.colors.gray}
      />
    </Styles.Container>
  );
};

export default InputSearch;
