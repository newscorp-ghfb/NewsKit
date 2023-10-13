import {
  Theme,
  TransitionPreset,
  TransitionToken,
  UncompiledTheme,
} from '../../theme/types';
import {deepMerge} from '../deep-merge';
import {recurseUnknown} from '../recurse-unknown';
import {errorLogger} from './error-logger';

export const endsWith = (value: string, checks: string[]): boolean =>
  checks.some(c => value.endsWith(c));

const sectionsWithThemeValuesOnly = ['typographyPresets', 'stylePresets'];

export const isNonThemeValueAllowed = (themeKey: string) =>
  !sectionsWithThemeValuesOnly.includes(themeKey);

export const CSSUnits = [
  'cm',
  'mm',
  'in',
  'px',
  'pt',
  'pc',
  'em',
  'ex',
  'ch',
  'rem',
  'vw',
  'vh',
  'vmin',
  'vmax',
  '%',
  'cqw',
  'cqh',
  'cqi',
  'cqb',
  'cqmin',
  'cqmax',
];

export const CSSColorNames = [
  'AliceBlue',
  'AntiqueWhite',
  'Aqua',
  'Aquamarine',
  'Azure',
  'Beige',
  'Bisque',
  'Black',
  'BlanchedAlmond',
  'Blue',
  'BlueViolet',
  'Brown',
  'BurlyWood',
  'CadetBlue',
  'Chartreuse',
  'Chocolate',
  'Coral',
  'CornflowerBlue',
  'Cornsilk',
  'Crimson',
  'Cyan',
  'DarkBlue',
  'DarkCyan',
  'DarkGoldenRod',
  'DarkGray',
  'DarkGrey',
  'DarkGreen',
  'DarkKhaki',
  'DarkMagenta',
  'DarkOliveGreen',
  'DarkOrange',
  'DarkOrchid',
  'DarkRed',
  'DarkSalmon',
  'DarkSeaGreen',
  'DarkSlateBlue',
  'DarkSlateGray',
  'DarkSlateGrey',
  'DarkTurquoise',
  'DarkViolet',
  'DeepPink',
  'DeepSkyBlue',
  'DimGray',
  'DimGrey',
  'DodgerBlue',
  'FireBrick',
  'FloralWhite',
  'ForestGreen',
  'Fuchsia',
  'Gainsboro',
  'GhostWhite',
  'Gold',
  'GoldenRod',
  'Gray',
  'Grey',
  'Green',
  'GreenYellow',
  'HoneyDew',
  'HotPink',
  'IndianRed ',
  'Indigo  ',
  'Ivory',
  'Khaki',
  'Lavender',
  'LavenderBlush',
  'LawnGreen',
  'LemonChiffon',
  'LightBlue',
  'LightCoral',
  'LightCyan',
  'LightGoldenRodYellow',
  'LightGray',
  'LightGrey',
  'LightGreen',
  'LightPink',
  'LightSalmon',
  'LightSeaGreen',
  'LightSkyBlue',
  'LightSlateGray',
  'LightSlateGrey',
  'LightSteelBlue',
  'LightYellow',
  'Lime',
  'LimeGreen',
  'Linen',
  'Magenta',
  'Maroon',
  'MediumAquaMarine',
  'MediumBlue',
  'MediumOrchid',
  'MediumPurple',
  'MediumSeaGreen',
  'MediumSlateBlue',
  'MediumSpringGreen',
  'MediumTurquoise',
  'MediumVioletRed',
  'MidnightBlue',
  'MintCream',
  'MistyRose',
  'Moccasin',
  'NavajoWhite',
  'Navy',
  'OldLace',
  'Olive',
  'OliveDrab',
  'Orange',
  'OrangeRed',
  'Orchid',
  'PaleGoldenRod',
  'PaleGreen',
  'PaleTurquoise',
  'PaleVioletRed',
  'PapayaWhip',
  'PeachPuff',
  'Peru',
  'Pink',
  'Plum',
  'PowderBlue',
  'Purple',
  'RebeccaPurple',
  'Red',
  'RosyBrown',
  'RoyalBlue',
  'SaddleBrown',
  'Salmon',
  'SandyBrown',
  'SeaGreen',
  'SeaShell',
  'Sienna',
  'Silver',
  'SkyBlue',
  'SlateBlue',
  'SlateGray',
  'SlateGrey',
  'Snow',
  'SpringGreen',
  'SteelBlue',
  'Tan',
  'Teal',
  'Thistle',
  'Tomato',
  'Turquoise',
  'Violet',
  'Wheat',
  'White',
  'WhiteSmoke',
  'Yellow',
  'YellowGreen',
];

// check for CSS functions like: rgb(0,0,0), calc(), min(), var() etc
// full list of funcitons https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Functions
export const isCSSFunc = (value: string) =>
  value.includes('(') && value.includes(')');

export const isHexColor = (value: string) => value.startsWith('#');

export const isValidColorName = (value: string) =>
  CSSColorNames.some(color => color.toLowerCase() === value.toLowerCase());

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const isValidUnit = (themeKey: string, value: any) => {
  if (['auto', 'revert', 'unset', 'initial', 'inherit'].includes(value)) {
    return value;
  }
  if (
    ['sizing', 'spacePresets', 'borders'].includes(themeKey) &&
    typeof value === 'string'
  ) {
    return endsWith(value, CSSUnits) || isCSSFunc(value);
  }

  if (themeKey === 'colors') {
    return isHexColor(value) || isCSSFunc(value) || isValidColorName(value);
  }

  return (
    typeof value !== 'undefined' &&
    typeof value !== 'object' &&
    !Number.isNaN(value) &&
    !Array.isArray(value)
  );
};

export const isArrayLikeObject = (value: string | object) =>
  typeof value === 'object' && '0' in value;

const unifyToken = (token: TransitionToken) => {
  if (typeof token === 'string') {
    return {extend: token, overrides: {}};
  }
  const {extend, ...overrides} = token;
  return {
    extend,
    overrides,
  };
};

export const unifyTransition = (
  theme: Theme | UncompiledTheme,
  transitionToken: TransitionToken,
) => {
  const {extend: tokenName, overrides} = unifyToken(transitionToken);

  const baseTransitionPreset: TransitionPreset =
    theme.transitionPresets[tokenName];

  if (!baseTransitionPreset) return undefined;

  const compiledThemeResults = recurseUnknown(
    theme as UncompiledTheme,
    overrides,
    errorLogger,
  );

  const compiledResults = Object.keys(compiledThemeResults as object).length
    ? deepMerge({}, baseTransitionPreset, compiledThemeResults)
    : baseTransitionPreset;

  return compiledResults;
};
