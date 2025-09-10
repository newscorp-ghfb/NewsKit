import { Theme } from '../theme/types';
export declare const getFontSizing: (fontSize: string, lineHeight: number) => {
    fontSize: string;
    lineHeight: number;
};
/**
 * @deprecated This method has been deprecated and will be removed in a future release. Use typography tokens instead.
 */
export declare const getLineHeight: (fontSizeToken: string, lineHeightToken: string) => (theme: Theme) => number;
//# sourceMappingURL=font-sizing.d.ts.map