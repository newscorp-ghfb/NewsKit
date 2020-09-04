headline: {
  heading: {
    stylePreset: 'headlineContent',
    typographyPreset: {
      xs: 'headline100',
      md: 'headline200',
    },
  },
  kicker: {
    stylePreset: 'headlineKicker',
    typographyPreset: {
      xs: 'heading060',
      sm: 'heading060',
      md: 'heading070',
      lg: 'heading080',
    },
    marginPreset: {
      xs: 'spaceInline030',
      sm: 'spaceInline030',
      md: 'spaceInline040',
      lg: 'spaceInline040',
    },
  },
}

import { createTheme, newskitLightTheme } from "newskit";

const theme = createTheme('newskit-light-demo', {
  baseTheme: newskitLightTheme,
  themeOverrider: () => ({
    defaultPresets: {
      headline: {
        heading: {
          stylePreset: 'buttonSolidPrimary',
        },
      },
    },
  })
});
