/* eslint-disable prettier/prettier */
import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.ScrollView.attrs({
  flex:1,
})`
  ${({theme}) => `
        background:${theme.colors.white};
    `}
`;

export const GridContainer = styled.View`
  ${({theme}) => `
      align-items:center;
      flex-direction:row;
      justify-content:space-between;
      margin:${theme.spacings.small} 0;
    `}
`;

export const CardNumber = styled(RectButton)<{actived?: boolean}>`
  ${({theme, actived}) => `
      width:${RFValue(50)}px;
      height:${RFValue(35)}px;
      border-radius:${RFValue(15)}px;
      background:${actived ? theme.colors.primary : '#ddd'};
      align-items:center;
      justify-content:center;
    `}
`;

export const Number = styled.Text`
  ${({theme}) => `
      color:${theme.colors.white};
      font-size:${RFValue(18)}px;
    `}
`;

// export const Button = styled(RectButton)`
//   ${({theme}) => `
//       padding:${theme.spacings.small};
//       margin:${theme.spacings.large} 0px;
//       background:${theme.colors.primary};
//     `}
// `;
export const ThumbText = styled.Text`
  ${({theme}) => `
      color:${theme.colors.black};
      text-align:center;
      font-family:${theme.font.familyBold};
      margin-bottom:${RFValue(30)}px;
      font-size:${RFValue(14)}px;
    `}
`;

