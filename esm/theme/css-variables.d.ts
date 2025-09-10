/// <reference types="react" />
import { Theme, ThemeBase } from './types';
type FoundationKey = keyof Omit<ThemeBase, 'breakpoints' | 'stylePresets' | 'typographyPresets' | 'transitionPresets' | 'componentDefaults' | 'icons'>;
export type ThemeDiff = Partial<Pick<ThemeBase, FoundationKey>>;
export declare const themeDiff: (parentTheme: Partial<Theme>, childTheme: Partial<Theme>) => ThemeDiff;
export declare const generateCSSVars: (theme: Partial<Theme>) => import("@emotion/react").SerializedStyles;
export declare const CssVariablesContainer: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme | undefined;
    as?: import("react").ElementType<any, keyof import("react").JSX.IntrinsicElements> | undefined;
} & {
    diff: ThemeDiff;
}, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;
export {};
//# sourceMappingURL=css-variables.d.ts.map