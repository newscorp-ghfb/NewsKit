"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SelectPanel = exports.StyledOptionWithPrivateProps = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_1 = require("./styled");
var screen_reader_only_1 = require("../screen-reader-only");
var hooks_1 = require("../utils/hooks");
var theme_1 = require("../theme");
var get_token_1 = require("../utils/get-token");
var icons_1 = require("../icons");
var modal_1 = require("../modal");
var overrides_1 = require("../utils/overrides");
var utils_1 = require("./utils");
var DefaultModal = modal_1.Modal;
exports.StyledOptionWithPrivateProps = react_1.default.forwardRef(function (props, inputRef) {
    var $size = props.$size, $selected = props.$selected, $focused = props.$focused, selectedIcon = props.selectedIcon, overrides = props.overrides;
    var theme = (0, theme_1.useTheme)();
    var iconSize = (0, get_token_1.getToken)({ theme: theme }, "selectOption.".concat($size, ".icon"), '', 'iconSize');
    var optionSpaceInline = (0, get_token_1.getToken)({ theme: theme, overrides: overrides }, "selectOption.".concat($size), '', 'spaceInline');
    var children = props.children;
    return (react_1.default.createElement(styled_1.StyledOption, tslib_1.__assign({}, props, { ref: inputRef, "$spaceInline": optionSpaceInline }),
        react_1.default.createElement("div", null, children),
        $selected && (react_1.default.createElement(styled_1.StyledOptionIcon, { "$size": $size, "$selected": $selected, "$focused": $focused }, selectedIcon || react_1.default.createElement(icons_1.IconFilledCheck, { overrides: { size: iconSize } })))));
});
exports.SelectPanel = react_1.default.forwardRef(function (props, panelRef) {
    var isOpen = props.isOpen, top = props.top, left = props.left, size = props.size, children = props.children, buttonRef = props.buttonRef, renderInModal = props.renderInModal, closeMenu = props.closeMenu, overrides = props.overrides, strategy = props.strategy, zIndex = props.zIndex, restProps = tslib_1.__rest(props, ["isOpen", "top", "left", "size", "children", "buttonRef", "renderInModal", "closeMenu", "overrides", "strategy", "zIndex"]);
    var listDescriptionId = (0, hooks_1.useReactKeys)(1)[0];
    var theme = (0, theme_1.useTheme)();
    var modalOverrides = (0, utils_1.getModalOverrides)({
        theme: theme,
        size: size,
        overrides: overrides === null || overrides === void 0 ? void 0 : overrides.modal,
    });
    var optionsAsChildren = isOpen && children;
    var screenReaderOnlyMessage = isOpen && (react_1.default.createElement(screen_reader_only_1.ScreenReaderOnly, { id: listDescriptionId }, "Press down arrow key to navigate to the first item"));
    if (renderInModal && !isOpen) {
        // this is needed for downshift in order to work properly
        return react_1.default.createElement("div", { ref: panelRef });
    }
    if (renderInModal && isOpen) {
        var _a = (0, overrides_1.getComponentOverrides)(overrides === null || overrides === void 0 ? void 0 : overrides.modal, DefaultModal, {
            overrides: modalOverrides,
            open: isOpen,
            restoreFocusTo: buttonRef.current,
            onDismiss: closeMenu,
        }), ModalComponent = _a[0], modalProps = _a[1];
        return (react_1.default.createElement(ModalComponent, tslib_1.__assign({}, modalProps),
            screenReaderOnlyMessage,
            react_1.default.createElement(styled_1.StyledModalPanel, tslib_1.__assign({ "data-testid": "select-panel", className: "modal-panel", "aria-describedby": listDescriptionId, ref: panelRef }, restProps, { onBlur: function (e) {
                    // set tabIndex to 0 so that user can return to the element
                    // when before that moves to Close / Other focusable elements inside the modal
                    e.target.setAttribute('tabIndex', '0');
                } }), optionsAsChildren)));
    }
    return (react_1.default.createElement(react_1.default.Fragment, null,
        screenReaderOnlyMessage,
        react_1.default.createElement(styled_1.StyledSelectPanel, tslib_1.__assign({ "$isOpen": isOpen, "data-testid": "select-panel", "aria-describedby": isOpen ? listDescriptionId : undefined, "$size": size, ref: panelRef, overrides: overrides === null || overrides === void 0 ? void 0 : overrides.panel, zIndex: zIndex }, restProps, { style: {
                // inline styles are faster since emotion does not have to create a new css class
                // and apply it to the element on every scroll change
                top: Math.round(top),
                left: Math.round(left),
                position: strategy,
            } }), optionsAsChildren)));
});
//# sourceMappingURL=select-panel.js.map