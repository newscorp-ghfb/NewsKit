"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyledMarkerBlock = exports.StyledBlock = exports.StyledListItem = exports.StyledUl = void 0;
var tslib_1 = require("tslib");
var block_1 = require("../block");
var logical_properties_1 = require("../utils/logical-properties");
var style_1 = require("../utils/style");
var getMarkerAlign = function (align) {
    switch (align) {
        case 'start':
            return 'align-self: start;';
        case 'end':
            return 'align-self: end;';
        default:
            return 'align-self: center;';
    }
};
exports.StyledUl = style_1.styled.ul(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  ", "\n"], ["\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  ", "\n"])), (0, logical_properties_1.logicalProps)());
exports.StyledListItem = style_1.styled.li(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["\n  &:last-child + div {\n    margin: 0;\n  }\n"], ["\n  &:last-child + div {\n    margin: 0;\n  }\n"])));
exports.StyledBlock = (0, style_1.styled)(block_1.Block)(templateObject_3 || (templateObject_3 = tslib_1.__makeTemplateObject(["\n  display: flex;\n  align-items: center;\n"], ["\n  display: flex;\n  align-items: center;\n"])));
exports.StyledMarkerBlock = (0, style_1.styled)(block_1.Block)(templateObject_4 || (templateObject_4 = tslib_1.__makeTemplateObject(["\n  ", ";\n  ", "\n  svg,\n  img {\n    display: block;\n  }\n"], ["\n  ", ";\n  ", "\n  svg,\n  img {\n    display: block;\n  }\n"])), (0, style_1.getStylePreset)('unorderedList.marker', 'marker'), function (_a) {
    var markerAlign = _a.markerAlign;
    return getMarkerAlign(markerAlign || 'center');
});
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
//# sourceMappingURL=styled.js.map