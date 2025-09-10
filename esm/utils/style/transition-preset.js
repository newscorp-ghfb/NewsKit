import { __assign } from "tslib";
import { deepMerge } from '../deep-merge';
import { getToken } from '../get-token';
import { isArrayLikeObject, unifyTransition } from './utils';
import { hasOwnProperty } from '../has-own-property';
import { getMediaQueryFromTheme, isResponsive } from '../responsive-helpers';
var cssTransitionPropertiesList = [
    ['transitionProperty', ', '],
    ['transitionDuration', ', '],
    ['transitionDelay', ', '],
    ['transitionTimingFunction', ', '],
    ['transform', ' '],
];
var getTransitionPresetValueFromTheme = function (transitionPreset, componentClassName) {
    return Object.entries(transitionPreset).reduce(function (acc, _a) {
        var stateKey = _a[0], stateStyles = _a[1];
        if (stateStyles && Object.keys(stateStyles).length) {
            var state = stateKey
                .split(/(?=[A-Z])/)
                .map(function (x) { return x.toLowerCase(); })
                .join('-');
            var selector = "&.".concat(componentClassName, "-").concat(state);
            if (stateKey === 'base') {
                return __assign(__assign({}, acc), stateStyles);
            }
            acc[selector] = stateStyles;
        }
        return acc;
    }, {});
};
function concatAndMergeInTransitionStringsForPseudoState(entry, mergedTransitionPreset) {
    var stateKey = entry[0];
    var stateStyles = entry[1];
    var shouldConcatTransitionStrings = function (cssProperty) {
        return hasOwnProperty(stateStyles, cssProperty) &&
            mergedTransitionPreset[stateKey] &&
            hasOwnProperty(mergedTransitionPreset[stateKey], cssProperty);
    };
    var combinedTransitionProperties = cssTransitionPropertiesList
        .filter(function (_a) {
        var cssProperty = _a[0];
        return shouldConcatTransitionStrings(cssProperty);
    })
        .reduce(function (acc, _a) {
        var cssProperty = _a[0], delimiter = _a[1];
        /* eslint no-param-reassign: ["error", { "props": false }] */
        acc[cssProperty] = "".concat(mergedTransitionPreset[stateKey][cssProperty]).concat(delimiter).concat(stateStyles[cssProperty]);
        return acc;
    }, {});
    var updatedStateStyles = __assign(__assign({}, stateStyles), combinedTransitionProperties);
    mergedTransitionPreset[stateKey] = deepMerge(mergedTransitionPreset[stateKey], updatedStateStyles);
    return mergedTransitionPreset;
}
function concatAndMergeInTransitionStringsForPreset(transitionPreset, mergedTransitionPreset) {
    return Object.entries(transitionPreset).reduce(function (mergedTransitionPresetAcc, entry) {
        return concatAndMergeInTransitionStringsForPseudoState(entry, mergedTransitionPresetAcc);
    }, mergedTransitionPreset);
}
var getMergedTransitionPresets = function (token, theme) {
    var mergedTransitionPresets = token
        .map(function (tkn) { return unifyTransition(theme, tkn); })
        .filter(function (transition) { return transition; })
        .reduce(function (mergedTransitionPreset, transition) {
        return concatAndMergeInTransitionStringsForPreset(transition, mergedTransitionPreset);
    }, {});
    return mergedTransitionPresets;
};
var setDurationZero = function (transitionPreset) {
    var presetWithoutDuration = {};
    Object.keys(transitionPreset).map(function (key) {
        var stateObj = transitionPreset[key];
        presetWithoutDuration[key] = __assign({}, stateObj);
        if ('transitionDuration' in presetWithoutDuration[key]) {
            presetWithoutDuration[key].transitionDuration = '0ms';
        }
        return presetWithoutDuration;
    });
    return presetWithoutDuration;
};
var NO_PREFERENCE = '(prefers-reduced-motion: no-preference)';
var REDUCED = '(prefers-reduced-motion: reduce)';
var NO_PREFERENCE_MQ = "@media screen and ".concat(NO_PREFERENCE);
var REDUCED_MQ = "@media screen and ".concat(REDUCED);
var combineMediaQuery = function (layoutMQ, motionMQ) {
    return "".concat(layoutMQ, " and ").concat(motionMQ);
};
export var getTransitionPresetFromTheme = function (token, componentClassName) { return function (props) {
    var _a, _b;
    /* istanbul ignore if */
    if (!token)
        return '';
    if (isResponsive(token, props.theme.breakpoints)) {
        return Object.entries(token).reduce(function (acc, _a, index, arr) {
            var key = _a[0], transitionPresetToken = _a[1];
            var nextKey = arr[index + 1] ? arr[index + 1][0] : undefined;
            var mediaQuery = getMediaQueryFromTheme(key, nextKey)({
                theme: props.theme,
            });
            var mediaQueryReduced = combineMediaQuery(mediaQuery, REDUCED);
            var mediaQueryNoPreference = combineMediaQuery(mediaQuery, NO_PREFERENCE);
            if (Array.isArray(transitionPresetToken)) {
                var mergedTransitionPresets = getMergedTransitionPresets(transitionPresetToken, props.theme);
                acc[mediaQueryNoPreference] = getTransitionPresetValueFromTheme(mergedTransitionPresets, componentClassName);
                acc[mediaQueryReduced] = getTransitionPresetValueFromTheme(setDurationZero(mergedTransitionPresets), componentClassName);
            }
            else {
                var transitionPreset_1 = unifyTransition(props.theme, transitionPresetToken);
                acc[mediaQueryNoPreference] = getTransitionPresetValueFromTheme(transitionPreset_1, componentClassName);
                acc[mediaQueryReduced] = getTransitionPresetValueFromTheme(setDurationZero(transitionPreset_1), componentClassName);
            }
            return acc;
        }, {});
    }
    if (Array.isArray(token)) {
        var mergedTransitionPresets = getMergedTransitionPresets(token, props.theme);
        if (Object.keys(mergedTransitionPresets).length) {
            return _a = {},
                _a[NO_PREFERENCE_MQ] = getTransitionPresetValueFromTheme(mergedTransitionPresets, componentClassName),
                _a[REDUCED_MQ] = getTransitionPresetValueFromTheme(setDurationZero(mergedTransitionPresets), componentClassName),
                _a;
        }
        return '';
    }
    var transitionPreset = unifyTransition(props.theme, token);
    if (transitionPreset) {
        return _b = {},
            _b[NO_PREFERENCE_MQ] = getTransitionPresetValueFromTheme(transitionPreset, componentClassName),
            _b[REDUCED_MQ] = getTransitionPresetValueFromTheme(setDurationZero(transitionPreset), componentClassName),
            _b;
    }
    return '';
}; };
var getDefaultedValue = function (getPresetFromThemeUtil, presetType) { return function (defaultPath, overridePath, componentClassName) {
    if (overridePath === void 0) { overridePath = ''; }
    return function (props) {
        var token = getToken(props, defaultPath, overridePath, presetType);
        var tokenAsSingleOrMultiply;
        if (isResponsive(token, props.theme.breakpoints)) {
            tokenAsSingleOrMultiply = Object.entries(token).reduce(function (acc, currVal) {
                var _a = currVal, bp = _a[0], trValue = _a[1];
                acc[bp] = (isArrayLikeObject(trValue)
                    ? Object.values(trValue)
                    : trValue);
                return acc;
            }, {});
        }
        else {
            tokenAsSingleOrMultiply = isArrayLikeObject(token)
                ? Object.values(token)
                : token;
        }
        return getPresetFromThemeUtil(tokenAsSingleOrMultiply, componentClassName)(props);
    };
}; };
export var getTransitionPreset = getDefaultedValue(getTransitionPresetFromTheme, 'transitionPreset');
//# sourceMappingURL=transition-preset.js.map