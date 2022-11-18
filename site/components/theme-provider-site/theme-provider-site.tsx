import * as React from 'react';
import {
  styled,
  css,
  ThemeBase,
  ThemeProvider,
  ThemeProviderProps,
} from 'newskit';

type FoundationKey = keyof Omit<
  ThemeBase,
  | 'breakpoints'
  | 'stylePresets'
  | 'typographyPresets'
  | 'transitionPresets'
  | 'componentDefaults'
  | 'icons'
  | 'fonts'
>;

const StyledCSSTheme = styled.div`
  ${({theme}) => {
    const foundationsList = [
      'borders',
      'colors',
      'overlays',
      'motions',
      'shadows',
      'sizing',
      'spacePresets',
    ] as FoundationKey[];

    const cssValue = foundationsList
      .map(themeKey => {
        const tokensObject = theme[themeKey];
        const tokensNames = Object.keys(tokensObject);
        const prefix = themeKey === 'colors' ? 'color-' : '';
        return tokensNames
          .map(
            tokenName => `--${prefix}${tokenName}: ${tokensObject[tokenName]};`,
          )
          .join('');
      })
      .join('');
    return css`
      ${cssValue}
    `;
  }}
`;

export const ThemeProviderSite = ({children, ...rest}: ThemeProviderProps) => (
  <ThemeProvider {...rest}>
    <StyledCSSTheme>{children}</StyledCSSTheme>
  </ThemeProvider>
);
