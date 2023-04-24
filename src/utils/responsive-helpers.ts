import {Breakpoints, BreakpointKeys, Theme} from '../theme';
import {hasOwnProperty} from './has-own-property';
import {isValidCSSSizeUnit} from './style/utils';

interface ThemeProp {
  theme: Theme;
}

/**
 * Helper function that generates media queries based on given parameters
 *
 * E.g.
 * getMediaQuery({'max-width': '1280px', 'min-height': '720px'}, 'and') =>
 *   '@media screen and (max-width: 1280px) and (min-height: 720px)'
 */
export const getMediaQuery = (
  options: Record<string, string>,
  booleanOperator: 'AND' | 'OR' = 'OR',
): string => {
  const mediaFeatureSeparator = booleanOperator === 'OR' ? ', ' : ' and ';

  const mediaFeatures = Object.keys(options).map(
    key => `(${key}: ${options[key]})`,
  );

  return `@media screen and ${mediaFeatures.join(mediaFeatureSeparator)}`;
};

export const getMediaQueries = (breakpoints: Breakpoints): string[] =>
  (Object.keys(breakpoints) as BreakpointKeys[])
    .sort((a, b) => breakpoints[a] - breakpoints[b])
    .map(size => getMediaQuery({'min-width': `${breakpoints[size]}px`}));

export const getMediaQueryFromTheme = (
  minWidth?: BreakpointKeys,
  maxWidth?: BreakpointKeys,
) => ({theme}: ThemeProp) => {
  const queries = ['@media screen'];
  if (minWidth && theme.breakpoints[minWidth]) {
    queries.push(` and (min-width: ${theme.breakpoints[minWidth]}px)`);
  }
  if (maxWidth) {
    queries.push(` and (max-width: ${theme.breakpoints[maxWidth] - 1}px)`);
  }
  return queries.join('');
};

export const isResponsive = (
  prop: unknown,
  breakpoints: Breakpoints,
): prop is Record<keyof Breakpoints, unknown> =>
  !!prop &&
  typeof prop === 'object' &&
  (Object.keys(breakpoints).some(bp => prop && hasOwnProperty(prop, bp)) ||
    Object.keys(prop).some(p => isValidCSSSizeUnit(p)));

export const getContainerQuery = (
  minWidth: string,
  maxWidth?: string,
): string => {
  const queries = [];
  if (minWidth) {
    queries.push(`(min-width: ${minWidth})`);
  }
  if (maxWidth) {
    queries.push(`(max-width: ${maxWidth})`);
  }
  return `@container ${queries.join(' AND ')}`;
};
