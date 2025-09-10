import { ThemeLoggerFunction, ThemeOverrides, UncompiledTheme } from './types';
export interface CreateThemeArgs {
    name?: string;
    baseTheme?: UncompiledTheme;
    overrides?: ThemeOverrides;
    checkOverrides?: boolean;
    warningLogger?: ThemeLoggerFunction;
}
export declare const createTheme: ({ name, baseTheme, overrides, checkOverrides, warningLogger, }: CreateThemeArgs) => UncompiledTheme;
//# sourceMappingURL=creator.d.ts.map