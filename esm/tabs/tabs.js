import { __assign, __rest } from "tslib";
import React, { useState, useEffect } from 'react';
import { isFragment } from 'react-is';
import { StyledTabsBar, StyledInnerTabGroup, StyledTabsBarTrack, StyledTabsBarIndicator, StyledTabGroup, StyledDistributionWrapper, StyledDividerWrapper, } from './styled';
import { TabButton } from './tab-button';
import { useTheme } from '../theme';
import { useResizeObserver } from '../utils/hooks/use-resize-observer';
import { getTabsBarIndicatorStyle, getLayoutParams, KEYBOARD_ACTION, parseKeyDown, getFirstParentElementWithRole, getDescendantOnlyFromFirstChild, getScrollAlign, } from './utils';
import { TabPanel } from './tab-panel';
import { hasMatchingDisplayNameWith } from '../utils/component';
import { useReactKeys } from '../utils/hooks';
import { get } from '../utils/get';
import { Scroll, ScrollSnapAlignment } from '../scroll';
import { getComponentOverrides } from '../utils/overrides';
import { withDefaultProps } from '../utils';
import { Divider } from '../divider';
import defaults from './defaults';
import stylePresets from './style-presets';
import { withOwnTheme } from '../utils/with-own-theme';
import { omitLogicalPropsFromOverrides } from '../utils/logical-properties';
/* istanbul ignore next */
export var Tab = function () { return React.createElement(React.Fragment, null); };
Tab.displayName = 'Tab';
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
var DefaultScroll = withDefaultProps(Scroll, { controls: 'static', snapAlign: 'center' }, 'tabs.scroll');
var ThemelessTabs = React.forwardRef(function (_a, ref) {
    var children = _a.children, _b = _a.overrides, overrides = _b === void 0 ? {} : _b, _c = _a.size, size = _c === void 0 ? 'medium' : _c, divider = _a.divider, _d = _a.vertical, vertical = _d === void 0 ? false : _d, distribution = _a.distribution, selectedIndex = _a.selectedIndex, _e = _a.initialSelectedIndex, initialSelectedIndex = _e === void 0 ? 0 : _e, _f = _a.indicatorPosition, indicatorPosition = _f === void 0 ? 'end' : _f, passedAlign = _a.align, onChange = _a.onChange, rest = __rest(_a, ["children", "overrides", "size", "divider", "vertical", "distribution", "selectedIndex", "initialSelectedIndex", "indicatorPosition", "align", "onChange"]);
    var theme = useTheme();
    var align = getAlign(passedAlign, vertical);
    var nonLogicalOverrides = omitLogicalPropsFromOverrides(overrides);
    var _g = getComponentOverrides(
    /* istanbul ignore next  */
    overrides === null || overrides === void 0 ? void 0 : overrides.scroll, DefaultScroll, {
        vertical: vertical,
        tabIndex: undefined,
    }), ScrollComponent = _g[0], scrollProps = _g[1];
    // filter out children which are not Tab component
    var tabsOnlyChildren = React.Children.toArray(children).filter(function (child) {
        return hasMatchingDisplayNameWith(child, Tab);
    });
    // The index of the active tab - this is what we change on click to trigger a visual tab change
    var _h = useState(function () {
        return validateInitialSelectedIndex(selectedIndex || initialSelectedIndex, children);
    }), activeTabIndex = _h[0], setActiveTabIndex = _h[1];
    useEffect(function () {
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
    var _j = useState({
        size: 0,
        distance: 0,
    }), indicator = _j[0], setIndicator = _j[1];
    // Just an incremental counter to trigger re-renders when the tab is changed (active tab ref changing wont trigger a render)
    var _k = useState(0), keyUpdated = _k[0], setKeyUpdated = _k[1];
    React.useEffect(function () {
        setKeyUpdated(keyUpdated + 1);
    }, [activeTabIndex]); // eslint-disable-line react-hooks/exhaustive-deps
    var activeTabRef = React.useRef(null);
    // Reference like this so linter does not remove from hooks dependencies
    var currentActiveTabRef = activeTabRef.current;
    var tabsBarTrackRef = React.useRef(null);
    var _l = useResizeObserver(tabsBarTrackRef), tabsBarTrackWidth = _l[0], tabsBarTrackHeight = _l[1];
    var tabsBarTrackSize = vertical ? tabsBarTrackHeight : tabsBarTrackWidth;
    var _m = useResizeObserver(activeTabRef), activeTabWidth = _m[0], activeTabHeight = _m[1];
    var activeTabSize = vertical ? activeTabHeight : activeTabWidth;
    var tabsBarIndicatorSizeOverride = get(nonLogicalOverrides, 'selectionIndicator.indicator.size');
    React.useEffect(function () {
        if (currentActiveTabRef) {
            setIndicator(getLayoutParams(currentActiveTabRef, theme, vertical, tabsBarIndicatorSizeOverride));
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
        var tabListElement = getFirstParentElementWithRole(event.currentTarget, 'tablist');
        Array.from(tabListElement.childNodes).forEach(function (innerNode) {
            var element = getDescendantOnlyFromFirstChild(innerNode, 'tab');
            if (element && !element.disabled) {
                availableTabs.push(element);
            }
        });
        // Exit early if there are no other tabs available
        if (availableTabs.length <= 1)
            return;
        // Find tab to focus, looping to start/end of list if necessary
        var currentTabIndex = availableTabs.indexOf(event.currentTarget);
        var action = parseKeyDown(event, vertical);
        if (!action)
            return;
        // prevent scrolling when you switch tabs using arrows
        event.preventDefault();
        var keyboardActions = (_a = {},
            _a[KEYBOARD_ACTION.previous] = availableTabs[currentTabIndex - 1] ||
                availableTabs[availableTabs.length - 1],
            _a[KEYBOARD_ACTION.next] = availableTabs[currentTabIndex + 1] || availableTabs[0],
            _a[KEYBOARD_ACTION.start] = availableTabs[0],
            _a[KEYBOARD_ACTION.end] = availableTabs[availableTabs.length - 1],
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
    var ariaIds = useReactKeys(tabsOnlyChildren.length);
    var tabPanels = tabsOnlyChildren.map(function (child, index) {
        /* istanbul ignore next */
        var key = child.key || "panel-".concat(index);
        var tabPanelProps = {
            children: child.props.children,
            selected: index === activeTabIndex,
            id: ariaIds[index],
        };
        return React.createElement(TabPanel, __assign({ key: key }, tabPanelProps));
    });
    var addStackDivider = function (key) { return (React.createElement(StyledDividerWrapper, { key: "".concat(key, "-divider"), vertical: !vertical, overrides: nonLogicalOverrides },
        React.createElement(Divider, { overrides: overrides.divider, vertical: !vertical }))); };
    var getChildren = function (tab) {
        if (isFragment(tab) && React.isValidElement(tab) && tab.props) {
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
        var autoFocus = props.autoFocus, dataTestId = props.dataTestId, disabled = props.disabled, ariaLabel = props.ariaLabel, tabButtonOverrides = props.overrides, label = props.label, restTabButtonProps = __rest(props, ["autoFocus", "dataTestId", "disabled", "ariaLabel", "overrides", "label"]);
        acc.push(React.createElement(StyledDistributionWrapper, { distribution: distribution || 'start', "data-testid": "distribution-wrapper", vertical: vertical, last: array.length === index + 1, key: "".concat(key, "-wrapper"), overrides: nonLogicalOverrides },
            React.createElement(ScrollSnapAlignment, { snapAlign: getScrollAlign(index, array) },
                React.createElement(TabButton, __assign({ key: key, selected: selected, autoFocus: autoFocus, dataTestId: dataTestId, size: size, onKeyDown: handleKeyDown, onClick: function () { return changeActiveTab(index); }, disabled: disabled, ref: selected ? activeTabRef : undefined, id: id, align: align, ariaLabel: ariaLabel, overrides: __assign(__assign({}, tabButtonOverrides), { width: '100%', height: vertical ? '100%' : '' }) }, restTabButtonProps), getChildren(label)))));
        if (divider && index < array.length - 1) {
            acc.push(addStackDivider(key));
        }
        return acc;
    }, []);
    return (React.createElement(StyledTabGroup, __assign({ ref: ref, vertical: vertical, overrides: overrides, "data-testid": "tab-group" }, rest),
        React.createElement(StyledTabsBar, { overrides: nonLogicalOverrides, vertical: vertical, "data-testid": "tab-bar" },
            React.createElement(ScrollComponent, __assign({}, scrollProps),
                React.createElement(StyledInnerTabGroup, { overrides: nonLogicalOverrides, flow: vertical ? 'vertical-left' : 'horizontal-center', inline: !vertical, role: "tablist", "aria-orientation": vertical ? 'vertical' : 'horizontal' },
                    tabButtons,
                    React.createElement(StyledTabsBarIndicator, { overrides: nonLogicalOverrides, vertical: vertical, indicatorPosition: indicatorPosition, style: getTabsBarIndicatorStyle(theme, indicator.size, indicator.distance, vertical, keyUpdated, nonLogicalOverrides), "data-testid": "tab-bar-indicator", "aria-hidden": "true", role: "presentation" }))),
            React.createElement(StyledTabsBarTrack, { overrides: nonLogicalOverrides, vertical: vertical, indicatorPosition: indicatorPosition, role: "presentation", "data-testid": "tab-bar-track", ref: tabsBarTrackRef })),
        tabPanels));
});
export var Tabs = withOwnTheme(ThemelessTabs)({ defaults: defaults, stylePresets: stylePresets });
//# sourceMappingURL=tabs.js.map