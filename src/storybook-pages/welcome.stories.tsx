import React from 'react';
import {Story as StoryType} from '@storybook/react';
import {newskitLightTheme, ThemeProvider} from '../theme';
import {Welcome as WelcomeComponent} from './welcome';

export const Welcome = () => <WelcomeComponent />;

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
