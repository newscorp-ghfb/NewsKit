import newskitDark from '@newskit-themes/newskit/NK-Dark.json';
import {createTheme} from '../../../theme';

export const nkDarkThemeFromPublisher = createTheme({
  name: 'nk-dark-theme',
  overrides: newskitDark,
});
