import {Fonts} from '../primitives/fonts';

//
// Style Presets
//

export interface StylePresetStyles {
  backgroundColor?: string;
  borderColor?: string;
  borderRadius?: string;
  borderStyle?: string;
  borderWidth?: string;
  boxShadow?: string;
  color?: string;
  iconColor?: string;
  textDecoration?: string;
}
export type StylePresetStyleKeys = keyof StylePresetStyles;

export interface StylePreset {
  // component states
  current?: StylePresetStyles;
  loading?: StylePresetStyles;
  // baseline css
  base?: StylePresetStyles;
  // css pseudo classes
  hover?: StylePresetStyles;
  focus?: StylePresetStyles;
  active?: StylePresetStyles;
  visited?: StylePresetStyles;
  disabled?: StylePresetStyles;
}
export type StylePresetStates = keyof StylePreset;

//
// Type Presets
//

export interface TypePreset {
  // TODO: after theme refactor - create type for these generic interpolation style functions and differentiate
  // between functions allowed in uncompiled theme vs not allowed in compiled theme.
  fontFamily?: string | Function;
  fontWeight?: string | number | Function;
  fontSize?: string | Function;
  lineHeight?: string | number | Function;
  letterSpacing?: string | number | Function;
  fontStyle?: string | Function;
}
export type TypePresetKeys = keyof TypePreset;
export type FontKeys = keyof Fonts;
