import React, { ComponentType } from 'react';
import { RenderOptions, RenderResult } from '@testing-library/react';
import { Theme, UncompiledTheme } from '../theme';
import { InstrumentationEvent } from '../instrumentation';
import { RenderToFragmentFactory, RenderWithThemeFactory } from './types';
export declare const renderToFragment: (ui: React.ReactElement<any>, options?: RenderOptions) => DocumentFragment;
export declare const renderWithImplementation: <T extends {}>(Component: React.ComponentType<T>, props?: T, fireEvent?: (event: InstrumentationEvent) => void, options?: Omit<RenderOptions, 'wrapper'>, theme?: UncompiledTheme | Theme) => RenderResult;
export declare const renderWithThemeFactory: RenderWithThemeFactory;
export declare const renderWithTheme: import("./types").RenderWithTheme;
export declare const renderToFragmentWithThemeFactory: RenderToFragmentFactory;
export declare const renderToFragmentWithTheme: import("./types").RenderToFragment;
export { render, renderHook } from '@testing-library/react';
export declare const renderWithThemeInBody: <T extends {}>(Component: React.ComponentType<T>, props?: (T & {
    children?: React.ReactNode;
}) | undefined, theme?: UncompiledTheme) => RenderResult;
export declare const renderInBody: <T extends {}>(Component: React.ComponentType<T>, props?: (T & {
    children?: React.ReactNode;
}) | undefined) => RenderResult;
export declare const renderToFragmentInBody: <T extends {}>(Component: React.ComponentType<T>, props?: (T & {
    children?: React.ReactNode;
}) | undefined, theme?: UncompiledTheme) => DocumentFragment;
export declare const applyAsyncStyling: () => Promise<void>;
export declare const generateString: (length: number) => string;
export declare const isVisualTest: boolean;
export declare const isCypressTest: boolean;
//# sourceMappingURL=test-utils.d.ts.map