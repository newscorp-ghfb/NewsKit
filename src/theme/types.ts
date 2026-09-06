import {StylePreset, TransitionPreset, TypographyPreset} from './presets/types';
import {DeepPartial} from '../utils/types';

export type Breakpoints = Record<'xs' | 'sm' | 'md' | 'lg' | 'xl', number>;
export enum Devices {
  iPad = 'iPad',
  iPadPro = 'iPad Pro',
}

export interface PartialFontFace {
  fontFamily: string;
  fontWeight: string | number;
  fontStyle?: 'normal' | 'italic' | 'oblique';
  fontStretch?:
    | 'ultra-condensed'
    | 'extra-condensed'
    | 'condensed'
    | 'semi-condensed'
    | 'normal'
    | 'semi-expanded'
    | 'expanded'
    | 'extra-expanded'
    | 'ultra-expanded';
}

export interface ThemeBase {
  // foundations
  motions: Record<string, string>;
  borders: Record<string, string>;
  outlines: Record<string, string>;
  breakpoints: Breakpoints;
  colors: Record<string, string>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  fonts: Record<string, any>;
  fontFaces?: Record<string, PartialFontFace>;
  overlays: Record<string, string>;
  shadows: Record<string, string>;
  sizing: Record<string, string>;

  // presets
  spacePresets: Record<string, string>;
  stylePresets: Record<string, StylePreset>;
  typographyPresets: Record<string, TypographyPreset>;
  transitionPresets: Record<string, TransitionPreset>;

  // defaults
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
