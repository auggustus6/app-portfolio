import styled from 'styled-components/native';
import { FlatList, Dimensions } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { RealStateData } from 'utils/types/realState';

const { height, width } = Dimensions.get('window');

export const Container = styled(
  FlatList as new () => FlatList<RealStateData>,
).attrs({
  contentContainerStyle: {
    justifyContent: 'space-between',
    alignItems: 'center',
  },
})``;

export const Button = styled.TouchableOpacity``;

export const LoadingWrapper = styled.View`
  ${() => `
    flex:1;
    align-items:center;
    justify-content:center;
  `}
`;

export const Loading = styled.View`
  ${({ theme }) => `
    flex-direction:row;
    align-items:center;
    padding:${theme.spacings.small};
  `}
`;

export const Header = styled.ImageBackground`
  ${() => `
      height:${height * 0.3}px;
      width:${width}px;
    `}
`;

export const LoadingText = styled.Text`
  ${({ theme }) => `
    color:${theme.colors.lightGray};
    font-size:${theme.font.sizes.medium};
    margin-right:${theme.spacings.xsmall};
  `}
`;

export const Indicator = styled.Image`
  ${() => `
    width:${RFValue(20)}px;
    height:${RFValue(20)}px;
  `}
`;
