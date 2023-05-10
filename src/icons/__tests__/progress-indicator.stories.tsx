import {IndeterminateProgressIndicator} from '../filled/custom';
import {StorybookCase, StorybookPage} from '../../test/storybook-comps';
import * as React from 'react';
import {Story as StoryType} from '@storybook/react/dist/ts3.9/client/preview/types-6-0';
import {ThemeProvider} from '../../theme';
import {createCustomThemeWithBaseThemeSwitch} from '../../test/theme-select-object';

export const StoryProgressIndicator = () => (
  <StorybookPage columns="repeat(5, 1fr)">
    <StorybookCase>
      <IndeterminateProgressIndicator />
    </StorybookCase>
  </StorybookPage>
);
StoryProgressIndicator.storyName = 'Default';
StoryProgressIndicator.parameters = {
  percy: {skip: true},
};

export default {
  title: 'Components/Progress indicator',
  component: () => 'None',
  parameters: {
    nkDocs: {
      title: 'Progress indicator',
      url: 'https://newskit.co.uk/components/progress-indicator/',
      description:
        'The progress indicator shows the progression of a system operation such as downloading, uploading, processing, etc. in a visual way.',
    },
  },
  decorators: [
    (Story: StoryType, context: {globals: {backgrounds: {value: string}}}) => (
      <ThemeProvider
        theme={createCustomThemeWithBaseThemeSwitch(
          context?.globals?.backgrounds?.value,
          {},
        )}
      >
        <Story />
      </ThemeProvider>
    ),
  ],
};
