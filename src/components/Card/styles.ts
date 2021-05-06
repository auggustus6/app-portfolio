/* eslint-disable @typescript-eslint/no-unused-vars */
import { Pressable } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View.attrs({
  elevation: 5,
  shadowColor: '#000',
})`
  ${({ theme }) => `
      background:${theme.colors.white};
      margin-right:${theme.spacings.large};
      border-radius:5px;
    `}
`;

export const Header = styled.View<{ backgroundHead?: string }>`
  ${({ theme, backgroundHead }) => `
            width:120px;
            height:120px;
            border-top-left-radius:5px;
            border-top-right-radius:5px;
            align-items:center;
            justify-content:center;

            ${
              !!backgroundHead &&
              `
              background-color:${backgroundHead}
            `
            }
    `}
`;

export const Body = styled.View`
  ${({ theme }) => `
      padding:${theme.spacings.small};
      align-items:center;
    `}
`;

export const Text = styled.Text`
  ${({ theme }) => `
      font-size:${theme.font.sizes.large};
      color:${theme.colors.black};
      font-family:${theme.font.family};
    `}
`;
