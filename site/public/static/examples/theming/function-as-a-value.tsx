import {createTheme} from 'newskit';

const theme = createTheme({
  name: 'newskit-function-as-a-value',
  overrides: {
    colors: {
      randomColor: theme =>
        `#${Math.floor(Math.random() * 16777215)
          .toString(16)
          .padStart(6, '0')}`,
    },
  },
});
