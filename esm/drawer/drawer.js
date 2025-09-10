import { __assign, __rest } from "tslib";
import React, { useEffect, useRef, useState } from 'react';
import { CSSTransition, config } from 'react-transition-group';
import composeRefs from '@seznam/compose-react-refs';
import { StyledDrawer } from './styled';
import { BaseDialogFunction } from '../dialog';
import { Overlay } from '../overlay/overlay';
import { useTheme } from '../theme';
import { deepMerge } from '../utils/deep-merge';
import { filterOutFalsyProperties } from '../utils/filter-object';
import { mergeBreakpointObject } from '../utils/merge-breakpoint-object';
import { setDrawerElementFocusability } from './utils';
import { getTransitionDuration } from '../utils/get-transition-duration';
import defaults from './defaults';
import stylePresets from './style-presets';
import { withOwnTheme } from '../utils/with-own-theme';
import { Layer } from '../layer';
import { getTransitionClassName } from '../utils/get-transition-class-name';
// This can't just use the CSSTransition state as there is a moment when open is true
// but state is not yet set to 'entering'. We also need to disable this functionality
// if transitions are disabled.
var useOpenTransitionInProgress = function () {
    var _a = useState(!config.disabled), openTransitionInProgress = _a[0], setOpenTransitionInProgress = _a[1];
    return {
        onEntered: function () { return setOpenTransitionInProgress(false); },
        onExited: function () { return setOpenTransitionInProgress(!config.disabled); },
        openTransitionInProgress: openTransitionInProgress,
    };
};
var ThemelessDrawer = React.forwardRef(function (_a, ref) {
    var children = _a.children, 
    /* istanbul ignore next */
    _b = _a.open, 
    /* istanbul ignore next */
    open = _b === void 0 ? false : _b, onDismiss = _a.onDismiss, _c = _a.placement, placement = _c === void 0 ? 'left' : _c, _d = _a.closePosition, closePosition = _d === void 0 ? placement === 'left' ? 'left' : 'right' : _d, restoreFocusTo = _a.restoreFocusTo, overrides = _a.overrides, hideOverlay = _a.hideOverlay, disableFocusTrap = _a.disableFocusTrap, inline = _a.inline, props = __rest(_a, ["children", "open", "onDismiss", "placement", "closePosition", "restoreFocusTo", "overrides", "hideOverlay", "disableFocusTrap", "inline"]);
    var theme = useTheme();
    var cssTransitionNodeRef = React.useRef(null);
    var drawerRef = useRef(null);
    var drawerPath = inline ? 'inlineDrawer' : 'drawer';
    var overlayOverrides = __assign({}, deepMerge(mergeBreakpointObject(Object.keys(theme.breakpoints)), theme.componentDefaults[drawerPath].overlay, filterOutFalsyProperties(overrides && overrides.overlay)));
    useEffect(function () {
        setDrawerElementFocusability(open, drawerRef);
    }, [open, drawerRef]);
    // When Drawer is used inline, it should not be in a layer
    var OuterWrapper = inline ? React.Fragment : Layer;
    var _e = useOpenTransitionInProgress(), openTransitionInProgress = _e.openTransitionInProgress, onEntered = _e.onEntered, onExited = _e.onExited;
    return (React.createElement(OuterWrapper, null,
        React.createElement(BaseDialogFunction, { open: open, restoreFocusTo: restoreFocusTo, onDismiss: onDismiss, hideOverlay: hideOverlay, disableFocusTrap: disableFocusTrap, transitionInProgress: openTransitionInProgress, renderOverlay: function (handleOverlayClick) { return (React.createElement(Overlay, { open: open, onClick: handleOverlayClick, overrides: overlayOverrides })); } }, function (handleCloseButtonClick) { return (React.createElement(CSSTransition, { nodeRef: cssTransitionNodeRef, in: open, timeout: getTransitionDuration("".concat(drawerPath, ".panel.").concat(placement), '')({ theme: theme, overrides: overrides }), classNames: "nk-drawer", appear: true, onEntered: onEntered, onExited: onExited }, function (state) { return (React.createElement(StyledDrawer, __assign({ "aria-hidden": !open, ref: composeRefs(cssTransitionNodeRef, drawerRef, ref), className: getTransitionClassName('nk-drawer', state), open: open, disableFocusTrap: disableFocusTrap, transitionInProgress: openTransitionInProgress, handleCloseButtonClick: handleCloseButtonClick, path: drawerPath, "data-testid": drawerPath, placement: placement, closePosition: closePosition, overrides: overrides, inline: inline }, props), children)); })); })));
});
export var Drawer = withOwnTheme(ThemelessDrawer)({
    defaults: defaults,
    stylePresets: stylePresets,
});
//# sourceMappingURL=drawer.js.map