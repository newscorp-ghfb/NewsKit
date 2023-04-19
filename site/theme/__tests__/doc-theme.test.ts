import {compileTheme, UncompiledTheme} from 'newskit';
import {
  docsThemeLight,
  docsThemeDark,
  foundationsThemeLight,
  foundationsThemeDark,
  patternsThemeLight,
  patternsThemeDark,
  accessibilityThemeLight,
  accessibilityThemeDark,
} from '../doc-theme';

type Test = [string, UncompiledTheme];

describe('Docs theme', () => {
  ([
    ['docsThemeLight', docsThemeLight],
    ['docsThemeDark', docsThemeDark],
    ['foundationsThemeLight', foundationsThemeLight],
    ['foundationsThemeDark', foundationsThemeDark],
    ['patternsThemeLight', patternsThemeLight],
    ['patternsThemeDark', patternsThemeDark],
    ['accessibilityThemeLight', accessibilityThemeLight],
    ['accessibilityThemeDark', accessibilityThemeDark],
  ] as Test[]).forEach(([themeName, theme]) => {
    it(`should match expected snapshot for ${themeName}`, () => {
      expect(theme).toMatchSnapshot();
    });

    it(`should compile ${themeName} without errors`, () => {
      const errorLogger = jest.fn();
      compileTheme(theme, {errorLogger});

      expect(errorLogger).not.toHaveBeenCalled();
    });
  });
});
