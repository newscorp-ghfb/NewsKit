import * as React from 'react';
import {ThemeProvider, useTheme} from 'newskit';
import {newsKitDark, newsKitLight} from '../doc-theme';

export interface InverseThemeProps {
  children: React.ReactNode;
}

export const InverseTheme = ({children}: InverseThemeProps) => {
  const inverseTheme =
    useTheme().name === 'newskit-dark' ? newsKitLight : newsKitDark;

  return <ThemeProvider theme={inverseTheme}>{children}</ThemeProvider>;
};
