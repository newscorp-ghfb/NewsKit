import React from 'react';

import {LayerOrganizer, LayerOrganizerProps} from '../layer';
import {ThemeProvider, ThemeProviderProps} from '../theme';
import {MediaQueryProvider} from '../utils/hooks/use-media-query';
import {
  EventInstrumentation,
  InstrumentationProvider,
} from '../instrumentation';
import {NewsKitInternalContext, useNewsKitContext} from './context';

export type NewsKitProviderProps = ThemeProviderProps & {
  children: React.ReactNode;
  layer?: LayerOrganizerProps;
  instrumentation?: Partial<EventInstrumentation>;
};

export const NewsKitProvider = ({
  children,
  theme,
  /* istanbul ignore next */
  layer: layerProps = {},
  instrumentation: instrumentationProps = {},
}: NewsKitProviderProps) => {
  const NKContext = useNewsKitContext();
  /* istanbul ignore if */
  if (
    process.env.NODE_ENV !== 'production' &&
    Object.keys(NKContext).length > 0
  ) {
    console.warn(
      'You are using NewsKitProvider inside NewsKitProvider, this might cause unexpected behavior',
    );
  }

  return (
    <NewsKitInternalContext.Provider value={{initialized: true}}>
      <ThemeProvider theme={theme}>
        <InstrumentationProvider {...instrumentationProps}>
          <MediaQueryProvider>
            <LayerOrganizer {...layerProps}>{children}</LayerOrganizer>
          </MediaQueryProvider>
        </InstrumentationProvider>
      </ThemeProvider>
    </NewsKitInternalContext.Provider>
  );
};
