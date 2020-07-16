import {createTheme, newskitLightTheme} from '..';
import {styled} from '../../utils/style';
import {getStylePreset} from '../../utils/style-preset';
import {renderWithTheme} from '../../test/test-utils';

describe('themeing functions', () => {
  describe('createTheme', () => {
    test('override default presets with existing preset ', () => {
      const theme = createTheme('newskit-light-demo', {
        baseTheme: newskitLightTheme,
        themeOverrider: () => ({
          defaultPresets: {
            headline: {
              heading: {
                stylePreset: 'buttonSolidPrimary',
              },
            },
          },
        }),
      });

      expect(theme).not.toEqual(newskitLightTheme);
      expect(theme.defaultPresets.headline.heading.stylePreset).toEqual(
        'buttonSolidPrimary',
      );
    });

    test('override default presets with newly created preset ', () => {
      const theme = createTheme('newskit-light-demo', {
        baseTheme: newskitLightTheme,
        themeOverrider: primitives => ({
          stylePresets: {
            buttonTestStyle: {
              base: {
                color: primitives.colors.red100,
                backgroundColor: primitives.colors.red100,
              },
            },
          },
          defaultPresets: {
            headline: {
              heading: {
                stylePreset: 'buttonTestStyle',
              },
            },
          },
        }),
      });

      const TestSurface = styled.div`
        display: inline-block;
        ${getStylePreset('headline.heading', 'heading')}
      `;

      const {asFragment} = renderWithTheme(TestSurface, undefined, theme);
      expect(asFragment()).toMatchSnapshot();
    });

    test('create default Theme', () => {
      const theme = createTheme('newskit-light');
      const copy = Object.assign({}, newskitLightTheme);
      const expected = Object.assign(copy, {name: 'newskit-light'});
      expect(theme).toEqual(expected);
    });

    test('override by passing newskitLightTheme', () => {
      const theme = createTheme('newskit-light', {
        baseTheme: newskitLightTheme,
      });
      expect(theme).toEqual(newskitLightTheme);
    });

    test('override using theme overriding function', () => {
      const theme = createTheme('newskit-light', {
        baseTheme: newskitLightTheme,
        themeOverrider: () => ({
          colors: {
            black: 'nooop',
          },
        }),
      });
      expect(theme).not.toEqual(newskitLightTheme);
      expect((theme.colors as any).black).toEqual('nooop');
    });

    test('override of color is propagated in styledPreset', () => {
      const testColor = '#eeff99';
      const theme = createTheme('newskit-light', {
        colorOverrides: {
          interactive030: testColor,
        },
        baseTheme: newskitLightTheme,
      });
      expect(theme.colors.interactive030).toEqual(testColor);
      expect(
        theme.stylePresets.iconButtonSolidPrimary &&
          theme.stylePresets.iconButtonSolidPrimary.base &&
          theme.stylePresets.iconButtonSolidPrimary.base.backgroundColor,
      ).toEqual(testColor);
    });

    test('override of stylePreset is present in theme', () => {
      const customStylePreset = {
        base: {
          backgroundColor: '#101010',
          borderRadius: '20rem',
        },
        hover: {
          backgroundColor: '#909090',
        },
      };
      const theme = createTheme('newskit-light', {
        themeOverrider: () => ({
          stylePresets: {
            audioPlayerSeekBarIndicator: customStylePreset,
          },
        }),
      });
      expect(theme.stylePresets.audioPlayerSeekBarIndicator).toEqual(
        customStylePreset,
      );
    });
  });
});
