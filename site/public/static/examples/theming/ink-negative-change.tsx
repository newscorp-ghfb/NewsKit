import {createTheme} from 'newskit';

const theme = createTheme({
  name: 'newskit-ink-negative-change',
  overrides: {
    colors: {
      red055: '#ff0000',
      inkNegative: '{{colors.red055}}',
    },
  },
});
