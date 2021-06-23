import {createTheme} from '..';

describe('themeing functions', () => {
  describe('createTheme', () => {
    test('should create a default theme', () => {
      expect(createTheme({name: 'default-theme'})).toMatchSnapshot();
    });

    test('should create an unnamed theme', () => {
      expect(createTheme({})).toHaveProperty('name', 'unnamed-newskit-theme');
    });

    test('should throw error if base theme is already compiled', () => {
      expect(() =>
        createTheme({baseTheme: {compiled: true} as any}),
      ).toThrowErrorMatchingInlineSnapshot(
        `"createTheme received a compiled baseTheme. Base themes must be uncompiled."`,
      );
    });

    test('should override breakpoints', () => {
      const breakpoints = {
        xs: 0,
        sm: 380,
        md: 668,
        lg: 968,
      };

      expect(
        createTheme({
          overrides: {
            breakpoints,
          },
        }),
      ).toHaveProperty('breakpoints', breakpoints);
    });

    test('should not override breakpoints when undefined', () => {
      expect(
        createTheme({
          overrides: undefined,
        }),
      ).toHaveProperty('breakpoints', {
        xs: 0,
        sm: 480,
        md: 768,
        lg: 1024,
        xl: 1440,
      });
    });

    describe('checkOverrides option', () => {
      test('should warn when override has same value as base theme', () => {
        const warningLogger = jest.fn();

        createTheme({
          checkOverrides: true,
          warningLogger,
          baseTheme: {
            colors: {
              red010: '#ff0000',
              green010: '#00ff00',
              blue010: '#0000ff',
            },
            stylePresets: {
              myStylePreset: {
                base: {
                  color: '{{colors.red010}}',
                  backgroundColor: '{{colors.blue010}}',
                },
              },
            },
          } as any,
          overrides: {
            colors: {
              // Duplicates
              red010: '#ff0000',
              green010: '#00ff00',
              // Value change
              blue010: '#2222cc',
              // New value
              grey010: '#999999',
            },
            stylePresets: {
              myStylePreset: {
                base: {
                  color: '{{colors.red010}}',
                  backgroundColor: '{{colors.green010}}',
                },
              },
            },
          },
        });

        expect(warningLogger).toHaveBeenCalledTimes(3);
        expect(warningLogger).toHaveBeenCalledWith(
          "Override at path: 'colors.red010' has the same value as base theme: '#ff0000'.",
        );
        expect(warningLogger).toHaveBeenCalledWith(
          "Override at path: 'colors.green010' has the same value as base theme: '#00ff00'.",
        );
        expect(warningLogger).toHaveBeenCalledWith(
          "Override at path: 'stylePresets.myStylePreset.base.color' has the same value as base theme: '{{colors.red010}}'.",
        );
      });
    });
  });
});
