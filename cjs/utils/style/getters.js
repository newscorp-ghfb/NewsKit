"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleResponsiveProp = exports.getOutlineCssFromTheme = exports.getSpacingCssFromTheme = exports.getSizingCssFromTheme = exports.getShadowCssFromTheme = exports.getOverlayCssFromTheme = exports.getMotionCssFromTheme = exports.getColorCssFromTheme = exports.getBorderCssFromTheme = exports.getFontSizingFromTheme = exports.getMotionFromTheme = exports.getSizingFromTheme = exports.getColorFromTheme = exports.getShadowFromTheme = exports.getBorderFromTheme = exports.getMarginPresetFromTheme = exports.getSpacingInsetFromTheme = exports.getSpacingFromTheme = exports.getFontsFromTheme = exports.getTypographyPresetFromTheme = void 0;
var tslib_1 = require("tslib");
var font_sizing_1 = require("../font-sizing");
var guards_1 = require("../guards");
var base_1 = require("./base");
var responsive_helpers_1 = require("../responsive-helpers");
var has_own_property_1 = require("../has-own-property");
var text_crop_1 = require("../text-crop");
var getter_helper_1 = require("./helpers/getter-helper");
var getTypographyPresetFromTheme = function (defaultToken, customProp, options) { return function (props) {
    var applyCrop = function (typographyPreset) {
        var fontSize = typographyPreset.fontSize, lineHeight = typographyPreset.lineHeight;
        var themeFonts = props.theme.fonts;
        var fontMetrics = (0, getter_helper_1.getFontMetrics)(typographyPreset, themeFonts);
        var cropData = fontMetrics
            ? (0, text_crop_1.textCrop)({ fontSize: fontSize, lineHeight: lineHeight, fontMetrics: fontMetrics })
            : undefined;
        return scrubFontMetricsFromData(typographyPreset, cropData);
    };
    var scrubFontMetricsFromData = function (typographyPreset, cropData) {
        // Remove fontMetrics if present in typographyPreset because it has been
        // processed into the CSS cropData and no longer needed.
        var result = cropData
            ? tslib_1.__assign(tslib_1.__assign({}, typographyPreset), cropData) : typographyPreset;
        delete result.fontMetrics;
        return result;
    };
    var _a = (options || {}).withCrop, withCrop = _a === void 0 ? false : _a;
    var typographyPreset = (0, base_1.getResponsiveValueFromTheme)('typographyPresets')(defaultToken, customProp)(props);
    if (Array.isArray(typographyPreset)) {
        return typographyPreset.reduce(function (acc, _a) {
            var mq = _a[0], cssObject = _a[1];
            var cssObjectFinal = cssObject;
            if (withCrop && !Array.isArray(cssObject)) {
                cssObjectFinal = applyCrop(cssObject);
            }
            acc[mq] = cssObjectFinal;
            return acc;
        }, {});
    }
    if (typographyPreset && withCrop && !Array.isArray(typographyPreset)) {
        return applyCrop(typographyPreset);
    }
    return typographyPreset;
}; };
exports.getTypographyPresetFromTheme = getTypographyPresetFromTheme;
var getFontsFromTheme = function (defaultToken, customProp) { return function (props) {
    var section = props.theme.fonts;
    var propKeys = (customProp && props[customProp]) || defaultToken;
    var style = section[propKeys];
    if (style && (0, guards_1.isFontConfigObject)(style)) {
        return style.fontFamily;
    }
    return propKeys ? style : '';
}; };
exports.getFontsFromTheme = getFontsFromTheme;
/**
 * @deprecated This method has been deprecated and will be removed in a future release, use getSpacingCssFromTheme instead
 */
var getSpacingFromTheme = function (defaultToken, customProp, cssProp) { return function (props) {
    var _a;
    var value = (0, base_1.getResponsiveValueFromTheme)('spacePresets')(defaultToken, customProp)(props);
    if (Array.isArray(value)) {
        return value.reduce(function (acc, _a) {
            var _b;
            var mq = _a[0], preset = _a[1];
            acc[mq] = cssProp && (_b = {}, _b[cssProp] = preset, _b);
            return acc;
        }, {});
    }
    return cssProp ? (_a = {}, _a[cssProp] = value, _a) : value;
}; };
exports.getSpacingFromTheme = getSpacingFromTheme;
/**
 * @deprecated This method has been deprecated and will be removed in a future release, use getSpacingCssFromTheme instead
 */
var getSpacingInsetFromTheme = function (defaultToken, customProp) { return function (props) {
    var padding = (0, base_1.getResponsiveValueFromTheme)('spacePresets')(defaultToken, customProp)(props);
    if (Array.isArray(padding)) {
        return padding.reduce(function (acc, _a) {
            var mq = _a[0], preset = _a[1];
            acc[mq] = { padding: preset };
            return acc;
        }, {});
    }
    return { padding: padding };
}; };
exports.getSpacingInsetFromTheme = getSpacingInsetFromTheme;
/**
 * @deprecated This method has been deprecated and will be removed in a future release, use getSpacingCssFromTheme instead
 */
var getMarginPresetFromTheme = function (defaultToken, customProp) { return function (props) {
    var margin = (0, base_1.getResponsiveValueFromTheme)('spacePresets')(defaultToken, customProp)(props);
    if (Array.isArray(margin)) {
        return margin.reduce(function (acc, _a) {
            var mq = _a[0], preset = _a[1];
            acc[mq] = { margin: preset };
            return acc;
        }, {});
    }
    return { margin: margin };
}; };
exports.getMarginPresetFromTheme = getMarginPresetFromTheme;
/**
 * @deprecated This method has been deprecated and will be removed in a future release, use getBorderCssFromTheme instead
 */
exports.getBorderFromTheme = (0, base_1.getValueFromTheme)('borders');
/**
 * @deprecated This method has been deprecated and will be removed in a future release, use getShadowCssFromTheme instead
 */
exports.getShadowFromTheme = (0, base_1.getValueFromTheme)('shadows');
/**
 * @deprecated This method has been deprecated and will be removed in a future release, use getColorCssFromTheme instead
 */
exports.getColorFromTheme = (0, base_1.getValueFromTheme)('colors');
/**
 * @deprecated This method has been deprecated and will be removed in a future release, use getSizingCssFromTheme instead
 */
exports.getSizingFromTheme = (0, base_1.getValueFromTheme)('sizing');
/**
 * @deprecated This method has been deprecated and will be removed in a future release, use getMotionCssFromTheme instead
 */
exports.getMotionFromTheme = (0, base_1.getValueFromTheme)('motions');
var getFontSizingFromTheme = function (fontSizeKey, lineHeightKey) { return function (_a) {
    var theme = _a.theme;
    var typographyPresets = theme.typographyPresets[fontSizeKey];
    var fontSize = typographyPresets
        ? typographyPresets.fontSize
        : theme.fonts[fontSizeKey];
    return (0, font_sizing_1.getFontSizing)(fontSize, theme.fonts[lineHeightKey]);
}; };
exports.getFontSizingFromTheme = getFontSizingFromTheme;
exports.getBorderCssFromTheme = (0, base_1.getXFromTheme)('borders');
exports.getColorCssFromTheme = (0, base_1.getXFromTheme)('colors');
exports.getMotionCssFromTheme = (0, base_1.getXFromTheme)('motions');
exports.getOverlayCssFromTheme = (0, base_1.getXFromTheme)('overlays');
exports.getShadowCssFromTheme = (0, base_1.getXFromTheme)('shadows');
exports.getSizingCssFromTheme = (0, base_1.getXFromTheme)('sizing');
exports.getSpacingCssFromTheme = (0, base_1.getXFromTheme)('spacePresets');
exports.getOutlineCssFromTheme = (0, base_1.getXFromTheme)('outlines');
var handleResponsiveProp = function (propObject, propHandler) { return function (props) {
    var breakpoints = props.theme.breakpoints;
    var propNames = Object.keys(propObject);
    // get only props that we will use
    var usedProps = propNames.reduce(function (acc, propName) {
        var _a;
        if ((0, has_own_property_1.hasOwnProperty)(props, propName)) {
            return tslib_1.__assign(tslib_1.__assign({}, acc), (_a = {}, _a[propName] = props[propName], _a));
        }
        return acc;
    }, {});
    var propsValues = Object.values(usedProps);
    // check if at least 1 prop is MQ object
    var hasResponsiveProp = propsValues.some(function (propValue) {
        return (0, responsive_helpers_1.isResponsive)(propValue, breakpoints);
    });
    // handle No-responsive props
    if (!hasResponsiveProp) {
        return propHandler(usedProps, props, undefined);
    }
    // ------------------------
    // Handle responsive props
    // Get and sort breakpoints
    var breakpointKeys = Object.keys(breakpoints);
    var breakpointKeysSorted = breakpointKeys.sort(function (a, b) { return breakpoints[a] - breakpoints[b]; });
    // Find common MQ keys form all responsive props
    var commonMQKeys = propsValues
        .filter(function (propValue) { return typeof propValue === 'object' && propValue !== null; })
        .flatMap(function (propValue) {
        return Object.keys(propValue);
    })
        .filter(function (item, index, ar) {
        return ar.indexOf(item) === index;
    })
        .sort(function (a, b) {
        return breakpointKeysSorted.indexOf(a) - breakpointKeysSorted.indexOf(b);
    });
    var fillPropGaps = function (bps, propValue, defaultValue) {
        // when is not object, just pre-fill all breakpoint keys with the value
        if (typeof propValue !== 'object') {
            return bps.reduce(function (obj, bp) {
                var _a;
                return (tslib_1.__assign(tslib_1.__assign({}, obj), (_a = {}, _a[bp] = propValue, _a)));
            }, {});
        }
        var baseKey = bps.find(function (bp) { return propValue[bp]; });
        /* istanbul ignore if */
        if (!baseKey) {
            return {};
        }
        var baseValue = baseKey !== 'xs'
            ? defaultValue
            : propValue[baseKey];
        return bps.reduce(function (result, bp) {
            var _a;
            if (propValue[bp] === undefined) {
                return tslib_1.__assign(tslib_1.__assign({}, result), (_a = {}, _a[bp] = baseValue, _a));
            }
            baseValue = propValue[bp];
            return result;
        }, propValue);
    };
    /*
      when use pass MQ like : {xs: 1, md:2}
      it fills gaps like: {xs:1, sm:1, md:2, lg:2, xl2}
      also set default when xs is not provided
      */
    var filledPropValues = Object.entries(usedProps).reduce(function (acc, curr) {
        var _a = curr, propName = _a[0], propValue = _a[1];
        acc[propName] = fillPropGaps(breakpointKeysSorted, propValue, propObject[propName]);
        return acc;
    }, {});
    // add XS to the breakpoints in case its not provided from the user
    var usedMQKeys = commonMQKeys.includes('xs')
        ? commonMQKeys
        : tslib_1.__spreadArray(['xs'], commonMQKeys, true);
    var cssObject = usedMQKeys.reduce(function (acc, mqKey, index) {
        var fromMqKey = mqKey;
        var toMqKey = usedMQKeys[index + 1] ? usedMQKeys[index + 1] : undefined;
        var mediaQuery = (0, responsive_helpers_1.getMediaQueryFromTheme)(fromMqKey, toMqKey)(props);
        var values = propNames.reduce(function (valAcc, propName) {
            var _a;
            // TS needs checking if prop is part of the object otherwise throw error
            /* istanbul ignore else */
            if ((0, has_own_property_1.hasOwnProperty)(filledPropValues, propName)) {
                var mqValue = filledPropValues[propName];
                /* istanbul ignore else */
                if (typeof mqValue === 'object' &&
                    mqValue !== null &&
                    (0, has_own_property_1.hasOwnProperty)(mqValue, fromMqKey)) {
                    return tslib_1.__assign(tslib_1.__assign({}, valAcc), (_a = {}, _a[propName] = mqValue[fromMqKey], _a));
                }
            }
            /* istanbul ignore next */
            return valAcc;
        }, {});
        acc[mediaQuery] = propHandler(values, props, fromMqKey);
        return acc;
    }, {});
    return cssObject;
}; };
exports.handleResponsiveProp = handleResponsiveProp;
//# sourceMappingURL=getters.js.map