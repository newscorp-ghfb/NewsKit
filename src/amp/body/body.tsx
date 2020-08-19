import React from 'react';
import {AmpScriptsProvider, AmpScriptsObject} from '../scripts';
import {ThemeProvider} from '../../theme';
import {ThemeProp} from '../../utils/style-types';

export interface BodyProps extends ThemeProp {
  ampScriptsObject?: AmpScriptsObject;
}

export const Body: React.FC<BodyProps> = ({
  theme,
  ampScriptsObject,
  children,
}) => (
  <ThemeProvider theme={theme}>
    <AmpScriptsProvider value={ampScriptsObject}>{children}</AmpScriptsProvider>
  </ThemeProvider>
);
