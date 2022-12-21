import {
  getColorFromTheme,
  getMotionFromTheme,
  getSizingFromTheme,
  getBorderFromTheme,
  getTypographyPresetFromTheme,
  getFontSizingFromTheme,
  getShadowFromTheme,
  getFontsFromTheme,
} from '../style';
import {getFontSizing} from '../font-sizing';
import {isValidUnit, unifyTransition} from '../style/utils';
import {compileTheme, createTheme} from '../../theme';

jest.mock('../font-sizing');

describe('Style helpers', () => {
  test('getTypographyPresetFromTheme()({theme}) returns {}', () => {
    const props = {
      theme: {},
    };
    const font = getTypographyPresetFromTheme<{font?: string; theme: any}>()(
      props,
    );
    expect(font).toEqual('');
  });

  test('getTypographyPresetFromTheme("font100")({theme}) returns "font100_font"', () => {
    const props = {
      theme: {
        typographyPresets: {
          font100: 'font100_font',
        },
      },
    };
    const font = getTypographyPresetFromTheme<{font?: string; theme: any}>(
      'font100' as any,
    )(props);
    expect(font).toBe('font100_font');
  });

  test('getTypographyPresetFromTheme("font100", "font")({theme}) returns "font100_font"', () => {
    const props = {
      theme: {
        typographyPresets: {
          font100: 'font100_font',
        },
      },
    };
    const font = getTypographyPresetFromTheme<{font?: string; theme: any}>(
      'font100' as any,
      'font',
    )(props);
    expect(font).toBe('font100_font');
  });

  test('getTypographyPresetFromTheme("font100", "font")({theme, font: "font200"}) returns "font200_font"', () => {
    const props = {
      theme: {
        typographyPresets: {
          font100: 'font100_font',
          font200: 'font200_font',
        },
      },
      font: 'font200',
    };
    const font = getTypographyPresetFromTheme<{font?: string; theme: any}>(
      'font100' as any,
      'font',
    )(props);
    expect(font).toBe('font200_font');
  });

  test('getTypographyPresetFromTheme(undefined, "font")({theme, font: "font100"}) returns "font100_font"', () => {
    const props = {
      theme: {
        typographyPresets: {
          font100: 'font100_font',
        },
      },
      font: 'font100',
    };
    const font = getTypographyPresetFromTheme<{font?: string; theme: any}>(
      undefined,
      'font',
    )(props);
    expect(font).toBe('font100_font');
  });

  test('getTypographyPresetFromTheme with MQ values', () => {
    const props = {
      theme: {
        typographyPresets: {
          font100: 'font100_font',
          font200: 'font200_font',
        },
        breakpoints: {
          xs: 0,
          sm: 480,
        },
      },
    };
    const font = getTypographyPresetFromTheme<{font?: string; theme: any}>({
      xs: 'font100',
      sm: 'font200',
    })(props);
    expect(font).toEqual({
      '@media screen and (max-width: 479px)': 'font100_font',
      '@media screen and (min-width: 480px)': 'font200_font',
    });
  });

  test('getSizingFromTheme()({theme}) returns ""', () => {
    const props = {
      theme: {},
    };
    const declaration = getSizingFromTheme<{sizing?: string; theme: any}>()(
      props,
    );
    expect(declaration).toEqual('');
  });

  test('getSizingFromTheme("scale100")({theme}) returns "scale100_sizing"', () => {
    const props = {
      theme: {
        sizing: {
          scale100: 'scale100_sizing',
        },
      },
    };
    const declaration = getSizingFromTheme<{sizing?: string; theme: any}>(
      'scale100' as any,
    )(props);
    expect(declaration).toEqual('scale100_sizing');
  });

  test('getSizingFromTheme("scale100", "sizing")({theme}) returns "scale100_sizing"', () => {
    const props = {
      theme: {
        sizing: {
          scale100: 'scale100_sizing',
        },
      },
    };
    const declaration = getSizingFromTheme<{sizing?: string; theme: any}>(
      'scale100' as any,
      'sizing',
    )(props);
    expect(declaration).toEqual('scale100_sizing');
  });

  test('getSizingFromTheme("scale100", "sizing")({theme, sizing: "scale200"}) returns "scale200_sizing"', () => {
    const props = {
      theme: {
        sizing: {
          scale100: 'scale100_sizing',
          scale200: 'scale200_sizing',
        },
      },
      sizing: 'scale200',
    };
    const declaration = getSizingFromTheme<{sizing?: string; theme: any}>(
      'scale100' as any,
      'sizing',
    )(props);
    expect(declaration).toEqual('scale200_sizing');
  });

  test('getSizingFromTheme("scale100", "sizing", true)({theme, sizing: "100%"}) returns "100%"', () => {
    const props = {
      theme: {
        sizing: {
          scale100: 'scale100_sizing',
          scale200: 'scale200_sizing',
        },
      },
      sizing: '100%',
    };
    const declaration = getSizingFromTheme<{sizing?: string; theme: any}>(
      'scale100' as any,
      'sizing',
    )(props);
    expect(declaration).toEqual('100%');
  });

  test('getSizingFromTheme(undefined, "sizing")({theme, sizing: "scale100"}) returns "scale100_sizing"', () => {
    const props = {
      theme: {
        sizing: {
          scale100: 'scale100_sizing',
        },
      },
      sizing: 'scale100',
    };
    const declaration = getSizingFromTheme<{sizing?: string; theme: any}>(
      undefined,
      'sizing',
    )(props);
    expect(declaration).toEqual('scale100_sizing');
  });

  test('getColorFromTheme("primary")({theme}) returns "primary_color"', () => {
    const props = {
      theme: {
        colors: {
          primary: 'primary_color',
        },
      },
    };
    const declaration = getColorFromTheme<{color?: string; theme: any}>(
      'primary' as any,
    )(props);
    expect(declaration).toEqual('primary_color');
  });

  test('getColorFromTheme("primary", "color")({theme, color: "secondary"}) returns "secondary_color"', () => {
    const props = {
      theme: {
        colors: {
          primary: 'primary_color',
          secondary: 'secondary_color',
        },
      },
      color: 'secondary',
    };
    const declaration = getColorFromTheme<{color?: string; theme: any}>(
      'primary' as any,
      'color',
    )(props);
    expect(declaration).toEqual('secondary_color');
  });

  test('getColorFromTheme("cssValue")(theme) returns "cssValue"', () => {
    ['#000', 'rgba(0,0,0,0)', 'red'].forEach(color => {
      const declaration = getColorFromTheme<{color?: string; theme: any}>(
        color,
      )({
        theme: {colors: {}},
      });
      expect(declaration).toEqual(color);
    });
  });

  test('getBorderFromTheme("radius100")({theme}) returns "radius100_border"', () => {
    const props = {
      theme: {
        borders: {
          radius100: 'radius100_border',
        },
      },
    };
    const declaration = getBorderFromTheme<{borders?: string; theme: any}>(
      'radius100' as any,
    )(props);
    expect(declaration).toEqual('radius100_border');
  });

  test('getBorderFromTheme("radius100", "borders")({theme, borders: "radius200"}) returns "radius200_border"', () => {
    const props = {
      theme: {
        borders: {
          radius100: 'radius100_border',
          radius200: 'radius200_border',
        },
      },
      borders: 'radius200',
    };
    const declaration = getBorderFromTheme<{borders?: string; theme: any}>(
      'radius100' as any,
      'borders',
    )(props);
    expect(declaration).toEqual('radius200_border');
  });

  test('getMotionFromTheme("motionDuration020")({theme}) returns "motionDuration020_timing"', () => {
    const props = {
      theme: {
        motions: {
          motionDuration020: 'motionDuration020_timing',
        },
      },
    };
    const declaration = getMotionFromTheme<{motion?: string; theme: any}>(
      'motionDuration020' as any,
    )(props);
    expect(declaration).toEqual('motionDuration020_timing');
  });

  test('getMotionFromTheme("motionDuration020", "motion")({theme, motion: "motionDuration040"}) returns "motionDuration040_timing"', () => {
    const theme = {
      motions: {
        motionDuration020: 'motionDuration020_timing',
        motionDuration040: 'motionDuration040_timing',
      },
    };

    const props = {
      theme,
      motion: 'motionDuration040',
    };
    const declaration = getMotionFromTheme<{motion?: string; theme: any}>(
      'motionDuration020' as any,
      'motion',
    )(props);
    expect(declaration).toEqual('motionDuration040_timing');
  });

  test('getFontSizingFromTheme with font size foundations returns expected font sizing object', () => {
    const mockFontSizing = {
      fontSize: '1234px',
      lineHeight: 25.5,
    };
    (getFontSizing as jest.Mock).mockReturnValueOnce(mockFontSizing);

    const props = {
      theme: {
        typographyPresets: {},
        fonts: {
          fontSize030: '16px',
          fontLineHeight030: 1.5,
        },
      },
    };

    const fontSizing = getFontSizingFromTheme(
      'fontSize030',
      'fontLineHeight030',
    )(props as any);

    expect(getFontSizing).toHaveBeenCalledWith(
      props.theme.fonts.fontSize030,
      props.theme.fonts.fontLineHeight030,
    );
    expect(fontSizing).toEqual(mockFontSizing);
  });

  test('getFontSizingFromTheme with typographyPresets token returns expected font sizing object', () => {
    const mockFontSizing = {
      fontSize: '1234px',
      lineHeight: 25.5,
    };
    (getFontSizing as jest.Mock).mockReturnValueOnce(mockFontSizing);

    const props = {
      theme: {
        typographyPresets: {
          editorialParagraph010: {
            fontSize: '32px',
          },
        },
        fonts: {
          fontLineHeight030: 1.5,
        },
      },
    };

    const fontSizing = getFontSizingFromTheme(
      'editorialParagraph010',
      'fontLineHeight030',
    )(props as any);

    expect(getFontSizing).toHaveBeenCalledWith(
      props.theme.typographyPresets.editorialParagraph010.fontSize,
      props.theme.fonts.fontLineHeight030,
    );
    expect(fontSizing).toEqual(mockFontSizing);
  });

  test('getShadowFromTheme("shadow100")({theme}) returns "shadow100_shadow"', () => {
    const props = {
      theme: {
        shadows: {
          shadow100: 'shadow100_shadow',
        },
      },
    };
    const declaration = getShadowFromTheme<{shadow?: string; theme: any}>(
      'shadow100' as any,
    )(props);
    expect(declaration).toEqual('shadow100_shadow');
  });

  test('getShadowFromTheme("shadow100", "shadow")({theme, shadow: "shadow200"}) returns "shadow200_shadow"', () => {
    const props = {
      theme: {
        shadows: {
          shadow100: 'shadow100_shadow',
          shadow200: 'shadow200_shadow',
        },
      },
      shadow: 'shadow200',
    };
    const declaration = getShadowFromTheme<{shadow?: string; theme: any}>(
      'timing100' as any,
      'shadow',
    )(props);
    expect(declaration).toEqual('shadow200_shadow');
  });

  test('getFontsFromTheme("fontSize100")({theme}) returns "fontSize100_fonts"', () => {
    const props = {
      theme: {
        fonts: {
          fontSize100: 'fontSize100_fonts',
        },
      },
    };
    const declaration = getFontsFromTheme<{fonts?: string; theme: any}>(
      'fontSize100' as any,
    )(props);
    expect(declaration).toEqual('fontSize100_fonts');
  });

  test('getFontsFromTheme(undefined, "font")({theme, font: "fontSize100"}) returns "fontSize100_fonts"', () => {
    const props = {
      theme: {
        fonts: {
          fontSize100: 'fontSize100_fonts',
        },
      },
      font: 'fontSize100',
    };
    const declaration = getFontsFromTheme<{fonts?: string; theme: any}>(
      undefined,
      'font' as any,
    )(props);
    expect(declaration).toEqual('fontSize100_fonts');
  });

  test('getFontsFromTheme()({theme}) returns "fontSize100_fonts"', () => {
    const props = {
      theme: {
        fonts: {
          fontSize200: 'fontSize100_fonts',
        },
      },
    };
    const declaration = getFontsFromTheme<{fonts?: string; theme: any}>()(
      props,
    );
    expect(declaration).toEqual('');
  });

  test('getFontsFromTheme("fontPrimary")({theme}) returns "system-ui, "Open Sans", sans-serif"', () => {
    const props = {
      theme: {
        fonts: {
          fontPrimary: {
            fontFamily: 'system-ui, "Open Sans", sans-serif',
            crop: {
              top: 0,
              bottom: 0,
            },
          },
        },
      },
    };
    const declaration = getFontsFromTheme<{fonts?: string; theme: any}>(
      'fontPrimary' as any,
    )(props);
    expect(declaration).toEqual('system-ui, "Open Sans", sans-serif');
  });

  test('isValidUnit returns correctly with falsy inputs', () => {
    expect(isValidUnit('key', NaN)).toBeFalsy();
    expect(isValidUnit('key', [])).toBeFalsy();
    expect(isValidUnit('key', undefined)).toBeFalsy();
    expect(isValidUnit('key', '10px')).toBeTruthy();
  });

  test('unifyTransition', () => {
    const theme = compileTheme(
      createTheme({
        name: 'test-transition-preset',
        overrides: {
          transitionPresets: {
            testPreset: {
              base: {
                opacity: 1,
              },
            },
          },
        },
      }),
    );
    expect(unifyTransition(theme, 'testPreset')).toEqual({base: {opacity: 1}});
    expect(
      unifyTransition(theme, {extend: 'testPreset', base: {opacity: 0.5}}),
    ).toEqual({base: {opacity: 0.5}});
    expect(
      unifyTransition(theme, {
        extend: 'testPreset',
        enterActive: {opacity: 0},
      }),
    ).toEqual({base: {opacity: 1}, enterActive: {opacity: 0}});
  });
  test('unifyTransition with uncompiled theme token', () => {
    const theme = compileTheme(
      createTheme({
        name: 'test-transition-preset',
        overrides: {
          transitionPresets: {
            testPreset: {
              base: {
                transitionDuration: '{{motions.motionDuration030}}',
              },
            },
          },
        },
      }),
    );
    expect(unifyTransition(theme, 'testPreset')).toEqual({
      base: {transitionDuration: '300ms'},
    });
  });
});
