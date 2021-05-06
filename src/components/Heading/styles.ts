import styled, {DefaultTheme} from 'styled-components/native';
import {TitleProps} from '.';

type TextProps = Pick<TitleProps, 'colorLabel' | 'size'>;

const textSizeModdifier = {
  large: (theme: DefaultTheme) => `
    font-size:${theme.font.sizes.xlarge};
  `,

  medium: (theme: DefaultTheme) => `
    font-size:${theme.font.sizes.large};
  `,

  small: (theme: DefaultTheme) => `
    font-size:${theme.font.sizes.xlmedium};
    `,
};

export const Text = styled.Text<TextProps>`
  ${({theme, colorLabel = 'black', size}) => `
        color:${theme.colors[colorLabel]};
        font-family:${theme.font.family};

      ${!!size && textSizeModdifier[size](theme)}

    `}
`;
