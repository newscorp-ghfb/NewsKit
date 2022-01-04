import React from 'react';
import {withTheme as _withTheme} from 'emotion-theming';
import {Theme} from './creator';

const withTheme = (_withTheme as unknown) as <P>(
  comp: React.ComponentType<P & {theme: Theme}>,
) => React.ComponentType<P & {theme?: Theme}>;

export {withTheme};
export {ThemeProvider} from 'emotion-theming';
