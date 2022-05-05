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
  outline?: string;
  outlineOffset?: string;
  safariOutlineOffset?: string;
  opacity?: string;
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
  checked?: StylePresetStyles;
  invalid?: StylePresetStyles;
  valid?: StylePresetStyles;
  'focus:hover'?: StylePresetStyles;
  'selected:hover'?: StylePresetStyles;
  'selected:focus'?: StylePresetStyles;
  'selected:focus:active'?: StylePresetStyles;
  'selected:focus:hover'?: StylePresetStyles;
  'selected:active'?: StylePresetStyles;
  'selected:disabled'?: StylePresetStyles;
  'selected:valid'?: StylePresetStyles;
  'selected:valid:focus'?: StylePresetStyles;
  'selected:invalid'?: StylePresetStyles;
  'selected:invalid:focus'?: StylePresetStyles;
  'selected:valid:hover'?: StylePresetStyles;
  'selected:invalid:hover'?: StylePresetStyles;
  'checked:hover'?: StylePresetStyles;
  'checked:focus'?: StylePresetStyles;
  'checked:focus:hover'?: StylePresetStyles;
  'checked:disabled'?: StylePresetStyles;
  'checked:valid'?: StylePresetStyles;
  'checked:valid:focus'?: StylePresetStyles;
  'checked:valid:hover'?: StylePresetStyles;
  'checked:valid:focus:hover'?: StylePresetStyles;
  'checked:invalid'?: StylePresetStyles;
  'checked:invalid:focus'?: StylePresetStyles;
  'checked:invalid:hover'?: StylePresetStyles;
  'checked:invalid:focus:hover'?: StylePresetStyles;
  'hover:active'?: StylePresetStyles;
  'valid:hover'?: StylePresetStyles;
  'valid:focus'?: StylePresetStyles;
  'valid:focus:hover'?: StylePresetStyles;
  'valid:hover:active'?: StylePresetStyles;
  'invalid:hover'?: StylePresetStyles;
  'invalid:focus'?: StylePresetStyles;
  'invalid:focus:hover'?: StylePresetStyles;
  'invalid:hover:active'?: StylePresetStyles;
  'visited:hover'?: StylePresetStyles;
  'visited:focus'?: StylePresetStyles;
  'focus-visible'?: StylePresetStyles;
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

type TransitionTokenAsObject = {
  extend: string;
} & TransitionPreset;

export type TransitionToken = string | TransitionTokenAsObject;
