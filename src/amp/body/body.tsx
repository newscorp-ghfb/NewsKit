import React from 'react';
import {AmpScriptsProvider, AmpScriptsObject} from '../scripts';
import {ThemeProvider} from '../../themes';
import {ThemeProp} from '../../utils/style';

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
