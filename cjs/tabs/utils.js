"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getScrollAlign = exports.getDescendantOnlyFromFirstChild = exports.getFirstParentElementWithRole = exports.getTabsBarIndicatorStyle = exports.parseKeyDown = exports.KEYBOARD_ARROWS = exports.KEYBOARD_ACTION = exports.getLayoutParams = void 0;
var get_token_1 = require("../utils/get-token");
var style_1 = require("../utils/style");
var getLayoutParams = function (el, theme, vertical, sizeOverride) {
    if (!el) {
        return {
            size: 0,
            distance: 0,
        };
    }
    var params = vertical
        ? {
            // clientHeight and clientWidth return rounded value which can be different than painted one
            // getBoundingClientRect returns the correct value as float
            // but browsers also like to round up the value for the indicator
            // so we end up with example: tab width: 150.67 and indicator width: 151px
            // which adds 1px to the scroll and make arrows to be visible when then should not be
            // for that we use Math.floor to round down the value
            // which might make the indicator 1px smaller but prevents 1px scroll
            size: Math.floor(el.getBoundingClientRect().height),
            distance: el.offsetTop,
        }
        : {
            size: Math.floor(el.getBoundingClientRect().width),
            distance: el.offsetLeft,
        };
    if (sizeOverride) {
        var newSize = params.size;
        if (typeof theme.sizing[sizeOverride] !== 'undefined') {
            newSize = parseInt(theme.sizing[sizeOverride], 10);
        }
        else if (sizeOverride.includes('px')) {
            newSize = parseInt(sizeOverride, 10);
        }
        else if (sizeOverride.includes('%')) {
            newSize = params.size * (parseFloat(sizeOverride) / 100);
        }
        var sizeDifference = params.size - newSize;
        // update params object only when newSize is smaller than the
        // current tab button size
        if (sizeDifference > 0) {
            // if the indicator size is smaller than the parent container
            // center the indicator in it's container
            params.distance += sizeDifference / 2;
            params.size = newSize;
        }
    }
    return params;
};
exports.getLayoutParams = getLayoutParams;
exports.KEYBOARD_ACTION = {
    next: 'next',
    previous: 'previous',
    start: 'start',
    end: 'end',
};
exports.KEYBOARD_ARROWS = {
    left: 37,
    up: 38,
    right: 39,
    down: 40,
    home: 36,
    end: 35,
};
var parseKeyDown = function (event, vertical) {
    var next = vertical ? exports.KEYBOARD_ARROWS.down : exports.KEYBOARD_ARROWS.right;
    var prev = vertical ? exports.KEYBOARD_ARROWS.up : exports.KEYBOARD_ARROWS.left;
    switch (event.keyCode) {
        case next:
            return exports.KEYBOARD_ACTION.next;
        case prev:
            return exports.KEYBOARD_ACTION.previous;
        case exports.KEYBOARD_ARROWS.home:
            return exports.KEYBOARD_ACTION.start;
        case exports.KEYBOARD_ARROWS.end:
            return exports.KEYBOARD_ACTION.end;
        default:
            return null;
    }
};
exports.parseKeyDown = parseKeyDown;
var getTabsBarIndicatorStyle = function (theme, size, distance, vertical, keyUpdated, overrides) {
    var weightToken = (0, get_token_1.getToken)({ theme: theme, overrides: overrides }, 'tabs.selectionIndicator.indicator', 'selectionIndicator.indicator', 'weight');
    var weight = (0, style_1.getBorderFromTheme)(weightToken, undefined)({ theme: theme });
    var motionDurationToken = (0, get_token_1.getToken)({ theme: theme, overrides: overrides }, 'tabs.selectionIndicator.indicator', 'selectionIndicator.indicator', 'motionDuration');
    var motionDuration = (0, style_1.getMotionFromTheme)(motionDurationToken, undefined)({
        theme: theme,
    });
    var motionTimingToken = (0, get_token_1.getToken)({ theme: theme, overrides: overrides }, 'tabs.selectionIndicator.indicator', 'selectionIndicator.indicator', 'motionTiming');
    var motionTiming = (0, style_1.getMotionFromTheme)(motionTimingToken, undefined)({
        theme: theme,
    });
    return {
        width: vertical ? weight : "".concat(size, "px"),
        height: vertical ? "".concat(size, "px") : weight,
        transform: vertical
            ? "translateY(".concat(distance, "px)")
            : "translateX(".concat(distance, "px)"),
        transition: keyUpdated && keyUpdated > 1
            ? "all ".concat(motionDuration, " ").concat(motionTiming)
            : undefined,
    };
};
exports.getTabsBarIndicatorStyle = getTabsBarIndicatorStyle;
var getFirstParentElementWithRole = function (element, role) {
    var currentElement = element;
    while (currentElement && !(currentElement.getAttribute('role') === role)) {
        currentElement = currentElement.parentElement;
    }
    return currentElement;
};
exports.getFirstParentElementWithRole = getFirstParentElementWithRole;
// Take the descendant element with a specific role but traverse the DOM only looking in each first child.
var getDescendantOnlyFromFirstChild = function (element, role) {
    var currentElement = element && element.childNodes && element.childNodes[0];
    while (currentElement &&
        !(currentElement.getAttribute('role') === role)) {
        currentElement = currentElement.childNodes && currentElement.childNodes[0];
    }
    return currentElement;
};
exports.getDescendantOnlyFromFirstChild = getDescendantOnlyFromFirstChild;
var getScrollAlign = function (index, tabArray) {
    if (index === 0)
        return 'start';
    if (index === tabArray.length - 1)
        return 'end';
    return 'center';
};
exports.getScrollAlign = getScrollAlign;
//# sourceMappingURL=utils.js.map