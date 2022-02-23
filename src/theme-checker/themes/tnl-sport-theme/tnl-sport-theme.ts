import {createTheme} from '../../../theme';
import {tnlTheme} from '../tnl-theme/tnl-theme';
import colors from './colors.json';

export const tnlSportOverrides = {
  colors,
};

export const tnlSportTheme = createTheme({
  name: 'tnl-sport-theme',
  baseTheme: tnlTheme,
  overrides: tnlSportOverrides,
});
