import { Theme, TransitionToken, UncompiledTheme } from '../../theme/types';
export declare const endsWith: (value: string, checks: string[]) => boolean;
export declare const isNonThemeValueAllowed: (themeKey: string) => boolean;
export declare const CSSUnits: string[];
export declare const CSSColorNames: string[];
export declare const isCSSFunc: (value: string) => boolean;
export declare const isHexColor: (value: string) => boolean;
export declare const isValidColorName: (value: string) => boolean;
export declare const isValidUnit: (themeKey: string, value: any) => any;
export declare const isArrayLikeObject: (value: string | object) => boolean;
export declare const unifyTransition: (theme: Theme | UncompiledTheme, transitionToken: TransitionToken) => any;
//# sourceMappingURL=utils.d.ts.map