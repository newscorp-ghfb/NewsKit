import { __rest } from "tslib";
import { isResponsive, getMediaQueryFromTheme } from '../responsive-helpers';
import { filterObject } from '../filter-object';
import { getToken } from '../get-token';
import { isNonThemeValueAllowed, isValidUnit } from './utils';
export var getDefaultedValue = function (getPresetFromThemeUtil, presetType, cssProp) { return function (defaultPath, overridePath, option) {
    if (overridePath === void 0) { overridePath = ''; }
    return function (props) {
        return getPresetFromThemeUtil(getToken(props, defaultPath, overridePath, presetType), undefined, cssProp || option)(props);
    };
}; };
export var getValueFromTheme = function (themeKey) { return function (defaultToken, customProp) { return function (props) {
    var canHaveNonThemeValue = isNonThemeValueAllowed(themeKey);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    var section = props.theme[themeKey];
    var token = (customProp && props[customProp]) || defaultToken;
    if (section && section[token]) {
        return section[token];
    }
    if (canHaveNonThemeValue && isValidUnit(themeKey, token)) {
        return token;
    }
    return '';
}; }; };
export var getResponsiveValueFromTheme = function (themeKey) { return function (defaultToken, customProp) { return function (_a) {
    var theme = _a.theme, props = __rest(_a, ["theme"]);
    var section = theme[themeKey];
    var propKeys = (customProp && props[customProp]) || defaultToken;
    var breakpoints = theme.breakpoints;
    var canHaveNonThemeValue = isNonThemeValueAllowed(themeKey);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    var isMQTokenArray = function (v) {
        return v.length > 0 &&
            v.every(function (token) { return section[token]; });
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    var mapTokensArray = function (v) {
        return v.map(function (token) { return section[token]; }).join(' ');
    };
    if (isResponsive(propKeys, breakpoints)) {
        // We have a breakpoints object...
        // Convert breakpoints to array and order them
        var breakpointKeys_1 = Object.keys(breakpoints);
        var mq_1 = breakpointKeys_1.sort(function (a, b) { return breakpoints[a] - breakpoints[b]; });
        var presetKeys = Object.entries(filterObject(propKeys, mq_1)).sort(function (_a, _b) {
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
                    (canHaveNonThemeValue && isValidUnit(themeKey, presetKey))) &&
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
                            isValidUnit(themeKey, presetKey) &&
                            presetKey);
            }
            // Get next key to set the max. This stops styles overlapping when they
            // shouldn't by explicitly setting them for the range they need to apply on.
            var nextKey = arr[index + 1] ? arr[index + 1][0] : undefined;
            var mediaQuery = getMediaQueryFromTheme(key, nextKey)({
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
    if (canHaveNonThemeValue && propKeys && isValidUnit(themeKey, propKeys)) {
        return propKeys;
    }
    return '';
}; }; };
// eslint-disable-next-line @typescript-eslint/no-explicit-any
var isNotNullOrEmpty = function (v) {
    return v !== null && v !== undefined && v !== '';
};
export var getXFromTheme = function (themeKey) { return function (cssProperty, defaultToken) { return function (props) {
    var _a;
    var value = getResponsiveValueFromTheme(themeKey)(defaultToken)(props);
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
export var getResponsiveX = function (themeKey) { return function (cssProperty, defaultPath, overridePath, defaultsObjectKey) { return function (props) {
    var token = getToken(props, defaultPath, overridePath, defaultsObjectKey);
    return getXFromTheme(themeKey)(cssProperty, token)(props);
}; }; };
//# sourceMappingURL=base.js.map