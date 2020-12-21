import {BreakpointKeys} from '../theme';
import {ThemeProp} from '../utils/style-types';
import {GridProps} from './types';

export enum OverrideProp {
  Margin = 'Margin',
  ColumnGutter = 'ColumnGutter',
  RowGutter = 'RowGutter',
}

const propThemeMap = {
  [OverrideProp.Margin]: 'containerMargin',
  [OverrideProp.ColumnGutter]: 'columnGutters',
  [OverrideProp.RowGutter]: 'rowGutters',
};

export const getOverridableProp = (
  prop: OverrideProp,
  breakpoint: BreakpointKeys,
  {theme, ...props}: GridProps & ThemeProp,
) => {
  const breakpoints = Object.keys(theme.breakpoints);
  const gutterOverrideToken = breakpoints
    .slice(0, breakpoints.indexOf(breakpoint) + 1)
    .reverse()
    .map(bkp => props[`${bkp}${prop}` as keyof GridProps])
    .filter(Boolean)[0];

  const themeKey = propThemeMap[prop];
  const defaultToken = theme.componentDefaults.grid[themeKey][breakpoint];

  const tokenValue =
    (gutterOverrideToken && theme.spacePresets[gutterOverrideToken]) ||
    theme.spacePresets[defaultToken];

  return parseInt(tokenValue, 10);
};
