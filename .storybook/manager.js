import React from "react";
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
  sidebar: {
    renderLabel: item => {
      if (item.parameters && item.parameters.sidebarLabel) {
        return item.parameters.sidebarLabel;
      }
      return item.name;
    },
  },
});
