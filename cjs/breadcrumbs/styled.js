"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyledButton = exports.StyledListItem = exports.StyledOrderedList = exports.StyledNav = void 0;
var tslib_1 = require("tslib");
var style_1 = require("../utils/style");
var logical_properties_1 = require("../utils/logical-properties");
var button_1 = require("../button");
exports.StyledNav = style_1.styled.nav(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  ", "\n  ", ";\n"], ["\n  ", "\n  ", ";\n"])), (0, logical_properties_1.logicalProps)(), (0, style_1.getStylePreset)(''));
exports.StyledOrderedList = style_1.styled.ol(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["\n  list-style: none;\n  display: inline-flex;\n  margin: 0;\n  padding: 0px;\n"], ["\n  list-style: none;\n  display: inline-flex;\n  margin: 0;\n  padding: 0px;\n"])));
exports.StyledListItem = style_1.styled.li(templateObject_3 || (templateObject_3 = tslib_1.__makeTemplateObject(["\n  display: flex;\n  justify-content: center;\n  align-self: center;\n"], ["\n  display: flex;\n  justify-content: center;\n  align-self: center;\n"])));
exports.StyledButton = (0, style_1.styled)(button_1.Button)(templateObject_4 || (templateObject_4 = tslib_1.__makeTemplateObject(["\n  ", ";\n  cursor: ", ";\n"], ["\n  ", ";\n  cursor: ", ";\n"])), function (_a) {
    var size = _a.size, selected = _a.selected;
    return (0, style_1.getStylePreset)("breadcrumbItem.".concat(size), '', { isSelected: selected });
}, function (_a) {
    var selected = _a.selected;
    return (selected ? 'text' : 'pointer');
});
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
//# sourceMappingURL=styled.js.map