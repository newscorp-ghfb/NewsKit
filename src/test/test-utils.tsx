import React from 'react';
import {render as renderer, RenderOptions} from '@testing-library/react';
import {newskitLightTheme, ThemeProvider, ThemeProviderProps} from '../theme';
import {
  InstrumentationProvider,
  InstrumentationEvent,
} from '../instrumentation';

export const renderToFragment = (
  ui: React.ReactElement,
  options?: RenderOptions,
) => renderer(ui, options).asFragment();

export const renderWithImplementation = <T extends {}>(
  Component: React.ComponentType<T>,
  props?: T & {children?: React.ReactNode},
  fireEvent: (event: InstrumentationEvent) => void = () => {},
  options?: Omit<RenderOptions, 'wrapper'>,
) =>
  renderer(<Component {...(props as T)} />, {
    ...options,
    wrapper: ({children}) => (
      <InstrumentationProvider fireEvent={fireEvent}>
        <ThemeProvider theme={newskitLightTheme}>{children}</ThemeProvider>
      </InstrumentationProvider>
    ),
  });

export const renderWithTheme = <T extends {}>(
  Component: React.ComponentType<T>,
  props?: T & {children?: React.ReactNode},
  theme: ThemeProviderProps['theme'] = newskitLightTheme,
  options?: Omit<RenderOptions, 'wrapper'>,
) =>
  renderer(<Component {...(props as T)} />, {
    ...options,
    wrapper: ({children}) => (
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    ),
  });

export const renderToFragmentWithTheme = <T extends {}>(
  Component: React.ComponentType<T>,
  props?: T & {children?: React.ReactNode},
  theme: ThemeProviderProps['theme'] = newskitLightTheme,
  options?: RenderOptions,
) => renderWithTheme(Component, props, theme, options).asFragment();

export {render} from '@testing-library/react';
export {renderHook} from '@testing-library/react-hooks';
