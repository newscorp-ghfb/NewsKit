import React from 'react';
import { Theme, UncompiledTheme } from './types';
export declare const withTheme: <P>(comp: React.ComponentType<P & {
    theme: Theme;
}>) => React.ComponentType<P & {
    theme?: Theme | undefined;
}>;
export declare const useTheme: () => Theme;
export interface ThemeProviderProps {
    theme: UncompiledTheme | Theme | ((outerTheme: Theme) => Theme);
    children: React.ReactNode;
    exposeCssVariables?: boolean;
    useThemeCache?: boolean;
}
export declare const ThemeProvider: React.FC<ThemeProviderProps>;
//# sourceMappingURL=emotion.d.ts.map