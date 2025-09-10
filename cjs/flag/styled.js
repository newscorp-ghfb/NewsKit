"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyledGridLayout = void 0;
var tslib_1 = require("tslib");
var grid_layout_1 = require("../grid-layout");
var style_1 = require("../utils/style");
exports.StyledGridLayout = (0, style_1.styled)(grid_layout_1.GridLayout)(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  box-sizing: border-box;\n  text-decoration: none;\n\n  ", ";\n  ", ";\n\n  svg {\n    ", ";\n    ", ";\n  }\n\n  cursor: ", ";\n\n  // Button related styles\n  overflow: hidden;\n  border: none;\n  appearance: none;\n  // End of button related styles\n\n  ", "\n"], ["\n  box-sizing: border-box;\n  text-decoration: none;\n\n  ", ";\n  ", ";\n\n  svg {\n    ", ";\n    ", ";\n  }\n\n  cursor: ", ";\n\n  // Button related styles\n  overflow: hidden;\n  border: none;\n  appearance: none;\n  // End of button related styles\n\n  ", "\n"])), function (props) {
    return (0, style_1.getResponsiveSize)(function (minHeight) {
        return props.overrides && props.overrides.height
            ? { minHeight: 'auto' }
            : { minHeight: minHeight };
    }, '', '', 'minHeight')(props);
}, function (props) {
    return (0, style_1.getResponsiveSize)(function (minWidth) {
        return props.overrides && props.overrides.width
            ? { minWidth: 'auto' }
            : { minWidth: minWidth };
    }, '', '', 'minWidth')(props);
}, (0, style_1.getResponsiveSize)('width', '', '', 'iconSize'), (0, style_1.getResponsiveSize)('height', '', '', 'iconSize'), function (_a) {
    var $disabled = _a.$disabled;
    return ($disabled ? 'not-allowed' : 'default');
}, function (_a) {
    var $disabled = _a.$disabled, $loading = _a.$loading;
    return (0, style_1.getStylePreset)('', '', {
        isDisabled: $disabled,
        isLoading: $loading,
    });
});
var templateObject_1;
//# sourceMappingURL=styled.js.map