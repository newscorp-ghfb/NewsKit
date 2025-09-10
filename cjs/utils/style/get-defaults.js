"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getResponsiveSpacingInset = exports.getResponsiveSpacingStackVertical = exports.getResponsiveSpacingStackHorizontal = exports.getResponsiveSpacingInlineVertical = exports.getResponsiveSpacingInlineHorizontal = exports.getResponsiveBorder = exports.getResponsiveMotion = exports.getResponsiveSize = exports.getResponsiveSpace = exports.getWeight = exports.getSpace = exports.getMinSize = exports.getMaxSize = exports.getSize = exports.getWidth = exports.getHeight = exports.getMinWidth = exports.getMinHeight = exports.getSizing = exports.getSpacingInset = exports.getSpacingStackVertical = exports.getSpacingStackHorizontal = exports.getSpacingInlineVertical = exports.getSpacingInlineHorizontal = exports.getTypographyPreset = void 0;
var base_1 = require("./base");
var getters_1 = require("./getters");
exports.getTypographyPreset = (0, base_1.getDefaultedValue)(getters_1.getTypographyPresetFromTheme, 'typographyPreset');
/**
 * @deprecated This method has been deprecated and will be removed in a future release, use getResponsiveSpacingInlineHorizontal instead
 */
exports.getSpacingInlineHorizontal = (0, base_1.getDefaultedValue)(getters_1.getSpacingFromTheme, 'spaceInline', 'marginRight');
/**
 * @deprecated This method has been deprecated and will be removed in a future release, use getResponsiveSpacingInlineVertical instead
 */
exports.getSpacingInlineVertical = (0, base_1.getDefaultedValue)(getters_1.getSpacingFromTheme, 'spaceInline', 'marginBottom');
/**
 * @deprecated This method has been deprecated and will be removed in a future release, use getResponsiveSpacingStackHorizontal instead
 */
exports.getSpacingStackHorizontal = (0, base_1.getDefaultedValue)(getters_1.getSpacingFromTheme, 'spaceStack', 'marginBottom');
/**
 * @deprecated This method has been deprecated and will be removed in a future release, use getResponsiveSpacingStackVertical instead
 */
exports.getSpacingStackVertical = (0, base_1.getDefaultedValue)(getters_1.getSpacingFromTheme, 'spaceStack', 'marginRight');
/**
 * @deprecated This method has been deprecated and will be removed in a future release, use getResponsiveSpace instead
 */
exports.getSpacingInset = (0, base_1.getDefaultedValue)(getters_1.getSpacingInsetFromTheme, 'spaceInset');
/**
 * @deprecated This method has been deprecated and will be removed in a future release, use getResponsiveSize instead
 */
exports.getSizing = (0, base_1.getDefaultedValue)(getters_1.getSizingFromTheme, 'sizing');
/**
 * @deprecated This method has been deprecated and will be removed in a future release, use getResponsiveSize instead
 */
exports.getMinHeight = (0, base_1.getDefaultedValue)(getters_1.getSizingFromTheme, 'minHeight');
/**
 * @deprecated This method has been deprecated and will be removed in a future release, use getResponsiveSize instead
 */
exports.getMinWidth = (0, base_1.getDefaultedValue)(getters_1.getSizingFromTheme, 'minWidth');
/**
 * @deprecated This method has been deprecated and will be removed in a future release, use getResponsiveSize instead
 */
exports.getHeight = (0, base_1.getDefaultedValue)(getters_1.getSizingFromTheme, 'height');
/**
 * @deprecated This method has been deprecated and will be removed in a future release, use getResponsiveSize instead
 */
exports.getWidth = (0, base_1.getDefaultedValue)(getters_1.getSizingFromTheme, 'width');
/**
 * @deprecated This method has been deprecated and will be removed in a future release, use getResponsiveSize instead
 */
exports.getSize = (0, base_1.getDefaultedValue)(getters_1.getSizingFromTheme, 'size');
/**
 * @deprecated This method has been deprecated and will be removed in a future release, use getResponsiveSize instead
 */
exports.getMaxSize = (0, base_1.getDefaultedValue)(getters_1.getSizingFromTheme, 'maxSize');
/**
 * @deprecated This method has been deprecated and will be removed in a future release, use getResponsiveSize instead
 */
exports.getMinSize = (0, base_1.getDefaultedValue)(getters_1.getSizingFromTheme, 'minSize');
/**
 * @deprecated This method has been deprecated and will be removed in a future release, use getResponsiveSpace instead
 */
exports.getSpace = (0, base_1.getDefaultedValue)(getters_1.getSpacingFromTheme, 'space');
/**
 * @deprecated This method has been deprecated and will be removed in a future release, use getResponsiveBorder instead
 */
exports.getWeight = (0, base_1.getDefaultedValue)(getters_1.getBorderFromTheme, 'weight');
exports.getResponsiveSpace = (0, base_1.getResponsiveX)('spacePresets');
exports.getResponsiveSize = (0, base_1.getResponsiveX)('sizing');
exports.getResponsiveMotion = (0, base_1.getResponsiveX)('motions');
exports.getResponsiveBorder = (0, base_1.getResponsiveX)('borders');
var createResponsiveSpace = function (cssAttribute, defaultsObjectKey) { return function (defaultPath, overridePath) {
    return (0, exports.getResponsiveSpace)(cssAttribute, defaultPath, overridePath || '', defaultsObjectKey);
}; };
exports.getResponsiveSpacingInlineHorizontal = createResponsiveSpace('marginRight', 'spaceInline');
exports.getResponsiveSpacingInlineVertical = createResponsiveSpace('marginBottom', 'spaceInline');
exports.getResponsiveSpacingStackHorizontal = createResponsiveSpace('marginBottom', 'spaceStack');
exports.getResponsiveSpacingStackVertical = createResponsiveSpace('marginRight', 'spaceStack');
exports.getResponsiveSpacingInset = createResponsiveSpace('padding', 'spaceInset');
//# sourceMappingURL=get-defaults.js.map