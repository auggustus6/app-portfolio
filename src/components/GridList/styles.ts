import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import { Restaurant } from 'utils/types/restaurant';

export const Container = styled(
  FlatList as new () => FlatList<Restaurant>,
).attrs({
  contentContainerStyle: {
    justifyContent: 'space-between',
    alignItems: 'center',
  },
})``;

export const Button = styled.TouchableOpacity``;

export const Loading = styled.View`
  ${({ theme }) => `
    flex-direction:row;
    align-items:center;
    padding:${theme.spacings.small};
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
    width:26px;
    height:26px;
  `}
`;
