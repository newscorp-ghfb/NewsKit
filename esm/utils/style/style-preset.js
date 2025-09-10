import { __assign, __rest } from "tslib";
import { filterObject, rejectObject } from '../filter-object';
import { getDefaultedValue, getResponsiveValueFromTheme } from './base';
/* When we are not on directly on a svg we need to add an
  additional css selector to increase the specificity, allowing
  us to overrule the default color. Icon button is an example
  of this in action */
var getCssSvgFillObject = function (iconColor, isSvg) {
    return isSvg
        ? { fill: iconColor }
        : {
            svg: {
                fill: iconColor,
            },
        };
};
export var getPresetStyles = function (presetStyles, options) {
    var _a = options || {}, _b = _a.filterStyles, filterStyles = _b === void 0 ? null : _b, _c = _a.omitStyles, omitStyles = _c === void 0 ? [] : _c, _d = _a.isSvg, isSvg = _d === void 0 ? false : _d;
    var _e = filterStyles
        ? filterObject(presetStyles, filterStyles)
        : rejectObject(presetStyles, omitStyles), iconColor = _e.iconColor, placeholderColor = _e.placeholderColor, cssObject = __rest(_e, ["iconColor", "placeholderColor"]);
    if (iconColor) {
        return __assign(__assign({}, cssObject), getCssSvgFillObject(iconColor, isSvg));
    }
    if (placeholderColor) {
        return __assign(__assign({}, cssObject), { '::placeholder': {
                color: placeholderColor,
            } });
    }
    return cssObject;
};
var getPresetStates = function (stylePreset, options) {
    var _a = options || {}, _b = _a.omitStates, omitStates = _b === void 0 ? [] : _b, _c = _a.filterStates, filterStates = _c === void 0 ? [] : _c, _d = _a.isSelected, isSelected = _d === void 0 ? false : _d, _e = _a.isChecked, isChecked = _e === void 0 ? false : _e, _f = _a.isLoading, isLoading = _f === void 0 ? false : _f, _g = _a.isDisabled, isDisabled = _g === void 0 ? false : _g, _h = _a.isInvalid, isInvalid = _h === void 0 ? false : _h, _j = _a.isValid, isValid = _j === void 0 ? false : _j, _k = _a.isFocused, isFocused = _k === void 0 ? false : _k, _l = _a.isHovered, isHovered = _l === void 0 ? false : _l, _m = _a.isActive, isActive = _m === void 0 ? false : _m, _o = _a.isFocusedVisible, isFocusedVisible = _o === void 0 ? false : _o;
    var _p = filterStates && filterStates.length
        ? filterObject(stylePreset, filterStates)
        : rejectObject(stylePreset, omitStates), selected = _p.selected, loading = _p.loading, invalid = _p.invalid, valid = _p.valid, presetStates = __rest(_p, ["selected", "loading", "invalid", "valid"]);
    var stateOverrides = (isDisabled && presetStates.disabled) ||
        (isLoading && loading) ||
        (isFocusedVisible && presetStates['focus-visible']) ||
        (isFocused && presetStates.focus) ||
        (isHovered && presetStates.hover) ||
        (isActive && presetStates.active) ||
        (isSelected && selected) ||
        (isChecked && presetStates.checked) ||
        (isInvalid && invalid) ||
        (isValid && valid) ||
        undefined;
    var forcedStates = [];
    if (isSelected) {
        forcedStates.push('selected');
    }
    if (isChecked) {
        forcedStates.push('checked');
    }
    if (isDisabled) {
        forcedStates.push('disabled');
    }
    if (isLoading) {
        forcedStates.push('loading');
    }
    if (isInvalid) {
        forcedStates.push('invalid');
    }
    if (isValid) {
        forcedStates.push('valid');
    }
    if (isFocusedVisible) {
        forcedStates.push('focus-visible');
    }
    if (isFocused) {
        forcedStates.push('focus');
    }
    if (isHovered) {
        forcedStates.push('hover');
    }
    if (isActive) {
        forcedStates.push('active');
    }
    if (stateOverrides) {
        var pseudoStates = [
            'hover',
            'focus',
            'focus-visible',
            'active',
            'invalid',
            'valid',
            'disabled',
        ];
        var pseudoOverrides = {};
        var currentSubState_1 = '';
        /* istanbul ignore next */
        if (forcedStates.length > 0) {
            var path = forcedStates.join(':');
            pseudoOverrides = presetStates[path] || {};
            currentSubState_1 = String(path);
        }
        var pseudoPresets_1 = {};
        /* istanbul ignore next */
        if (currentSubState_1 !== '') {
            pseudoStates.forEach(function (pseudo) {
                var subStatePseudoClass = "".concat(currentSubState_1, ":").concat(pseudo);
                if (presetStates[subStatePseudoClass]) {
                    pseudoPresets_1[pseudo] = presetStates[subStatePseudoClass];
                }
            });
        }
        var _q = presetStates.base, base = _q === void 0 ? {} : _q;
        var filteredPseudoPresets = Object.fromEntries(Object.entries(pseudoPresets_1).filter(function (_a) {
            var value = _a[1];
            return value !== undefined;
        }));
        var baseStyles = base && typeof base === 'object' ? base : {};
        var stateOverridesObj = stateOverrides && typeof stateOverrides === 'object'
            ? stateOverrides
            : {};
        var pseudoOverridesObj = pseudoOverrides && typeof pseudoOverrides === 'object'
            ? pseudoOverrides
            : {};
        return __assign({ base: __assign(__assign(__assign({}, baseStyles), stateOverridesObj), pseudoOverridesObj) }, filteredPseudoPresets);
    }
    return presetStates;
};
var addSafariMediaTag = function (cssObject, safariOutlineOffset, safariOutlineStyle) {
    var outlineOffset = safariOutlineOffset
        ? { outlineOffset: safariOutlineOffset }
        : {};
    var outlineStyle = safariOutlineStyle
        ? { outlineStyle: safariOutlineStyle }
        : {};
    // eslint-disable-next-line no-param-reassign
    cssObject['@media not all and (min-resolution: 0.001dpcm)'] = {
        '@supports (-webkit-appearance: none) and (stroke-color: transparent)': __assign(__assign({}, outlineOffset), outlineStyle),
    };
};
var getStylePresetValueFromTheme = function (stylePreset, options) {
    return Object.entries(getPresetStates(stylePreset, options)).reduce(function (acc, _a) {
        var stateKey = _a[0], presetState = _a[1];
        if (presetState) {
            var nestedCssSelector = options && options.nestedCssSelector;
            var selector = stateKey === 'disabled'
                ? ":".concat(stateKey, " ").concat(nestedCssSelector || '')
                : ":".concat(stateKey, ":not(:disabled) ").concat(nestedCssSelector || '');
            var _b = getPresetStyles(presetState, options), safariOutlineOffset = _b.safariOutlineOffset, safariOutlineStyle = _b.safariOutlineStyle, styles = __rest(_b, ["safariOutlineOffset", "safariOutlineStyle"]);
            if (safariOutlineOffset || safariOutlineStyle) {
                addSafariMediaTag(styles, safariOutlineOffset, safariOutlineStyle);
            }
            if (stateKey === 'base') {
                if (nestedCssSelector) {
                    acc[nestedCssSelector] = styles;
                    return acc;
                }
                return Object.assign({}, acc, styles);
            }
            acc[selector] = styles;
        }
        return acc;
    }, {});
};
export var getStylePresetFromTheme = function (defaultToken, customProp, options) { return function (props) {
    var stylePreset = getResponsiveValueFromTheme('stylePresets')(defaultToken, customProp)(props);
    if (Array.isArray(stylePreset)) {
        return stylePreset.reduce(function (acc, _a) {
            var mq = _a[0], preset = _a[1];
            acc[mq] = getStylePresetValueFromTheme(preset, options);
            return acc;
        }, {});
    }
    return stylePreset ? getStylePresetValueFromTheme(stylePreset, options) : '';
}; };
export var getStylePreset = getDefaultedValue(getStylePresetFromTheme, 'stylePreset');
export var getSingleStylePreset = function (_a, state, cssProp, defaultToken, customToken) {
    var stylePresets = _a.stylePresets;
    var preset = (customToken && stylePresets[customToken]) || stylePresets[defaultToken];
    if (!preset)
        return '';
    return (preset[state] || {})[cssProp] || '';
};
//# sourceMappingURL=style-preset.js.map