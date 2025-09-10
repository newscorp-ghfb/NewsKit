import { __assign, __rest } from "tslib";
import React from 'react';
import { Block } from '../block';
import { StyledButtonContents, StyledButtonIcons, StyledSelectButton, StyledIconBox, StyledDropdownIconButton, } from './styled';
import { WithEnhancers } from '../with-enhancers/with-enhancers';
import { IconFilledKeyboardArrowDown } from '../icons';
import { IndeterminateProgressIndicator } from '../icons/filled/custom/indeterminate-progress-indicator';
import { ScreenReaderOnly } from '../screen-reader-only';
import { getToken } from '../utils/get-token';
import { getSingleStylePreset } from '../utils/style/style-preset';
import { useTheme } from '../theme';
import { omitLogicalMarginPropsFromOverrides, omitLogicalPaddingPropsFromOverrides, } from '../utils/logical-properties';
import { getComponentOverrides } from '../utils/overrides';
import { get } from '../utils/get';
var DefaultIcon = function (_a) {
    var isOpen = _a.isOpen, props = __rest(_a, ["isOpen"]);
    return (React.createElement(IconFilledKeyboardArrowDown, __assign({}, props)));
};
export var SelectButton = React.forwardRef(function (props, selectButtonRef) {
    var _a;
    var size = props.size, placeholder = props.placeholder, isFocused = props.isFocused, loading = props.loading, state = props.state, selectedItem = props.selectedItem, overrides = props.overrides, startEnhancer = props.startEnhancer, endEnhancer = props.endEnhancer, validationIcon = props.validationIcon, setAllowBlur = props.setAllowBlur, onSelectButtonBlur = props.onSelectButtonBlur, onSelectButtonFocus = props.onSelectButtonFocus, openMenu = props.openMenu, itemToString = props.itemToString, isOpen = props.isOpen, selectRef = props.selectRef, restProps = __rest(props, ["size", "placeholder", "isFocused", "loading", "state", "selectedItem", "overrides", "startEnhancer", "endEnhancer", "validationIcon", "setAllowBlur", "onSelectButtonBlur", "onSelectButtonFocus", "openMenu", "itemToString", "isOpen", "selectRef"]);
    var selectedItemDisplay = (_a = selectedItem === null || selectedItem === void 0 ? void 0 : selectedItem.props) === null || _a === void 0 ? void 0 : _a.selectedDisplay;
    var theme = useTheme();
    var buttonSpaceInline = getToken({ theme: theme, overrides: overrides }, "select.".concat(size, ".button"), '', 'spaceInline');
    var loadingIconStylePreset = getToken({ theme: theme, overrides: overrides === null || overrides === void 0 ? void 0 : overrides.loadingIndicator }, "select.".concat(size, ".button.loadingIndicator"), '', 'stylePreset');
    var iconSize = getToken({ theme: theme }, "select.".concat(size, ".button"), '', 'iconSize');
    var buttonStylePreset = getToken({ theme: theme, overrides: overrides }, "select.".concat(size, ".button"), '', 'stylePreset');
    var placeholderColor = getSingleStylePreset(theme, 'base', 'placeholderColor', buttonStylePreset);
    var placeholderSelectedColor = getSingleStylePreset(theme, 'base', 'color', buttonStylePreset);
    var enhancersOverrides = omitLogicalPaddingPropsFromOverrides(overrides);
    var inputOverrides = omitLogicalMarginPropsFromOverrides(overrides);
    var indicatorIconDefaults = get(theme, "componentDefaults.select.".concat(size, ".button.indicatorIcon"));
    var indicatorIconDefaultProps = {
        isOpen: isOpen,
        overrides: __assign(__assign(__assign({}, indicatorIconDefaults), { size: iconSize || indicatorIconDefaults.size }), overrides === null || overrides === void 0 ? void 0 : overrides.indicatorIcon),
    };
    var _b = getComponentOverrides(overrides === null || overrides === void 0 ? void 0 : overrides.indicatorIcon, DefaultIcon, indicatorIconDefaultProps), IndicatorIcon = _b[0], indicatorIconProps = _b[1];
    return (React.createElement(WithEnhancers, { componentDefaultsPath: "select.".concat(size, ".button"), isFocused: isFocused, overrides: enhancersOverrides, state: state, startEnhancer: startEnhancer, endEnhancer: React.createElement(React.Fragment, null,
            React.createElement(StyledButtonIcons, { disabled: state === 'disabled', "$loading": loading, "$spaceInline": buttonSpaceInline },
                validationIcon,
                loading ? (React.createElement(StyledIconBox, null,
                    React.createElement(IndeterminateProgressIndicator, { overrides: {
                            stylePreset: loadingIconStylePreset,
                            size: iconSize,
                        } }))) : (React.createElement(StyledDropdownIconButton, { "data-testid": "select-chevron-button", "aria-hidden": true, tabIndex: -1, type: "button", disabled: state === 'disabled', onMouseDown: function () {
                        setAllowBlur(false);
                    }, onMouseUp: function () {
                        openMenu();
                        setAllowBlur(true);
                    } },
                    React.createElement(StyledIconBox, null,
                        React.createElement(IndicatorIcon, __assign({}, indicatorIconProps)))))),
            endEnhancer && React.createElement(Block, { spaceInline: buttonSpaceInline }),
            endEnhancer), ref: selectRef },
        React.createElement(ScreenReaderOnly, null, itemToString(selectedItem)),
        React.createElement(StyledSelectButton, __assign({ type: "button", onBlur: onSelectButtonBlur, onFocus: onSelectButtonFocus, "$size": size, "$loading": loading, disabled: state === 'disabled' || loading, "data-testid": "select-button", ref: selectButtonRef, overrides: inputOverrides }, restProps),
            React.createElement(StyledButtonContents, { "$size": size, disabled: state === 'disabled', "$color": selectedItem ? placeholderSelectedColor : placeholderColor }, selectedItemDisplay || selectedItem || placeholder))));
});
//# sourceMappingURL=select-button.js.map