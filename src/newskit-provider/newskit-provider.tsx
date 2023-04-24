import React from 'react';

import {LayerOrganizer, LayerOrganizerProps} from '../layer';
import {ThemeProvider, ThemeProviderProps} from '../theme';
import {MediaQueryProvider} from '../utils/hooks/use-media-query';
import {
  EventInstrumentation,
  InstrumentationProvider,
} from '../instrumentation';
import {NewsKitInternalContext, useNewsKitContext} from './context';

type BaseThemeProviderProps = 'theme' | 'children';

export type NewsKitProviderProps = Pick<
  ThemeProviderProps,
  BaseThemeProviderProps
> & {
  children: React.ReactNode;
  layer?: LayerOrganizerProps;
  instrumentation?: Partial<EventInstrumentation>;
  themeOptions?: Omit<ThemeProviderProps, BaseThemeProviderProps>;
};

export const NewsKitProvider = ({
  children,
  theme,
  /* istanbul ignore next */
  layer: layerProps = {},
  instrumentation: instrumentationProps = {},
  themeOptions = {},
}: NewsKitProviderProps) => {
  const {initialized} = useNewsKitContext();
  /* istanbul ignore if */
  if (process.env.NODE_ENV !== 'production' && initialized) {
    console.warn(
      'You are using NewsKitProvider inside NewsKitProvider, this might cause unexpected behavior',
    );
  }

  return (
    <NewsKitInternalContext.Provider value={{initialized: true, themeOptions}}>
      <ThemeProvider theme={theme} {...themeOptions}>
        <InstrumentationProvider {...instrumentationProps}>
          <MediaQueryProvider>
            <LayerOrganizer {...layerProps}>{children}</LayerOrganizer>
          </MediaQueryProvider>
        </InstrumentationProvider>
      </ThemeProvider>
    </NewsKitInternalContext.Provider>
  );
};
