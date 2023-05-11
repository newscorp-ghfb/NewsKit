import colors from './colors.json';
import {createTheme} from '../../../theme';
import {newskitDarkTheme} from '../../..';

export const storybookNewskitDarkTheme = createTheme({
  name: 'storybook-newskit-dark',
  baseTheme: newskitDarkTheme,
  overrides: {colors},
  useRem: false,
});
