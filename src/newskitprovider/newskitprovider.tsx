import React from 'react';

import {LayerOrganizer, LayerOrganizerProps} from '../layer';
import {ThemeProvider, ThemeProviderProps} from '../theme';
import {MediaQueryProvider} from '../utils/hooks/use-media-query';
import {
  EventInstrumentation,
  InstrumentationProvider,
} from '../instrumentation';
import {NewskitInternalContext, useNewskitContext} from './context';

export type NewskitProviderProps = ThemeProviderProps & {
  children: React.ReactNode;
  layer?: LayerOrganizerProps;
  instrumentation?: Partial<EventInstrumentation>;
};

export const NewskitProvider = ({
  children,
  theme,
  layer: layerProps = {},
  instrumentation: instrumentationProps = {},
}: NewskitProviderProps) => {
  const NKContext = useNewskitContext();
  /* istanbul ignore if */
  if (
    process.env.NODE_ENV !== 'production' &&
    Object.keys(NKContext).length > 0
  ) {
    console.warn(
      'You are using NewskitProvider inside NewskitProvider, this might cause unexpected behavior',
    );
  }

  return (
    <NewskitInternalContext.Provider value={{initialized: true}}>
      <ThemeProvider theme={theme}>
        <InstrumentationProvider {...instrumentationProps}>
          <MediaQueryProvider>
            <LayerOrganizer {...layerProps}>{children}</LayerOrganizer>
          </MediaQueryProvider>
        </InstrumentationProvider>
      </ThemeProvider>
    </NewskitInternalContext.Provider>
  );
};
