import { __makeTemplateObject } from "tslib";
import { MoveFocusInside } from 'react-focus-lock';
import { logicalProps } from '../utils/logical-properties';
import { styled, getStylePreset, getSizingCssFromTheme, getTypographyPreset, css, } from '../utils/style';
export var createCssGrid = function (_a) {
    var closePosition = _a.closePosition;
    return closePosition === 'left'
        ? css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n        display: grid;\n        grid-template-areas:\n          'close header'\n          'content content';\n        grid-template-columns: auto 1fr;\n        grid-template-rows: auto 1fr;\n      "], ["\n        display: grid;\n        grid-template-areas:\n          'close header'\n          'content content';\n        grid-template-columns: auto 1fr;\n        grid-template-rows: auto 1fr;\n      "]))) : css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n        display: grid;\n        grid-template-areas:\n          'header close'\n          'content content';\n        grid-template-columns: 1fr auto;\n        grid-template-rows: auto 1fr;\n      "], ["\n        display: grid;\n        grid-template-areas:\n          'header close'\n          'content content';\n        grid-template-columns: 1fr auto;\n        grid-template-rows: auto 1fr;\n      "])));
};
export var StyledDialogPanel = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  box-sizing: border-box;\n  ", "\n  ", "\n  ", "  \n  overflow: hidden;\n"], ["\n  box-sizing: border-box;\n  ", "\n  ", "\n  ", "  \n  overflow: hidden;\n"])), function (_a) {
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
    return createCssGrid({ closePosition: closePosition });
});
export var StyledMoveFocusInside = styled(MoveFocusInside)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  height: 100%;\n  overflow: hidden auto;\n  ", ";\n  // it makes this container to take full space form it parent grid\n  grid-row-start: 1;\n  grid-row-end: 3;\n  grid-column-start: 1;\n  grid-column-end: 3;\n"], ["\n  height: 100%;\n  overflow: hidden auto;\n  ", ";\n  // it makes this container to take full space form it parent grid\n  grid-row-start: 1;\n  grid-row-end: 3;\n  grid-column-start: 1;\n  grid-column-end: 3;\n"])), function (_a) {
    var closePosition = _a.closePosition;
    return createCssGrid({ closePosition: closePosition });
});
// This is empty div that sits behind header content and close button so that style-preset can be applied to it.
export var StyledDialogHeaderBG = styled.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  ", ";\n  // takes the space of header and close grid area\n  grid-row-start: 1;\n  grid-column-start: 1;\n  grid-column-end: 3;\n"], ["\n  ", ";\n  // takes the space of header and close grid area\n  grid-row-start: 1;\n  grid-column-start: 1;\n  grid-column-end: 3;\n"])), function (_a) {
    var path = _a.path;
    return getStylePreset("".concat(path, ".header"), 'header');
});
export var StyledDialogHeader = styled.div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  box-sizing: border-box;\n  ", "\n  display: flex;\n  grid-area: header;\n  align-items: center;\n\n  ", ";\n  ", ";\n  ", "\n"], ["\n  box-sizing: border-box;\n  ", "\n  display: flex;\n  grid-area: header;\n  align-items: center;\n\n  ", ";\n  ", ";\n  ", "\n"])), getSizingCssFromTheme('minHeight', 'sizing080'), function (_a) {
    var path = _a.path;
    return getStylePreset("".concat(path, ".header"), 'header');
}, function (_a) {
    var path = _a.path;
    return getTypographyPreset("".concat(path, ".header"), 'header');
}, function (_a) {
    var path = _a.path;
    return logicalProps("".concat(path, ".header"), 'header');
});
export var StyledDialogContent = styled.div(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  box-sizing: border-box;\n  grid-area: content;\n  overflow: hidden auto;\n  ", "\n"], ["\n  box-sizing: border-box;\n  grid-area: content;\n  overflow: hidden auto;\n  ", "\n"])), function (_a) {
    var path = _a.path;
    return logicalProps("".concat(path, ".content"), 'content');
});
export var StyledCloseButtonContainer = styled.div(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  grid-area: close;\n  box-sizing: border-box;\n  align-self: center;\n\n  ", "\n  ", "\n"], ["\n  grid-area: close;\n  box-sizing: border-box;\n  align-self: center;\n\n  ", "\n  ", "\n"])), function (_a) {
    var path = _a.path;
    return logicalProps("".concat(path, ".closeButton"), 'closeButton');
}, function (_a) {
    var closePosition = _a.closePosition;
    return closePosition === 'left' ? "padding-right: 0;" : "padding-left: 0;";
});
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8;
//# sourceMappingURL=styled.js.map