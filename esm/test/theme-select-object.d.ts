import { UncompiledTheme, CreateThemeArgs } from '..';
export declare const THEME_KEYS: {
    transparent: string;
    storybookLight: string;
    storybookDark: string;
    newskitLight: string;
    newskitDark: string;
    sun: string;
    virgin: string;
    tnl: string;
    marketWatch: string;
    wsj: string;
};
export declare const themeObject: {
    [x: string]: UncompiledTheme;
};
export declare const getThemeObject: (key: string, scenarioName?: string) => UncompiledTheme;
export declare const createCustomThemeWithBaseThemeSwitch: (themeKey: string, customThemeArgs: CreateThemeArgs, scenarioName?: string) => UncompiledTheme;
//# sourceMappingURL=theme-select-object.d.ts.map