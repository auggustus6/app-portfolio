/* eslint-disable prettier/prettier */
import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
const { height } = Dimensions.get('window');

export const Container = styled.View`
  ${({ theme}) => `
      background:${theme.colors.white};
      border-top-left-radius:${RFValue(10)}px;
      border-top-right-radius:${RFValue(10)}px;
      height:${height * 0.7}px;

    `}
`;
