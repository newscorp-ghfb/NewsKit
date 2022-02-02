import {renderWithThemeFactory} from '../../test/test-utils';
import {ThemeChecker} from '..';
import {newskitDarkTheme, newskitLightTheme} from '../../theme';
import {tnlTheme} from '../themes/tnl-theme/tnl-theme';
import {virginTheme} from '../themes/virgin-theme/virgin-theme';
import {sunTheme} from '../themes/sun-theme/sun-theme';

const themes = [
  newskitLightTheme,
  newskitDarkTheme,
  tnlTheme,
  virginTheme,
  sunTheme,
];

describe('ThemeChecker', () => {
  themes.forEach(theme => {
    it(`render ${theme.name} as expected`, () => {
      const fragment = renderWithThemeFactory(theme)(ThemeChecker);
      expect(fragment).toMatchSnapshot();
    });
  });
});
