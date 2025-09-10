import { __makeTemplateObject } from "tslib";
import { getResponsiveSize, getStylePreset, getTransitionPreset, styled, } from '../utils';
import { logicalProps } from '../utils/logical-properties';
export var StyledSwitchContainer = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n  width: 100%;\n  height: 100%;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  place-items: center;\n"], ["\n  position: relative;\n  width: 100%;\n  height: 100%;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  place-items: center;\n"])));
export var StyledTrackIcon = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  width: 100%;\n  ", ";\n\n  ", ";\n\n  svg {\n    height: 100%;\n    width: 100%;\n\n    // Track icons should not be taller than the track or wider than the thumb\n    // so that they stay within the track and can be covered by the thumb.\n    ", "\n    ", "\n  }\n"], ["\n  display: flex;\n  width: 100%;\n  ", ";\n\n  ", ";\n\n  svg {\n    height: 100%;\n    width: 100%;\n\n    // Track icons should not be taller than the track or wider than the thumb\n    // so that they stay within the track and can be covered by the thumb.\n    ", "\n    ", "\n  }\n"])), function (_a) {
    var justifyContent = _a.justifyContent;
    return ({ justifyContent: justifyContent });
}, function (_a) {
    var size = _a.size, state = _a.state;
    return getStylePreset("switch.".concat(size, ".trackIcon"), 'trackIcon', {
        isDisabled: state === 'disabled',
    });
}, function (_a) {
    var size = _a.size;
    return getResponsiveSize(function (maxWidth) { return ({ maxWidth: maxWidth }); }, "switch.".concat(size, ".thumb"), 'thumb', 'size');
}, function (_a) {
    var size = _a.size;
    return getResponsiveSize(function (maxHeight) { return ({ maxHeight: maxHeight }); }, "switch.".concat(size, ".input"), 'input', 'blockSize');
});
export var StyledThumb = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  ", "\n  ", "\n\n  ", "  \n  \n  position: absolute;\n  aspect-ratio: 1/1;\n  ", "\n  display: grid;\n  place-items: center;\n"], ["\n  ", "\n  ", "\n\n  ", "  \n  \n  position: absolute;\n  aspect-ratio: 1/1;\n  ", "\n  display: grid;\n  place-items: center;\n"])), function (_a) {
    var size = _a.size, isChecked = _a.checked, isFocused = _a.isFocused, isHovered = _a.isHovered;
    return getStylePreset("switch.".concat(size, ".thumb"), 'thumb', {
        isChecked: isChecked,
        isFocused: isFocused,
        isHovered: isHovered,
    });
}, function (_a) {
    var size = _a.size, checked = _a.checked;
    return getResponsiveSize(function (rectSize) { return ({
        width: rectSize,
        height: rectSize,
        left: checked ? "calc(100% - ".concat(rectSize, ")") : '0',
    }); }, "switch.".concat(size, ".thumb"), 'thumb', 'size');
}, function (_a) {
    var size = _a.size;
    return logicalProps("switch.".concat(size, ".thumb"), 'thumb');
}, function (_a) {
    var size = _a.size;
    return getTransitionPreset("switch.".concat(size, ".thumb"), 'thumb');
});
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=styled.js.map