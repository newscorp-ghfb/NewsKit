"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyledCloseButtonContainer = exports.StyledDialogContent = exports.StyledDialogHeader = exports.StyledDialogHeaderBG = exports.StyledMoveFocusInside = exports.StyledDialogPanel = exports.createCssGrid = void 0;
var tslib_1 = require("tslib");
var react_focus_lock_1 = require("react-focus-lock");
var logical_properties_1 = require("../utils/logical-properties");
var style_1 = require("../utils/style");
var createCssGrid = function (_a) {
    var closePosition = _a.closePosition;
    return closePosition === 'left'
        ? (0, style_1.css)(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n        display: grid;\n        grid-template-areas:\n          'close header'\n          'content content';\n        grid-template-columns: auto 1fr;\n        grid-template-rows: auto 1fr;\n      "], ["\n        display: grid;\n        grid-template-areas:\n          'close header'\n          'content content';\n        grid-template-columns: auto 1fr;\n        grid-template-rows: auto 1fr;\n      "]))) : (0, style_1.css)(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["\n        display: grid;\n        grid-template-areas:\n          'header close'\n          'content content';\n        grid-template-columns: 1fr auto;\n        grid-template-rows: auto 1fr;\n      "], ["\n        display: grid;\n        grid-template-areas:\n          'header close'\n          'content content';\n        grid-template-columns: 1fr auto;\n        grid-template-rows: auto 1fr;\n      "])));
};
exports.createCssGrid = createCssGrid;
exports.StyledDialogPanel = style_1.styled.div(templateObject_3 || (templateObject_3 = tslib_1.__makeTemplateObject(["\n  box-sizing: border-box;\n  ", "\n  ", "\n  ", "  \n  overflow: hidden;\n"], ["\n  box-sizing: border-box;\n  ", "\n  ", "\n  ", "  \n  overflow: hidden;\n"])), function (_a) {
    var inline = _a.inline;
    return ({
        position: inline ? 'absolute' : 'fixed',
    });
}, function (_a) {
    var $open = _a.$open;
    return ({
        pointerEvents: $open ? undefined : 'none',
    });
}, function (_a) {
    var closePosition = _a.closePosition;
    return (0, exports.createCssGrid)({ closePosition: closePosition });
});
exports.StyledMoveFocusInside = (0, style_1.styled)(react_focus_lock_1.MoveFocusInside)(templateObject_4 || (templateObject_4 = tslib_1.__makeTemplateObject(["\n  height: 100%;\n  overflow: hidden auto;\n  ", ";\n  // it makes this container to take full space form it parent grid\n  grid-row-start: 1;\n  grid-row-end: 3;\n  grid-column-start: 1;\n  grid-column-end: 3;\n"], ["\n  height: 100%;\n  overflow: hidden auto;\n  ", ";\n  // it makes this container to take full space form it parent grid\n  grid-row-start: 1;\n  grid-row-end: 3;\n  grid-column-start: 1;\n  grid-column-end: 3;\n"])), function (_a) {
    var closePosition = _a.closePosition;
    return (0, exports.createCssGrid)({ closePosition: closePosition });
});
// This is empty div that sits behind header content and close button so that style-preset can be applied to it.
exports.StyledDialogHeaderBG = style_1.styled.div(templateObject_5 || (templateObject_5 = tslib_1.__makeTemplateObject(["\n  ", ";\n  // takes the space of header and close grid area\n  grid-row-start: 1;\n  grid-column-start: 1;\n  grid-column-end: 3;\n"], ["\n  ", ";\n  // takes the space of header and close grid area\n  grid-row-start: 1;\n  grid-column-start: 1;\n  grid-column-end: 3;\n"])), function (_a) {
    var path = _a.path;
    return (0, style_1.getStylePreset)("".concat(path, ".header"), 'header');
});
exports.StyledDialogHeader = style_1.styled.div(templateObject_6 || (templateObject_6 = tslib_1.__makeTemplateObject(["\n  box-sizing: border-box;\n  ", "\n  display: flex;\n  grid-area: header;\n  align-items: center;\n\n  ", ";\n  ", ";\n  ", "\n"], ["\n  box-sizing: border-box;\n  ", "\n  display: flex;\n  grid-area: header;\n  align-items: center;\n\n  ", ";\n  ", ";\n  ", "\n"])), (0, style_1.getSizingCssFromTheme)('minHeight', 'sizing080'), function (_a) {
    var path = _a.path;
    return (0, style_1.getStylePreset)("".concat(path, ".header"), 'header');
}, function (_a) {
    var path = _a.path;
    return (0, style_1.getTypographyPreset)("".concat(path, ".header"), 'header');
}, function (_a) {
    var path = _a.path;
    return (0, logical_properties_1.logicalProps)("".concat(path, ".header"), 'header');
});
exports.StyledDialogContent = style_1.styled.div(templateObject_7 || (templateObject_7 = tslib_1.__makeTemplateObject(["\n  box-sizing: border-box;\n  grid-area: content;\n  overflow: hidden auto;\n  ", "\n"], ["\n  box-sizing: border-box;\n  grid-area: content;\n  overflow: hidden auto;\n  ", "\n"])), function (_a) {
    var path = _a.path;
    return (0, logical_properties_1.logicalProps)("".concat(path, ".content"), 'content');
});
exports.StyledCloseButtonContainer = style_1.styled.div(templateObject_8 || (templateObject_8 = tslib_1.__makeTemplateObject(["\n  grid-area: close;\n  box-sizing: border-box;\n  align-self: center;\n\n  ", "\n  ", "\n"], ["\n  grid-area: close;\n  box-sizing: border-box;\n  align-self: center;\n\n  ", "\n  ", "\n"])), function (_a) {
    var path = _a.path;
    return (0, logical_properties_1.logicalProps)("".concat(path, ".closeButton"), 'closeButton');
}, function (_a) {
    var closePosition = _a.closePosition;
    return closePosition === 'left' ? "padding-right: 0;" : "padding-left: 0;";
});
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8;
//# sourceMappingURL=styled.js.map