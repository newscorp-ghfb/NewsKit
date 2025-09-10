import { __assign, __rest } from "tslib";
import React, { useEffect, useRef } from 'react';
import { useSelect } from 'downshift';
import composeRefs from '@seznam/compose-react-refs';
import { useFloating, autoUpdate, shift, offset, size as floatingSize, flip, } from '@floating-ui/react-dom-interactions';
import { SelectPanel } from './select-panel';
import { SelectButton } from './select-button';
import defaults from './defaults';
import stylePresets from './style-presets';
import { withOwnTheme } from '../utils/with-own-theme';
import { checkBreakpointProp } from '../utils/check-breakpoint-prop';
import { useBreakpointKey } from '../utils/hooks/use-media-query';
import { useVirtualizedList } from './use-virtualized-list';
import { EventTrigger, useInstrumentation } from '../instrumentation';
import { get } from '../utils/get';
import { Layer } from '../layer';
import { getToken } from '../utils/get-token';
import { useTheme } from '../theme';
/* istanbul ignore next */
var noFlip = function () { return ({
    name: 'noFlip',
    fn: function (_a) {
        var x = _a.x, y = _a.y;
        return { x: x, y: y };
    },
}); };
var ThemelessSelect = React.forwardRef(function (props, inputRef) {
    var overrides = props.overrides, _a = props.placeholder, placeholder = _a === void 0 ? 'Select Option' : _a, state = props.state, startEnhancer = props.startEnhancer, endEnhancer = props.endEnhancer, validationIcon = props.validationIcon, onBlur = props.onBlur, onFocus = props.onFocus, onChange = props.onChange, _b = props.size, size = _b === void 0 ? 'medium' : _b, loading = props.loading, children = props.children, _c = props.useModal, useModal = _c === void 0 ? {} : _c, _d = props.virtualized, virtualized = _d === void 0 ? 50 : _d, _e = props.eventContext, eventContext = _e === void 0 ? {} : _e, _f = props.eventOriginator, eventOriginator = _f === void 0 ? 'select' : _f, onOpenChange = props.onOpenChange, 
    // force select in controlled mode
    _g = props.controlled, 
    // force select in controlled mode
    controlled = _g === void 0 ? false : _g, labelId = props.labelId, panelPosition = props.panelPosition, restProps = __rest(props, ["overrides", "placeholder", "state", "startEnhancer", "endEnhancer", "validationIcon", "onBlur", "onFocus", "onChange", "size", "loading", "children", "useModal", "virtualized", "eventContext", "eventOriginator", "onOpenChange", "controlled", "labelId", "panelPosition"]);
    var selectRef = useRef(null);
    var localInputRef = useRef(null);
    var panelRef = useRef(null);
    var renderInModal = checkBreakpointProp(useModal, useBreakpointKey());
    var _h = React.useState(false), isFocused = _h[0], setIsFocused = _h[1];
    var onSelectButtonFocus = React.useCallback(function (event) {
        setIsFocused(true);
        if (onFocus) {
            onFocus(event);
        }
    }, [onFocus]);
    var programmaticallySelectedItem = children.find(function (option) { return option.props.selected; });
    var defaultSelectedItem = children.find(function (option) { return option.props.defaultSelected; });
    var buttonValue = programmaticallySelectedItem
        ? get(programmaticallySelectedItem, 'props.value')
        : get(defaultSelectedItem, 'props.value');
    var fireEvent = useInstrumentation().fireEvent;
    var onInputChange = React.useCallback(
    /* istanbul ignore next */
    function (event) {
        /* istanbul ignore next */
        if (localInputRef.current) {
            localInputRef.current.value = event.selectedItem.props.value;
            fireEvent({
                originator: eventOriginator,
                trigger: EventTrigger.Change,
                context: __assign({ value: localInputRef.current.value }, eventContext),
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
    var _j = React.useState(-1), highlightedIndex = _j[0], setHighlightedIndex = _j[1];
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
    var _k = useSelect(__assign({ items: children, defaultSelectedItem: defaultSelectedItem, onSelectedItemChange: onInputChange, itemToString: itemToString, onHighlightedIndexChange: onHighlightedIndexChange, onIsOpenChange: function (event) {
            if (onOpenChange) {
                onOpenChange(Boolean(event.isOpen));
            }
        }, stateReducer: function (_, actionAndChanges) {
            var type = actionAndChanges.type, changes = actionAndChanges.changes;
            // Does not close panel in the case we are rendering panel inside a modal
            /* istanbul ignore next */
            if (renderInModal && type === useSelect.stateChangeTypes.MenuBlur) {
                return __assign(__assign({}, changes), { isOpen: true });
            }
            return changes;
        } }, getSelectedItem())), isOpen = _k.isOpen, selectedItem = _k.selectedItem, getToggleButtonProps = _k.getToggleButtonProps, getMenuProps = _k.getMenuProps, getItemProps = _k.getItemProps, openMenu = _k.openMenu, closeMenu = _k.closeMenu;
    var _l = useVirtualizedList({
        items: React.Children.toArray(children),
        listRef: panelRef,
        getItemProps: getItemProps,
        limit: virtualized,
        highlightedIndex: highlightedIndex,
        selectedItem: selectedItem,
        size: size,
        isOpen: isOpen,
    }), optionsAsChildren = _l.children, scrollToIndex = _l.scrollToIndex;
    useEffect(function () {
        if (highlightedIndex)
            scrollToIndex(highlightedIndex);
    }, [highlightedIndex, scrollToIndex]);
    var _m = React.useState(true), allowBlur = _m[0], setAllowBlur = _m[1];
    var onSelectButtonBlur = React.useCallback(function (event) {
        if (onBlur && allowBlur) {
            onBlur(event);
        }
        setIsFocused(false);
    }, [allowBlur, onBlur]);
    var _o = useFloating({
        strategy: 'absolute',
        open: isOpen,
        placement: panelPosition ? "".concat(panelPosition, "-start") : 'bottom-start',
        middleware: [
            offset(0),
            shift(),
            __assign({}, (panelPosition ? noFlip() : flip())),
            floatingSize({
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
    var _p = getToggleButtonProps(), downshiftButtonPropsRef = _p.ref, downshiftButtonPropsExceptRef = __rest(_p, ["ref"]);
    delete downshiftButtonPropsExceptRef['aria-labelledby']; // deleting because FormInput provides these props
    var _q = getMenuProps({
        ref: composeRefs(refs.floating, panelRef),
        'aria-labelledby': labelId,
    }), downshiftMenuPropsRef = _q.ref, downshiftMenuPropsExceptRef = __rest(_q, ["ref"]);
    // eslint-disable-next-line consistent-return
    React.useLayoutEffect(function () {
        /* istanbul ignore next */
        if (isOpen && refs.reference.current && refs.floating.current) {
            return autoUpdate(refs.reference.current, refs.floating.current, update);
        }
    }, [isOpen, update, refs.floating, refs.reference]);
    var theme = useTheme();
    var zIndex = getToken({ theme: theme, overrides: overrides }, "select.".concat(size, ".panel.zIndex"), 'panel.zIndex', 'sizing');
    // by default the select panel renders in layer,
    // however users can provider zIndex value so that change and adjust according to their use-case
    var LayerElement = zIndex === 'layer' ? Layer : React.Fragment;
    return (React.createElement(React.Fragment, null,
        React.createElement(SelectButton, __assign({ size: size, placeholder: placeholder, isFocused: isFocused, loading: loading, state: state, selectedItem: selectedItem, overrides: overrides === null || overrides === void 0 ? void 0 : overrides.button, startEnhancer: startEnhancer, endEnhancer: endEnhancer, validationIcon: validationIcon, setAllowBlur: setAllowBlur, onSelectButtonBlur: onSelectButtonBlur, onSelectButtonFocus: onSelectButtonFocus, openMenu: openMenu, itemToString: itemToString, ref: composeRefs(localInputRef, downshiftButtonPropsRef, inputRef), selectRef: composeRefs(selectRef, reference), value: buttonValue, isOpen: isOpen }, downshiftButtonPropsExceptRef, restProps)),
        React.createElement(LayerElement, null,
            React.createElement(SelectPanel, __assign({ isOpen: isOpen, overrides: overrides, top: y, left: x, size: size, buttonRef: localInputRef, renderInModal: renderInModal, closeMenu: closeMenu }, downshiftMenuPropsExceptRef, { ref: downshiftMenuPropsRef, strategy: strategy, zIndex: zIndex }), optionsAsChildren))));
});
ThemelessSelect.displayName = 'Select';
export var Select = withOwnTheme(ThemelessSelect)({
    defaults: defaults,
    stylePresets: stylePresets,
});
//# sourceMappingURL=select.js.map