import * as React from 'react';
import {ThemeChecker} from '../theme-checker';

export default {
  title: 'NewsKit Light/theme-checker',
  component: () => 'None',
  disabledRules: ['color-contrast', 'heading-order'],
};

export const ThemeCheckerStory = () => <ThemeChecker />;

ThemeCheckerStory.storyName = 'theme-checker';
ThemeCheckerStory.parameters = {
  eyes: {include: false},
};
