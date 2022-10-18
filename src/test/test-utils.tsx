import React, {ComponentType} from 'react';

import {
  act,
  render as renderer,
  RenderOptions,
  RenderResult,
} from '@testing-library/react';
import {newskitLightTheme, UncompiledTheme} from '../theme';
import {InstrumentationEvent} from '../instrumentation';
import {NewsKitProvider} from '../newskit-provider';
import {RenderToFragmentFactory, RenderWithThemeFactory} from './types';

export const renderToFragment: (
  ui: React.ReactElement,
  options?: RenderOptions,
) => DocumentFragment = (ui, options) => renderer(ui, options).asFragment();

export const renderWithImplementation: <T extends {}>(
  Component: React.ComponentType<T>,
  props?: T,
  fireEvent?: (event: InstrumentationEvent) => void,
  options?: Omit<RenderOptions, 'wrapper'>,
) => RenderResult = (Component, props, fireEvent = () => {}, options) =>
  renderer(<Component {...props!} />, {
    ...options,
    wrapper: ({children}) => (
      <NewsKitProvider theme={newskitLightTheme} instrumentation={{fireEvent}}>
        {children}
      </NewsKitProvider>
    ),
  });

export const renderWithThemeFactory: RenderWithThemeFactory = defaultTheme => (
  Component,
  props,
  theme = defaultTheme,
  options,
) =>
  renderer(<Component {...props!} />, {
    ...options,
    wrapper: ({children}) => (
      <NewsKitProvider theme={theme}>{children}</NewsKitProvider>
    ),
  });

export const renderWithTheme = renderWithThemeFactory(newskitLightTheme);

export const renderToFragmentWithThemeFactory: RenderToFragmentFactory = defaultTheme => (
  Component,
  props,
  theme = defaultTheme,
  options,
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

export {render, renderHook} from '@testing-library/react';

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

    // downshift adds this element to the body, we don't want to be part of the snapshots
    const msg = template.content.getElementById('a11y-status-message');
    if (msg) msg.remove();

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

    // downshift adds this element to the body, we don't want to be part of the snapshots
    const msg = template.content.getElementById('a11y-status-message');
    if (msg) msg.remove();

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
// The @floating-ui lib's inset styling is applied asynchronously. To make
// assertions on the top / left attribute values, we need to flush the queue to
// ensure that the element has been positioned before making assertions on
// snapshots. See https://floating-ui.com/docs/react-dom#testing for more info.
export const applyAsyncStyling = async () => {
  await act(async () => {});
};

export const generateString = (length: number): string =>
  Array.from(Array(length).keys())
    .map(() => '*')
    .join('');
