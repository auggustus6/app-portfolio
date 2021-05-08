import Heading from '../../components/Heading';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  ${({ theme }) => `
        flex:1;
        background:${theme.colors.white};
    `}
`;

export const CustomHeading = styled(Heading)`
  ${() => `
      margin-top:0px;
  `}
`;
