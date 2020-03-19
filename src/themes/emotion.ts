import React from 'react';
import {withTheme as _withTheme, useTheme as _useTheme} from 'emotion-theming';
import {Theme} from './creator';

const withTheme = (_withTheme as unknown) as <P>(
  comp: React.ComponentType<P & {theme: Theme}>,
) => React.ComponentType<P & {theme?: Theme}>;

const useTheme = (_useTheme as unknown) as () => Theme;

export {withTheme, useTheme};
export {ThemeProvider} from 'emotion-theming';
export {Global} from '@emotion/core';
