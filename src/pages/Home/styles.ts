/* eslint-disable prettier/prettier */
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  ${({theme}) => `
      flex:1;
      background:${theme.colors.white};
    `}
`;




