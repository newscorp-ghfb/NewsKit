import React, {ComponentType} from 'react';
import {
  render as renderer,
  RenderOptions,
  RenderResult,
} from '@testing-library/react';
import {newskitLightTheme, ThemeProviderProps, UncompiledTheme} from '../theme';
import {InstrumentationEvent} from '../instrumentation';
import {NewskitProvider} from '../newskitprovider';

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
      <NewskitProvider theme={newskitLightTheme} instrumentation={{fireEvent}}>
        {children}
      </NewskitProvider>
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
    wrapper: ({children}) => (
      <NewskitProvider theme={theme}>{children}</NewskitProvider>
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

export const renderWithThemeInBody = <T extends {}>(
  Component: React.ComponentType<T>,
  props?: T & {children?: React.ReactNode},
  theme?: UncompiledTheme,
): RenderResult => {
  const {baseElement, ...rest} = renderWithTheme(Component, props, theme);

  // TODO: asFragment takes the HTML only from the container, NOT the whole body
  // and the portals are rendered outside the container
  // that's why we need to use baseElement for snapshots
  // https://github.com/testing-library/react-testing-library/blob/c8c93f83228a68a270583c139972e79b1812b7d3/src/pure.js
  const asFragment = () => {
    const template = document.createElement('template');
    template.innerHTML = baseElement.innerHTML;
    return template.content;
  };

  return {
    ...rest,
    baseElement,
    asFragment,
  };
};

// same as renderWithThemeInBody but without theme
export const renderInBody = <T extends {}>(
  Component: React.ComponentType<T>,
  props?: T & {children?: React.ReactNode},
): RenderResult => {
  const {baseElement, ...rest} = renderer(<Component {...(props as T)} />);

  // TODO: asFragment takes the HTML only from the container, NOT the whole body
  // and the portals are rendered outside the container
  // that's why we need to use baseElement for snapshots
  // https://github.com/testing-library/react-testing-library/blob/c8c93f83228a68a270583c139972e79b1812b7d3/src/pure.js
  const asFragment = () => {
    const template = document.createElement('template');
    template.innerHTML = baseElement.innerHTML;
    return template.content;
  };

  return {
    ...rest,
    baseElement,
    asFragment,
  };
};

export const renderToFragmentInBody = <T extends {}>(
  Component: React.ComponentType<T>,
  props?: T & {children?: React.ReactNode},
  theme?: UncompiledTheme,
) => {
  const {asFragment} = renderWithThemeInBody(Component, props, theme);
  const fragment = asFragment();
  return fragment;
};
