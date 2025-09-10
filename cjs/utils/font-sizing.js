"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLineHeight = exports.getFontSizing = void 0;
// We use a 4px grid for sizing.
var gridSize = 4;
// TODO: PPDSE-32 - remove this once we move the text crop calculation to the typography preset
var getFontSizing = function (fontSize, lineHeight) {
    var fontSizePx = parseInt(fontSize, 10);
    // If line-height in pixels does not align to the grid, we round it up or down to nearest grid line (4px),
    // then convert back to a line-height number.
    var adjustedLineHeight = (Math.round((lineHeight * fontSizePx) / gridSize) * gridSize) / fontSizePx;
    return {
        fontSize: fontSize,
        lineHeight: adjustedLineHeight,
    };
};
exports.getFontSizing = getFontSizing;
/**
 * @deprecated This method has been deprecated and will be removed in a future release. Use typography tokens instead.
 */
/* istanbul ignore next */
var getLineHeight = function (fontSizeToken, lineHeightToken) { return function (theme) {
    var fontSize = theme.fonts[fontSizeToken.replace('fonts.', '')];
    var lineHeight = theme.fonts[lineHeightToken.replace('fonts.', '')];
    var fontSizePx = parseInt(fontSize, 10);
    // If line-height in pixels does not align to the grid, we round it up or down to nearest grid line (4px),
    // then convert back to a line-height number.
    return ((Math.round((lineHeight * fontSizePx) / gridSize) * gridSize) / fontSizePx);
}; };
exports.getLineHeight = getLineHeight;
//# sourceMappingURL=font-sizing.js.map