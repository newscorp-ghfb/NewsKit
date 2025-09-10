"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AudioPlayerContainer = exports.StyledFullWidthVisible = exports.Container = exports.StyledInput = exports.StyledLabel = exports.StyledWrapper = exports.DrawerContainer = exports.Box = exports.ModalWrapper = void 0;
var tslib_1 = require("tslib");
/* istanbul ignore file */
var block_1 = require("../block");
var grid_1 = require("../grid");
var utils_1 = require("../utils");
exports.ModalWrapper = utils_1.styled.div(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  position: relative;\n  border: 1px solid orange;\n  width: 80vw;\n  height: 80vh;\n  ", ";\n  ", ";\n"], ["\n  position: relative;\n  border: 1px solid orange;\n  width: 80vw;\n  height: 80vh;\n  ", ";\n  ", ";\n"])), (0, utils_1.getColorCssFromTheme)('color', 'inkContrast'), (0, utils_1.getColorCssFromTheme)('backgroundColor', 'inkInverse'));
exports.Box = utils_1.styled.div(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["\n  width: 80vw;\n"], ["\n  width: 80vw;\n"])));
exports.DrawerContainer = utils_1.styled.div(templateObject_3 || (templateObject_3 = tslib_1.__makeTemplateObject(["\n  ", ";\n  ", ";\n\n  position: relative;\n  border: 1px solid red;\n  width: 50vw;\n  height: 80vh;\n  overflow: hidden;\n"], ["\n  ", ";\n  ", ";\n\n  position: relative;\n  border: 1px solid red;\n  width: 50vw;\n  height: 80vh;\n  overflow: hidden;\n"])), (0, utils_1.getColorCssFromTheme)('color', 'inkContrast'), (0, utils_1.getColorCssFromTheme)('backgroundColor', 'inkInverse'));
exports.StyledWrapper = utils_1.styled.div(templateObject_4 || (templateObject_4 = tslib_1.__makeTemplateObject(["\n  ", ";\n  ", ";\n"], ["\n  ", ";\n  ", ";\n"])), (0, utils_1.getSpacingCssFromTheme)('marginTop', 'space050'), (0, utils_1.getSpacingCssFromTheme)('marginBottom', 'space100'));
exports.StyledLabel = utils_1.styled.label(templateObject_5 || (templateObject_5 = tslib_1.__makeTemplateObject(["\n  ", ";\n"], ["\n  ", ";\n"])), (0, utils_1.getSpacingCssFromTheme)('marginRight', 'space050'));
exports.StyledInput = utils_1.styled.input(templateObject_6 || (templateObject_6 = tslib_1.__makeTemplateObject(["\n  ", ";\n"], ["\n  ", ";\n"])), (0, utils_1.getSpacingCssFromTheme)('marginRight', 'space030'));
exports.Container = (0, utils_1.styled)(block_1.Block)(templateObject_7 || (templateObject_7 = tslib_1.__makeTemplateObject(["\n  width: ", ";\n  height: ", ";\n  border: ", ";\n"], ["\n  width: ", ";\n  height: ", ";\n  border: ", ";\n"])), function (_a) {
    var width = _a.width;
    return width || '300px';
}, function (_a) {
    var height = _a.height;
    return height || '150px';
}, function (_a) {
    var theme = _a.theme, border = _a.border;
    return border ? "solid 1px ".concat(theme.colors.red050) : null;
});
exports.StyledFullWidthVisible = (0, utils_1.styled)(grid_1.Visible)(templateObject_8 || (templateObject_8 = tslib_1.__makeTemplateObject(["\n  width: 100%;\n"], ["\n  width: 100%;\n"])));
exports.AudioPlayerContainer = utils_1.styled.div(templateObject_9 || (templateObject_9 = tslib_1.__makeTemplateObject(["\n  max-width: 1156px;\n  ", ";\n"], ["\n  max-width: 1156px;\n  ", ";\n"])), (0, utils_1.getSpacingCssFromTheme)('marginBottom', 'space050'));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9;
//# sourceMappingURL=styled.js.map