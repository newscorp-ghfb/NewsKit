import React from 'react';
import { LayerOrganizerProps } from '../layer';
import { ThemeProviderProps } from '../theme';
import { EventInstrumentation } from '../instrumentation';
type BaseThemeProviderProps = 'theme' | 'children';
export type NewsKitProviderProps = Pick<ThemeProviderProps, BaseThemeProviderProps> & {
    children: React.ReactNode;
    layer?: LayerOrganizerProps;
    instrumentation?: Partial<EventInstrumentation>;
    themeOptions?: Omit<ThemeProviderProps, BaseThemeProviderProps>;
};
export declare const NewsKitProvider: ({ children, theme, layer: layerProps, instrumentation: instrumentationProps, themeOptions, }: NewsKitProviderProps) => React.JSX.Element;
export {};
//# sourceMappingURL=newskit-provider.d.ts.map