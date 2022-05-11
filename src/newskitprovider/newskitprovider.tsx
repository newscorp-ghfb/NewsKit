import React from 'react';

import {LayerOrganizer, LayerOrganizerProps} from '../layer';
import {ThemeProvider, ThemeProviderProps} from '../theme';
import {MediaQueryProvider} from '../utils/hooks/use-media-query';

export type NewskitProviderProps = LayerOrganizerProps & ThemeProviderProps;

export const NewskitProvider = ({
  children,
  zIndex,
  theme,
}: NewskitProviderProps) => (
  <ThemeProvider theme={theme}>
    <MediaQueryProvider>
      <LayerOrganizer zIndex={zIndex}>{children}</LayerOrganizer>
    </MediaQueryProvider>
  </ThemeProvider>
);
