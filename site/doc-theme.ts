import {
  createTheme,
  newskitLightTheme,
  newskitDarkTheme,
  PrimitiveOverrides,
} from 'newskit';

const overrideStyles = (primitives: PrimitiveOverrides) => ({
  buttonLightDarkToggle: {
    base: {
      backgroundColor: primitives.colors.interactive010,
      borderRadius: primitives.borderRadius.borderRadiusCircle,
      iconColor: primitives.colors.inkBrand010,
    },
    hover: {
      backgroundColor: primitives.colors.interactive020,
    },
    active: {
      backgroundColor: primitives.colors.interactive020,
    },
  },
  linkSectionNavigation: {
    base: {
      color: primitives.colors.inkLink,
    },
    hover: {
      color: primitives.colors.inkLinkHover,
    },
    active: {
      color: primitives.colors.inkLinkActive,
    },
    visited: {
      color: primitives.colors.inkLink,
    },
  },
  linkLogo: {
    base: {
      iconColor: primitives.colors.inkBase,
    },
  },
});

export const newsKitLight = createTheme('newskit-light', {
  baseTheme: newskitLightTheme,
  themeOverrider: primitives => ({
    stylePresets: overrideStyles(primitives),
  }),
});

export const newsKitDark = createTheme('newskit-dark', {
  baseTheme: newskitDarkTheme,
  themeOverrider: primitives => ({
    stylePresets: overrideStyles(primitives),
  }),
});
