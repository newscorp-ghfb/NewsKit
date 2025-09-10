"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyledButton = exports.StyledUnorderedList = exports.StyledNav = void 0;
var tslib_1 = require("tslib");
var style_1 = require("../utils/style");
var logical_properties_1 = require("../utils/logical-properties");
var button_1 = require("../button");
var grid_layout_1 = require("../grid-layout");
exports.StyledNav = style_1.styled.nav(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  ", ";\n  ", ";\n  ", ";\n"], ["\n  ", ";\n  ", ";\n  ", ";\n"])), function (_a) {
    var size = _a.size;
    return (0, style_1.getStylePreset)("pagination.".concat(size), '');
}, function (_a) {
    var size = _a.size;
    return (0, style_1.getTypographyPreset)("pagination.".concat(size), '');
}, function (_a) {
    var size = _a.size;
    return (0, logical_properties_1.logicalProps)("pagination.".concat(size), '');
});
exports.StyledUnorderedList = (0, style_1.styled)(grid_layout_1.GridLayout)(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["\n  list-style: none;\n  margin: 0;\n  padding: 0;\n"], ["\n  list-style: none;\n  margin: 0;\n  padding: 0;\n"])));
exports.StyledButton = (0, style_1.styled)(button_1.Button)(templateObject_3 || (templateObject_3 = tslib_1.__makeTemplateObject(["\n  ", ";\n"], ["\n  ", ";\n"])), function (_a) {
    var size = _a.size, selected = _a.selected;
    return (0, style_1.getStylePreset)("paginationItem.".concat(size), '', { isSelected: selected });
});
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=styled.js.map