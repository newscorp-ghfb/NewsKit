import { Theme } from '../../theme';
import { ThemeProp } from '../style-types';
import { MQ } from './types';
import { CSSObject } from './emotion';
export type FromThemeCallback = (cssValue: string) => CSSObject | string;
export declare const getDefaultedValue: <FromThemeUtil extends (...args: any) => any>(getPresetFromThemeUtil: FromThemeUtil, presetType: string, cssProp?: string | FromThemeCallback) => <Props extends ThemeProp>(defaultPath: string | undefined, overridePath?: string | false, option?: Parameters<FromThemeUtil>[2] | undefined) => (props: Props) => any;
export declare const getValueFromTheme: <ThemeToken extends string>(themeKey: keyof Theme) => <Props extends ThemeProp>(defaultToken?: MQ<ThemeToken> | undefined, customProp?: Exclude<keyof Props, "theme"> | undefined) => (props: Props) => any;
export declare const getResponsiveValueFromTheme: <ThemeToken extends string>(themeKey: keyof Theme) => <Props extends ThemeProp>(defaultToken?: MQ<ThemeToken> | undefined, customProp?: Exclude<keyof Props, "theme"> | undefined) => ({ theme, ...props }: Props) => "" | Record<ThemeToken, unknown>[ThemeToken];
export declare const getXFromTheme: (themeKey: keyof Theme) => <Props extends ThemeProp>(cssProperty: string | FromThemeCallback, defaultToken: MQ<string>) => (props: Props) => string | CSSObject;
export declare const getResponsiveX: (themeKey: keyof Theme) => (cssProperty: string | FromThemeCallback, defaultPath: string, overridePath: string, defaultsObjectKey: string) => <Props extends ThemeProp>(props: Props) => string | CSSObject;
//# sourceMappingURL=base.d.ts.map