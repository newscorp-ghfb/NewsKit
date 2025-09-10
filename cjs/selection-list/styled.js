"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyledSelectionListOption = exports.StyledSelectionList = void 0;
var tslib_1 = require("tslib");
var utils_1 = require("../utils");
var logical_properties_1 = require("../utils/logical-properties");
exports.StyledSelectionList = utils_1.styled.div(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  box-sizing: border-box;\n  ", "\n"], ["\n  box-sizing: border-box;\n  ", "\n"])), (0, logical_properties_1.logicalProps)('selectionList'));
exports.StyledSelectionListOption = utils_1.styled.button(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["\n  width: 100%;\n  box-sizing: border-box;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  ", "\n\n  ", "\n  ", "\n  ", "\n  ", "\n"], ["\n  width: 100%;\n  box-sizing: border-box;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  ", "\n\n  ", "\n  ", "\n  ", "\n  ", "\n"])), function (_a) {
    var selected = _a.selected;
    return (0, utils_1.getStylePreset)('selectionListOption', '', {
        isSelected: selected,
    });
}, (0, utils_1.getTypographyPreset)('selectionListOption', ''), (0, utils_1.getResponsiveSize)('minHeight', 'selectionListOption', '', 'minHeight'), (0, utils_1.getResponsiveSpace)('columnGap', 'selectionListOption', '', 'spaceInline'), (0, logical_properties_1.logicalProps)('selectionListOption'));
var templateObject_1, templateObject_2;
//# sourceMappingURL=styled.js.map