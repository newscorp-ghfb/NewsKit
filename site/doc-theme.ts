import {createTheme, newskitLightTheme, newskitDarkTheme} from 'newskit';

const stylePresets = {
  buttonLightDarkToggle: {
    base: {
      backgroundColor: '{{colors.interactive010}}',
      borderRadius: '{{borders.borderRadiusCircle}}',
      iconColor: '{{colors.inkBrand010}}',
    },
    hover: {
      backgroundColor: '{{colors.interactive020}}',
    },
    active: {
      backgroundColor: '{{colors.interactive020}}',
    },
  },
  linkSectionNavigation: {
    base: {
      color: '{{colors.inkLink}}',
    },
    hover: {
      color: '{{colors.inkLinkHover}}',
    },
    active: {
      color: '{{colors.inkLinkActive}}',
    },
    visited: {
      color: '{{colors.inkLink}}',
    },
  },
  linkLogo: {
    base: {
      iconColor: '{{colors.inkBase}}',
    },
  },
};
export const newsKitLight = createTheme({
  name: 'newskit-light',
  baseTheme: newskitLightTheme,
  overrides: {
    stylePresets,
  },
});
export const newsKitDark = createTheme({
  name: 'newskit-dark',
  baseTheme: newskitDarkTheme,
  overrides: {
    stylePresets,
  },
});
