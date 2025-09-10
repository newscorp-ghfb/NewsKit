"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SelectButton = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var block_1 = require("../block");
var styled_1 = require("./styled");
var with_enhancers_1 = require("../with-enhancers/with-enhancers");
var icons_1 = require("../icons");
var indeterminate_progress_indicator_1 = require("../icons/filled/custom/indeterminate-progress-indicator");
var screen_reader_only_1 = require("../screen-reader-only");
var get_token_1 = require("../utils/get-token");
var style_preset_1 = require("../utils/style/style-preset");
var theme_1 = require("../theme");
var logical_properties_1 = require("../utils/logical-properties");
var overrides_1 = require("../utils/overrides");
var get_1 = require("../utils/get");
var DefaultIcon = function (_a) {
    var isOpen = _a.isOpen, props = tslib_1.__rest(_a, ["isOpen"]);
    return (react_1.default.createElement(icons_1.IconFilledKeyboardArrowDown, tslib_1.__assign({}, props)));
};
exports.SelectButton = react_1.default.forwardRef(function (props, selectButtonRef) {
    var _a;
    var size = props.size, placeholder = props.placeholder, isFocused = props.isFocused, loading = props.loading, state = props.state, selectedItem = props.selectedItem, overrides = props.overrides, startEnhancer = props.startEnhancer, endEnhancer = props.endEnhancer, validationIcon = props.validationIcon, setAllowBlur = props.setAllowBlur, onSelectButtonBlur = props.onSelectButtonBlur, onSelectButtonFocus = props.onSelectButtonFocus, openMenu = props.openMenu, itemToString = props.itemToString, isOpen = props.isOpen, selectRef = props.selectRef, restProps = tslib_1.__rest(props, ["size", "placeholder", "isFocused", "loading", "state", "selectedItem", "overrides", "startEnhancer", "endEnhancer", "validationIcon", "setAllowBlur", "onSelectButtonBlur", "onSelectButtonFocus", "openMenu", "itemToString", "isOpen", "selectRef"]);
    var selectedItemDisplay = (_a = selectedItem === null || selectedItem === void 0 ? void 0 : selectedItem.props) === null || _a === void 0 ? void 0 : _a.selectedDisplay;
    var theme = (0, theme_1.useTheme)();
    var buttonSpaceInline = (0, get_token_1.getToken)({ theme: theme, overrides: overrides }, "select.".concat(size, ".button"), '', 'spaceInline');
    var loadingIconStylePreset = (0, get_token_1.getToken)({ theme: theme, overrides: overrides === null || overrides === void 0 ? void 0 : overrides.loadingIndicator }, "select.".concat(size, ".button.loadingIndicator"), '', 'stylePreset');
    var iconSize = (0, get_token_1.getToken)({ theme: theme }, "select.".concat(size, ".button"), '', 'iconSize');
    var buttonStylePreset = (0, get_token_1.getToken)({ theme: theme, overrides: overrides }, "select.".concat(size, ".button"), '', 'stylePreset');
    var placeholderColor = (0, style_preset_1.getSingleStylePreset)(theme, 'base', 'placeholderColor', buttonStylePreset);
    var placeholderSelectedColor = (0, style_preset_1.getSingleStylePreset)(theme, 'base', 'color', buttonStylePreset);
    var enhancersOverrides = (0, logical_properties_1.omitLogicalPaddingPropsFromOverrides)(overrides);
    var inputOverrides = (0, logical_properties_1.omitLogicalMarginPropsFromOverrides)(overrides);
    var indicatorIconDefaults = (0, get_1.get)(theme, "componentDefaults.select.".concat(size, ".button.indicatorIcon"));
    var indicatorIconDefaultProps = {
        isOpen: isOpen,
        overrides: tslib_1.__assign(tslib_1.__assign(tslib_1.__assign({}, indicatorIconDefaults), { size: iconSize || indicatorIconDefaults.size }), overrides === null || overrides === void 0 ? void 0 : overrides.indicatorIcon),
    };
    var _b = (0, overrides_1.getComponentOverrides)(overrides === null || overrides === void 0 ? void 0 : overrides.indicatorIcon, DefaultIcon, indicatorIconDefaultProps), IndicatorIcon = _b[0], indicatorIconProps = _b[1];
    return (react_1.default.createElement(with_enhancers_1.WithEnhancers, { componentDefaultsPath: "select.".concat(size, ".button"), isFocused: isFocused, overrides: enhancersOverrides, state: state, startEnhancer: startEnhancer, endEnhancer: react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(styled_1.StyledButtonIcons, { disabled: state === 'disabled', "$loading": loading, "$spaceInline": buttonSpaceInline },
                validationIcon,
                loading ? (react_1.default.createElement(styled_1.StyledIconBox, null,
                    react_1.default.createElement(indeterminate_progress_indicator_1.IndeterminateProgressIndicator, { overrides: {
                            stylePreset: loadingIconStylePreset,
                            size: iconSize,
                        } }))) : (react_1.default.createElement(styled_1.StyledDropdownIconButton, { "data-testid": "select-chevron-button", "aria-hidden": true, tabIndex: -1, type: "button", disabled: state === 'disabled', onMouseDown: function () {
                        setAllowBlur(false);
                    }, onMouseUp: function () {
                        openMenu();
                        setAllowBlur(true);
                    } },
                    react_1.default.createElement(styled_1.StyledIconBox, null,
                        react_1.default.createElement(IndicatorIcon, tslib_1.__assign({}, indicatorIconProps)))))),
            endEnhancer && react_1.default.createElement(block_1.Block, { spaceInline: buttonSpaceInline }),
            endEnhancer), ref: selectRef },
        react_1.default.createElement(screen_reader_only_1.ScreenReaderOnly, null, itemToString(selectedItem)),
        react_1.default.createElement(styled_1.StyledSelectButton, tslib_1.__assign({ type: "button", onBlur: onSelectButtonBlur, onFocus: onSelectButtonFocus, "$size": size, "$loading": loading, disabled: state === 'disabled' || loading, "data-testid": "select-button", ref: selectButtonRef, overrides: inputOverrides }, restProps),
            react_1.default.createElement(styled_1.StyledButtonContents, { "$size": size, disabled: state === 'disabled', "$color": selectedItem ? placeholderSelectedColor : placeholderColor }, selectedItemDisplay || selectedItem || placeholder))));
});
//# sourceMappingURL=select-button.js.map