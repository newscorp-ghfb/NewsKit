"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLogicalPropsAndTypographyPreset = exports.extractLogicalPropsFromOverrides = exports.omitLogicalPaddingPropsFromOverrides = exports.omitLogicalMarginPropsFromOverrides = exports.omitLogicalPropsFromOverrides = exports.logicalMarginProps = exports.logicalPaddingProps = exports.logicalProps = exports.logicalPadding = exports.logicalMargins = void 0;
var tslib_1 = require("tslib");
var style_1 = require("./style");
var deep_merge_1 = require("./deep-merge");
var get_1 = require("./get");
var filter_object_1 = require("./filter-object");
var getResponsiveSpace = function (cssProperty, props, defaultsPath, overridesPath) {
    var defaultToken;
    if (defaultsPath) {
        defaultToken = (0, get_1.get)(props.theme.componentDefaults, "".concat(defaultsPath, ".").concat(cssProperty));
    }
    var overrideToken = props.overrides
        ? (0, get_1.get)(props, overridesPath
            ? "overrides.".concat(overridesPath, ".").concat(cssProperty)
            : "overrides.".concat(cssProperty))
        : (0, get_1.get)(props, cssProperty);
    return (0, style_1.getXFromTheme)('spacePresets')(cssProperty, overrideToken || defaultToken)(props);
};
var generateLogicalProps = function (prefix, defaultsPath, overridesPath) { return function (props) {
    var inlineStart = getResponsiveSpace("".concat(prefix, "InlineStart"), props, defaultsPath, overridesPath);
    var inlineEnd = getResponsiveSpace("".concat(prefix, "InlineEnd"), props, defaultsPath, overridesPath);
    var inline = getResponsiveSpace("".concat(prefix, "Inline"), props, defaultsPath, overridesPath);
    var blockStart = getResponsiveSpace("".concat(prefix, "BlockStart"), props, defaultsPath, overridesPath);
    var blockEnd = getResponsiveSpace("".concat(prefix, "BlockEnd"), props, defaultsPath, overridesPath);
    var block = getResponsiveSpace("".concat(prefix, "Block"), props, defaultsPath, overridesPath);
    return (0, deep_merge_1.deepMerge)(inline, inlineStart, inlineEnd, block, blockStart, blockEnd);
}; };
var logicalMargins = function (props, defaultsPath, overridesPath) {
    return generateLogicalProps('margin', defaultsPath, overridesPath)(props);
};
exports.logicalMargins = logicalMargins;
var logicalPadding = function (props, defaultsPath, overridesPath) {
    return generateLogicalProps('padding', defaultsPath, overridesPath)(props);
};
exports.logicalPadding = logicalPadding;
var logicalProps = function (defaultsPath, overridesPath) { return function (props) {
    var margin = (0, exports.logicalMargins)(props, defaultsPath, overridesPath);
    var padding = (0, exports.logicalPadding)(props, defaultsPath, overridesPath);
    return (0, deep_merge_1.deepMerge)(margin, padding);
}; };
exports.logicalProps = logicalProps;
var logicalPaddingProps = function (defaultsPath, overridesPath) { return function (props) {
    return (0, exports.logicalPadding)(props, defaultsPath, overridesPath);
}; };
exports.logicalPaddingProps = logicalPaddingProps;
var logicalMarginProps = function (defaultsPath, overridesPath) { return function (props) {
    return (0, exports.logicalMargins)(props, defaultsPath, overridesPath);
}; };
exports.logicalMarginProps = logicalMarginProps;
var logicalMarginPropsArray = [
    'marginInlineStart',
    'marginInlineEnd',
    'marginInline',
    'marginBlockStart',
    'marginBlockEnd',
    'marginBlock',
];
var logicalPaddingPropsArray = [
    'paddingInlineStart',
    'paddingInlineEnd',
    'paddingInline',
    'paddingBlockStart',
    'paddingBlockEnd',
    'paddingBlock',
];
var logicalPropsArray = tslib_1.__spreadArray(tslib_1.__spreadArray([], logicalPaddingPropsArray, true), logicalMarginPropsArray, true);
var omitLogicalPropsFromOverrides = function (overrides) {
    return (0, filter_object_1.rejectObject)((overrides || {}), logicalPropsArray);
};
exports.omitLogicalPropsFromOverrides = omitLogicalPropsFromOverrides;
var omitLogicalMarginPropsFromOverrides = function (overrides) {
    return (0, filter_object_1.rejectObject)((overrides || {}), logicalMarginPropsArray);
};
exports.omitLogicalMarginPropsFromOverrides = omitLogicalMarginPropsFromOverrides;
var omitLogicalPaddingPropsFromOverrides = function (overrides) {
    return (0, filter_object_1.rejectObject)((overrides || {}), logicalPaddingPropsArray);
};
exports.omitLogicalPaddingPropsFromOverrides = omitLogicalPaddingPropsFromOverrides;
var extractLogicalPropsFromOverrides = function (overrides) {
    return (0, filter_object_1.filterObject)((overrides || {}), logicalPropsArray);
};
exports.extractLogicalPropsFromOverrides = extractLogicalPropsFromOverrides;
// TypographyPreset and spacing logical props can both set padding. This is a
// helper function that takes the TypographyPreset padding value unless there is
// another value set in the component defaults or overrides.
var getLogicalPropsAndTypographyPreset = function (defaultsPath, overridesPath) { return function (props) {
    var padding = (0, exports.logicalPadding)(props, defaultsPath, overridesPath);
    var margins = (0, exports.logicalMargins)(props, defaultsPath, overridesPath);
    var typographyPreset = (0, style_1.getTypographyPreset)(defaultsPath, overridesPath, {
        // Only apply the crop padding if there are no padding overrides.
        withCrop: !Object.keys(padding).length,
    })(props);
    return (0, deep_merge_1.deepMerge)(margins, padding, typographyPreset);
}; };
exports.getLogicalPropsAndTypographyPreset = getLogicalPropsAndTypographyPreset;
//# sourceMappingURL=logical-properties.js.map