"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyledOptionIcon = exports.StyledOption = exports.StyledModalPanel = exports.StyledSelectPanel = exports.StyledDropdownIconButton = exports.StyledIconBox = exports.StyledButtonContents = exports.StyledSelectButton = exports.StyledButtonIcons = void 0;
var tslib_1 = require("tslib");
var logical_properties_1 = require("../utils/logical-properties");
var style_1 = require("../utils/style");
var generateCursor = function (disabled, $loading) {
    if ($loading) {
        return 'wait';
    }
    if (disabled) {
        return 'not-allowed';
    }
    return 'pointer';
};
exports.StyledButtonIcons = (0, style_1.styled)('div', {
    shouldForwardProp: function (prop) {
        return !['disabled', '$spaceInline', '$loading'].includes(prop);
    },
})(function (_a) {
    var disabled = _a.disabled, $spaceInline = _a.$spaceInline, $loading = _a.$loading, props = tslib_1.__rest(_a, ["disabled", "$spaceInline", "$loading"]);
    return (0, style_1.css)(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n    display: flex;\n\n    ", ";\n    cursor: ", ";\n  "], ["\n    display: flex;\n\n    ", ";\n    cursor: ", ";\n  "])), (0, style_1.getSpacingCssFromTheme)('columnGap', $spaceInline)(props), generateCursor(disabled, $loading));
});
exports.StyledSelectButton = style_1.styled.button(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["\n  all: unset;\n  flex-grow: 1;\n  width: 100%;\n  box-sizing: border-box;\n  align-items: center;\n  justify-content: space-between;\n  overflow: hidden;\n\n  cursor: ", ";\n\n  ", "\n\n  ", ";\n"], ["\n  all: unset;\n  flex-grow: 1;\n  width: 100%;\n  box-sizing: border-box;\n  align-items: center;\n  justify-content: space-between;\n  overflow: hidden;\n\n  cursor: ", ";\n\n  ", "\n\n  ", ";\n"])), function (_a) {
    var disabled = _a.disabled, $loading = _a.$loading;
    if ($loading) {
        return 'wait';
    }
    if (disabled) {
        return 'not-allowed';
    }
    return 'pointer';
}, function (_a) {
    var $size = _a.$size;
    return (0, style_1.getResponsiveSize)("minWidth", "select.".concat($size, ".button"), '', 'minWidth');
}, function (_a) {
    var $size = _a.$size;
    return (0, logical_properties_1.logicalProps)("select.".concat($size, ".button"));
});
exports.StyledButtonContents = style_1.styled.div(templateObject_3 || (templateObject_3 = tslib_1.__makeTemplateObject(["\n  width: 100%;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n\n  ", "\n  ", "\n"], ["\n  width: 100%;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n\n  ", "\n  ", "\n"])), function (_a) {
    var $color = _a.$color, disabled = _a.disabled;
    return "color: ".concat(disabled ? 'inherit' : $color, ";");
}, function (_a) {
    var $size = _a.$size;
    return (0, style_1.getTypographyPreset)("select.".concat($size, ".button"), '');
});
exports.StyledIconBox = style_1.styled.div(templateObject_4 || (templateObject_4 = tslib_1.__makeTemplateObject(["\n  display: flex;\n"], ["\n  display: flex;\n"])));
exports.StyledDropdownIconButton = style_1.styled.button(templateObject_5 || (templateObject_5 = tslib_1.__makeTemplateObject(["\n  all: unset;\n"], ["\n  all: unset;\n"])));
exports.StyledSelectPanel = style_1.styled.div(templateObject_6 || (templateObject_6 = tslib_1.__makeTemplateObject(["\n  position: absolute;\n  height: auto;\n  overflow-x: hidden;\n  overflow-y: auto;\n  box-sizing: border-box;\n  outline: none;\n  ", ";\n\n  // LOGICAL_PROPS_TO_DO: remove the below func when logical props are used in defaults\n  ", "\n\n  ", ";\n\n  ", "\n\n  ", ";\n\n  ", ";\n"], ["\n  position: absolute;\n  height: auto;\n  overflow-x: hidden;\n  overflow-y: auto;\n  box-sizing: border-box;\n  outline: none;\n  ", ";\n\n  // LOGICAL_PROPS_TO_DO: remove the below func when logical props are used in defaults\n  ", "\n\n  ", ";\n\n  ", "\n\n  ", ";\n\n  ", ";\n"])), function (_a) {
    var zIndex = _a.zIndex;
    return (zIndex !== 'layer' ? { zIndex: zIndex } : '');
}, function (_a) {
    var $size = _a.$size;
    return (0, style_1.getResponsiveSpace)("marginTop", "select.".concat($size, ".panel"), '', 'spaceStack');
}, function (_a) {
    var $size = _a.$size;
    return (0, logical_properties_1.logicalProps)("select.".concat($size, ".panel"));
}, function (_a) {
    var $isOpen = _a.$isOpen;
    return "display: ".concat($isOpen ? 'block' : 'none', ";");
}, function (_a) {
    var $size = _a.$size;
    return (0, style_1.getStylePreset)("select.".concat($size, ".panel"), '');
}, function (_a) {
    var $size = _a.$size;
    return (0, style_1.getResponsiveSize)('maxHeight', "select.".concat($size, ".panel"), '', 'maxHeight');
});
exports.StyledModalPanel = style_1.styled.div(templateObject_7 || (templateObject_7 = tslib_1.__makeTemplateObject(["\n  position: relative;\n  overflow-x: hidden;\n  overflow-y: auto;\n  max-height: 100%;\n"], ["\n  position: relative;\n  overflow-x: hidden;\n  overflow-y: auto;\n  max-height: 100%;\n"])));
exports.StyledOption = style_1.styled.div(templateObject_8 || (templateObject_8 = tslib_1.__makeTemplateObject(["\n  display: flex;\n  width: 100%;\n  overflow: hidden;\n  box-sizing: border-box;\n  justify-content: space-between;\n  align-items: center;\n  cursor: pointer;\n\n  * {\n    overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n  }\n\n  // LOGICAL_PROPS_TO_DO: this gap is not currently applied because the parent is not display:grid\n  ", ";\n\n  ", ";\n\n  ", "\n\n  ", ";\n\n  ", "\n"], ["\n  display: flex;\n  width: 100%;\n  overflow: hidden;\n  box-sizing: border-box;\n  justify-content: space-between;\n  align-items: center;\n  cursor: pointer;\n\n  * {\n    overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n  }\n\n  // LOGICAL_PROPS_TO_DO: this gap is not currently applied because the parent is not display:grid\n  ", ";\n\n  ", ";\n\n  ", "\n\n  ", ";\n\n  ", "\n"])), function (_a) {
    var $spaceInline = _a.$spaceInline;
    return $spaceInline ? (0, style_1.getSpacingCssFromTheme)('columnGap', $spaceInline) : null;
}, function (_a) {
    var $size = _a.$size, $focused = _a.$focused, $selected = _a.$selected;
    return (0, style_1.getStylePreset)("selectOption.".concat($size), '', {
        isFocused: $focused,
        isSelected: $selected,
    });
}, function (_a) {
    var $size = _a.$size;
    return (0, style_1.getTypographyPreset)("selectOption.".concat($size), '');
}, function (_a) {
    var $size = _a.$size;
    return (0, logical_properties_1.logicalProps)("selectOption.".concat($size));
}, function (_a) {
    var $size = _a.$size;
    return (0, style_1.getResponsiveSize)('minHeight', "selectOption.".concat($size), '', 'minHeight');
});
exports.StyledOptionIcon = style_1.styled.div(templateObject_9 || (templateObject_9 = tslib_1.__makeTemplateObject(["\n  display: flex;\n  flex-shrink: 0;\n\n  ", ";\n"], ["\n  display: flex;\n  flex-shrink: 0;\n\n  ", ";\n"])), function (_a) {
    var $size = _a.$size, $focused = _a.$focused, $selected = _a.$selected;
    return (0, style_1.getStylePreset)("selectOption.".concat($size, ".icon"), '', {
        isFocused: $focused,
        isSelected: $selected,
    });
});
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9;
//# sourceMappingURL=styled.js.map