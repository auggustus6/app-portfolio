import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export const Container = styled.View.attrs({
  elevation: 5,
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 5,
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,
  marginVertical: 10,
  marginHorizontal: 10,
})`
  ${({ theme }) => `
      background:${theme.colors.white};
      width:${width * 0.45}px;
      height:${width * 0.45}px;
      border-radius:${theme.border.radius};
      
    `}
`;

export const BackgroundImage = styled.ImageBackground.attrs({
  borderRadius: 8,
})`
  ${() => `
      justify-content:flex-end;
      height:100%;
      width:100%;
    `}
`;

export const Text = styled.Text`
  ${({ theme }) => `
      font-size:${theme.font.sizes.medium};
      color:${theme.colors.white};
      font-family:${theme.font.family};
      font-weight:bold;
      padding-left: ${theme.spacings.small};
      padding-bottom: ${theme.spacings.small};
    `}
`;
