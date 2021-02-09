import {compileTheme, createTheme} from 'newskit';
import {docsThemeLight, docsThemeDark, darkOverrides} from '../doc-theme';

describe('Docs Light theme', () => {
  it('should compile without errors', () => {
    const errorLogger = jest.fn();

    compileTheme(docsThemeLight, {errorLogger});

    expect(errorLogger).not.toHaveBeenCalled();
  });
});

describe('Docs Dark theme', () => {
  it('should match expected snapshot', () => {
    expect(docsThemeDark).toMatchSnapshot();
  });

  it('should not override uneccessarily', () => {
    const warningLogger = jest.fn();

    createTheme({
      overrides: darkOverrides,
      checkOverrides: true,
      warningLogger,
    });
    expect(warningLogger).not.toHaveBeenCalled();
  });

  it('should compile without errors', () => {
    const errorLogger = jest.fn();

    compileTheme(docsThemeDark, {errorLogger});

    expect(errorLogger).not.toHaveBeenCalled();
  });
});
