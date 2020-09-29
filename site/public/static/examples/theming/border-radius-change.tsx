import {createTheme} from 'newskit';

const theme = createTheme({
  name: 'newskit-border-radius-change',
  overrides: {
    borders: {
      borderRadiusDefault: '{{borders.borderRadiusSharp}}',
    },
  },
});
