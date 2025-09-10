"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Scroll = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var compose_react_refs_1 = tslib_1.__importDefault(require("@seznam/compose-react-refs"));
var debounce_1 = require("debounce");
var icons_1 = require("../icons");
var styled_1 = require("./styled");
var context_1 = require("./context");
var filter_object_1 = require("../utils/filter-object");
var theme_1 = require("../theme");
var icon_button_1 = require("../icon-button");
var get_1 = require("../utils/get");
var hooks_1 = require("../utils/hooks");
var defaults_1 = tslib_1.__importDefault(require("./defaults"));
var style_presets_1 = tslib_1.__importDefault(require("./style-presets"));
var with_own_theme_1 = require("../utils/with-own-theme");
var utils_1 = require("./utils");
var ThemelessScroll = react_1.default.forwardRef(function (_a, ref) {
    var _b = _a.vertical, vertical = _b === void 0 ? false : _b, controls = _a.controls, _c = _a.stepDistance, stepDistance = _c === void 0 ? 160 : _c, snapAlign = _a.snapAlign, _d = _a.scrollBar, scrollBar = _d === void 0 ? false : _d, children = _a.children, _e = _a.overrides, overrides = _e === void 0 ? {} : _e, props = tslib_1.__rest(_a, ["vertical", "controls", "stepDistance", "snapAlign", "scrollBar", "children", "overrides"]);
    var theme = (0, theme_1.useTheme)();
    var buttonComponentDefault = (0, get_1.get)(theme, "componentDefaults.scroll.".concat(vertical ? 'vertical' : 'horizontal', ".controls.button"));
    var buttonOverrides = tslib_1.__assign(tslib_1.__assign({}, buttonComponentDefault), (0, filter_object_1.filterOutFalsyProperties)((0, get_1.get)(overrides, 'controls.button')));
    var scrollContainerRef = (0, react_1.useRef)(null);
    var _f = (0, react_1.useState)(false), canScrollStart = _f[0], setCanScrollStart = _f[1];
    var _g = (0, react_1.useState)(false), canScrollEnd = _g[0], setCanScrollEnd = _g[1];
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
            setCanScrollEnd(scrollHeight - clientHeight - scrollTop > utils_1.SCROLL_THRESHOLD);
        }
        else {
            var _b = scrollContainerRef.current, scrollLeft = _b.scrollLeft, scrollWidth = _b.scrollWidth, clientWidth = _b.clientWidth;
            setCanScrollStart(scrollLeft > 0);
            setCanScrollEnd(scrollWidth - clientWidth - scrollLeft > utils_1.SCROLL_THRESHOLD);
        }
    };
    var debounceCheckForScrollPosition = (0, debounce_1.debounce)(checkForScrollPosition, 100);
    (0, hooks_1.useIsomorphicLayoutEffect)(checkForScrollPosition);
    var controlsEnabled = Boolean(controls && (controls === 'hover' || controls === 'static'));
    var iconSize = 'small';
    return (react_1.default.createElement(styled_1.StyledScrollNav, { controlsVariant: controls, showStartShadow: canScrollStart, showEndShadow: canScrollEnd, vertical: vertical, overrides: overrides },
        react_1.default.createElement(styled_1.StyledScrollContainer, tslib_1.__assign({ tabIndex: 0 }, props, { vertical: vertical, snapAlign: snapAlign, scrollBar: scrollBar, ref: (0, compose_react_refs_1.default)(scrollContainerRef, ref), "data-testid": "scroll-container", onScroll: debounceCheckForScrollPosition, controlsEnabled: controlsEnabled }), snapAlign ? (react_1.default.createElement(context_1.ScrollSnapAlignmentContextProvider, { value: snapAlign }, children)) : (children)),
        controlsEnabled && (react_1.default.createElement(react_1.default.Fragment, null,
            canScrollEnd && (react_1.default.createElement(styled_1.StyledScrollButtonContainer, { className: "nk-scroll-controls", vertical: vertical, position: "end", overrides: overrides },
                react_1.default.createElement(icon_button_1.IconButton, { "aria-label": "Scroll ".concat(vertical ? 'bottom' : 'right'), overrides: buttonOverrides, tabIndex: -1, "data-testid": "scroll-arrow-".concat(vertical ? 'bottom' : 'right'), onClick: function () { return scrollContainer(stepDistance); }, size: iconSize, eventOriginator: "scroll-button-".concat(vertical ? 'bottom' : 'right') },
                    react_1.default.createElement(icons_1.IconFilledChevronRight, null)))),
            canScrollStart && (react_1.default.createElement(styled_1.StyledScrollButtonContainer, { className: "nk-scroll-controls", vertical: vertical, position: "start", overrides: overrides },
                react_1.default.createElement(icon_button_1.IconButton, { overrides: buttonOverrides, tabIndex: -1, "aria-label": "Scroll ".concat(vertical ? 'top' : 'left'), "data-testid": "scroll-arrow-".concat(vertical ? 'top' : 'left'), onClick: function () { return scrollContainer(-stepDistance); }, size: iconSize, eventOriginator: "scroll-button-".concat(vertical ? 'top' : 'left') },
                    react_1.default.createElement(icons_1.IconFilledChevronLeft, null))))))));
});
exports.Scroll = (0, with_own_theme_1.withOwnTheme)(ThemelessScroll)({
    defaults: defaults_1.default,
    stylePresets: style_presets_1.default,
});
//# sourceMappingURL=scroll.js.map