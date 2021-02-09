import * as React from 'react';
import {ThemeProvider, useTheme} from 'newskit';
import {docsThemeDark, docsThemeLight} from '../theme/doc-theme';

export interface InverseThemeProps {
  children: React.ReactNode;
}

export const InverseTheme = ({children}: InverseThemeProps) => {
  const inverseTheme =
    useTheme().name === 'docs-theme-dark' ? docsThemeLight : docsThemeDark;

  return <ThemeProvider theme={inverseTheme}>{children}</ThemeProvider>;
};
