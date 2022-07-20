import React, {ComponentType} from 'react';
import {act, render as renderer, RenderOptions} from '@testing-library/react';
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
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    wrapper: ({children}: any) => (
      <InstrumentationProvider fireEvent={fireEvent}>
        <ThemeProvider theme={newskitLightTheme}>{children}</ThemeProvider>
      </InstrumentationProvider>
    ),
  });

export const renderWithThemeFactory = (
  defaultTheme: ThemeProviderProps['theme'],
) => <T extends {}>(
  Component: React.ComponentType<T>,
  props?: T & {children?: React.ReactNode},
  theme: ThemeProviderProps['theme'] = defaultTheme,
  options?: Omit<RenderOptions, 'wrapper'>,
) =>
  renderer(<Component {...(props as T)} />, {
    ...options,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    wrapper: ({children}: any) => (
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    ),
  });

export const renderWithTheme = renderWithThemeFactory(newskitLightTheme);

export const renderToFragmentWithThemeFactory = (
  defaultTheme: ThemeProviderProps['theme'],
) => <T extends {}>(
  Component: React.ComponentType<T>,
  props?: T & {children?: React.ReactNode},
  theme: ThemeProviderProps['theme'] = defaultTheme,
  options?: RenderOptions,
) =>
  renderWithTheme(
    Component as ComponentType<{}>,
    props,
    theme,
    options,
  ).asFragment();

export const renderToFragmentWithTheme = renderToFragmentWithThemeFactory(
  newskitLightTheme,
);

export {render} from '@testing-library/react';
export {renderHook} from '@testing-library/react-hooks';

// The @floating-ui lib's inset styling is applied asynchronously. To make
// assertions on the top / left attribute values, we need to flush the queue to
// ensure that the element has been positioned before making assertions on
// snapshots. See https://floating-ui.com/docs/react-dom#testing for more info.
export const applyAsyncStyling = async () => {
  await act(async () => {});
};
