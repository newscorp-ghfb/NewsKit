"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyledCell = exports.StyledListWrapper = exports.StyledLink = exports.StyledListItemContainer = exports.StyledWrapper = exports.StyledGrid = void 0;
var tslib_1 = require("tslib");
var grid_1 = require("../grid");
var utils_1 = require("../utils");
var logical_properties_1 = require("../utils/logical-properties");
var getAlign = function (align) {
    switch (align) {
        case 'center':
            return 'align-self: center';
        case 'end':
            return 'align-self: flex-end';
        default:
            return '';
    }
};
exports.StyledGrid = (0, utils_1.styled)(grid_1.Grid)(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  ", ";\n  ", "\n  ", "\n"], ["\n  ", ";\n  ", "\n  ", "\n"])), function (props) {
    return (0, utils_1.getStylePreset)('structuredListItem', '', props.hasHref ? {} : { omitStates: ['active', 'hover', 'focus'] })(props);
}, (0, logical_properties_1.logicalPaddingProps)('structuredListItem'), (0, utils_1.getResponsiveSize)('minHeight', 'structuredListItem', '', 'minHeight'));
exports.StyledWrapper = utils_1.styled.div(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["\n  display: flex;\n  justify-content: flex-start;\n  flex-direction: column;\n"], ["\n  display: flex;\n  justify-content: flex-start;\n  flex-direction: column;\n"])));
exports.StyledListItemContainer = utils_1.styled.li(templateObject_3 || (templateObject_3 = tslib_1.__makeTemplateObject(["\n  cursor: ", ";\n  list-style: none;\n  width: 100%;\n"], ["\n  cursor: ", ";\n  list-style: none;\n  width: 100%;\n"])), function (_a) {
    var disabled = _a.disabled;
    return disabled && 'not-allowed';
});
exports.StyledLink = utils_1.styled.a(templateObject_4 || (templateObject_4 = tslib_1.__makeTemplateObject(["\n  text-decoration: none;\n  outline-offset: -1px;\n"], ["\n  text-decoration: none;\n  outline-offset: -1px;\n"])));
exports.StyledListWrapper = utils_1.styled.ul(templateObject_5 || (templateObject_5 = tslib_1.__makeTemplateObject(["\n  list-style: none;\n  padding-left: 0;\n  ", "\n  margin: 0;\n  ", "\n"], ["\n  list-style: none;\n  padding-left: 0;\n  ", "\n  margin: 0;\n  ", "\n"])), (0, utils_1.getResponsiveSize)('width', 'structuredList', '', 'width'), (0, logical_properties_1.logicalProps)());
exports.StyledCell = (0, utils_1.styled)(grid_1.Cell)(templateObject_6 || (templateObject_6 = tslib_1.__makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), function (_a) {
    var align = _a.align;
    return getAlign(align || 'start');
});
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
//# sourceMappingURL=styled.js.map