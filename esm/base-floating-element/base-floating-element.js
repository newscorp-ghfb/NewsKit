import { __assign, __rest, __spreadArray } from "tslib";
import * as React from 'react';
import { CSSTransition } from 'react-transition-group';
import { useEffect, useRef } from 'react';
import { arrow, autoUpdate, useFloating, useId, offset, shift, flip, } from '@floating-ui/react-dom-interactions';
import composeRefs from '@seznam/compose-react-refs';
import { StyledFloatingElement, StyledPanel, StyledPointer } from './styled';
import { useControlled } from '../utils/hooks';
import { useTheme } from '../theme';
import { showOverridePxWarnings, getOverridePxValue } from './utils';
import { getTransitionDuration } from '../utils';
import { getTransitionClassName } from '../utils/get-transition-class-name';
export var BaseFloatingElement = React.forwardRef(function (_a, ref) {
    var children = _a.children, content = _a.content, _b = _a.placement, placement = _b === void 0 ? 'top' : _b, openProp = _a.open, overrides = _a.overrides, _c = _a.hidePointer, hidePointer = _c === void 0 ? false : _c, role = _a.role, useInteractions = _a.useInteractions, buildRefElAriaAttributes = _a.buildRefElAriaAttributes, buildFloatingElAriaAttributes = _a.buildFloatingElAriaAttributes, path = _a.path, onDismiss = _a.onDismiss, restoreFocusTo = _a.restoreFocusTo, focusElementRef = _a.focusElementRef, className = _a.className, 
    /* istanbul ignore next */
    _d = _a.fallbackBehaviour, 
    /* istanbul ignore next */
    fallbackBehaviour = _d === void 0 ? ['flip', 'shift'] : _d, _e = _a.disableFocusManagement, disableFocusManagement = _e === void 0 ? false : _e, _f = _a.dismissOnBlur, dismissOnBlur = _f === void 0 ? false : _f, boundary = _a.boundary, rest = __rest(_a, ["children", "content", "placement", "open", "overrides", "hidePointer", "role", "useInteractions", "buildRefElAriaAttributes", "buildFloatingElAriaAttributes", "path", "onDismiss", "restoreFocusTo", "focusElementRef", "className", "fallbackBehaviour", "disableFocusManagement", "dismissOnBlur", "boundary"]);
    var _g = useControlled({
        controlledValue: openProp,
        defaultValue: false,
    }), open = _g[0], setOpen = _g[1];
    var theme = useTheme();
    var offsetValue = getOverridePxValue(path, { theme: theme, overrides: overrides }, 'offset', 'offset');
    var pointerPadding = getOverridePxValue("".concat(path, ".pointer"), { theme: theme, overrides: overrides }, 'pointer.edgeOffset', 'edgeOffset');
    useEffect(function () {
        showOverridePxWarnings(offsetValue, 'offset');
        showOverridePxWarnings(pointerPadding, 'pointer.edgeOffset');
    }, [offsetValue, pointerPadding]);
    var cssTransitionNodeRef = React.useRef(null);
    var panelRef = useRef(null);
    var pointerRef = useRef(null);
    var _h = useFloating({
        placement: placement,
        open: open,
        onOpenChange: function (isOpen) {
            // Clicking on the target icon button when controlled doesn't call this.
            if (!isOpen && onDismiss) {
                onDismiss();
            }
            setOpen(isOpen);
        },
        whileElementsMounted: autoUpdate,
        middleware: __spreadArray(__spreadArray(__spreadArray(__spreadArray([], (offsetValue ? [offset(offsetValue)] : []), true), (fallbackBehaviour.includes('flip')
            ? [flip({ boundary: boundary })]
            : /* istanbul ignore next */ []), true), (fallbackBehaviour.includes('shift')
            ? [shift({ boundary: boundary })]
            : /* istanbul ignore next */ []), true), (!hidePointer
            ? [arrow({ element: pointerRef, padding: pointerPadding })]
            : []), true),
    }), x = _h.x, y = _h.y, reference = _h.reference, floating = _h.floating, strategy = _h.strategy, context = _h.context, _j = _h.middlewareData.arrow, _k = _j === void 0 ? {} : _j, pointerX = _k.x, pointerY = _k.y, statefulPlacement = _h.placement, refs = _h.refs;
    var defaultRefId = "ref-".concat(useId());
    var floatingId = "floating-".concat(useId());
    var ariaArgs = {
        floating: { id: floatingId, open: open },
        ref: { id: children.props.id || defaultRefId },
    };
    var refElAriaAttributes = buildRefElAriaAttributes(ariaArgs);
    var floatingElAriaAttributes = buildFloatingElAriaAttributes(ariaArgs);
    var contentIsString = typeof content === 'string';
    var _l = useInteractions(context), getReferenceProps = _l.getReferenceProps, getFloatingProps = _l.getFloatingProps;
    // We need to handle changes to the value of 'open' in a useEffect because:
    // - We can't access context.refs in onOpenChange
    var isFirstRun = useRef(true);
    useEffect(function () {
        var _a, _b, _c;
        // Don't update focus on the first render.
        if (isFirstRun.current) {
            isFirstRun.current = false;
            return;
        }
        // We can't use floating-ui's FloatingFocusManager to update the focus state
        // because this does not allow tabbing past the floating element without closing it.
        if (path === 'popover' && !disableFocusManagement) {
            if (open) {
                /* istanbul ignore next */
                if (focusElementRef === null || focusElementRef === void 0 ? void 0 : focusElementRef.current) {
                    /* istanbul ignore next */
                    focusElementRef.current.focus();
                }
                else {
                    /* istanbul ignore next */
                    (_a = panelRef === null || panelRef === void 0 ? void 0 : panelRef.current) === null || _a === void 0 ? void 0 : _a.focus();
                }
            }
            else if (restoreFocusTo) {
                restoreFocusTo.focus();
                // focus should not return to reference element when dismissOnBlur is set to true
                // instead it should go with the tab flow like next active element
            }
            else if (!dismissOnBlur) {
                /* istanbul ignore next */
                (_c = (_b = refs.reference) === null || _b === void 0 ? void 0 : _b.current) === null || _c === void 0 ? void 0 : _c.focus();
            }
        }
    }, [
        open,
        path,
        refs.reference,
        panelRef,
        focusElementRef,
        openProp,
        restoreFocusTo,
        disableFocusManagement,
        dismissOnBlur,
    ]);
    if (!content) {
        return children;
    }
    // This object contains the event handlers that should be added to the reference
    // element (e.g. onClick, etc. if useClick is passed to useInteractions). It is
    // also passed to the content prop (if this is a function) to allow other elements
    // to trigger these handlers (e.g. the Popover's close button triggers the onClick
    // handler).
    var referenceProps = getReferenceProps();
    var baseTransitionClassname = "nk-".concat(path);
    return (React.createElement(React.Fragment, null,
        React.cloneElement(children, __assign(__assign(__assign(__assign({ ref: composeRefs(reference, children.ref) }, refElAriaAttributes), { id: floatingElAriaAttributes['aria-labelledby'] && !children.props.id
                ? defaultRefId
                : undefined }), referenceProps), { 
            // Overriding the referenceProps events and with the user's provided (if any) events.
            onClick: children.props.onClick || referenceProps.onClick, onKeyDown: children.props.onKeyDown || referenceProps.onKeyDown, onKeyUp: children.props.onKeyUp || referenceProps.onKeyUp, onPointerDown: children.props.onPointerDown || referenceProps.onPointerDown })),
        React.createElement(CSSTransition, { nodeRef: cssTransitionNodeRef, in: open, timeout: getTransitionDuration(path, '')({ theme: theme, overrides: overrides }), classNames: baseTransitionClassname, mountOnEnter: true, unmountOnExit: true, appear: true }, function (state) { return (React.createElement(StyledFloatingElement, __assign({ ref: composeRefs(cssTransitionNodeRef, ref) }, getFloatingProps({
            ref: floating,
            id: floatingId,
        }), { className: "".concat(className || '', " ").concat(getTransitionClassName(baseTransitionClassname, state)), baseTransitionClassname: baseTransitionClassname, strategy: strategy, "$x": x, "$y": y, placement: statefulPlacement, overrides: overrides, hidePointer: hidePointer, role: role }, floatingElAriaAttributes, { path: path }, rest),
            React.createElement(StyledPanel, { tabIndex: -1, "data-testid": "floating-element-panel", as: contentIsString ? 'p' : 'div', overrides: overrides, path: path, ref: composeRefs(cssTransitionNodeRef, panelRef) }, typeof content === 'function'
                ? content(referenceProps, context)
                : content),
            !hidePointer && (React.createElement(StyledPointer, { path: path, id: "".concat(floatingId, "-pointer"), ref: pointerRef, placement: statefulPlacement, "$x": pointerX, "$y": pointerY, overrides: overrides })))); })));
});
//# sourceMappingURL=base-floating-element.js.map