import React from 'react';
import {RenderOptions, RenderResult} from '@testing-library/react';
import {ThemeProviderProps} from '../theme';

export type RenderFn<R> = <T extends {}>(
  Component: React.ComponentType<T>,
  props?: T,
  theme?: ThemeProviderProps['theme'],
  options?: Omit<RenderOptions, 'wrapper'>,
) => R;

export type RenderFnFactory<R> = (
  defaultTheme: ThemeProviderProps['theme'],
) => R;

export type RenderWithTheme = RenderFn<RenderResult>;

export type RenderWithThemeFactory = RenderFnFactory<RenderWithTheme>;

export type RenderToFragment = RenderFn<DocumentFragment>;

export type RenderToFragmentFactory = RenderFnFactory<RenderToFragment>;
