"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Modal = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var react_transition_group_1 = require("react-transition-group");
var styled_1 = require("./styled");
var dialog_1 = require("../dialog");
var overlay_1 = require("../overlay/overlay");
var theme_1 = require("../theme");
var deep_merge_1 = require("../utils/deep-merge");
var filter_object_1 = require("../utils/filter-object");
var merge_breakpoint_object_1 = require("../utils/merge-breakpoint-object");
var get_transition_duration_1 = require("../utils/get-transition-duration");
var defaults_1 = tslib_1.__importDefault(require("./defaults"));
var style_presets_1 = tslib_1.__importDefault(require("./style-presets"));
var with_own_theme_1 = require("../utils/with-own-theme");
var layer_1 = require("../layer");
var get_transition_class_name_1 = require("../utils/get-transition-class-name");
var ThemelessModal = react_1.default.forwardRef(function (_a, ref) {
    var children = _a.children, 
    /* istanbul ignore next */
    _b = _a.open, 
    /* istanbul ignore next */
    open = _b === void 0 ? false : _b, onDismiss = _a.onDismiss, restoreFocusTo = _a.restoreFocusTo, _c = _a.closePosition, closePosition = _c === void 0 ? 'right' : _c, overrides = _a.overrides, hideOverlay = _a.hideOverlay, disableFocusTrap = _a.disableFocusTrap, props = tslib_1.__rest(_a, ["children", "open", "onDismiss", "restoreFocusTo", "closePosition", "overrides", "hideOverlay", "disableFocusTrap"]);
    var theme = (0, theme_1.useTheme)();
    var cssTransitionNodeRef = react_1.default.useRef(null);
    var overlayOverrides = tslib_1.__assign({}, (0, deep_merge_1.deepMerge)((0, merge_breakpoint_object_1.mergeBreakpointObject)(Object.keys(theme.breakpoints)), theme.componentDefaults.modal.overlay, (0, filter_object_1.filterOutFalsyProperties)(overrides && overrides.overlay)));
    var _d = react_1.default.useState(false), showWrapper = _d[0], setShowWrapper = _d[1];
    // When Modal is used inline, it should not be in a layer
    var OuterWrapper = props.inline ? react_1.default.Fragment : layer_1.Layer;
    return (react_1.default.createElement(OuterWrapper, null,
        react_1.default.createElement(dialog_1.BaseDialogFunction, { ref: ref, open: open, restoreFocusTo: restoreFocusTo, onDismiss: onDismiss, hideOverlay: hideOverlay, disableFocusTrap: disableFocusTrap, renderOverlay: function (handleOverlayClick) { return (react_1.default.createElement(overlay_1.Overlay, { open: open, onClick: handleOverlayClick, overrides: overlayOverrides })); } }, function (handleCloseButtonClick) { return (react_1.default.createElement(styled_1.StyledModalWrapper, { inline: props.inline, "$open": showWrapper, overrides: overrides },
            react_1.default.createElement(react_transition_group_1.CSSTransition, { nodeRef: cssTransitionNodeRef, in: open, timeout: (0, get_transition_duration_1.getTransitionDuration)("modal.panel", '')({ theme: theme, overrides: overrides }), classNames: "nk-modal", mountOnEnter: true, unmountOnExit: true, appear: true, onEnter: function () { return setShowWrapper(true); }, onExited: function () { return setShowWrapper(false); } }, function (state) { return (react_1.default.createElement(styled_1.StyledModal, tslib_1.__assign({ ref: cssTransitionNodeRef, open: open, className: (0, get_transition_class_name_1.getTransitionClassName)('nk-modal', state), disableFocusTrap: disableFocusTrap, handleCloseButtonClick: handleCloseButtonClick, path: "modal", "data-testid": "modal", closePosition: closePosition, overrides: overrides }, props), children)); }))); })));
});
exports.Modal = (0, with_own_theme_1.withOwnTheme)(ThemelessModal)({
    defaults: defaults_1.default,
    stylePresets: style_presets_1.default,
});
//# sourceMappingURL=modal.js.map