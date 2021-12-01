export const fonts = {
  fontSize010: '12px', // 0.75rem
  fontSize020: '14px', // 0.875rem
  fontSize030: '16px', // 1rem (base)
  fontSize040: '18px', // 1.125rem
  fontSize050: '20px', // 1.25rem
  fontSize060: '22px', // 1.375rem
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

  fontLineHeight010: 1,
  fontLineHeight020: 1.125,
  fontLineHeight030: 1.25,
  fontLineHeight040: 1.5,
  fontLineHeight050: 1.75,
  fontLineHeight060: 2,

  fontWeight010: 400,
  fontWeight020: 500,
  fontWeight030: 600,
  fontWeight040: 700,

  fontLetterSpacing010: '-0.5px',
  fontLetterSpacing020: '-0.25px',
  fontLetterSpacing030: '0',
  fontLetterSpacing040: '0.25px',
  fontLetterSpacing050: '0.5px',

  fontFamily010: {
    fontFamily: '"DM Sans", sans-serif',
    cropConfig: {
      top: 9,
      bottom: 9,
    },
    cropAdjustments: {},
  } as FontConfig,
  fontFamily020: {
    fontFamily: '"Bitter", serif',
    cropConfig: {
      top: 8,
      bottom: 10,
    },
    cropAdjustments: {},
  } as FontConfig,
  fontFamily030: {
    fontFamily: '"Poppins", sans-serif',
    cropConfig: {
      top: 9,
      bottom: 9,
    },
    cropAdjustments: {},
  } as FontConfig,
};

export type Fonts = typeof fonts;

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
