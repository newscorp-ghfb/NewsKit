"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyledPopoverCloseButtonContainer = exports.StyledPopoverContent = exports.StyledPopoverHeader = exports.StyledPopoverInnerPanel = void 0;
var tslib_1 = require("tslib");
var style_1 = require("../utils/style");
var logical_properties_1 = require("../utils/logical-properties");
var styled_1 = require("../dialog/styled");
exports.StyledPopoverInnerPanel = style_1.styled.div(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), function (_a) {
    var closePosition = _a.closePosition;
    return (0, styled_1.createCssGrid)({ closePosition: closePosition });
});
exports.StyledPopoverHeader = style_1.styled.div(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["\n  display: flex;\n  grid-area: header;\n  align-items: center;\n  box-sizing: border-box;\n  ", "\n  ", "\n  ", "\n"], ["\n  display: flex;\n  grid-area: header;\n  align-items: center;\n  box-sizing: border-box;\n  ", "\n  ", "\n  ", "\n"])), (0, style_1.getStylePreset)('popover.header', 'header'), (0, style_1.getTypographyPreset)('popover.header', 'header'), (0, logical_properties_1.logicalProps)('popover.header', 'header'));
exports.StyledPopoverContent = style_1.styled.div(templateObject_3 || (templateObject_3 = tslib_1.__makeTemplateObject(["\n  grid-area: content;\n  ", "\n  ", "\n  ", "\n"], ["\n  grid-area: content;\n  ", "\n  ", "\n  ", "\n"])), (0, style_1.getStylePreset)('popover.content', 'content'), (0, style_1.getTypographyPreset)('popover.content', 'content'), (0, logical_properties_1.logicalProps)('popover.content', 'content'));
exports.StyledPopoverCloseButtonContainer = style_1.styled.div(templateObject_4 || (templateObject_4 = tslib_1.__makeTemplateObject(["\n  grid-area: close;\n  display: flex;\n  align-items: center;\n  box-sizing: border-box;\n  height: 100%;\n  ", "\n  ", "\n  ", "\n"], ["\n  grid-area: close;\n  display: flex;\n  align-items: center;\n  box-sizing: border-box;\n  height: 100%;\n  ", "\n  ", "\n  ", "\n"])), (0, style_1.getStylePreset)('popover.closeButtonContainer', 'closeButtonContainer'), (0, logical_properties_1.logicalProps)('popover.closeButtonContainer', 'closeButtonContainer'), function (_a) {
    var closePosition = _a.closePosition;
    return closePosition === 'left' ? "padding-right: 0;" : "padding-left: 0;";
});
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
//# sourceMappingURL=styled.js.map