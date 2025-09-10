"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Select = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var downshift_1 = require("downshift");
var compose_react_refs_1 = tslib_1.__importDefault(require("@seznam/compose-react-refs"));
var react_dom_interactions_1 = require("@floating-ui/react-dom-interactions");
var select_panel_1 = require("./select-panel");
var select_button_1 = require("./select-button");
var defaults_1 = tslib_1.__importDefault(require("./defaults"));
var style_presets_1 = tslib_1.__importDefault(require("./style-presets"));
var with_own_theme_1 = require("../utils/with-own-theme");
var check_breakpoint_prop_1 = require("../utils/check-breakpoint-prop");
var use_media_query_1 = require("../utils/hooks/use-media-query");
var use_virtualized_list_1 = require("./use-virtualized-list");
var instrumentation_1 = require("../instrumentation");
var get_1 = require("../utils/get");
var layer_1 = require("../layer");
var get_token_1 = require("../utils/get-token");
var theme_1 = require("../theme");
/* istanbul ignore next */
var noFlip = function () { return ({
    name: 'noFlip',
    fn: function (_a) {
        var x = _a.x, y = _a.y;
        return { x: x, y: y };
    },
}); };
var ThemelessSelect = react_1.default.forwardRef(function (props, inputRef) {
    var overrides = props.overrides, _a = props.placeholder, placeholder = _a === void 0 ? 'Select Option' : _a, state = props.state, startEnhancer = props.startEnhancer, endEnhancer = props.endEnhancer, validationIcon = props.validationIcon, onBlur = props.onBlur, onFocus = props.onFocus, onChange = props.onChange, _b = props.size, size = _b === void 0 ? 'medium' : _b, loading = props.loading, children = props.children, _c = props.useModal, useModal = _c === void 0 ? {} : _c, _d = props.virtualized, virtualized = _d === void 0 ? 50 : _d, _e = props.eventContext, eventContext = _e === void 0 ? {} : _e, _f = props.eventOriginator, eventOriginator = _f === void 0 ? 'select' : _f, onOpenChange = props.onOpenChange, 
    // force select in controlled mode
    _g = props.controlled, 
    // force select in controlled mode
    controlled = _g === void 0 ? false : _g, labelId = props.labelId, panelPosition = props.panelPosition, restProps = tslib_1.__rest(props, ["overrides", "placeholder", "state", "startEnhancer", "endEnhancer", "validationIcon", "onBlur", "onFocus", "onChange", "size", "loading", "children", "useModal", "virtualized", "eventContext", "eventOriginator", "onOpenChange", "controlled", "labelId", "panelPosition"]);
    var selectRef = (0, react_1.useRef)(null);
    var localInputRef = (0, react_1.useRef)(null);
    var panelRef = (0, react_1.useRef)(null);
    var renderInModal = (0, check_breakpoint_prop_1.checkBreakpointProp)(useModal, (0, use_media_query_1.useBreakpointKey)());
    var _h = react_1.default.useState(false), isFocused = _h[0], setIsFocused = _h[1];
    var onSelectButtonFocus = react_1.default.useCallback(function (event) {
        setIsFocused(true);
        if (onFocus) {
            onFocus(event);
        }
    }, [onFocus]);
    var programmaticallySelectedItem = children.find(function (option) { return option.props.selected; });
    var defaultSelectedItem = children.find(function (option) { return option.props.defaultSelected; });
    var buttonValue = programmaticallySelectedItem
        ? (0, get_1.get)(programmaticallySelectedItem, 'props.value')
        : (0, get_1.get)(defaultSelectedItem, 'props.value');
    var fireEvent = (0, instrumentation_1.useInstrumentation)().fireEvent;
    var onInputChange = react_1.default.useCallback(
    /* istanbul ignore next */
    function (event) {
        /* istanbul ignore next */
        if (localInputRef.current) {
            localInputRef.current.value = event.selectedItem.props.value;
            fireEvent({
                originator: eventOriginator,
                trigger: instrumentation_1.EventTrigger.Change,
                context: tslib_1.__assign({ value: localInputRef.current.value }, eventContext),
            });
        }
        /* istanbul ignore next */
        if (onChange && localInputRef.current) {
            onChange({
                type: 'change',
                target: localInputRef.current,
            });
        }
    }, [onChange, fireEvent, eventOriginator, eventContext]);
    var _j = react_1.default.useState(-1), highlightedIndex = _j[0], setHighlightedIndex = _j[1];
    var onHighlightedIndexChange = function (indexChangeEvent) {
        // istanbul ignore else
        if (indexChangeEvent.type !== '__item_mouse_move__') {
            setHighlightedIndex(indexChangeEvent.highlightedIndex);
        }
    };
    /* eslint-disable @typescript-eslint/no-explicit-any */
    // istanbul ignore next
    var itemToString = function (item) {
        var _a, _b, _c, _d, _e;
        if ((_a = item === null || item === void 0 ? void 0 : item.props) === null || _a === void 0 ? void 0 : _a['aria-label']) {
            return (_b = item === null || item === void 0 ? void 0 : item.props) === null || _b === void 0 ? void 0 : _b['aria-label'];
        }
        if (typeof ((_c = item === null || item === void 0 ? void 0 : item.props) === null || _c === void 0 ? void 0 : _c.children) === 'string') {
            return (_d = item === null || item === void 0 ? void 0 : item.props) === null || _d === void 0 ? void 0 : _d.children;
        }
        return (_e = item === null || item === void 0 ? void 0 : item.props) === null || _e === void 0 ? void 0 : _e.value;
    };
    /* eslint-enable @typescript-eslint/no-explicit-any */
    var getSelectedItem = function () {
        if (programmaticallySelectedItem) {
            return { selectedItem: programmaticallySelectedItem };
        }
        if (controlled) {
            return { selectedItem: programmaticallySelectedItem || null };
        }
        return {};
    };
    var _k = (0, downshift_1.useSelect)(tslib_1.__assign({ items: children, defaultSelectedItem: defaultSelectedItem, onSelectedItemChange: onInputChange, itemToString: itemToString, onHighlightedIndexChange: onHighlightedIndexChange, onIsOpenChange: function (event) {
            if (onOpenChange) {
                onOpenChange(Boolean(event.isOpen));
            }
        }, stateReducer: function (_, actionAndChanges) {
            var type = actionAndChanges.type, changes = actionAndChanges.changes;
            // Does not close panel in the case we are rendering panel inside a modal
            /* istanbul ignore next */
            if (renderInModal && type === downshift_1.useSelect.stateChangeTypes.MenuBlur) {
                return tslib_1.__assign(tslib_1.__assign({}, changes), { isOpen: true });
            }
            return changes;
        } }, getSelectedItem())), isOpen = _k.isOpen, selectedItem = _k.selectedItem, getToggleButtonProps = _k.getToggleButtonProps, getMenuProps = _k.getMenuProps, getItemProps = _k.getItemProps, openMenu = _k.openMenu, closeMenu = _k.closeMenu;
    var _l = (0, use_virtualized_list_1.useVirtualizedList)({
        items: react_1.default.Children.toArray(children),
        listRef: panelRef,
        getItemProps: getItemProps,
        limit: virtualized,
        highlightedIndex: highlightedIndex,
        selectedItem: selectedItem,
        size: size,
        isOpen: isOpen,
    }), optionsAsChildren = _l.children, scrollToIndex = _l.scrollToIndex;
    (0, react_1.useEffect)(function () {
        if (highlightedIndex)
            scrollToIndex(highlightedIndex);
    }, [highlightedIndex, scrollToIndex]);
    var _m = react_1.default.useState(true), allowBlur = _m[0], setAllowBlur = _m[1];
    var onSelectButtonBlur = react_1.default.useCallback(function (event) {
        if (onBlur && allowBlur) {
            onBlur(event);
        }
        setIsFocused(false);
    }, [allowBlur, onBlur]);
    var _o = (0, react_dom_interactions_1.useFloating)({
        strategy: 'absolute',
        open: isOpen,
        placement: panelPosition ? "".concat(panelPosition, "-start") : 'bottom-start',
        middleware: [
            (0, react_dom_interactions_1.offset)(0),
            (0, react_dom_interactions_1.shift)(),
            tslib_1.__assign({}, (panelPosition ? noFlip() : (0, react_dom_interactions_1.flip)())),
            (0, react_dom_interactions_1.size)({
                apply: function (_a) {
                    var rects = _a.rects, elements = _a.elements;
                    Object.assign(elements.floating.style, {
                        // when the panel is inside a modal we want to be 100%
                        width: elements.floating.classList.contains('modal-panel')
                            ? /* istanbul ignore next */
                                '100%'
                            : "".concat(rects.reference.width, "px"),
                    });
                },
            }),
        ],
    }), x = _o.x, y = _o.y, reference = _o.reference, strategy = _o.strategy, update = _o.update, refs = _o.refs;
    var _p = getToggleButtonProps(), downshiftButtonPropsRef = _p.ref, downshiftButtonPropsExceptRef = tslib_1.__rest(_p, ["ref"]);
    delete downshiftButtonPropsExceptRef['aria-labelledby']; // deleting because FormInput provides these props
    var _q = getMenuProps({
        ref: (0, compose_react_refs_1.default)(refs.floating, panelRef),
        'aria-labelledby': labelId,
    }), downshiftMenuPropsRef = _q.ref, downshiftMenuPropsExceptRef = tslib_1.__rest(_q, ["ref"]);
    // eslint-disable-next-line consistent-return
    react_1.default.useLayoutEffect(function () {
        /* istanbul ignore next */
        if (isOpen && refs.reference.current && refs.floating.current) {
            return (0, react_dom_interactions_1.autoUpdate)(refs.reference.current, refs.floating.current, update);
        }
    }, [isOpen, update, refs.floating, refs.reference]);
    var theme = (0, theme_1.useTheme)();
    var zIndex = (0, get_token_1.getToken)({ theme: theme, overrides: overrides }, "select.".concat(size, ".panel.zIndex"), 'panel.zIndex', 'sizing');
    // by default the select panel renders in layer,
    // however users can provider zIndex value so that change and adjust according to their use-case
    var LayerElement = zIndex === 'layer' ? layer_1.Layer : react_1.default.Fragment;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(select_button_1.SelectButton, tslib_1.__assign({ size: size, placeholder: placeholder, isFocused: isFocused, loading: loading, state: state, selectedItem: selectedItem, overrides: overrides === null || overrides === void 0 ? void 0 : overrides.button, startEnhancer: startEnhancer, endEnhancer: endEnhancer, validationIcon: validationIcon, setAllowBlur: setAllowBlur, onSelectButtonBlur: onSelectButtonBlur, onSelectButtonFocus: onSelectButtonFocus, openMenu: openMenu, itemToString: itemToString, ref: (0, compose_react_refs_1.default)(localInputRef, downshiftButtonPropsRef, inputRef), selectRef: (0, compose_react_refs_1.default)(selectRef, reference), value: buttonValue, isOpen: isOpen }, downshiftButtonPropsExceptRef, restProps)),
        react_1.default.createElement(LayerElement, null,
            react_1.default.createElement(select_panel_1.SelectPanel, tslib_1.__assign({ isOpen: isOpen, overrides: overrides, top: y, left: x, size: size, buttonRef: localInputRef, renderInModal: renderInModal, closeMenu: closeMenu }, downshiftMenuPropsExceptRef, { ref: downshiftMenuPropsRef, strategy: strategy, zIndex: zIndex }), optionsAsChildren))));
});
ThemelessSelect.displayName = 'Select';
exports.Select = (0, with_own_theme_1.withOwnTheme)(ThemelessSelect)({
    defaults: defaults_1.default,
    stylePresets: style_presets_1.default,
});
//# sourceMappingURL=select.js.map