import {createTheme} from 'newskit';

const theme = createTheme({
  name: 'newskit-font-crop-config',
  overrides: {
    fonts: {
      fontFamily010: {
        fontFamily: '"Times New Roman", Times, serif',
        cropConfig: {
          top: 8,
          bottom: 10,
        },
        cropAdjustments: {
          '{{fonts.fontSize020}}': {
            top: 1.2,
          },
        },
      },
    },
  },
});
