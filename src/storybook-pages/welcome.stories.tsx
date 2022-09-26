import React from 'react';
import {Story as StoryType} from '@storybook/react';
import {newskitLightTheme, ThemeProvider} from '../theme';
import {Welcome as WelcomeComponent} from './welcome';

export const Welcome = () => <WelcomeComponent />;
Welcome.parameters = {
  viewMode: 'story',
  previewTabs: {
    'storybook/docs/panel': {
      hidden: true,
    },
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
