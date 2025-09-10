import { __assign, __rest } from "tslib";
import React from 'react';
import { StyledOption, StyledOptionIcon, StyledSelectPanel, StyledModalPanel, } from './styled';
import { ScreenReaderOnly } from '../screen-reader-only';
import { useReactKeys } from '../utils/hooks';
import { useTheme } from '../theme';
import { getToken } from '../utils/get-token';
import { IconFilledCheck } from '../icons';
import { Modal } from '../modal';
import { getComponentOverrides } from '../utils/overrides';
import { getModalOverrides } from './utils';
var DefaultModal = Modal;
export var StyledOptionWithPrivateProps = React.forwardRef(function (props, inputRef) {
    var $size = props.$size, $selected = props.$selected, $focused = props.$focused, selectedIcon = props.selectedIcon, overrides = props.overrides;
    var theme = useTheme();
    var iconSize = getToken({ theme: theme }, "selectOption.".concat($size, ".icon"), '', 'iconSize');
    var optionSpaceInline = getToken({ theme: theme, overrides: overrides }, "selectOption.".concat($size), '', 'spaceInline');
    var children = props.children;
    return (React.createElement(StyledOption, __assign({}, props, { ref: inputRef, "$spaceInline": optionSpaceInline }),
        React.createElement("div", null, children),
        $selected && (React.createElement(StyledOptionIcon, { "$size": $size, "$selected": $selected, "$focused": $focused }, selectedIcon || React.createElement(IconFilledCheck, { overrides: { size: iconSize } })))));
});
export var SelectPanel = React.forwardRef(function (props, panelRef) {
    var isOpen = props.isOpen, top = props.top, left = props.left, size = props.size, children = props.children, buttonRef = props.buttonRef, renderInModal = props.renderInModal, closeMenu = props.closeMenu, overrides = props.overrides, strategy = props.strategy, zIndex = props.zIndex, restProps = __rest(props, ["isOpen", "top", "left", "size", "children", "buttonRef", "renderInModal", "closeMenu", "overrides", "strategy", "zIndex"]);
    var listDescriptionId = useReactKeys(1)[0];
    var theme = useTheme();
    var modalOverrides = getModalOverrides({
        theme: theme,
        size: size,
        overrides: overrides === null || overrides === void 0 ? void 0 : overrides.modal,
    });
    var optionsAsChildren = isOpen && children;
    var screenReaderOnlyMessage = isOpen && (React.createElement(ScreenReaderOnly, { id: listDescriptionId }, "Press down arrow key to navigate to the first item"));
    if (renderInModal && !isOpen) {
        // this is needed for downshift in order to work properly
        return React.createElement("div", { ref: panelRef });
    }
    if (renderInModal && isOpen) {
        var _a = getComponentOverrides(overrides === null || overrides === void 0 ? void 0 : overrides.modal, DefaultModal, {
            overrides: modalOverrides,
            open: isOpen,
            restoreFocusTo: buttonRef.current,
            onDismiss: closeMenu,
        }), ModalComponent = _a[0], modalProps = _a[1];
        return (React.createElement(ModalComponent, __assign({}, modalProps),
            screenReaderOnlyMessage,
            React.createElement(StyledModalPanel, __assign({ "data-testid": "select-panel", className: "modal-panel", "aria-describedby": listDescriptionId, ref: panelRef }, restProps, { onBlur: function (e) {
                    // set tabIndex to 0 so that user can return to the element
                    // when before that moves to Close / Other focusable elements inside the modal
                    e.target.setAttribute('tabIndex', '0');
                } }), optionsAsChildren)));
    }
    return (React.createElement(React.Fragment, null,
        screenReaderOnlyMessage,
        React.createElement(StyledSelectPanel, __assign({ "$isOpen": isOpen, "data-testid": "select-panel", "aria-describedby": isOpen ? listDescriptionId : undefined, "$size": size, ref: panelRef, overrides: overrides === null || overrides === void 0 ? void 0 : overrides.panel, zIndex: zIndex }, restProps, { style: {
                // inline styles are faster since emotion does not have to create a new css class
                // and apply it to the element on every scroll change
                top: Math.round(top),
                left: Math.round(left),
                position: strategy,
            } }), optionsAsChildren)));
});
//# sourceMappingURL=select-panel.js.map