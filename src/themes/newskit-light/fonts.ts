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
  fontWeight040: 700,
};

const fontLetterSpacing = {
  fontLetterSpacing010: -0.5,
  fontLetterSpacing020: -0.25,
  fontLetterSpacing030: 0,
  fontLetterSpacing040: 0.25,
  fontLetterSpacing050: 0.5,
};

const fontFamily1: FontConfig = {
  fontFamily: '"Noto Sans", sans-serif',
  cropConfig: {
    top: 8,
    bottom: 10,
  },
  cropAdjustments: {
    [fontSizes.fontSize010]: {
      top: 1,
      bottom: -0.5,
    },
    [fontSizes.fontSize020]: {
      top: 1.2,
    },
    [fontSizes.fontSize070]: {
      top: 1,
      bottom: 1,
    },
  },
};

const fontFamily2: FontConfig = {
  fontFamily: '"Noto Sans", sans-serif',
  cropConfig: {
    top: 8,
    bottom: 10,
  },
  cropAdjustments: {
    [fontSizes.fontSize010]: {
      top: 0.5,
      bottom: 0.5,
    },
    [fontSizes.fontSize020]: {
      top: 1.2,
    },
    [fontSizes.fontSize070]: {
      top: 1,
      bottom: 1,
    },
  },
};

const fontFamily3: FontConfig = {
  fontFamily: 'system-ui, "Open Sans", sans-serif',
};

const fontFamily4: FontConfig = {
  fontFamily: '"Courier", monospace',
  cropConfig: {
    top: 3,
    bottom: 3,
  },
};

export const fontPrimitives = {
  fontFamily1,
  fontFamily2,
  fontFamily3,
  fontFamily4,

  ...fontSizes,

  ...lineHeights,

  ...fontWeights,

  ...fontLetterSpacing,
};

export interface FontConfig {
  fontFamily: string;
  cropConfig?: {
    top: number;
    bottom: number;
    fontSize?: number;
    lineHeight?: number;
  };
  cropAdjustments?: {
    [fontSize: string]: {
      top?: number;
      bottom?: number;
    };
  };
}

export type FontSizeKeys = keyof typeof fontSizes;
export type LineHeightKeys = keyof typeof lineHeights;
export type FontWeightKeys = keyof typeof fontWeights;
export type FontLetterSizingKeys = keyof typeof fontLetterSpacing;

export type FontPrimitivesKeys = keyof FontPrimitives;
export type FontPrimitives = typeof fontPrimitives;
