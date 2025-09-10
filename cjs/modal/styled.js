"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyledModal = exports.StyledModalWrapper = void 0;
var tslib_1 = require("tslib");
var dialog_1 = require("../dialog");
var style_1 = require("../utils/style");
var utils_1 = require("../utils");
var transition_preset_1 = require("../utils/style/transition-preset");
var logical_properties_1 = require("../utils/logical-properties");
exports.StyledModalWrapper = style_1.styled.div(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), function (_a) {
    var $open = _a.$open, inline = _a.inline;
    return $open &&
        "\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      // Remove events on the modal wrapper so that users can click on the content behind it ( like overlay or body )\n      pointer-events: none;\n      top: 0;\n      right: 0;\n      bottom: 0;\n      left: 0;\n      position: ".concat(inline ? 'absolute' : 'fixed', ";\n  ");
});
exports.StyledModal = (0, style_1.styled)(dialog_1.BaseDialogView)(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["\n  // adds pointer events which are removed by its parent ( StyledModalWrapper ) so that modal is interactive\n  pointer-events: all;\n\n  ", " {\n    ", ";\n  }\n\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n\n  ", ";\n\n  ", "\n"], ["\n  // adds pointer events which are removed by its parent ( StyledModalWrapper ) so that modal is interactive\n  pointer-events: all;\n\n  ", " {\n    ", ";\n  }\n\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n\n  ", ";\n\n  ", "\n"])), (0, utils_1.getMediaQueryFromTheme)('md'), (0, style_1.getResponsiveSize)('top', 'modal.panel', 'panel', 'topOffset'), (0, style_1.getStylePreset)('modal.panel', 'panel'), (0, style_1.getResponsiveSize)('width', 'modal.panel', 'panel', 'width'), (0, style_1.getResponsiveSize)('minWidth', 'modal.panel', 'panel', 'minWidth'), (0, style_1.getResponsiveSize)('maxWidth', 'modal.panel', 'panel', 'maxWidth'), (0, style_1.getResponsiveSize)('height', 'modal.panel', 'panel', 'height'), (0, style_1.getResponsiveSize)('minHeight', 'modal.panel', 'panel', 'minHeight'), (0, style_1.getResponsiveSize)('maxHeight', 'modal.panel', 'panel', 'maxHeight'), (0, transition_preset_1.getTransitionPreset)("modal.panel", 'panel', 'nk-modal'), (0, logical_properties_1.logicalPaddingProps)('modal.panel', 'panel'));
var templateObject_1, templateObject_2;
//# sourceMappingURL=styled.js.map