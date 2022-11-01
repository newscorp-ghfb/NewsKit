import React from 'react';
import {Story as StoryType} from '@storybook/react';
import {newskitLightTheme, ThemeProvider} from '../theme';
import {Welcome as WelcomeComponent} from './welcome';

export const Welcome = () => <WelcomeComponent />;
Welcome.parameters = {
  viewMode: 'story',
  backgrounds: {disable: true},
  previewTabs: {
    'storybook/docs/panel': {
      hidden: true,
    },
  },
  eyes: {
    ignoreRegions: [
      {selector: 'img[src="https://badge.fury.io/js/newskit.svg"]'},
    ],
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
