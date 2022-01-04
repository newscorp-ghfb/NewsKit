import {FontWeightProperty as FontWeight} from 'csstype';
import {fontPrimitives, FontPrimitives} from '../newskit-light/fonts';
import {getFontSizing} from '../../utils/font-sizing';

const getFontWithFallback = (font: string, fallback: string) =>
  font === fallback ? font : `${font}, ${fallback}`;

const getBaseTypePresets = (p: FontPrimitives) => {
  const primaryFontFamily = getFontWithFallback(
    p.fontFamilyPrimary,
    fontPrimitives.fontFamilyPrimary,
  );
  const secondaryFontFamily = getFontWithFallback(
    p.fontFamilySecondary,
    fontPrimitives.fontFamilySecondary,
  );
  const monospaceFontFamily = getFontWithFallback(
    p.fontFamilyMonospaced,
    fontPrimitives.fontFamilyMonospaced,
  );

  const label010 = {
    fontFamily: secondaryFontFamily,
    ...getFontSizing(p.fontSize010, p.fontLineHeight050),
    fontWeight: p.fontWeight030,
    letterSpacing: p.fontLetterSpacing050,
  };
  const label020 = {
    fontFamily: secondaryFontFamily,
    ...getFontSizing(p.fontSize020, p.fontLineHeight050),
    fontWeight: p.fontWeight030,
    letterSpacing: p.fontLetterSpacing030,
  };
  const label030 = {
    fontFamily: secondaryFontFamily,
    ...getFontSizing(p.fontSize030, p.fontLineHeight050),
    fontWeight: p.fontWeight030,
    letterSpacing: p.fontLetterSpacing030,
  };
  const label040 = {
    fontFamily: secondaryFontFamily,
    ...getFontSizing(p.fontSize040, p.fontLineHeight050),
    fontWeight: p.fontWeight030,
    letterSpacing: p.fontLetterSpacing030,
  };

  return {
    // Display

    display010: {
      fontFamily: primaryFontFamily,
      ...getFontSizing(p.fontSize130, p.fontLineHeight020),
      fontWeight: p.fontWeight040,
      letterSpacing: p.fontLetterSpacing030,
    },
    display020: {
      fontFamily: primaryFontFamily,
      ...getFontSizing(p.fontSize140, p.fontLineHeight020),
      fontWeight: p.fontWeight040,
      letterSpacing: p.fontLetterSpacing030,
    },
    display030: {
      fontFamily: primaryFontFamily,
      ...getFontSizing(p.fontSize150, p.fontLineHeight020),
      fontWeight: p.fontWeight040,
      letterSpacing: p.fontLetterSpacing030,
    },
    display040: {
      fontFamily: primaryFontFamily,
      ...getFontSizing(p.fontSize160, p.fontLineHeight020),
      fontWeight: p.fontWeight040,
      letterSpacing: p.fontLetterSpacing030,
    },

    // Heading

    heading010: {
      fontFamily: primaryFontFamily,
      ...getFontSizing(p.fontSize040, p.fontLineHeight020),
      fontWeight: p.fontWeight040,
      letterSpacing: p.fontLetterSpacing030,
    },
    heading020: {
      fontFamily: primaryFontFamily,
      ...getFontSizing(p.fontSize060, p.fontLineHeight020),
      fontWeight: p.fontWeight040,
      letterSpacing: p.fontLetterSpacing030,
    },
    heading030: {
      fontFamily: primaryFontFamily,
      ...getFontSizing(p.fontSize070, p.fontLineHeight020),
      fontWeight: p.fontWeight040,
      letterSpacing: p.fontLetterSpacing030,
    },
    heading040: {
      fontFamily: primaryFontFamily,
      ...getFontSizing(p.fontSize080, p.fontLineHeight020),
      fontWeight: p.fontWeight040,
      letterSpacing: p.fontLetterSpacing030,
    },
    heading050: {
      fontFamily: primaryFontFamily,
      ...getFontSizing(p.fontSize090, p.fontLineHeight020),
      fontWeight: p.fontWeight040,
      letterSpacing: p.fontLetterSpacing030,
    },
    heading060: {
      fontFamily: primaryFontFamily,
      ...getFontSizing(p.fontSize100, p.fontLineHeight020),
      fontWeight: p.fontWeight040,
      letterSpacing: p.fontLetterSpacing030,
    },
    heading070: {
      fontFamily: primaryFontFamily,
      ...getFontSizing(p.fontSize110, p.fontLineHeight020),
      fontWeight: p.fontWeight040,
      letterSpacing: p.fontLetterSpacing030,
    },
    heading080: {
      fontFamily: primaryFontFamily,
      ...getFontSizing(p.fontSize120, p.fontLineHeight020),
      fontWeight: p.fontWeight040,
      letterSpacing: p.fontLetterSpacing030,
    },
    heading090: {
      fontFamily: primaryFontFamily,
      ...getFontSizing(p.fontSize130, p.fontLineHeight020),
      fontWeight: p.fontWeight040,
      letterSpacing: p.fontLetterSpacing030,
    },

    // Subheading

    subhead010: {
      fontFamily: secondaryFontFamily,
      ...getFontSizing(p.fontSize030, p.fontLineHeight020),
      fontWeight: p.fontWeight010,
      letterSpacing: p.fontLetterSpacing030,
    },
    subhead020: {
      fontFamily: secondaryFontFamily,
      ...getFontSizing(p.fontSize040, p.fontLineHeight020),
      fontWeight: p.fontWeight010,
      letterSpacing: p.fontLetterSpacing030,
    },
    subhead030: {
      fontFamily: secondaryFontFamily,
      ...getFontSizing(p.fontSize050, p.fontLineHeight020),
      fontWeight: p.fontWeight010,
      letterSpacing: p.fontLetterSpacing030,
    },
    subhead040: {
      fontFamily: secondaryFontFamily,
      ...getFontSizing(p.fontSize070, p.fontLineHeight020),
      fontWeight: p.fontWeight010,
      letterSpacing: p.fontLetterSpacing030,
    },
    subhead050: {
      fontFamily: secondaryFontFamily,
      ...getFontSizing(p.fontSize080, p.fontLineHeight020),
      fontWeight: p.fontWeight010,
      letterSpacing: p.fontLetterSpacing030,
    },

    // Body

    body010: {
      fontFamily: primaryFontFamily,
      ...getFontSizing(p.fontSize020, p.fontLineHeight040),
      fontWeight: p.fontWeight020,
      letterSpacing: p.fontLetterSpacing030,
    },
    body020: {
      fontFamily: primaryFontFamily,
      ...getFontSizing(p.fontSize030, p.fontLineHeight040),
      fontWeight: p.fontWeight020,
      letterSpacing: p.fontLetterSpacing030,
    },
    body030: {
      fontFamily: primaryFontFamily,
      ...getFontSizing(p.fontSize040, p.fontLineHeight040),
      fontWeight: p.fontWeight020,
      letterSpacing: p.fontLetterSpacing030,
    },

    // Quote

    quote010: {
      fontFamily: primaryFontFamily,
      ...getFontSizing(p.fontSize070, p.fontLineHeight020),
      fontWeight: p.fontWeight020,
      letterSpacing: p.fontLetterSpacing030,
      fontStyles: 'italic',
    },
    quote020: {
      fontFamily: primaryFontFamily,
      ...getFontSizing(p.fontSize090, p.fontLineHeight020),
      fontWeight: p.fontWeight020,
      letterSpacing: p.fontLetterSpacing030,
      fontStyles: 'italic',
    },

    // Label

    label010,
    label020,
    label030,
    label040,

    // Caption

    caption010: {
      fontFamily: primaryFontFamily,
      ...getFontSizing(p.fontSize020, p.fontLineHeight040),
      fontWeight: p.fontWeight020,
      letterSpacing: p.fontLetterSpacing030,
    },

    // Meta

    meta010: {
      fontFamily: secondaryFontFamily,
      ...getFontSizing(p.fontSize010, p.fontLineHeight040),
      fontWeight: p.fontWeight020,
      letterSpacing: p.fontLetterSpacing050,
    },
    meta020: {
      fontFamily: secondaryFontFamily,
      ...getFontSizing(p.fontSize020, p.fontLineHeight040),
      fontWeight: p.fontWeight020,
      letterSpacing: p.fontLetterSpacing030,
    },

    // Code

    code010: {
      fontFamily: monospaceFontFamily,
      ...getFontSizing(p.fontSize020, p.fontLineHeight040),
      fontWeight: p.fontWeight020,
      letterSpacing: p.fontLetterSpacing030,
    },
    code020: {
      fontFamily: monospaceFontFamily,
      ...getFontSizing(p.fontSize030, p.fontLineHeight040),
      fontWeight: p.fontWeight020,
      letterSpacing: p.fontLetterSpacing030,
    },

    // Button

    button010: label010,
    button020: label020,
    button030: label030,

    font500: {
      fontFamily: primaryFontFamily,
      ...getFontSizing(p.fontSize050, p.fontLineHeight040),
      fontWeight: p.fontWeight020,
      letterSpacing: p.fontLetterSpacing030,
    },
  };
};

export const createTypePresets = (p: FontPrimitives) => {
  const baseTypePresets = getBaseTypePresets(p);

  return {
    ...baseTypePresets,

    standfirst100: baseTypePresets.subhead030,
    standfirst200: baseTypePresets.subhead030,

    headline100: baseTypePresets.heading050,
    headline200: baseTypePresets.heading050,

    dropCap: {
      fontSize: '5.34em',
      lineHeight: 0.85,
    },
  };
};

export type FontKeys = keyof Font;
export interface Font {
  fontFamily: string;
  fontWeight: FontWeight;
  fontSize: string;
  lineHeight: number;
  letterSpacing: string | number;
}

export type TypePresetKeys = keyof TypePresets;
export type TypePresets = ReturnType<typeof createTypePresets>;
