import {css} from '@emotion/react';
import styled from '@emotion/styled';
import {hasOwnProperty} from '../utils/has-own-property';
import {Theme, ThemeBase} from './types';

type FoundationKey = keyof Omit<
  ThemeBase,
  | 'breakpoints'
  | 'stylePresets'
  | 'typographyPresets'
  | 'transitionPresets'
  | 'componentDefaults'
  | 'icons'
>;

const foundationsList: FoundationKey[] = [
  'borders',
  'colors',
  'overlays',
  'motions',
  'shadows',
  'sizing',
  'spacePresets',
  'fonts',
];

export type ThemeDiff = Partial<Pick<ThemeBase, FoundationKey>>;

type TokenValue = string | number | {fontFamily: string};

const hasSameValue = (
  tokenName: string,
  tokenValueA: TokenValue,
  tokenValueB: TokenValue,
) => {
  if (
    tokenName.startsWith('fontFamily') &&
    typeof tokenValueA === 'object' &&
    typeof tokenValueB === 'object'
  ) {
    return tokenValueA.fontFamily === tokenValueB.fontFamily;
  }
  return tokenValueA === tokenValueB;
};

export const themeDiff = (
  parentTheme: Partial<Theme>,
  childTheme: Partial<Theme>,
): ThemeDiff => {
  const diff = {} as ThemeDiff;

  foundationsList.forEach(foundationKey => {
    const parentFoundation = parentTheme[foundationKey] || {};
    const childFoundation = childTheme[foundationKey] || {};

    Object.entries(childFoundation).forEach(([tokenName, tokenValue]) => {
      if (
        foundationKey &&
        tokenName &&
        (!parentFoundation[tokenName] || // does not exist in parent theme, so is new token
          !hasSameValue(tokenName, parentFoundation[tokenName], tokenValue)) // token value are different
      ) {
        if (!hasOwnProperty(diff, foundationKey)) {
          diff[foundationKey] = {};
        }

        // @ts-ignore
        diff[foundationKey][tokenName] = tokenValue;
      }
    });
  });

  return diff;
};

export const generateCSSVars = (theme: Partial<Theme>) => {
  const cssValue = foundationsList
    .map(themeKey => {
      const tokensObject = theme[themeKey];
      /* istanbul ignore if */
      if (typeof tokensObject !== 'object') {
        return '';
      }
      const tokensNames = Object.keys(tokensObject);
      const prefix = themeKey === 'colors' ? 'color-' : '';
      return tokensNames
        .map(tokenName => {
          if (
            tokenName.startsWith('fontFamily') &&
            typeof tokensObject[tokenName] === 'object' &&
            tokensObject[tokenName].fontFamily
          ) {
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

export const CssVariablesContainer = styled.div<{diff: ThemeDiff}>`
  ${({diff}) => generateCSSVars(diff)}
`;
