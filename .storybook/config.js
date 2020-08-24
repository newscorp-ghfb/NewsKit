import * as React from 'react';
import {configure, addDecorator} from '@storybook/react';
import {configureViewport, INITIAL_VIEWPORTS} from '@storybook/addon-viewport';
import {withOptions} from '@storybook/addon-options';

import {ThemeProvider} from '../src/theme'
import {newskitLightTheme} from '../src/theme';

const getThemeFromContext = ({kind}) =>
  [['', newskitLightTheme]].find(([name, theme]) =>
    kind.toLowerCase().includes(name) ? theme : false,
  )[1];

  const newViewports = {
    macbook13: {
      name: 'Apple MacBook Air 13-inch',
      styles: {
        width: '1440px',
        height: '900px'
      }
    },
  };
   
  configureViewport({
    viewports: {
      ...INITIAL_VIEWPORTS,
      ...newViewports
    }
  });

// Add providers for theme and styled components
addDecorator((story, context) => (
  <ThemeProvider theme={getThemeFromContext(context)}>{story()}</ThemeProvider>
));

addDecorator(
  withOptions({
    /**
     * display panel that shows addon configurations
     * @type {Boolean} 
     */
    showAddonPanel: false, 
  })
);

configure(() => require('./load-stories.js'), module);
