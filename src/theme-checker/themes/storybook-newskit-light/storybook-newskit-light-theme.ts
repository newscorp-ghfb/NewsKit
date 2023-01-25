import colors from './colors.json';
import {createTheme} from '../../../theme';
import {newskitLightTheme} from '../../..';

export const storybookNewskitLightTheme = createTheme({
  name: 'storybook-newskit-light',
  baseTheme: newskitLightTheme,
  overrides: {colors},
});
