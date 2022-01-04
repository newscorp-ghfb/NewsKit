export const breakpointPrimitives = {
  xs: 0, // 0-479
  sm: 480,
  md: 960,
  lg: 1440,
};

export type BreakpointKeys = keyof Breakpoints;
export type Breakpoints = typeof breakpointPrimitives;
