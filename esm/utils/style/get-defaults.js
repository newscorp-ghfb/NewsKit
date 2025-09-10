import { getDefaultedValue, getResponsiveX } from './base';
import { getBorderFromTheme, getSizingFromTheme, getSpacingFromTheme, getSpacingInsetFromTheme, getTypographyPresetFromTheme, } from './getters';
export var getTypographyPreset = getDefaultedValue(getTypographyPresetFromTheme, 'typographyPreset');
/**
 * @deprecated This method has been deprecated and will be removed in a future release, use getResponsiveSpacingInlineHorizontal instead
 */
export var getSpacingInlineHorizontal = getDefaultedValue(getSpacingFromTheme, 'spaceInline', 'marginRight');
/**
 * @deprecated This method has been deprecated and will be removed in a future release, use getResponsiveSpacingInlineVertical instead
 */
export var getSpacingInlineVertical = getDefaultedValue(getSpacingFromTheme, 'spaceInline', 'marginBottom');
/**
 * @deprecated This method has been deprecated and will be removed in a future release, use getResponsiveSpacingStackHorizontal instead
 */
export var getSpacingStackHorizontal = getDefaultedValue(getSpacingFromTheme, 'spaceStack', 'marginBottom');
/**
 * @deprecated This method has been deprecated and will be removed in a future release, use getResponsiveSpacingStackVertical instead
 */
export var getSpacingStackVertical = getDefaultedValue(getSpacingFromTheme, 'spaceStack', 'marginRight');
/**
 * @deprecated This method has been deprecated and will be removed in a future release, use getResponsiveSpace instead
 */
export var getSpacingInset = getDefaultedValue(getSpacingInsetFromTheme, 'spaceInset');
/**
 * @deprecated This method has been deprecated and will be removed in a future release, use getResponsiveSize instead
 */
export var getSizing = getDefaultedValue(getSizingFromTheme, 'sizing');
/**
 * @deprecated This method has been deprecated and will be removed in a future release, use getResponsiveSize instead
 */
export var getMinHeight = getDefaultedValue(getSizingFromTheme, 'minHeight');
/**
 * @deprecated This method has been deprecated and will be removed in a future release, use getResponsiveSize instead
 */
export var getMinWidth = getDefaultedValue(getSizingFromTheme, 'minWidth');
/**
 * @deprecated This method has been deprecated and will be removed in a future release, use getResponsiveSize instead
 */
export var getHeight = getDefaultedValue(getSizingFromTheme, 'height');
/**
 * @deprecated This method has been deprecated and will be removed in a future release, use getResponsiveSize instead
 */
export var getWidth = getDefaultedValue(getSizingFromTheme, 'width');
/**
 * @deprecated This method has been deprecated and will be removed in a future release, use getResponsiveSize instead
 */
export var getSize = getDefaultedValue(getSizingFromTheme, 'size');
/**
 * @deprecated This method has been deprecated and will be removed in a future release, use getResponsiveSize instead
 */
export var getMaxSize = getDefaultedValue(getSizingFromTheme, 'maxSize');
/**
 * @deprecated This method has been deprecated and will be removed in a future release, use getResponsiveSize instead
 */
export var getMinSize = getDefaultedValue(getSizingFromTheme, 'minSize');
/**
 * @deprecated This method has been deprecated and will be removed in a future release, use getResponsiveSpace instead
 */
export var getSpace = getDefaultedValue(getSpacingFromTheme, 'space');
/**
 * @deprecated This method has been deprecated and will be removed in a future release, use getResponsiveBorder instead
 */
export var getWeight = getDefaultedValue(getBorderFromTheme, 'weight');
export var getResponsiveSpace = getResponsiveX('spacePresets');
export var getResponsiveSize = getResponsiveX('sizing');
export var getResponsiveMotion = getResponsiveX('motions');
export var getResponsiveBorder = getResponsiveX('borders');
var createResponsiveSpace = function (cssAttribute, defaultsObjectKey) { return function (defaultPath, overridePath) {
    return getResponsiveSpace(cssAttribute, defaultPath, overridePath || '', defaultsObjectKey);
}; };
export var getResponsiveSpacingInlineHorizontal = createResponsiveSpace('marginRight', 'spaceInline');
export var getResponsiveSpacingInlineVertical = createResponsiveSpace('marginBottom', 'spaceInline');
export var getResponsiveSpacingStackHorizontal = createResponsiveSpace('marginBottom', 'spaceStack');
export var getResponsiveSpacingStackVertical = createResponsiveSpace('marginRight', 'spaceStack');
export var getResponsiveSpacingInset = createResponsiveSpace('padding', 'spaceInset');
//# sourceMappingURL=get-defaults.js.map