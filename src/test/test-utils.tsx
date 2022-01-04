import React from 'react';
import {render as renderer, RenderOptions} from '@testing-library/react';
import {Theme, newskitLightTheme, ThemeProvider} from '../themes';

export const renderToFragment = (
  ui: React.ReactElement,
  options?: RenderOptions,
) => renderer(ui, options).asFragment();

export const renderWithTheme = <T extends {}>(
  Component: React.ComponentType<T>,
  props?: T & {children?: React.ReactNode},
  theme: Theme = newskitLightTheme,
  options?: RenderOptions,
) =>
  renderer(
    <ThemeProvider theme={theme}>
      <Component {...(props as T)} />
    </ThemeProvider>,
    options,
  );

export const renderToFragmentWithTheme = <T extends {}>(
  Component: React.ComponentType<T>,
  props?: T & {children?: React.ReactNode},
  theme: Theme = newskitLightTheme,
  options?: RenderOptions,
) => renderWithTheme(Component, props, theme, options).asFragment();

export {render} from '@testing-library/react';
