"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseFloatingElement = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var react_transition_group_1 = require("react-transition-group");
var react_1 = require("react");
var react_dom_interactions_1 = require("@floating-ui/react-dom-interactions");
var compose_react_refs_1 = tslib_1.__importDefault(require("@seznam/compose-react-refs"));
var styled_1 = require("./styled");
var hooks_1 = require("../utils/hooks");
var theme_1 = require("../theme");
var utils_1 = require("./utils");
var utils_2 = require("../utils");
var get_transition_class_name_1 = require("../utils/get-transition-class-name");
exports.BaseFloatingElement = React.forwardRef(function (_a, ref) {
    var children = _a.children, content = _a.content, _b = _a.placement, placement = _b === void 0 ? 'top' : _b, openProp = _a.open, overrides = _a.overrides, _c = _a.hidePointer, hidePointer = _c === void 0 ? false : _c, role = _a.role, useInteractions = _a.useInteractions, buildRefElAriaAttributes = _a.buildRefElAriaAttributes, buildFloatingElAriaAttributes = _a.buildFloatingElAriaAttributes, path = _a.path, onDismiss = _a.onDismiss, restoreFocusTo = _a.restoreFocusTo, focusElementRef = _a.focusElementRef, className = _a.className, 
    /* istanbul ignore next */
    _d = _a.fallbackBehaviour, 
    /* istanbul ignore next */
    fallbackBehaviour = _d === void 0 ? ['flip', 'shift'] : _d, _e = _a.disableFocusManagement, disableFocusManagement = _e === void 0 ? false : _e, _f = _a.dismissOnBlur, dismissOnBlur = _f === void 0 ? false : _f, boundary = _a.boundary, rest = tslib_1.__rest(_a, ["children", "content", "placement", "open", "overrides", "hidePointer", "role", "useInteractions", "buildRefElAriaAttributes", "buildFloatingElAriaAttributes", "path", "onDismiss", "restoreFocusTo", "focusElementRef", "className", "fallbackBehaviour", "disableFocusManagement", "dismissOnBlur", "boundary"]);
    var _g = (0, hooks_1.useControlled)({
        controlledValue: openProp,
        defaultValue: false,
    }), open = _g[0], setOpen = _g[1];
    var theme = (0, theme_1.useTheme)();
    var offsetValue = (0, utils_1.getOverridePxValue)(path, { theme: theme, overrides: overrides }, 'offset', 'offset');
    var pointerPadding = (0, utils_1.getOverridePxValue)("".concat(path, ".pointer"), { theme: theme, overrides: overrides }, 'pointer.edgeOffset', 'edgeOffset');
    (0, react_1.useEffect)(function () {
        (0, utils_1.showOverridePxWarnings)(offsetValue, 'offset');
        (0, utils_1.showOverridePxWarnings)(pointerPadding, 'pointer.edgeOffset');
    }, [offsetValue, pointerPadding]);
    var cssTransitionNodeRef = React.useRef(null);
    var panelRef = (0, react_1.useRef)(null);
    var pointerRef = (0, react_1.useRef)(null);
    var _h = (0, react_dom_interactions_1.useFloating)({
        placement: placement,
        open: open,
        onOpenChange: function (isOpen) {
            // Clicking on the target icon button when controlled doesn't call this.
            if (!isOpen && onDismiss) {
                onDismiss();
            }
            setOpen(isOpen);
        },
        whileElementsMounted: react_dom_interactions_1.autoUpdate,
        middleware: tslib_1.__spreadArray(tslib_1.__spreadArray(tslib_1.__spreadArray(tslib_1.__spreadArray([], (offsetValue ? [(0, react_dom_interactions_1.offset)(offsetValue)] : []), true), (fallbackBehaviour.includes('flip')
            ? [(0, react_dom_interactions_1.flip)({ boundary: boundary })]
            : /* istanbul ignore next */ []), true), (fallbackBehaviour.includes('shift')
            ? [(0, react_dom_interactions_1.shift)({ boundary: boundary })]
            : /* istanbul ignore next */ []), true), (!hidePointer
            ? [(0, react_dom_interactions_1.arrow)({ element: pointerRef, padding: pointerPadding })]
            : []), true),
    }), x = _h.x, y = _h.y, reference = _h.reference, floating = _h.floating, strategy = _h.strategy, context = _h.context, _j = _h.middlewareData.arrow, _k = _j === void 0 ? {} : _j, pointerX = _k.x, pointerY = _k.y, statefulPlacement = _h.placement, refs = _h.refs;
    var defaultRefId = "ref-".concat((0, react_dom_interactions_1.useId)());
    var floatingId = "floating-".concat((0, react_dom_interactions_1.useId)());
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
    var isFirstRun = (0, react_1.useRef)(true);
    (0, react_1.useEffect)(function () {
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
        React.cloneElement(children, tslib_1.__assign(tslib_1.__assign(tslib_1.__assign(tslib_1.__assign({ ref: (0, compose_react_refs_1.default)(reference, children.ref) }, refElAriaAttributes), { id: floatingElAriaAttributes['aria-labelledby'] && !children.props.id
                ? defaultRefId
                : undefined }), referenceProps), { 
            // Overriding the referenceProps events and with the user's provided (if any) events.
            onClick: children.props.onClick || referenceProps.onClick, onKeyDown: children.props.onKeyDown || referenceProps.onKeyDown, onKeyUp: children.props.onKeyUp || referenceProps.onKeyUp, onPointerDown: children.props.onPointerDown || referenceProps.onPointerDown })),
        React.createElement(react_transition_group_1.CSSTransition, { nodeRef: cssTransitionNodeRef, in: open, timeout: (0, utils_2.getTransitionDuration)(path, '')({ theme: theme, overrides: overrides }), classNames: baseTransitionClassname, mountOnEnter: true, unmountOnExit: true, appear: true }, function (state) { return (React.createElement(styled_1.StyledFloatingElement, tslib_1.__assign({ ref: (0, compose_react_refs_1.default)(cssTransitionNodeRef, ref) }, getFloatingProps({
            ref: floating,
            id: floatingId,
        }), { className: "".concat(className || '', " ").concat((0, get_transition_class_name_1.getTransitionClassName)(baseTransitionClassname, state)), baseTransitionClassname: baseTransitionClassname, strategy: strategy, "$x": x, "$y": y, placement: statefulPlacement, overrides: overrides, hidePointer: hidePointer, role: role }, floatingElAriaAttributes, { path: path }, rest),
            React.createElement(styled_1.StyledPanel, { tabIndex: -1, "data-testid": "floating-element-panel", as: contentIsString ? 'p' : 'div', overrides: overrides, path: path, ref: (0, compose_react_refs_1.default)(cssTransitionNodeRef, panelRef) }, typeof content === 'function'
                ? content(referenceProps, context)
                : content),
            !hidePointer && (React.createElement(styled_1.StyledPointer, { path: path, id: "".concat(floatingId, "-pointer"), ref: pointerRef, placement: statefulPlacement, "$x": pointerX, "$y": pointerY, overrides: overrides })))); })));
});
//# sourceMappingURL=base-floating-element.js.map