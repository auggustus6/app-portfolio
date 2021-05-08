import styled from 'styled-components/native';

export const Button = styled.TouchableOpacity`
  ${() => `
        top:30px;
        left:30px;
        position:absolute;
        z-index:9;
        background:transparent;
    `}
`;

export const Image = styled.Image`
  ${() => `
        width:30px;
        height:30px;
    `}
`;
