import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  ${({ theme }) => `
        padding:${theme.spacings.large};
    `}
`;
