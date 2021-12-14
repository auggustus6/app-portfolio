import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

const { height, width } = Dimensions.get('window');

export const Container = styled.ScrollView.attrs({
  contentContainerStyle: {
    flex: 1,
  },
})`
  ${() => ''}
`;

export const Image = styled.ImageBackground`
  ${() => `
      height:${height * 0.3}px;
      width:${width * 0.95}px;
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
  ${({ theme }) => `
      flex-direction:column;
      align-items:center;
      margin-top:${theme.spacings.small};

    `}
`;

export const Paragraph = styled.Text<{ price?: boolean }>`
  ${({ theme, price }) => `
        font-size:${price ? RFValue(22) : RFValue(14)}px;
        color:${price ? theme.colors.primary : theme.colors.lightGray};
        font-family:${price ? theme.font.familyBold : theme.font.family};
    `}
`;

export const Separator = styled.View`
  ${({ theme }) => `
      width:100%;
      height:1px;
      background:#CCCC;
      margin-top:${theme.spacings.large};
    `}
`;

export const GridOptions = styled.View`
  ${({ theme }) => `
      flex-direction:row;
      flex-wrap:wrap;
      margin-top:${theme.spacings.large};
    `}
`;

export const ContainerOptions = styled.View`
  ${() => `
      align-items:center;
      justify-content:center;
      flex-grow:1;
    `}
`;

export const Label = styled.Text`
  ${({ theme }) => `
      font-size:${RFValue(12)}px;
      color:${theme.colors.gray};
      font-family:${theme.font.family};
      margin-right: ${theme.spacings.small};
    `}
`;

export const ContainerMap = styled.View`
  ${() => `
      width:${width}px;
      height:${height}px;
    `}
`;
