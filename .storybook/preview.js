import React from 'react';
import {INITIAL_VIEWPORTS} from '@storybook/addon-viewport';
import {withPerformance} from 'storybook-addon-performance';


import {ThemeProvider} from '../src/theme';
import {newskitLightTheme} from '../src/theme';

export const parameters = {
  actions: {argTypesRegex: '^on[A-Z].*'},
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
};

const getThemeFromContext = ({kind}) =>
  [['', newskitLightTheme]].find(([name, theme]) =>
    kind.toLowerCase().includes(name) ? theme : false,
  )[1];

export const decorators = [
  (Story, context) => (
    <ThemeProvider theme={getThemeFromContext(context)}>
      <Story />
    </ThemeProvider>
  ),
  withPerformance
];
