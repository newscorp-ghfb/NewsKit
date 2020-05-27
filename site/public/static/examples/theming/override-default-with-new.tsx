import { createTheme, newskitLightTheme } from "newskit";

const theme = createTheme('newskit-light-demo', {
  baseTheme: newskitLightTheme,
  themeOverrider: primitives => ({
    stylePresets: {
      buttonTestStyle: {
        base: {
          color: primitives.colors.red100,
          backgroundColor: primitives.colors.red100
        },
      },
    },
    defaultPresets: {
      articleHeadline: {
        heading: {
          stylePreset: 'buttonTestStyle',
        },
      },
    },
  }),
});