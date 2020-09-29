import {StylePreset, TypographyPreset} from './presets/types';
import {DeepPartial} from '../utils/types';
import {colors} from './foundations';

export type Breakpoints = Record<'xs' | 'sm' | 'md' | 'lg' | 'xl', number>;
export enum Devices {
  iPad = 'iPad',
  iPadPro = 'iPad Pro',
}

export interface ThemeBase {
  // foundations
  motions: Record<string, string>;
  borders: Record<string, string>;
  breakpoints: Breakpoints;
  colors: Record<string, string>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  fonts: Record<string, any>;
  overlays: Record<string, string>;
  shadows: Record<string, string>;
  sizing: Record<string, string>;

  // presets
  spacePresets: Record<string, string>;
  stylePresets: Record<string, StylePreset>;
  typographyPresets: Record<string, TypographyPreset>;

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

export type MotionKeys = string;
export type BorderKeys = string;
export type BorderRadiusKeys = string;
export type BreakpointKeys = keyof Breakpoints;
export type ColorKeys = string;
export type IconSizeKeys = string;
export type SizingKeys = string;
export type StylePresetKeys = string;
export type TypographyPresetKeys = string;
export type SpacePresetKeys = string;
export type PaddingPresetKeys = string;
export type ShadowKeys = string;
export type GridKeys = string;
export type FontKeys = string;
export type FontSizeKeys = string;
export type LineHeightKeys = string;
export type Colors = typeof colors;

export * from './presets/types';
