/// <reference types="react" />
import { StylePreset, TransitionPreset, TypographyPreset } from './presets/types';
import { DeepPartial } from '../utils/types';
export type Breakpoints = Record<'xs' | 'sm' | 'md' | 'lg' | 'xl', number>;
export declare enum Devices {
    iPad = "iPad",
    iPadPro = "iPad Pro"
}
export interface ThemeBase {
    motions: Record<string, string>;
    borders: Record<string, string>;
    outlines: Record<string, string>;
    breakpoints: Breakpoints;
    colors: Record<string, string>;
    fonts: Record<string, any>;
    overlays: Record<string, string>;
    shadows: Record<string, string>;
    sizing: Record<string, string>;
    spacePresets: Record<string, string>;
    stylePresets: Record<string, StylePreset>;
    typographyPresets: Record<string, TypographyPreset>;
    transitionPresets: Record<string, TransitionPreset>;
    componentDefaults: Record<string, any>;
    icons: Record<string, React.ComponentType>;
}
export type ThemeOverrides = DeepPartial<ThemeBase>;
interface ThemeIdentifier {
    themeVersion: 1;
    name: string;
}
export interface UncompiledTheme extends ThemeBase, ThemeIdentifier {
    compiled?: false;
}
export interface Theme extends ThemeBase, ThemeIdentifier {
    compiled: true;
}
export type ThemeLoggerFunction = (message: string) => void;
export type BreakpointKeys = keyof Breakpoints;
export * from './presets/types';
//# sourceMappingURL=types.d.ts.map