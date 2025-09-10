"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tabs = exports.Tab = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var react_is_1 = require("react-is");
var styled_1 = require("./styled");
var tab_button_1 = require("./tab-button");
var theme_1 = require("../theme");
var use_resize_observer_1 = require("../utils/hooks/use-resize-observer");
var utils_1 = require("./utils");
var tab_panel_1 = require("./tab-panel");
var component_1 = require("../utils/component");
var hooks_1 = require("../utils/hooks");
var get_1 = require("../utils/get");
var scroll_1 = require("../scroll");
var overrides_1 = require("../utils/overrides");
var utils_2 = require("../utils");
var divider_1 = require("../divider");
var defaults_1 = tslib_1.__importDefault(require("./defaults"));
var style_presets_1 = tslib_1.__importDefault(require("./style-presets"));
var with_own_theme_1 = require("../utils/with-own-theme");
var logical_properties_1 = require("../utils/logical-properties");
/* istanbul ignore next */
var Tab = function () { return react_1.default.createElement(react_1.default.Fragment, null); };
exports.Tab = Tab;
exports.Tab.displayName = 'Tab';
var validateInitialSelectedIndex = function (index, children) { return (index >= 0 && index < children.length ? index : 0); };
var validateSelectedIndex = function (index, children) {
    return index >= 0 ? Math.min(index, children.length - 1) : 0;
};
var getAlign = function (align, vertical) {
    if (!align) {
        return vertical ? 'start' : 'center';
    }
    return align;
};
var DefaultScroll = (0, utils_2.withDefaultProps)(scroll_1.Scroll, { controls: 'static', snapAlign: 'center' }, 'tabs.scroll');
var ThemelessTabs = react_1.default.forwardRef(function (_a, ref) {
    var children = _a.children, _b = _a.overrides, overrides = _b === void 0 ? {} : _b, _c = _a.size, size = _c === void 0 ? 'medium' : _c, divider = _a.divider, _d = _a.vertical, vertical = _d === void 0 ? false : _d, distribution = _a.distribution, selectedIndex = _a.selectedIndex, _e = _a.initialSelectedIndex, initialSelectedIndex = _e === void 0 ? 0 : _e, _f = _a.indicatorPosition, indicatorPosition = _f === void 0 ? 'end' : _f, passedAlign = _a.align, onChange = _a.onChange, rest = tslib_1.__rest(_a, ["children", "overrides", "size", "divider", "vertical", "distribution", "selectedIndex", "initialSelectedIndex", "indicatorPosition", "align", "onChange"]);
    var theme = (0, theme_1.useTheme)();
    var align = getAlign(passedAlign, vertical);
    var nonLogicalOverrides = (0, logical_properties_1.omitLogicalPropsFromOverrides)(overrides);
    var _g = (0, overrides_1.getComponentOverrides)(
    /* istanbul ignore next  */
    overrides === null || overrides === void 0 ? void 0 : overrides.scroll, DefaultScroll, {
        vertical: vertical,
        tabIndex: undefined,
    }), ScrollComponent = _g[0], scrollProps = _g[1];
    // filter out children which are not Tab component
    var tabsOnlyChildren = react_1.default.Children.toArray(children).filter(function (child) {
        return (0, component_1.hasMatchingDisplayNameWith)(child, exports.Tab);
    });
    // The index of the active tab - this is what we change on click to trigger a visual tab change
    var _h = (0, react_1.useState)(function () {
        return validateInitialSelectedIndex(selectedIndex || initialSelectedIndex, children);
    }), activeTabIndex = _h[0], setActiveTabIndex = _h[1];
    (0, react_1.useEffect)(function () {
        if (selectedIndex !== undefined) {
            setActiveTabIndex(validateSelectedIndex(selectedIndex, children));
        }
    }, [selectedIndex, children]);
    var changeActiveTab = function (newSelectedIndex) {
        if (selectedIndex === undefined) {
            setActiveTabIndex(newSelectedIndex);
        }
        if (onChange && typeof onChange === 'function') {
            onChange(newSelectedIndex);
        }
    };
    var _j = (0, react_1.useState)({
        size: 0,
        distance: 0,
    }), indicator = _j[0], setIndicator = _j[1];
    // Just an incremental counter to trigger re-renders when the tab is changed (active tab ref changing wont trigger a render)
    var _k = (0, react_1.useState)(0), keyUpdated = _k[0], setKeyUpdated = _k[1];
    react_1.default.useEffect(function () {
        setKeyUpdated(keyUpdated + 1);
    }, [activeTabIndex]); // eslint-disable-line react-hooks/exhaustive-deps
    var activeTabRef = react_1.default.useRef(null);
    // Reference like this so linter does not remove from hooks dependencies
    var currentActiveTabRef = activeTabRef.current;
    var tabsBarTrackRef = react_1.default.useRef(null);
    var _l = (0, use_resize_observer_1.useResizeObserver)(tabsBarTrackRef), tabsBarTrackWidth = _l[0], tabsBarTrackHeight = _l[1];
    var tabsBarTrackSize = vertical ? tabsBarTrackHeight : tabsBarTrackWidth;
    var _m = (0, use_resize_observer_1.useResizeObserver)(activeTabRef), activeTabWidth = _m[0], activeTabHeight = _m[1];
    var activeTabSize = vertical ? activeTabHeight : activeTabWidth;
    var tabsBarIndicatorSizeOverride = (0, get_1.get)(nonLogicalOverrides, 'selectionIndicator.indicator.size');
    react_1.default.useEffect(function () {
        if (currentActiveTabRef) {
            setIndicator((0, utils_1.getLayoutParams)(currentActiveTabRef, theme, vertical, tabsBarIndicatorSizeOverride));
        }
    }, [
        currentActiveTabRef,
        tabsBarIndicatorSizeOverride,
        theme,
        vertical,
        tabsBarTrackSize,
        activeTabSize,
    ]);
    var handleKeyDown = function (event) {
        // WAI-ARIA 1.1
        // https://www.w3.org/TR/wai-aria-practices-1.1/#tabpanel
        // We use directional keys to iterate focus through Tabs.
        var _a;
        // Find all tabs eligible for focus
        var availableTabs = [];
        var tabListElement = (0, utils_1.getFirstParentElementWithRole)(event.currentTarget, 'tablist');
        Array.from(tabListElement.childNodes).forEach(function (innerNode) {
            var element = (0, utils_1.getDescendantOnlyFromFirstChild)(innerNode, 'tab');
            if (element && !element.disabled) {
                availableTabs.push(element);
            }
        });
        // Exit early if there are no other tabs available
        if (availableTabs.length <= 1)
            return;
        // Find tab to focus, looping to start/end of list if necessary
        var currentTabIndex = availableTabs.indexOf(event.currentTarget);
        var action = (0, utils_1.parseKeyDown)(event, vertical);
        if (!action)
            return;
        // prevent scrolling when you switch tabs using arrows
        event.preventDefault();
        var keyboardActions = (_a = {},
            _a[utils_1.KEYBOARD_ACTION.previous] = availableTabs[currentTabIndex - 1] ||
                availableTabs[availableTabs.length - 1],
            _a[utils_1.KEYBOARD_ACTION.next] = availableTabs[currentTabIndex + 1] || availableTabs[0],
            _a[utils_1.KEYBOARD_ACTION.start] = availableTabs[0],
            _a[utils_1.KEYBOARD_ACTION.end] = availableTabs[availableTabs.length - 1],
            _a);
        var nextTab = keyboardActions[action];
        /* istanbul ignore if */
        if (!nextTab) {
            return;
        }
        // Focus the tab
        nextTab.focus();
        nextTab.click();
        /* istanbul ignore next */
        if ('scrollIntoView' in nextTab) {
            requestAnimationFrame(function () {
                nextTab.scrollIntoView();
            });
        }
    };
    // generate uniq IDs for a11y purposes
    var ariaIds = (0, hooks_1.useReactKeys)(tabsOnlyChildren.length);
    var tabPanels = tabsOnlyChildren.map(function (child, index) {
        /* istanbul ignore next */
        var key = child.key || "panel-".concat(index);
        var tabPanelProps = {
            children: child.props.children,
            selected: index === activeTabIndex,
            id: ariaIds[index],
        };
        return react_1.default.createElement(tab_panel_1.TabPanel, tslib_1.__assign({ key: key }, tabPanelProps));
    });
    var addStackDivider = function (key) { return (react_1.default.createElement(styled_1.StyledDividerWrapper, { key: "".concat(key, "-divider"), vertical: !vertical, overrides: nonLogicalOverrides },
        react_1.default.createElement(divider_1.Divider, { overrides: overrides.divider, vertical: !vertical }))); };
    var getChildren = function (tab) {
        if ((0, react_is_1.isFragment)(tab) && react_1.default.isValidElement(tab) && tab.props) {
            // un-wrap the fragment from Tab.label prop
            var element = tab;
            return element.props.children;
        }
        return tab;
    };
    var tabButtons = tabsOnlyChildren.reduce(function (acc, _a, index, array) {
        var k = _a.key, props = _a.props;
        /* istanbul ignore next */
        var key = k || "tab-".concat(index);
        var id = ariaIds[index];
        var selected = index === activeTabIndex;
        var autoFocus = props.autoFocus, dataTestId = props.dataTestId, disabled = props.disabled, ariaLabel = props.ariaLabel, tabButtonOverrides = props.overrides, label = props.label, restTabButtonProps = tslib_1.__rest(props, ["autoFocus", "dataTestId", "disabled", "ariaLabel", "overrides", "label"]);
        acc.push(react_1.default.createElement(styled_1.StyledDistributionWrapper, { distribution: distribution || 'start', "data-testid": "distribution-wrapper", vertical: vertical, last: array.length === index + 1, key: "".concat(key, "-wrapper"), overrides: nonLogicalOverrides },
            react_1.default.createElement(scroll_1.ScrollSnapAlignment, { snapAlign: (0, utils_1.getScrollAlign)(index, array) },
                react_1.default.createElement(tab_button_1.TabButton, tslib_1.__assign({ key: key, selected: selected, autoFocus: autoFocus, dataTestId: dataTestId, size: size, onKeyDown: handleKeyDown, onClick: function () { return changeActiveTab(index); }, disabled: disabled, ref: selected ? activeTabRef : undefined, id: id, align: align, ariaLabel: ariaLabel, overrides: tslib_1.__assign(tslib_1.__assign({}, tabButtonOverrides), { width: '100%', height: vertical ? '100%' : '' }) }, restTabButtonProps), getChildren(label)))));
        if (divider && index < array.length - 1) {
            acc.push(addStackDivider(key));
        }
        return acc;
    }, []);
    return (react_1.default.createElement(styled_1.StyledTabGroup, tslib_1.__assign({ ref: ref, vertical: vertical, overrides: overrides, "data-testid": "tab-group" }, rest),
        react_1.default.createElement(styled_1.StyledTabsBar, { overrides: nonLogicalOverrides, vertical: vertical, "data-testid": "tab-bar" },
            react_1.default.createElement(ScrollComponent, tslib_1.__assign({}, scrollProps),
                react_1.default.createElement(styled_1.StyledInnerTabGroup, { overrides: nonLogicalOverrides, flow: vertical ? 'vertical-left' : 'horizontal-center', inline: !vertical, role: "tablist", "aria-orientation": vertical ? 'vertical' : 'horizontal' },
                    tabButtons,
                    react_1.default.createElement(styled_1.StyledTabsBarIndicator, { overrides: nonLogicalOverrides, vertical: vertical, indicatorPosition: indicatorPosition, style: (0, utils_1.getTabsBarIndicatorStyle)(theme, indicator.size, indicator.distance, vertical, keyUpdated, nonLogicalOverrides), "data-testid": "tab-bar-indicator", "aria-hidden": "true", role: "presentation" }))),
            react_1.default.createElement(styled_1.StyledTabsBarTrack, { overrides: nonLogicalOverrides, vertical: vertical, indicatorPosition: indicatorPosition, role: "presentation", "data-testid": "tab-bar-track", ref: tabsBarTrackRef })),
        tabPanels));
});
exports.Tabs = (0, with_own_theme_1.withOwnTheme)(ThemelessTabs)({ defaults: defaults_1.default, stylePresets: style_presets_1.default });
//# sourceMappingURL=tabs.js.map