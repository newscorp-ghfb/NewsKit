import React from 'react';
import {Story as StoryType} from '@storybook/react';
import {newskitLightTheme, ThemeProvider} from '../theme';
import {Welcome as WelcomeComponent} from './welcome';

const BADGE = 'a[href="https://badge.fury.io/js/newskit"]';

export const Welcome = () => <WelcomeComponent />;
Welcome.parameters = {
  viewMode: 'story',
  backgrounds: {disable: true},
  previewTabs: {
    'storybook/docs/panel': {
      hidden: true,
    },
  },
  percy: {
    percyCSS: `${BADGE} { display: none; }`,
  },
};

export default {
  title: 'Welcome',
  component: () => 'None',
  decorators: [
    (Story: StoryType) => (
      <ThemeProvider theme={newskitLightTheme}>
        <Story />
      </ThemeProvider>
    ),
  ],
};
