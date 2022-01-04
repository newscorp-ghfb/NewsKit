import {BreakpointKeys} from './breakpoints';

export const gridPrimitives = {
  maxWidth: 1920,
  columns: 12,
  containerMargin: {
    xs: 16,
    sm: 16,
    md: 24,
    lg: 24,
  } as Record<BreakpointKeys, number>,
  columnGutters: {
    xs: 16,
    sm: 16,
    md: 24,
    lg: 24,
  } as Record<BreakpointKeys, number>,
  rowGutters: {
    xs: 16,
    sm: 16,
    md: 24,
    lg: 24,
  } as Record<BreakpointKeys, number>,
};

export type GridKeys = keyof Grid;
export type Grid = typeof gridPrimitives;
