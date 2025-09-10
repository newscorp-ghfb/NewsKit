"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getResponsiveX = exports.getXFromTheme = exports.getResponsiveValueFromTheme = exports.getValueFromTheme = exports.getDefaultedValue = void 0;
var tslib_1 = require("tslib");
var responsive_helpers_1 = require("../responsive-helpers");
var filter_object_1 = require("../filter-object");
var get_token_1 = require("../get-token");
var utils_1 = require("./utils");
var getDefaultedValue = function (getPresetFromThemeUtil, presetType, cssProp) { return function (defaultPath, overridePath, option) {
    if (overridePath === void 0) { overridePath = ''; }
    return function (props) {
        return getPresetFromThemeUtil((0, get_token_1.getToken)(props, defaultPath, overridePath, presetType), undefined, cssProp || option)(props);
    };
}; };
exports.getDefaultedValue = getDefaultedValue;
var getValueFromTheme = function (themeKey) { return function (defaultToken, customProp) { return function (props) {
    var canHaveNonThemeValue = (0, utils_1.isNonThemeValueAllowed)(themeKey);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    var section = props.theme[themeKey];
    var token = (customProp && props[customProp]) || defaultToken;
    if (section && section[token]) {
        return section[token];
    }
    if (canHaveNonThemeValue && (0, utils_1.isValidUnit)(themeKey, token)) {
        return token;
    }
    return '';
}; }; };
exports.getValueFromTheme = getValueFromTheme;
var getResponsiveValueFromTheme = function (themeKey) { return function (defaultToken, customProp) { return function (_a) {
    var theme = _a.theme, props = tslib_1.__rest(_a, ["theme"]);
    var section = theme[themeKey];
    var propKeys = (customProp && props[customProp]) || defaultToken;
    var breakpoints = theme.breakpoints;
    var canHaveNonThemeValue = (0, utils_1.isNonThemeValueAllowed)(themeKey);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    var isMQTokenArray = function (v) {
        return v.length > 0 &&
            v.every(function (token) { return section[token]; });
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    var mapTokensArray = function (v) {
        return v.map(function (token) { return section[token]; }).join(' ');
    };
    if ((0, responsive_helpers_1.isResponsive)(propKeys, breakpoints)) {
        // We have a breakpoints object...
        // Convert breakpoints to array and order them
        var breakpointKeys_1 = Object.keys(breakpoints);
        var mq_1 = breakpointKeys_1.sort(function (a, b) { return breakpoints[a] - breakpoints[b]; });
        var presetKeys = Object.entries((0, filter_object_1.filterObject)(propKeys, mq_1)).sort(function (_a, _b) {
            var a = _a[0];
            var b = _b[0];
            return mq_1.indexOf(a) - mq_1.indexOf(b);
        }); // eslint-disable-line @typescript-eslint/no-explicit-any
        var cssObject = presetKeys
            .filter(
        // Exclude invalid breakpoints and theme section keys
        function (_a) {
            var breakpointKey = _a[0], presetKey = _a[1];
            return presetKey &&
                (section[presetKey] ||
                    (themeKey === 'spacePresets' &&
                        isMQTokenArray(presetKey.split(' '))) ||
                    (canHaveNonThemeValue && (0, utils_1.isValidUnit)(themeKey, presetKey))) &&
                breakpointKeys_1.includes(breakpointKey);
        })
            .reduce(function (acc, _a, index, arr) {
            var key = _a[0], presetKey = _a[1];
            /* istanbul ignore next */
            var preset = '';
            var MQtokens = typeof presetKey === 'string' && presetKey.split(' ');
            if (themeKey === 'spacePresets' && isMQTokenArray(MQtokens)) {
                preset = mapTokensArray(MQtokens);
            }
            else {
                preset =
                    section[presetKey] ||
                        (canHaveNonThemeValue &&
                            (0, utils_1.isValidUnit)(themeKey, presetKey) &&
                            presetKey);
            }
            // Get next key to set the max. This stops styles overlapping when they
            // shouldn't by explicitly setting them for the range they need to apply on.
            var nextKey = arr[index + 1] ? arr[index + 1][0] : undefined;
            var mediaQuery = (0, responsive_helpers_1.getMediaQueryFromTheme)(key, nextKey)({
                theme: theme,
            });
            acc[mediaQuery] = preset;
            return acc;
        }, {});
        return Object.entries(cssObject);
    }
    var noMQtokens = typeof propKeys === 'string' && themeKey === 'spacePresets'
        ? propKeys.split(' ')
        : [];
    if (isMQTokenArray(noMQtokens)) {
        return mapTokensArray(noMQtokens);
    }
    if (propKeys && section[propKeys]) {
        return section[propKeys];
    }
    if (canHaveNonThemeValue && propKeys && (0, utils_1.isValidUnit)(themeKey, propKeys)) {
        return propKeys;
    }
    return '';
}; }; };
exports.getResponsiveValueFromTheme = getResponsiveValueFromTheme;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
var isNotNullOrEmpty = function (v) {
    return v !== null && v !== undefined && v !== '';
};
var getXFromTheme = function (themeKey) { return function (cssProperty, defaultToken) { return function (props) {
    var _a;
    var value = (0, exports.getResponsiveValueFromTheme)(themeKey)(defaultToken)(props);
    if (Array.isArray(value)) {
        return value.reduce(function (acc, _a) {
            var _b;
            var mq = _a[0], preset = _a[1];
            var mqValue;
            if (typeof cssProperty === 'string') {
                mqValue = (_b = {}, _b[cssProperty] = preset, _b);
            }
            if (typeof cssProperty === 'function') {
                mqValue = cssProperty(preset);
            }
            /* istanbul ignore next */
            if (mqValue) {
                acc[mq] = mqValue;
            }
            return acc;
        }, {});
    }
    if (typeof cssProperty === 'string' && isNotNullOrEmpty(value)) {
        return _a = {}, _a[cssProperty] = value, _a;
    }
    if (typeof cssProperty === 'function' && isNotNullOrEmpty(value)) {
        return cssProperty(value);
    }
    return value;
}; }; };
exports.getXFromTheme = getXFromTheme;
var getResponsiveX = function (themeKey) { return function (cssProperty, defaultPath, overridePath, defaultsObjectKey) { return function (props) {
    var token = (0, get_token_1.getToken)(props, defaultPath, overridePath, defaultsObjectKey);
    return (0, exports.getXFromTheme)(themeKey)(cssProperty, token)(props);
}; }; };
exports.getResponsiveX = getResponsiveX;
//# sourceMappingURL=base.js.map