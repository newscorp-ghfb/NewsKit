import {createTheme} from 'newskit';

const theme = createTheme({
  name: 'newskit-adding-style-preset',
  overrides: {
    stylePresets: {
      myCustomInterfaceContainer: {
        base: {
          backgroundColor: '{{colors.interfaceBackground}}',
          boxShadow: '{{shadows.shadow030}}',
        },
        hover: {
          backgroundColor: '{{colors.interactivePrimary050}}',
        },
      },
    },
  },
});
