import {getDefaultedValue, getResponsiveX} from './base';
import {
  getBorderFromTheme,
  getSizingFromTheme,
  getSpacingFromTheme,
  getSpacingInsetFromTheme,
  getTypographyPresetFromTheme,
} from './getters';

export const getTypographyPreset = getDefaultedValue(
  getTypographyPresetFromTheme,
  'typographyPreset',
);

/**
 * @deprecated This method has been deprecated and will be removed in a future release, use getResponsiveSpacingInlineHorizontal instead
 */
export const getSpacingInlineHorizontal = getDefaultedValue(
  getSpacingFromTheme,
  'spaceInline',
  'marginRight',
);

/**
 * @deprecated This method has been deprecated and will be removed in a future release, use getResponsiveSpacingInlineVertical instead
 */
export const getSpacingInlineVertical = getDefaultedValue(
  getSpacingFromTheme,
  'spaceInline',
  'marginBottom',
);

/**
 * @deprecated This method has been deprecated and will be removed in a future release, use getResponsiveSpacingStackHorizontal instead
 */
export const getSpacingStackHorizontal = getDefaultedValue(
  getSpacingFromTheme,
  'spaceStack',
  'marginBottom',
);

/**
 * @deprecated This method has been deprecated and will be removed in a future release, use getResponsiveSpacingStackVertical instead
 */
export const getSpacingStackVertical = getDefaultedValue(
  getSpacingFromTheme,
  'spaceStack',
  'marginRight',
);

/**
 * @deprecated This method has been deprecated and will be removed in a future release, use getResponsiveSpace instead
 */
export const getSpacingInset = getDefaultedValue(
  getSpacingInsetFromTheme,
  'spaceInset',
);

/**
 * @deprecated This method has been deprecated and will be removed in a future release, use getResponsiveSize instead
 */
export const getSizing = getDefaultedValue(getSizingFromTheme, 'sizing');
/**
 * @deprecated This method has been deprecated and will be removed in a future release, use getResponsiveSize instead
 */
export const getMinHeight = getDefaultedValue(getSizingFromTheme, 'minHeight');
/**
 * @deprecated This method has been deprecated and will be removed in a future release, use getResponsiveSize instead
 */
export const getMinWidth = getDefaultedValue(getSizingFromTheme, 'minWidth');
/**
 * @deprecated This method has been deprecated and will be removed in a future release, use getResponsiveSize instead
 */
export const getHeight = getDefaultedValue(getSizingFromTheme, 'height');
/**
 * @deprecated This method has been deprecated and will be removed in a future release, use getResponsiveSize instead
 */
export const getWidth = getDefaultedValue(getSizingFromTheme, 'width');
/**
 * @deprecated This method has been deprecated and will be removed in a future release, use getResponsiveSize instead
 */
export const getSize = getDefaultedValue(getSizingFromTheme, 'size');
/**
 * @deprecated This method has been deprecated and will be removed in a future release, use getResponsiveSize instead
 */
export const getMaxSize = getDefaultedValue(getSizingFromTheme, 'maxSize');
/**
 * @deprecated This method has been deprecated and will be removed in a future release, use getResponsiveSize instead
 */
export const getMinSize = getDefaultedValue(getSizingFromTheme, 'minSize');
/**
 * @deprecated This method has been deprecated and will be removed in a future release, use getResponsiveSpace instead
 */
export const getSpace = getDefaultedValue(getSpacingFromTheme, 'space');
/**
 * @deprecated This method has been deprecated and will be removed in a future release, use getResponsiveBorder instead
 */
export const getWeight = getDefaultedValue(getBorderFromTheme, 'weight');

export const getResponsiveSpace = getResponsiveX('spacePresets');
export const getResponsiveSize = getResponsiveX('sizing');
export const getResponsiveMotion = getResponsiveX('motions');
export const getResponsiveBorder = getResponsiveX('borders');

const createResponsiveSpace = (
  cssAttribute: string,
  defaultsObjectKey: string,
) => (defaultPath: string, overridePath?: string) =>
  getResponsiveSpace(
    cssAttribute,
    defaultPath,
    overridePath || '',
    defaultsObjectKey,
  );

export const getResponsiveSpacingInlineHorizontal = createResponsiveSpace(
  'marginRight',
  'spaceInline',
);
export const getResponsiveSpacingInlineVertical = createResponsiveSpace(
  'marginBottom',
  'spaceInline',
);
export const getResponsiveSpacingStackHorizontal = createResponsiveSpace(
  'marginBottom',
  'spaceStack',
);
export const getResponsiveSpacingStackVertical = createResponsiveSpace(
  'marginRight',
  'spaceStack',
);
