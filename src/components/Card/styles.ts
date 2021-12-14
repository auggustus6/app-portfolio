import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

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
      width:${width * 0.9}px;
      border-radius:${theme.border.radius};
    `}
`;

export const BackgroundImage = styled.ImageBackground.attrs({
  borderTopLeftRadius: 8,
  borderTopRightRadius: 8,
})`
  ${({ theme }) => `
      height:${RFValue(180)}px;
      width:100%;
      align-items:flex-end;
      padding:${theme.spacings.small};
    `};
`;

export const ContainerInfos = styled.View`
  ${({ theme }) => `
      padding:${theme.spacings.small};
    `}
`;

export const Text = styled.Text`
  ${({ theme }) => `
      font-size:${RFValue(16)}px;
      color:${theme.colors.gray};
      font-family:${theme.font.family};
      padding-left: ${theme.spacings.small};

    `}
`;

export const Price = styled.Text`
  ${({ theme }) => `
      font-size:${RFValue(22)}px;
      color:${theme.colors.primary};
      font-family:${theme.font.familyBold};
      padding-left: ${theme.spacings.small};
    `}
`;

export const Separator = styled.View`
  ${({ theme }) => `
      width:100%;
      height:1px;
      background:${theme.colors.lightGray};
      margin:${theme.spacings.small} 0;
    `}
`;

export const GridOptions = styled.View`
  ${({ theme }) => `
      flex-direction:row;
      flex-wrap:wrap;
      margin-top:${theme.spacings.small};
    `}
`;

export const ContainerOptions = styled.View`
  ${() => `
      align-items:center;
      justify-content:center;
      flex:1;
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
