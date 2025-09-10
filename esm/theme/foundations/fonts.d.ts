export declare const fonts: {
    fontSize010: string;
    fontSize020: string;
    fontSize030: string;
    fontSize040: string;
    fontSize050: string;
    fontSize060: string;
    fontSize070: string;
    fontSize080: string;
    fontSize090: string;
    fontSize100: string;
    fontSize110: string;
    fontSize120: string;
    fontSize130: string;
    fontSize140: string;
    fontSize150: string;
    fontSize160: string;
    fontLineHeight010: number;
    fontLineHeight020: number;
    fontLineHeight030: number;
    fontLineHeight040: number;
    fontLineHeight050: number;
    fontLineHeight060: number;
    fontWeight010: number;
    fontWeight020: number;
    fontWeight030: number;
    fontWeight040: number;
    fontLetterSpacing010: string;
    fontLetterSpacing020: string;
    fontLetterSpacing030: string;
    fontLetterSpacing040: string;
    fontLetterSpacing050: string;
    fontFamily010: FontConfig;
    fontFamily020: FontConfig;
    fontFamily030: FontConfig;
};
export type Fonts = typeof fonts;
export type FontThemeValue = typeof fonts[keyof typeof fonts];
export interface FontConfig {
    fontFamily: string;
    fontMetrics?: {
        [weight: string]: {
            capHeight: number;
            ascent: number;
            descent: number;
            lineGap: number;
            unitsPerEm: number;
        };
    };
}
//# sourceMappingURL=fonts.d.ts.map