import { __assign, __rest } from "tslib";
import React, { useRef, useState } from 'react';
import composeRefs from '@seznam/compose-react-refs';
import { debounce } from 'debounce';
import { IconFilledChevronLeft, IconFilledChevronRight } from '../icons';
import { StyledScrollContainer, StyledScrollButtonContainer, StyledScrollNav, } from './styled';
import { ScrollSnapAlignmentContextProvider } from './context';
import { filterOutFalsyProperties } from '../utils/filter-object';
import { useTheme } from '../theme';
import { IconButton } from '../icon-button';
import { get } from '../utils/get';
import { useIsomorphicLayoutEffect } from '../utils/hooks';
import defaults from './defaults';
import stylePresets from './style-presets';
import { withOwnTheme } from '../utils/with-own-theme';
import { SCROLL_THRESHOLD } from './utils';
var ThemelessScroll = React.forwardRef(function (_a, ref) {
    var _b = _a.vertical, vertical = _b === void 0 ? false : _b, controls = _a.controls, _c = _a.stepDistance, stepDistance = _c === void 0 ? 160 : _c, snapAlign = _a.snapAlign, _d = _a.scrollBar, scrollBar = _d === void 0 ? false : _d, children = _a.children, _e = _a.overrides, overrides = _e === void 0 ? {} : _e, props = __rest(_a, ["vertical", "controls", "stepDistance", "snapAlign", "scrollBar", "children", "overrides"]);
    var theme = useTheme();
    var buttonComponentDefault = get(theme, "componentDefaults.scroll.".concat(vertical ? 'vertical' : 'horizontal', ".controls.button"));
    var buttonOverrides = __assign(__assign({}, buttonComponentDefault), filterOutFalsyProperties(get(overrides, 'controls.button')));
    var scrollContainerRef = useRef(null);
    var _f = useState(false), canScrollStart = _f[0], setCanScrollStart = _f[1];
    var _g = useState(false), canScrollEnd = _g[0], setCanScrollEnd = _g[1];
    var scrollContainer = function (distance) {
        /* istanbul ignore if */
        if (!scrollContainerRef.current)
            return;
        if (vertical) {
            scrollContainerRef.current.scrollTop += distance;
        }
        else {
            scrollContainerRef.current.scrollLeft += distance;
        }
    };
    var checkForScrollPosition = function () {
        /* istanbul ignore if */
        if (!scrollContainerRef.current)
            return;
        if (vertical) {
            var _a = scrollContainerRef.current, scrollTop = _a.scrollTop, scrollHeight = _a.scrollHeight, clientHeight = _a.clientHeight;
            setCanScrollStart(scrollTop > 0);
            // In cases when browser is zoomed the scrollTop is decimal value instead of int
            // that brakes the following condition: scrollTop !== scrollHeight - clientHeight
            // for example:
            // scrollTop = 917.272705078125; scrollHeight = 1941; clientHeight = 1024
            // scrollTop will always be different from scrollWidth - clientWidth
            //
            // That is why we added SCROLL_THRESHOLD and the buttons will be hidden when is smaller than it.
            setCanScrollEnd(scrollHeight - clientHeight - scrollTop > SCROLL_THRESHOLD);
        }
        else {
            var _b = scrollContainerRef.current, scrollLeft = _b.scrollLeft, scrollWidth = _b.scrollWidth, clientWidth = _b.clientWidth;
            setCanScrollStart(scrollLeft > 0);
            setCanScrollEnd(scrollWidth - clientWidth - scrollLeft > SCROLL_THRESHOLD);
        }
    };
    var debounceCheckForScrollPosition = debounce(checkForScrollPosition, 100);
    useIsomorphicLayoutEffect(checkForScrollPosition);
    var controlsEnabled = Boolean(controls && (controls === 'hover' || controls === 'static'));
    var iconSize = 'small';
    return (React.createElement(StyledScrollNav, { controlsVariant: controls, showStartShadow: canScrollStart, showEndShadow: canScrollEnd, vertical: vertical, overrides: overrides },
        React.createElement(StyledScrollContainer, __assign({ tabIndex: 0 }, props, { vertical: vertical, snapAlign: snapAlign, scrollBar: scrollBar, ref: composeRefs(scrollContainerRef, ref), "data-testid": "scroll-container", onScroll: debounceCheckForScrollPosition, controlsEnabled: controlsEnabled }), snapAlign ? (React.createElement(ScrollSnapAlignmentContextProvider, { value: snapAlign }, children)) : (children)),
        controlsEnabled && (React.createElement(React.Fragment, null,
            canScrollEnd && (React.createElement(StyledScrollButtonContainer, { className: "nk-scroll-controls", vertical: vertical, position: "end", overrides: overrides },
                React.createElement(IconButton, { "aria-label": "Scroll ".concat(vertical ? 'bottom' : 'right'), overrides: buttonOverrides, tabIndex: -1, "data-testid": "scroll-arrow-".concat(vertical ? 'bottom' : 'right'), onClick: function () { return scrollContainer(stepDistance); }, size: iconSize, eventOriginator: "scroll-button-".concat(vertical ? 'bottom' : 'right') },
                    React.createElement(IconFilledChevronRight, null)))),
            canScrollStart && (React.createElement(StyledScrollButtonContainer, { className: "nk-scroll-controls", vertical: vertical, position: "start", overrides: overrides },
                React.createElement(IconButton, { overrides: buttonOverrides, tabIndex: -1, "aria-label": "Scroll ".concat(vertical ? 'top' : 'left'), "data-testid": "scroll-arrow-".concat(vertical ? 'top' : 'left'), onClick: function () { return scrollContainer(-stepDistance); }, size: iconSize, eventOriginator: "scroll-button-".concat(vertical ? 'top' : 'left') },
                    React.createElement(IconFilledChevronLeft, null))))))));
});
export var Scroll = withOwnTheme(ThemelessScroll)({
    defaults: defaults,
    stylePresets: stylePresets,
});
//# sourceMappingURL=scroll.js.map