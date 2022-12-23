import * as React from 'react';
import {
  styled,
  css,
  ThemeBase,
  ThemeProvider,
  ThemeProviderProps,
  Theme,
} from 'newskit';

type FoundationKey = keyof Omit<
  ThemeBase,
  | 'breakpoints'
  | 'stylePresets'
  | 'typographyPresets'
  | 'transitionPresets'
  | 'componentDefaults'
  | 'icons'
>;

export const generateCSSVars = (theme: Theme) => {
  const foundationsList = [
    'borders',
    'colors',
    'overlays',
    'motions',
    'shadows',
    'sizing',
    'spacePresets',
    'fonts',
  ] as FoundationKey[];

  const cssValue = foundationsList
    .map(themeKey => {
      const tokensObject = theme[themeKey];
      const tokensNames = Object.keys(tokensObject);
      const prefix = themeKey === 'colors' ? 'color-' : '';
      return tokensNames
        .map(tokenName => {
          if (tokenName.startsWith('fontFamily')) {
            return `--${prefix}${tokenName}: ${tokensObject[tokenName].fontFamily};`;
          }
          return `--${prefix}${tokenName}: ${tokensObject[tokenName]};`;
        })
        .join('');
    })
    .join('');

  return css`
    ${cssValue}
  `;
};

const StyledCSSTheme = styled.div`
  ${({theme}) => generateCSSVars(theme)}
`;

export const ThemeProviderSite = ({children, ...rest}: ThemeProviderProps) => (
  <ThemeProvider {...rest}>
    <StyledCSSTheme>{children}</StyledCSSTheme>
  </ThemeProvider>
);

export const ThemeSwitcher = styled.div<{
  themes: Array<Theme>;
  children: React.ReactNode;
}>`
  ${({themes}) =>
    themes.reduce((prev, theme) => {
      const {styles} = generateCSSVars(theme);
      const {name} = theme;

      return `
        ${prev}  
        &.${name} {
          ${styles}
        }
      `;
    }, '')}
`;
