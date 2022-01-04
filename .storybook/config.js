import * as React from 'react';
import {configure, addDecorator} from '@storybook/react';

import {ThemeProvider} from 'emotion-theming';
import {newskitLightTheme, theSunTheme, theTimesTheme} from '../src/themes';

const getThemeFromContext = ({kind}) =>
  [
    ['sun', theSunTheme],
    ['times', theTimesTheme],
    ['', newskitLightTheme],
  ].find(([name, theme]) =>
    kind.toLowerCase().includes(name) ? theme : false,
  )[1];

// Add providers for theme and styled components
addDecorator((story, context) => (
  <ThemeProvider theme={getThemeFromContext(context)}>{story()}</ThemeProvider>
));

configure(() => require('./load-stories.js'), module);
