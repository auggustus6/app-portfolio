/* eslint-disable prettier/prettier */
import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Button = styled(RectButton)`
  ${({ theme }) => `
      padding:${theme.spacings.small};
      margin:${theme.spacings.large} 0px;
      background:${theme.colors.primary};
      border-radius:5px;
    `}
`;
export const ButtonText = styled.Text`
  ${({ theme }) => `
      color:${theme.colors.white};
      text-align:center;
      font-family:${theme.font.family};
      font-size:${RFValue(18)}px;
    `}
`;
