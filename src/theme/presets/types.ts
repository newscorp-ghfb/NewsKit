import {Fonts} from '../foundations/fonts';

//
// Style Presets
//

export interface StylePresetStyles {
  backgroundColor?: string;
  backgroundImage?: string;
  backgroundRepeat?: string;
  backgroundPosition?: string;
  borderColor?: string;
  borderRadius?: string;
  borderStyle?: string;
  borderWidth?: string;
  boxShadow?: string;
  caretColor?: string;
  color?: string;
  hyphens?: string;
  iconColor?: string;
  placeholderColor?: string;
  textAlign?: string;
  textDecoration?: string;
  textOverflow?: string;
  textTransform?: string;
  whiteSpace?: string;
  wordBreak?: string;
}
export type StylePresetStyleKeys = keyof StylePresetStyles;

export interface StylePreset {
  // component states
  loading?: StylePresetStyles;
  // baseline css
  base?: StylePresetStyles;
  // css pseudo classes
  hover?: StylePresetStyles;
  focus?: StylePresetStyles;
  active?: StylePresetStyles;
  visited?: StylePresetStyles;
  disabled?: StylePresetStyles;
  selected?: StylePresetStyles;
  invalid?: StylePresetStyles;
  valid?: StylePresetStyles;
  'selected:hover'?: StylePresetStyles;
  'selected:focus'?: StylePresetStyles;
  'selected:disabled'?: StylePresetStyles;
  'valid:hover'?: StylePresetStyles;
  'valid:focus'?: StylePresetStyles;
  'invalid:hover'?: StylePresetStyles;
  'invalid:focus'?: StylePresetStyles;
  'visited:hover'?: StylePresetStyles;
  'visited:focus'?: StylePresetStyles;
  'selected:valid'?: StylePresetStyles;
  'selected:invalid'?: StylePresetStyles;
  'selected:valid:focus'?: StylePresetStyles;
  'selected:invalid:focus'?: StylePresetStyles;
  'selected:valid:hover'?: StylePresetStyles;
  'selected:invalid:hover'?: StylePresetStyles;
}
export type StylePresetStates = keyof StylePreset;

//
// Typography Presets
//

export interface TypographyPreset {
  // TODO: after theme refactor - create type for these generic interpolation style functions and differentiate
  // between functions allowed in uncompiled theme vs not allowed in compiled theme.
  fontFamily?: string | Function;
  fontWeight?: string | number | Function;
  fontSize?: string | Function;
  lineHeight?: string | number | Function;
  letterSpacing?: string | number | Function;
  fontStyle?: string | Function;
  fontSmooth?: string;
  fontStretch?: string;
}
export type TypographyPresetKeys = keyof TypographyPreset;
export type FontKeys = keyof Fonts;

export type TransitionPresetStyles = React.CSSProperties;
export type TransitionPresetStyleKeys = keyof TransitionPresetStyles;
export interface TransitionPreset {
  base?: TransitionPresetStyles;
  appear?: TransitionPresetStyles;
  appearActive?: TransitionPresetStyles;
  appearDone?: TransitionPresetStyles;
  enter?: TransitionPresetStyles;
  enterActive?: TransitionPresetStyles;
  enterDone?: TransitionPresetStyles;
  exit?: TransitionPresetStyles;
  exitActive?: TransitionPresetStyles;
  exitDone?: TransitionPresetStyles;
}
export type TransitionPresetStates = keyof TransitionPreset;
