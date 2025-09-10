"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyledAccordionWrapper = exports.StyledPanel = exports.StyledPanelTransitionContainer = exports.StyledIconWrapper = exports.StyledLabel = exports.StyledHeader = exports.StyledAccordionButton = void 0;
var tslib_1 = require("tslib");
var utils_1 = require("../utils");
var logical_properties_1 = require("../utils/logical-properties");
exports.StyledAccordionButton = utils_1.styled.button(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  display: flex;\n  box-sizing: border-box;\n  align-items: center;\n  width: 100%;\n  cursor: ", ";\n  & > :not(:last-of-type) {\n    ", "\n  }\n  ", ";\n  ", ";\n  ", ";\n  ", "\n  ", "\n  ", "\n"], ["\n  display: flex;\n  box-sizing: border-box;\n  align-items: center;\n  width: 100%;\n  cursor: ", ";\n  & > :not(:last-of-type) {\n    ", "\n  }\n  ", ";\n  ", ";\n  ", ";\n  ", "\n  ", "\n  ", "\n"])), function (_a) {
    var disabled = _a.disabled;
    return (disabled ? 'not-allowed' : 'pointer');
}, (0, utils_1.getResponsiveSpace)('marginRight', 'accordion.header', 'header', 'spaceInline'), (0, utils_1.getResponsiveSize)('minWidth', 'accordion.header', 'header', 'minWidth'), (0, utils_1.getResponsiveSize)('minHeight', 'accordion.header', 'header', 'minHeight'), function (_a) {
    var disabled = _a.disabled;
    return (0, utils_1.getStylePreset)('accordion.header', 'header', {
        isDisabled: disabled,
    });
}, (0, utils_1.getTypographyPreset)('accordion.header', 'header'), (0, logical_properties_1.logicalProps)('accordion.header', 'header'), (0, utils_1.getTransitionPreset)('accordion.header', 'header'));
exports.StyledHeader = utils_1.styled.div(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["\n  text-align: start;\n  flex: 1;\n"], ["\n  text-align: start;\n  flex: 1;\n"])));
exports.StyledLabel = utils_1.styled.div(templateObject_3 || (templateObject_3 = tslib_1.__makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), (0, utils_1.getTypographyPreset)('accordion.header.label', 'header.label'));
exports.StyledIconWrapper = utils_1.styled.div(templateObject_4 || (templateObject_4 = tslib_1.__makeTemplateObject(["\n  display: flex;\n  align-self: center;\n"], ["\n  display: flex;\n  align-self: center;\n"])));
exports.StyledPanelTransitionContainer = utils_1.styled.div(templateObject_5 || (templateObject_5 = tslib_1.__makeTemplateObject(["\n  overflow: hidden;\n  ", "\n"], ["\n  overflow: hidden;\n  ", "\n"])), (0, utils_1.getTransitionPreset)('accordion.panel', 'panel', 'nk-accordion'));
exports.StyledPanel = utils_1.styled.div(templateObject_6 || (templateObject_6 = tslib_1.__makeTemplateObject(["\n  ", ";\n  ", "\n"], ["\n  ", ";\n  ", "\n"])), (0, utils_1.getStylePreset)('accordion.panel', 'panel'), (0, logical_properties_1.logicalProps)('accordion.panel', 'panel'));
exports.StyledAccordionWrapper = utils_1.styled.div(templateObject_7 || (templateObject_7 = tslib_1.__makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), (0, logical_properties_1.logicalProps)('accordion'));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;
//# sourceMappingURL=styled.js.map