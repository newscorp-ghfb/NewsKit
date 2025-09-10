"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Drawer = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var react_transition_group_1 = require("react-transition-group");
var compose_react_refs_1 = tslib_1.__importDefault(require("@seznam/compose-react-refs"));
var styled_1 = require("./styled");
var dialog_1 = require("../dialog");
var overlay_1 = require("../overlay/overlay");
var theme_1 = require("../theme");
var deep_merge_1 = require("../utils/deep-merge");
var filter_object_1 = require("../utils/filter-object");
var merge_breakpoint_object_1 = require("../utils/merge-breakpoint-object");
var utils_1 = require("./utils");
var get_transition_duration_1 = require("../utils/get-transition-duration");
var defaults_1 = tslib_1.__importDefault(require("./defaults"));
var style_presets_1 = tslib_1.__importDefault(require("./style-presets"));
var with_own_theme_1 = require("../utils/with-own-theme");
var layer_1 = require("../layer");
var get_transition_class_name_1 = require("../utils/get-transition-class-name");
// This can't just use the CSSTransition state as there is a moment when open is true
// but state is not yet set to 'entering'. We also need to disable this functionality
// if transitions are disabled.
var useOpenTransitionInProgress = function () {
    var _a = (0, react_1.useState)(!react_transition_group_1.config.disabled), openTransitionInProgress = _a[0], setOpenTransitionInProgress = _a[1];
    return {
        onEntered: function () { return setOpenTransitionInProgress(false); },
        onExited: function () { return setOpenTransitionInProgress(!react_transition_group_1.config.disabled); },
        openTransitionInProgress: openTransitionInProgress,
    };
};
var ThemelessDrawer = react_1.default.forwardRef(function (_a, ref) {
    var children = _a.children, 
    /* istanbul ignore next */
    _b = _a.open, 
    /* istanbul ignore next */
    open = _b === void 0 ? false : _b, onDismiss = _a.onDismiss, _c = _a.placement, placement = _c === void 0 ? 'left' : _c, _d = _a.closePosition, closePosition = _d === void 0 ? placement === 'left' ? 'left' : 'right' : _d, restoreFocusTo = _a.restoreFocusTo, overrides = _a.overrides, hideOverlay = _a.hideOverlay, disableFocusTrap = _a.disableFocusTrap, inline = _a.inline, props = tslib_1.__rest(_a, ["children", "open", "onDismiss", "placement", "closePosition", "restoreFocusTo", "overrides", "hideOverlay", "disableFocusTrap", "inline"]);
    var theme = (0, theme_1.useTheme)();
    var cssTransitionNodeRef = react_1.default.useRef(null);
    var drawerRef = (0, react_1.useRef)(null);
    var drawerPath = inline ? 'inlineDrawer' : 'drawer';
    var overlayOverrides = tslib_1.__assign({}, (0, deep_merge_1.deepMerge)((0, merge_breakpoint_object_1.mergeBreakpointObject)(Object.keys(theme.breakpoints)), theme.componentDefaults[drawerPath].overlay, (0, filter_object_1.filterOutFalsyProperties)(overrides && overrides.overlay)));
    (0, react_1.useEffect)(function () {
        (0, utils_1.setDrawerElementFocusability)(open, drawerRef);
    }, [open, drawerRef]);
    // When Drawer is used inline, it should not be in a layer
    var OuterWrapper = inline ? react_1.default.Fragment : layer_1.Layer;
    var _e = useOpenTransitionInProgress(), openTransitionInProgress = _e.openTransitionInProgress, onEntered = _e.onEntered, onExited = _e.onExited;
    return (react_1.default.createElement(OuterWrapper, null,
        react_1.default.createElement(dialog_1.BaseDialogFunction, { open: open, restoreFocusTo: restoreFocusTo, onDismiss: onDismiss, hideOverlay: hideOverlay, disableFocusTrap: disableFocusTrap, transitionInProgress: openTransitionInProgress, renderOverlay: function (handleOverlayClick) { return (react_1.default.createElement(overlay_1.Overlay, { open: open, onClick: handleOverlayClick, overrides: overlayOverrides })); } }, function (handleCloseButtonClick) { return (react_1.default.createElement(react_transition_group_1.CSSTransition, { nodeRef: cssTransitionNodeRef, in: open, timeout: (0, get_transition_duration_1.getTransitionDuration)("".concat(drawerPath, ".panel.").concat(placement), '')({ theme: theme, overrides: overrides }), classNames: "nk-drawer", appear: true, onEntered: onEntered, onExited: onExited }, function (state) { return (react_1.default.createElement(styled_1.StyledDrawer, tslib_1.__assign({ "aria-hidden": !open, ref: (0, compose_react_refs_1.default)(cssTransitionNodeRef, drawerRef, ref), className: (0, get_transition_class_name_1.getTransitionClassName)('nk-drawer', state), open: open, disableFocusTrap: disableFocusTrap, transitionInProgress: openTransitionInProgress, handleCloseButtonClick: handleCloseButtonClick, path: drawerPath, "data-testid": drawerPath, placement: placement, closePosition: closePosition, overrides: overrides, inline: inline }, props), children)); })); })));
});
exports.Drawer = (0, with_own_theme_1.withOwnTheme)(ThemelessDrawer)({
    defaults: defaults_1.default,
    stylePresets: style_presets_1.default,
});
//# sourceMappingURL=drawer.js.map