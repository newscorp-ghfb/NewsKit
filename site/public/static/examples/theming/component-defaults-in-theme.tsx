import {createTheme} from 'newskit';

const theme = createTheme({
  name: 'newskit-component-defaults-change',
  overrides: {
    button: {
      medium: {
        typographyPreset: 'utilityButton010',
        stylePreset: 'buttonOutlinedPrimary',
      },
    },
  },
});
