"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyledThumb = exports.StyledTrackIcon = exports.StyledSwitchContainer = void 0;
var tslib_1 = require("tslib");
var utils_1 = require("../utils");
var logical_properties_1 = require("../utils/logical-properties");
exports.StyledSwitchContainer = utils_1.styled.div(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  position: relative;\n  width: 100%;\n  height: 100%;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  place-items: center;\n"], ["\n  position: relative;\n  width: 100%;\n  height: 100%;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  place-items: center;\n"])));
exports.StyledTrackIcon = utils_1.styled.div(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["\n  display: flex;\n  width: 100%;\n  ", ";\n\n  ", ";\n\n  svg {\n    height: 100%;\n    width: 100%;\n\n    // Track icons should not be taller than the track or wider than the thumb\n    // so that they stay within the track and can be covered by the thumb.\n    ", "\n    ", "\n  }\n"], ["\n  display: flex;\n  width: 100%;\n  ", ";\n\n  ", ";\n\n  svg {\n    height: 100%;\n    width: 100%;\n\n    // Track icons should not be taller than the track or wider than the thumb\n    // so that they stay within the track and can be covered by the thumb.\n    ", "\n    ", "\n  }\n"])), function (_a) {
    var justifyContent = _a.justifyContent;
    return ({ justifyContent: justifyContent });
}, function (_a) {
    var size = _a.size, state = _a.state;
    return (0, utils_1.getStylePreset)("switch.".concat(size, ".trackIcon"), 'trackIcon', {
        isDisabled: state === 'disabled',
    });
}, function (_a) {
    var size = _a.size;
    return (0, utils_1.getResponsiveSize)(function (maxWidth) { return ({ maxWidth: maxWidth }); }, "switch.".concat(size, ".thumb"), 'thumb', 'size');
}, function (_a) {
    var size = _a.size;
    return (0, utils_1.getResponsiveSize)(function (maxHeight) { return ({ maxHeight: maxHeight }); }, "switch.".concat(size, ".input"), 'input', 'blockSize');
});
exports.StyledThumb = utils_1.styled.div(templateObject_3 || (templateObject_3 = tslib_1.__makeTemplateObject(["\n  ", "\n  ", "\n\n  ", "  \n  \n  position: absolute;\n  aspect-ratio: 1/1;\n  ", "\n  display: grid;\n  place-items: center;\n"], ["\n  ", "\n  ", "\n\n  ", "  \n  \n  position: absolute;\n  aspect-ratio: 1/1;\n  ", "\n  display: grid;\n  place-items: center;\n"])), function (_a) {
    var size = _a.size, isChecked = _a.checked, isFocused = _a.isFocused, isHovered = _a.isHovered;
    return (0, utils_1.getStylePreset)("switch.".concat(size, ".thumb"), 'thumb', {
        isChecked: isChecked,
        isFocused: isFocused,
        isHovered: isHovered,
    });
}, function (_a) {
    var size = _a.size, checked = _a.checked;
    return (0, utils_1.getResponsiveSize)(function (rectSize) { return ({
        width: rectSize,
        height: rectSize,
        left: checked ? "calc(100% - ".concat(rectSize, ")") : '0',
    }); }, "switch.".concat(size, ".thumb"), 'thumb', 'size');
}, function (_a) {
    var size = _a.size;
    return (0, logical_properties_1.logicalProps)("switch.".concat(size, ".thumb"), 'thumb');
}, function (_a) {
    var size = _a.size;
    return (0, utils_1.getTransitionPreset)("switch.".concat(size, ".thumb"), 'thumb');
});
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=styled.js.map