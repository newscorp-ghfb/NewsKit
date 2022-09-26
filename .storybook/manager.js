import {addons} from '@storybook/addons';
import storybookTheme from './storybook-theme';

addons.setConfig({
  showPanel: true,
  enableShortcuts: false,
  theme: storybookTheme,
  previewTabs: {
    // Reordering Docs and Canvas toolbar items
    'storybook/docs/panel': {index: -1},
  },
});
