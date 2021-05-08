import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import { WrapperProps } from '.';
const { height } = Dimensions.get('window');

type ContainerProps = Pick<WrapperProps, 'increaseSize' | 'fullHeight'>;

export const Container = styled.View<ContainerProps>`
  ${({ theme, increaseSize = false, fullHeight = false }) => `
      background:${theme.colors.white};
      border-top-left-radius:32px;
      border-top-right-radius:32px;
      flex:1;
      height:${height * (increaseSize ? 0.8 : 0.7)}px;
      position:absolute;
      bottom:0;
      right:0;
      left:0;
      z-index:9;
      
      ${fullHeight && `height:${height}px`}
    `}
`;
