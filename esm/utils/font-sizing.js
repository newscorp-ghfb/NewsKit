// We use a 4px grid for sizing.
var gridSize = 4;
// TODO: PPDSE-32 - remove this once we move the text crop calculation to the typography preset
export var getFontSizing = function (fontSize, lineHeight) {
    var fontSizePx = parseInt(fontSize, 10);
    // If line-height in pixels does not align to the grid, we round it up or down to nearest grid line (4px),
    // then convert back to a line-height number.
    var adjustedLineHeight = (Math.round((lineHeight * fontSizePx) / gridSize) * gridSize) / fontSizePx;
    return {
        fontSize: fontSize,
        lineHeight: adjustedLineHeight,
    };
};
/**
 * @deprecated This method has been deprecated and will be removed in a future release. Use typography tokens instead.
 */
/* istanbul ignore next */
export var getLineHeight = function (fontSizeToken, lineHeightToken) { return function (theme) {
    var fontSize = theme.fonts[fontSizeToken.replace('fonts.', '')];
    var lineHeight = theme.fonts[lineHeightToken.replace('fonts.', '')];
    var fontSizePx = parseInt(fontSize, 10);
    // If line-height in pixels does not align to the grid, we round it up or down to nearest grid line (4px),
    // then convert back to a line-height number.
    return ((Math.round((lineHeight * fontSizePx) / gridSize) * gridSize) / fontSizePx);
}; };
//# sourceMappingURL=font-sizing.js.map