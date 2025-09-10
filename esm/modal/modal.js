import { __assign, __rest } from "tslib";
import React from 'react';
import { CSSTransition } from 'react-transition-group';
import { StyledModal, StyledModalWrapper } from './styled';
import { BaseDialogFunction } from '../dialog';
import { Overlay } from '../overlay/overlay';
import { useTheme } from '../theme';
import { deepMerge } from '../utils/deep-merge';
import { filterOutFalsyProperties } from '../utils/filter-object';
import { mergeBreakpointObject } from '../utils/merge-breakpoint-object';
import { getTransitionDuration } from '../utils/get-transition-duration';
import defaults from './defaults';
import stylePresets from './style-presets';
import { withOwnTheme } from '../utils/with-own-theme';
import { Layer } from '../layer';
import { getTransitionClassName } from '../utils/get-transition-class-name';
var ThemelessModal = React.forwardRef(function (_a, ref) {
    var children = _a.children, 
    /* istanbul ignore next */
    _b = _a.open, 
    /* istanbul ignore next */
    open = _b === void 0 ? false : _b, onDismiss = _a.onDismiss, restoreFocusTo = _a.restoreFocusTo, _c = _a.closePosition, closePosition = _c === void 0 ? 'right' : _c, overrides = _a.overrides, hideOverlay = _a.hideOverlay, disableFocusTrap = _a.disableFocusTrap, props = __rest(_a, ["children", "open", "onDismiss", "restoreFocusTo", "closePosition", "overrides", "hideOverlay", "disableFocusTrap"]);
    var theme = useTheme();
    var cssTransitionNodeRef = React.useRef(null);
    var overlayOverrides = __assign({}, deepMerge(mergeBreakpointObject(Object.keys(theme.breakpoints)), theme.componentDefaults.modal.overlay, filterOutFalsyProperties(overrides && overrides.overlay)));
    var _d = React.useState(false), showWrapper = _d[0], setShowWrapper = _d[1];
    // When Modal is used inline, it should not be in a layer
    var OuterWrapper = props.inline ? React.Fragment : Layer;
    return (React.createElement(OuterWrapper, null,
        React.createElement(BaseDialogFunction, { ref: ref, open: open, restoreFocusTo: restoreFocusTo, onDismiss: onDismiss, hideOverlay: hideOverlay, disableFocusTrap: disableFocusTrap, renderOverlay: function (handleOverlayClick) { return (React.createElement(Overlay, { open: open, onClick: handleOverlayClick, overrides: overlayOverrides })); } }, function (handleCloseButtonClick) { return (React.createElement(StyledModalWrapper, { inline: props.inline, "$open": showWrapper, overrides: overrides },
            React.createElement(CSSTransition, { nodeRef: cssTransitionNodeRef, in: open, timeout: getTransitionDuration("modal.panel", '')({ theme: theme, overrides: overrides }), classNames: "nk-modal", mountOnEnter: true, unmountOnExit: true, appear: true, onEnter: function () { return setShowWrapper(true); }, onExited: function () { return setShowWrapper(false); } }, function (state) { return (React.createElement(StyledModal, __assign({ ref: cssTransitionNodeRef, open: open, className: getTransitionClassName('nk-modal', state), disableFocusTrap: disableFocusTrap, handleCloseButtonClick: handleCloseButtonClick, path: "modal", "data-testid": "modal", closePosition: closePosition, overrides: overrides }, props), children)); }))); })));
});
export var Modal = withOwnTheme(ThemelessModal)({
    defaults: defaults,
    stylePresets: stylePresets,
});
//# sourceMappingURL=modal.js.map