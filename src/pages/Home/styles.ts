import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import Heading from '../../components/Heading';

const { height } = Dimensions.get('window');
export const Container = styled.SafeAreaView`
  ${() => `
    flex:1;
    `}
`;

export const Header = styled.ImageBackground`
  ${() => `
      height:${height * 0.4}px;
    `}
`;

export const CustomHeading = styled(Heading)`
  ${() => `
      margin-top:0px;
    `}
`;
