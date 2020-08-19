import * as React from 'react';
import {configure, addDecorator} from '@storybook/react';

import {ThemeProvider} from '../src/theme'
import {newskitLightTheme} from '../src/theme';

const getThemeFromContext = ({kind}) =>
  [['', newskitLightTheme]].find(([name, theme]) =>
    kind.toLowerCase().includes(name) ? theme : false,
  )[1];

// Add providers for theme and styled components
addDecorator((story, context) => (
  <ThemeProvider theme={getThemeFromContext(context)}>{story()}</ThemeProvider>
));

configure(() => require('./load-stories.js'), module);
