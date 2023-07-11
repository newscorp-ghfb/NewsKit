import {getFontMetrics} from '../style/helpers/getter-helper';

// To run this test suite only, use the following command line...
// yarn jest src/utils/__tests__/get-font-metrics.test.ts

describe('getFontMetrics with fontMetrics embedded in typographyPreset', () => {
  test('getFontMetrics with empty objects (typographyPreset, themeFonts) returns undefined', () => {
    const typographyPreset = {};
    expect(getFontMetrics(typographyPreset, {})).toBeUndefined();
  });

  test('getFontMetrics with fontMetricsLegacy without themeFonts returns undefined', () => {
    const typographyPreset = fontMetricsLegacy;
    expect(getFontMetrics(typographyPreset, {})).toBeUndefined();
  });

  test("getFontMetrics reading fontMetrics 'fontMetricsEmbeddedWithFontWeight010' defined in the typographyPreset.json", () => {
    const typographyPreset = fontMetricsEmbeddedWithFontWeight010;
    expect(getFontMetrics(typographyPreset, {})).not.toBeUndefined();
  });

  test("getFontMetrics reading fontMetrics 'fontMetricsEmbedded' defined in the typographyPreset.json", () => {
    const typographyPreset = fontMetricsEmbeddedAtRoot;
    expect(getFontMetrics(typographyPreset, {})).not.toBeUndefined();
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
