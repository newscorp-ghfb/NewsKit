import {createTheme} from '../../../theme';
import {tnlTheme} from '../tnl-theme/tnl-theme';
import colors from './colors.json';

export const tnlRadioOverrides = {
  colors,
};

export const tnlRadioTheme = createTheme({
  name: 'tnl-radio-theme',
  baseTheme: tnlTheme,
  overrides: tnlRadioOverrides,
});
