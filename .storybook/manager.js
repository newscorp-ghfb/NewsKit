import {addons} from '@storybook/addons';
import storybookTheme from './storybook-theme';

addons.setConfig({
  showPanel: true,
  enableShortcuts: false,
  theme: storybookTheme,
});
