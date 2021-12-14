import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  ${({ theme }) => `
        flex-direction:row;
        align-items:center;
        padding:${theme.spacings.xsmall} ${theme.spacings.medium};
        border-radius:${theme.border.radius};
        border:1px solid ${theme.border.color};
    `}
`;

export const Icon = styled.Image`
  ${() => `
      width:${RFValue(20)}px;
      height:${RFValue(20)}px;
    `}
`;

export const Input = styled.TextInput`
  ${({ theme }) => `
        margin-left:8px;
        font-size:${theme.font.sizes.medium};
        color:${theme.colors.gray};
    `}
`;
