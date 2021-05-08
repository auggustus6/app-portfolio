import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  ${({ theme }) => `
        flex-direction:row;
        align-items:center;
        padding:${theme.spacings.xsmall} ${theme.spacings.medium};
        border-radius:${theme.border.radius};
        border:1px solid ${theme.border.color};
        width:${Dimensions.get('window').width * 0.9}px;
        margin-top:${theme.spacings.xxlarge};
    `}
`;

export const Icon = styled.Image`
  ${() => `
      width:20px;
      height:20px;
    `}
`;

export const Input = styled.TextInput`
  ${({ theme }) => `
        margin-left:20px;
        font-size:${theme.font.sizes.medium};
        color:${theme.colors.gray};
    `}
`;
