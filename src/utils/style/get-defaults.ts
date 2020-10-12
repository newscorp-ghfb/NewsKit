import {getDefaultedValue} from './base';
import {
  getSizingFromTheme,
  getSpacingFromTheme,
  getSpacingInsetFromTheme,
  getTypographyPresetFromTheme,
} from './getters';

export const getTypographyPreset = getDefaultedValue(
  getTypographyPresetFromTheme,
  'typographyPreset',
);

export const getSpacingInlineHorizontal = getDefaultedValue(
  getSpacingFromTheme,
  'spaceInline',
  'marginRight',
);

export const getSpacingInlineVertical = getDefaultedValue(
  getSpacingFromTheme,
  'spaceInline',
  'marginBottom',
);
export const getSpacingStackHorizontal = getDefaultedValue(
  getSpacingFromTheme,
  'spaceStack',
  'marginBottom',
);

export const getSpacingStackVertical = getDefaultedValue(
  getSpacingFromTheme,
  'spaceStack',
  'marginRight',
);

export const getSpacingInset = getDefaultedValue(
  getSpacingInsetFromTheme,
  'spaceInset',
);

// TODO: Which of these funcs is no longer used ?
export const getSizing = getDefaultedValue(getSizingFromTheme, 'sizing');
export const getMinHeight = getDefaultedValue(getSizingFromTheme, 'minHeight');
export const getSize = getDefaultedValue(getSizingFromTheme, 'size');
export const getSpace = getDefaultedValue(getSpacingFromTheme, 'space');
