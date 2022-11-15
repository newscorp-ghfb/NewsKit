import * as React from 'react';
import {ThemeChecker as ThemeCheckerComponent} from '../theme-checker';

export default {
  title: 'Theme Checker',
  component: () => 'None',
  disabledRules: ['color-contrast', 'heading-order'],
};

export const ThemeChecker = () => <ThemeCheckerComponent />;
ThemeChecker.parameters = {
  eyes: {include: false},
  percy: {skip: true},
};
