import { CSSObject } from '@emotion/styled';
import { BreakpointKeys } from '../../theme';
import { ThemeProp } from '../style-types';
import { MQ } from './types';
export declare const getTypographyPresetFromTheme: <Props extends ThemeProp>(defaultToken?: MQ<string>, customProp?: Exclude<keyof Props, "theme"> | undefined, options?: {
    withCrop: boolean;
}) => (props: Props) => any;
export declare const getFontsFromTheme: <Props extends ThemeProp>(defaultToken?: MQ<string>, customProp?: Exclude<keyof Props, "theme"> | undefined) => (props: Props) => any;
/**
 * @deprecated This method has been deprecated and will be removed in a future release, use getSpacingCssFromTheme instead
 */
export declare const getSpacingFromTheme: <Props extends ThemeProp>(defaultToken?: MQ<string>, customProp?: Exclude<keyof Props, "theme"> | undefined, cssProp?: string) => (props: Props) => string | CSSObject;
/**
 * @deprecated This method has been deprecated and will be removed in a future release, use getSpacingCssFromTheme instead
 */
export declare const getSpacingInsetFromTheme: <Props extends ThemeProp>(defaultToken?: MQ<string>, customProp?: Exclude<keyof Props, "theme"> | undefined) => (props: Props) => CSSObject;
/**
 * @deprecated This method has been deprecated and will be removed in a future release, use getSpacingCssFromTheme instead
 */
export declare const getMarginPresetFromTheme: <Props extends ThemeProp>(defaultToken?: MQ<string>, customProp?: Exclude<keyof Props, "theme"> | undefined) => (props: Props) => CSSObject;
/**
 * @deprecated This method has been deprecated and will be removed in a future release, use getBorderCssFromTheme instead
 */
export declare const getBorderFromTheme: <Props extends ThemeProp>(defaultToken?: MQ<string> | undefined, customProp?: Exclude<keyof Props, "theme"> | undefined) => (props: Props) => any;
/**
 * @deprecated This method has been deprecated and will be removed in a future release, use getShadowCssFromTheme instead
 */
export declare const getShadowFromTheme: <Props extends ThemeProp>(defaultToken?: MQ<string> | undefined, customProp?: Exclude<keyof Props, "theme"> | undefined) => (props: Props) => any;
/**
 * @deprecated This method has been deprecated and will be removed in a future release, use getColorCssFromTheme instead
 */
export declare const getColorFromTheme: <Props extends ThemeProp>(defaultToken?: MQ<string> | undefined, customProp?: Exclude<keyof Props, "theme"> | undefined) => (props: Props) => any;
/**
 * @deprecated This method has been deprecated and will be removed in a future release, use getSizingCssFromTheme instead
 */
export declare const getSizingFromTheme: <Props extends ThemeProp>(defaultToken?: MQ<string> | undefined, customProp?: Exclude<keyof Props, "theme"> | undefined) => (props: Props) => any;
/**
 * @deprecated This method has been deprecated and will be removed in a future release, use getMotionCssFromTheme instead
 */
export declare const getMotionFromTheme: <Props extends ThemeProp>(defaultToken?: MQ<string> | undefined, customProp?: Exclude<keyof Props, "theme"> | undefined) => (props: Props) => any;
export declare const getFontSizingFromTheme: (fontSizeKey: string, lineHeightKey: string) => ({ theme }: ThemeProp) => {
    fontSize: string;
    lineHeight: number;
};
export declare const getBorderCssFromTheme: <Props extends ThemeProp>(cssProperty: string | import("./base").FromThemeCallback, defaultToken: MQ<string>) => (props: Props) => string | CSSObject;
export declare const getColorCssFromTheme: <Props extends ThemeProp>(cssProperty: string | import("./base").FromThemeCallback, defaultToken: MQ<string>) => (props: Props) => string | CSSObject;
export declare const getMotionCssFromTheme: <Props extends ThemeProp>(cssProperty: string | import("./base").FromThemeCallback, defaultToken: MQ<string>) => (props: Props) => string | CSSObject;
export declare const getOverlayCssFromTheme: <Props extends ThemeProp>(cssProperty: string | import("./base").FromThemeCallback, defaultToken: MQ<string>) => (props: Props) => string | CSSObject;
export declare const getShadowCssFromTheme: <Props extends ThemeProp>(cssProperty: string | import("./base").FromThemeCallback, defaultToken: MQ<string>) => (props: Props) => string | CSSObject;
export declare const getSizingCssFromTheme: <Props extends ThemeProp>(cssProperty: string | import("./base").FromThemeCallback, defaultToken: MQ<string>) => (props: Props) => string | CSSObject;
export declare const getSpacingCssFromTheme: <Props extends ThemeProp>(cssProperty: string | import("./base").FromThemeCallback, defaultToken: MQ<string>) => (props: Props) => string | CSSObject;
export declare const getOutlineCssFromTheme: <Props extends ThemeProp>(cssProperty: string | import("./base").FromThemeCallback, defaultToken: MQ<string>) => (props: Props) => string | CSSObject;
type BreakpointKeysUnsafe = BreakpointKeys | undefined;
export declare const handleResponsiveProp: <Props extends ThemeProp, T>(propObject: { [Key in keyof T]: T[Key]; }, propHandler: (values: { [Key_1 in keyof T]: T[Key_1]; }, props: Props, mq: BreakpointKeysUnsafe) => string | CSSObject) => (props: Props) => string | CSSObject;
export {};
//# sourceMappingURL=getters.d.ts.map