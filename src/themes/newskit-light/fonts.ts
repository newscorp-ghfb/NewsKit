const fontSizes = {
  fontSize010: '12px', // 0.75rem
  fontSize020: '14px', // 0.875rem
  fontSize030: '16px', // 1rem
  fontSize040: '18px', // 1rem
  fontSize050: '20px', // 1.25rem
  fontSize060: '22px', // 1.5rem
  fontSize070: '24px', // 1.5rem
  fontSize080: '28px', // 1.75rem
  fontSize090: '32px', // 2rem
  fontSize100: '36px', // 2.25rem
  fontSize110: '40px', // 2.5rem
  fontSize120: '44px', // 2.75rem
  fontSize130: '48px', // 3rem
  fontSize140: '56px', // 3.5rem
  fontSize150: '64px', // 4rem
  fontSize160: '80px', // 5rem
};

const lineHeights = {
  fontLineHeight010: 1,
  fontLineHeight020: 1.125,
  fontLineHeight030: 1.25,
  fontLineHeight040: 1.5,
  fontLineHeight050: 1.75,
  fontLineHeight060: 2,
};

const fontWeights = {
  fontWeight010: 300,
  fontWeight020: 400,
  fontWeight030: 500,
  fontWeight040: 600,
};

const fontLetterSpacing = {
  fontLetterSpacing010: -0.5,
  fontLetterSpacing020: -0.25,
  fontLetterSpacing030: 0,
  fontLetterSpacing040: 0.25,
  fontLetterSpacing050: 0.5,
};

export const fontPrimitives = {
  fontFamilyPrimary: '"Helvetica Neue", Helvetica, Arial, sans-serif',
  fontFamilySecondary: '"Helvetica Neue", Helvetica, Arial, sans-serif',
  fontFamilyAdditional: 'system-ui, "Open Sans", sans-serif',
  fontFamilyMonospaced: '"Courier", monospace',

  ...fontSizes,

  ...lineHeights,

  ...fontWeights,

  ...fontLetterSpacing,
};

export type FontSizeKeys = keyof typeof fontSizes;
export type LineHeightKeys = keyof typeof lineHeights;
export type FontWeightKeys = keyof typeof fontWeights;
export type FontLetterSizingKeys = keyof typeof fontLetterSpacing;

export type FontPrimitivesKeys = keyof FontPrimitives;
export type FontPrimitives = typeof fontPrimitives;
