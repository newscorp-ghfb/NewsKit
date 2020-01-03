import {
  getColorFromTheme,
  getAnimationFromTheme,
  getSizingFromTheme,
  getBorderFromTheme,
  getTypePresetFromTheme,
  getFontSizingFromTheme,
  getGridSettingFromTheme,
  getShadowFromTheme,
} from '../style';
import {getFontSizing} from '../font-sizing';

jest.mock('../font-sizing');

describe('Style helpers', () => {
  test('getTypePresetFromTheme()({theme}) returns {}', () => {
    const props = {
      theme: {},
    };
    const font = getTypePresetFromTheme<{font?: string; theme: any}>()(props);
    expect(font).toEqual('');
  });

  test('getTypePresetFromTheme("font100")({theme}) returns "font100_font"', () => {
    const props = {
      theme: {
        typePresets: {
          font100: 'font100_font',
        },
      },
    };
    const font = getTypePresetFromTheme<{font?: string; theme: any}>(
      'font100' as any,
    )(props);
    expect(font).toBe('font100_font');
  });

  test('getTypePresetFromTheme("font100", "font")({theme}) returns "font100_font"', () => {
    const props = {
      theme: {
        typePresets: {
          font100: 'font100_font',
        },
      },
    };
    const font = getTypePresetFromTheme<{font?: string; theme: any}>(
      'font100' as any,
      'font',
    )(props);
    expect(font).toBe('font100_font');
  });

  test('getTypePresetFromTheme("font100", "font")({theme, font: "font200"}) returns "font200_font"', () => {
    const props = {
      theme: {
        typePresets: {
          font100: 'font100_font',
          font200: 'font200_font',
        },
      },
      font: 'font200',
    };
    const font = getTypePresetFromTheme<{font?: string; theme: any}>(
      'font100' as any,
      'font',
    )(props);
    expect(font).toBe('font200_font');
  });

  test('getTypePresetFromTheme(undefined, "font")({theme, font: "font100"}) returns "font100_font"', () => {
    const props = {
      theme: {
        typePresets: {
          font100: 'font100_font',
        },
      },
      font: 'font100',
    };
    const font = getTypePresetFromTheme<{font?: string; theme: any}>(
      undefined,
      'font',
    )(props);
    expect(font).toBe('font100_font');
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

  test('getAnimationFromTheme("timing100")({theme}) returns "timing100_timing"', () => {
    const props = {
      theme: {
        animation: {
          timing100: 'timing100_timing',
        },
      },
    };
    const declaration = getAnimationFromTheme<{animation?: string; theme: any}>(
      'timing100' as any,
    )(props);
    expect(declaration).toEqual('timing100_timing');
  });

  test('getAnimationFromTheme("timing100", "animation")({theme, animation: "timing200"}) returns "timing200_timing"', () => {
    const props = {
      theme: {
        animation: {
          timing100: 'timing100_timing',
          timing200: 'timing200_timing',
        },
      },
      animation: 'timing200',
    };
    const declaration = getAnimationFromTheme<{animation?: string; theme: any}>(
      'timing100' as any,
      'animation',
    )(props);
    expect(declaration).toEqual('timing200_timing');
  });

  test('getFontSizingFromTheme with font size primitive returns expected font sizing object', () => {
    const mockFontSizing = {
      fontSize: '1234px',
      lineHeight: 25.5,
    };
    (getFontSizing as jest.Mock).mockReturnValueOnce(mockFontSizing);

    const props = {
      theme: {
        typePresets: {},
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

  test('getFontSizingFromTheme with typePresets token returns expected font sizing object', () => {
    const mockFontSizing = {
      fontSize: '1234px',
      lineHeight: 25.5,
    };
    (getFontSizing as jest.Mock).mockReturnValueOnce(mockFontSizing);

    const props = {
      theme: {
        typePresets: {
          body010: {
            fontSize: '32px',
          },
        },
        fonts: {
          fontLineHeight030: 1.5,
        },
      },
    };

    const fontSizing = getFontSizingFromTheme('body010', 'fontLineHeight030')(
      props as any,
    );

    expect(getFontSizing).toHaveBeenCalledWith(
      props.theme.typePresets.body010.fontSize,
      props.theme.fonts.fontLineHeight030,
    );
    expect(fontSizing).toEqual(mockFontSizing);
  });

  test('getGridSettingFromTheme with token returns expected grid setting', () => {
    const props = {
      theme: {
        grid: {
          maxWidth: '123px',
        },
      },
    } as any;

    expect(getGridSettingFromTheme('maxWidth')(props)).toEqual('123px');
  });

  test('getShadowFromTheme("shadow100")({theme}) returns "shadow100_shadow"', () => {
    const props = {
      theme: {
        shadow: {
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
        shadow: {
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
});
