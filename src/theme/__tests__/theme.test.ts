import {compileTheme} from '../compiler';
import {newskitLightTheme} from '../newskit-light';
import {newskitDarkTheme, newskitDarkThemeOverrides} from '../newskit-dark';
import {createTheme} from '../creator';

describe('NewsKit Light theme', () => {
  it('should compile without errors', () => {
    const errorLogger = jest.fn();

    compileTheme(newskitLightTheme, {errorLogger});

    expect(errorLogger).not.toHaveBeenCalled();
  });
});

describe('NewsKit Dark theme', () => {
  it('should match expected snapshot', () => {
    expect(newskitDarkTheme).toMatchSnapshot();
  });

  it('should not override uneccessarily', () => {
    const warningLogger = jest.fn();

    createTheme({
      overrides: newskitDarkThemeOverrides,
      checkOverrides: true,
      warningLogger,
    });

    expect(warningLogger).not.toHaveBeenCalled();
  });

  it('should compile without errors', () => {
    const errorLogger = jest.fn();

    compileTheme(newskitDarkTheme, {errorLogger});

    expect(errorLogger).not.toHaveBeenCalled();
  });
});
