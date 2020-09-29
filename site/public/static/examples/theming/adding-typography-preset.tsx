import {createTheme} from 'newskit';

const theme = createTheme({
  name: 'newskit-adding-style-preset',
  overrides: {
    typographyPresets: {
      customHeading: {
        fontFamily: '{{fonts.fontFamily1.fontFamily}}',
        fontSize: '{{fonts.fontSize160}}',
        lineHeight: '{{fonts.fontLineHeight040}}',
        fontWeight: '{{fonts.fontWeight040}}',
        letterSpacing: '{{fonts.fontLetterSpacing030}}',
      },
    },
  },
});
