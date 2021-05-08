import styled from 'styled-components/native';

export const Container = styled.FlatList.attrs({
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
