import {renderWithThemeFactory} from '../../test/test-utils';
import {ThemeChecker} from '..';
import {newskitDarkTheme, newskitLightTheme} from '../../theme';
import {tnlTheme} from '../themes/tnl-theme/tnl-theme';
import {virginTheme} from '../themes/virgin-theme/virgin-theme';
import {sunTheme} from '../themes/sun-theme/sun-theme';

// TODO: PPDSC-2002
// Either remove the entire ThemeCheker testing,
// or add the file to insanbul ignore
// or move all mocks on the root level
// jest.mock('date-fns/format', () => () => 'Mock Date');

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
