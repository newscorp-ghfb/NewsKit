import {getFontMetrics} from '../style/helpers/getter-helper';

describe('getFontMetrics with fontMetrics embedded in typographyPreset', () => {
  test('getFontMetrics with empty objects (typographyPreset, themeFonts) returns undefined', () => {
    const typographyPreset = {};
    expect(getFontMetrics(typographyPreset, {})).toBe(undefined);
  });

  test('getFontMetrics with fontMetricsLegacy without themeFonts returns undefined', () => {
    const typographyPreset = fontMetricsLegacy;
    expect(getFontMetrics(typographyPreset, {})).toBe(undefined);
  });

  test("getFontMetrics reading fontMetrics 'fontMetricsEmbeddedWithFontWeight010' defined in the typographyPreset.json", () => {
    const typographyPreset = fontMetricsEmbeddedWithFontWeight010;
    expect(getFontMetrics(typographyPreset, {})).not.toBe(undefined);
  });

  test("getFontMetrics reading fontMetrics 'fontMetricsEmbedded' defined in the typographyPreset.json", () => {
    const typographyPreset = fontMetricsEmbeddedAtRoot;
    expect(getFontMetrics(typographyPreset, {})).not.toBe(undefined);
  });
});

const fontMetricsLegacy = {
  fontFamily: 'Escrow Condensed, Georgia, serif',
  fontWeight: 700,
  fontSize: '56px',
  lineHeight: 1.143,
  letterSpacing: '0%',
  fontStretch: 'normal',
  textTransform: 'none',
  fontStyle: 'normal',
};

const fontMetricsEmbeddedWithFontWeight010 = {
  fontFamily: 'Escrow Condensed, Georgia, serif',
  fontWeight: 700,
  fontMetrics: {
    fontWeight010: {
      capHeight: 689,
      ascent: 960,
      descent: -240,
      lineGap: 0,
      unitsPerEm: 1000,
    },
  },
  fontSize: '56px',
  lineHeight: 1.143,
  letterSpacing: '0%',
  fontStretch: 'normal',
  textTransform: 'none',
  fontStyle: 'normal',
};

const fontMetricsEmbeddedAtRoot = {
  fontFamily: 'Escrow Condensed, Georgia, serif',
  fontWeight: 700,
  fontMetrics: {
    capHeight: 689,
    ascent: 960,
    descent: -240,
    lineGap: 0,
    unitsPerEm: 1000,
  },
  fontSize: '56px',
  lineHeight: 1.143,
  letterSpacing: '0%',
  fontStretch: 'normal',
  textTransform: 'none',
  fontStyle: 'normal',
};

const fontMetricsEmbeddedMalformed = {
  fontFamily: 'Escrow Condensed, Georgia, serif',
  fontWeight: 700,
  fontMetrics: {
    descent: -240,
  },
  fontSize: '56px',
  lineHeight: 1.143,
  letterSpacing: '0%',
  fontStretch: 'normal',
  textTransform: 'none',
  fontStyle: 'normal',
};
