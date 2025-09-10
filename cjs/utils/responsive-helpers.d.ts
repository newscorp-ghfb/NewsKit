import { Breakpoints, BreakpointKeys, Theme } from '../theme';
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
export declare const getMediaQuery: (options: Record<string, string>, booleanOperator?: 'AND' | 'OR') => string;
export declare const getMediaQueries: (breakpoints: Breakpoints) => string[];
export declare const getMediaQueryFromTheme: (minWidth?: BreakpointKeys, maxWidth?: BreakpointKeys) => ({ theme }: ThemeProp) => string;
export declare const isResponsive: (prop: unknown, breakpoints: Breakpoints) => prop is Record<"xs" | "sm" | "md" | "lg" | "xl", unknown>;
export {};
//# sourceMappingURL=responsive-helpers.d.ts.map