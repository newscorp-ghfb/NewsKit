import {BreakpointKeys} from '../theme';
import {ThemeProp} from '../utils/style-types';
import {CellProps, GridProps} from './types';

export enum OverrideProp {
  Margin = 'Margin',
  ColumnGutter = 'ColumnGutter',
  RowGutter = 'RowGutter',
  Offset = 'Offset',
  Span = '',
}

const propThemeMap: Record<OverrideProp, string> = {
  [OverrideProp.Margin]: 'containerMargin',
  [OverrideProp.ColumnGutter]: 'columnGutters',
  [OverrideProp.RowGutter]: 'rowGutters',
  // The following are not supported in component defaults
  [OverrideProp.Offset]: '',
  [OverrideProp.Span]: '',
};

// The keys, i.e. the breakpoints we support, cannot be changed.
export const breakpointKeys = [
  'xs',
  'sm',
  'md',
  'lg',
  'xl',
] as BreakpointKeys[];
export const reverseBreakpointKeys = [...breakpointKeys].reverse();

export const getInheritedValue = (
  prop: OverrideProp,
  breakpoint: BreakpointKeys,
  {theme, ...props}: (GridProps | CellProps) & ThemeProp,
): string | undefined =>
  breakpointKeys
    .slice(0, breakpointKeys.indexOf(breakpoint) + 1)
    .reverse()
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    .map(bkp => (props as any)[`${bkp}${prop}`] as string)
    .find(Boolean);

export const getOverridableProp = (
  prop: OverrideProp,
  breakpoint: BreakpointKeys,
  props: ThemeProp,
) => {
  const inheritedValue = getInheritedValue(prop, breakpoint, props);
  const themeKey = propThemeMap[prop];
  const {theme} = props;

  const defaultToken = theme.componentDefaults.grid[themeKey][breakpoint];

  const tokenValue =
    (inheritedValue && theme.spacePresets[inheritedValue]) ||
    theme.spacePresets[defaultToken];

  return parseInt(tokenValue, 10);
};
