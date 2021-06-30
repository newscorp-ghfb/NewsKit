import {
  compileTheme,
  createTheme,
  ThemeOverrides,
  UncompiledTheme,
} from 'newskit';
import {
  docsThemeLight,
  docsThemeDark,
  darkOverrides,
  foundationsThemeLight,
  foundationsThemeDark,
  patternsThemeLight,
  patternsThemeDark,
  accessibilityThemeLight,
  accessibilityThemeDark,
  foundationsLightOverrides,
  patternsDarkOverrides,
  accessibilityLightOverrides,
  foundationsDarkOverrides,
  patternsLightOverrides,
  accessibilityDarkOverrides,
} from '../doc-theme';

type Test = [string, UncompiledTheme, ThemeOverrides];

describe('Docs theme', () => {
  ([
    ['docsThemeLight', docsThemeLight, undefined],
    ['docsThemeDark', docsThemeDark, darkOverrides],
    ['foundationsThemeLight', foundationsThemeLight, foundationsLightOverrides],
    ['foundationsThemeDark', foundationsThemeDark, foundationsDarkOverrides],
    ['patternsThemeLight', patternsThemeLight, patternsLightOverrides],
    ['patternsThemeDark', patternsThemeDark, patternsDarkOverrides],
    [
      'accessibilityThemeLight',
      accessibilityThemeLight,
      accessibilityLightOverrides,
    ],
    [
      'accessibilityThemeDark',
      accessibilityThemeDark,
      accessibilityDarkOverrides,
    ],
  ] as Test[]).forEach(([themeName, theme, themeOverrides]) => {
    it(`should match expected snapshot for ${themeName}`, () => {
      expect(theme).toMatchSnapshot();
    });

    it(`should compile ${themeName} without errors`, () => {
      const errorLogger = jest.fn();
      compileTheme(theme, {errorLogger});

      expect(errorLogger).not.toHaveBeenCalled();
    });

    it(`should not override ${themeName} uneccessarily`, () => {
      const warningLogger = jest.fn();
      createTheme({
        overrides: themeOverrides,
        checkOverrides: true,
        warningLogger,
      });
      expect(warningLogger).not.toHaveBeenCalled();
    });
  });
});
