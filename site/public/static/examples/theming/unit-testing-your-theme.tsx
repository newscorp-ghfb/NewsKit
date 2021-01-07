import {createTheme, compileTheme} from 'newskit';
import {themeOverrides} from './your-theme-overrides';

test('theme is ok', () => {
  const logger = jest.fn();

  const theme = createTheme({
    name: 'my-test-theme',
    overrides: themeOverrides,
    checkOverrides: true,
    warningLogger: logger,
  });

  compileTheme(theme, {
    errorLogger: logger,
  });

  expect(logger).not.toHaveBeenCalled();
});
