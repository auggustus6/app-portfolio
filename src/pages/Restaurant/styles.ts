import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const { height } = Dimensions.get('window');
export const Container = styled.ScrollView.attrs({
  contentContainerStyle: {
    flex: 1,
  },
})`
  ${() => `
    `}
`;

export const Header = styled.ImageBackground`
  ${() => `
      height:${height * 0.3}px;
    `}
`;

export const Logo = styled.Image.attrs({
  borderStyle: 'solid',
  borderColor: 'white',
  borderWidth: 5,
})`
  ${() => `
      width:120px;
      height:120px;
      position:absolute;
      border-radius:60px;
      align-self:center;

      top:-80px;
    `}
`;

export const Article = styled.View`
  ${() => `
      flex-direction:column;
      align-items:flex-start;
    `}
`;

export const Paragraph = styled.Text`
  ${({ theme }) => `
        font-size:${theme.font.sizes.medium};
        color:${theme.colors.lightGray};
    `}
`;

export const Divider = styled.View`
  ${({ theme }) => `
      width:100%;
      height:1px;
      background:#CCCC;
      margin-top:${theme.spacings.large};
    `}
`;
