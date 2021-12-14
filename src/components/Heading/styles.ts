import styled, { DefaultTheme } from 'styled-components/native';
import { TitleProps } from '.';

type TextProps = Pick<TitleProps, 'colorLabel' | 'size' | 'strong' | 'align'>;

const textSizeModdifier = {
  large: (theme: DefaultTheme) => `
    font-size:${theme.font.sizes.xxlarge};
  `,

  medium: (theme: DefaultTheme) => `
    font-size:${theme.font.sizes.large};
  `,

  small: (theme: DefaultTheme) => `
    font-size:${theme.font.sizes.xlmedium};
    `,
};

export const Text = styled.Text<TextProps>`
  ${({ theme, colorLabel = 'black', size, strong, align = 'left' }) => `
        color:${colorLabel ? colorLabel : theme.colors.black};
        font-family:${theme.font.family};
        margin-top:${theme.spacings.large};
        text-align:${align};

      ${strong && `font-family:${theme.font.familyBold}`};
      ${!!size && textSizeModdifier[size](theme)}

    `}
`;
