import { __spreadArray } from "tslib";
import { getTypographyPreset, getXFromTheme } from './style';
import { deepMerge } from './deep-merge';
import { get } from './get';
import { filterObject, rejectObject } from './filter-object';
var getResponsiveSpace = function (cssProperty, props, defaultsPath, overridesPath) {
    var defaultToken;
    if (defaultsPath) {
        defaultToken = get(props.theme.componentDefaults, "".concat(defaultsPath, ".").concat(cssProperty));
    }
    var overrideToken = props.overrides
        ? get(props, overridesPath
            ? "overrides.".concat(overridesPath, ".").concat(cssProperty)
            : "overrides.".concat(cssProperty))
        : get(props, cssProperty);
    return getXFromTheme('spacePresets')(cssProperty, overrideToken || defaultToken)(props);
};
var generateLogicalProps = function (prefix, defaultsPath, overridesPath) { return function (props) {
    var inlineStart = getResponsiveSpace("".concat(prefix, "InlineStart"), props, defaultsPath, overridesPath);
    var inlineEnd = getResponsiveSpace("".concat(prefix, "InlineEnd"), props, defaultsPath, overridesPath);
    var inline = getResponsiveSpace("".concat(prefix, "Inline"), props, defaultsPath, overridesPath);
    var blockStart = getResponsiveSpace("".concat(prefix, "BlockStart"), props, defaultsPath, overridesPath);
    var blockEnd = getResponsiveSpace("".concat(prefix, "BlockEnd"), props, defaultsPath, overridesPath);
    var block = getResponsiveSpace("".concat(prefix, "Block"), props, defaultsPath, overridesPath);
    return deepMerge(inline, inlineStart, inlineEnd, block, blockStart, blockEnd);
}; };
export var logicalMargins = function (props, defaultsPath, overridesPath) {
    return generateLogicalProps('margin', defaultsPath, overridesPath)(props);
};
export var logicalPadding = function (props, defaultsPath, overridesPath) {
    return generateLogicalProps('padding', defaultsPath, overridesPath)(props);
};
export var logicalProps = function (defaultsPath, overridesPath) { return function (props) {
    var margin = logicalMargins(props, defaultsPath, overridesPath);
    var padding = logicalPadding(props, defaultsPath, overridesPath);
    return deepMerge(margin, padding);
}; };
export var logicalPaddingProps = function (defaultsPath, overridesPath) { return function (props) {
    return logicalPadding(props, defaultsPath, overridesPath);
}; };
export var logicalMarginProps = function (defaultsPath, overridesPath) { return function (props) {
    return logicalMargins(props, defaultsPath, overridesPath);
}; };
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
var logicalPropsArray = __spreadArray(__spreadArray([], logicalPaddingPropsArray, true), logicalMarginPropsArray, true);
export var omitLogicalPropsFromOverrides = function (overrides) {
    return rejectObject((overrides || {}), logicalPropsArray);
};
export var omitLogicalMarginPropsFromOverrides = function (overrides) {
    return rejectObject((overrides || {}), logicalMarginPropsArray);
};
export var omitLogicalPaddingPropsFromOverrides = function (overrides) {
    return rejectObject((overrides || {}), logicalPaddingPropsArray);
};
export var extractLogicalPropsFromOverrides = function (overrides) {
    return filterObject((overrides || {}), logicalPropsArray);
};
// TypographyPreset and spacing logical props can both set padding. This is a
// helper function that takes the TypographyPreset padding value unless there is
// another value set in the component defaults or overrides.
export var getLogicalPropsAndTypographyPreset = function (defaultsPath, overridesPath) { return function (props) {
    var padding = logicalPadding(props, defaultsPath, overridesPath);
    var margins = logicalMargins(props, defaultsPath, overridesPath);
    var typographyPreset = getTypographyPreset(defaultsPath, overridesPath, {
        // Only apply the crop padding if there are no padding overrides.
        withCrop: !Object.keys(padding).length,
    })(props);
    return deepMerge(margins, padding, typographyPreset);
}; };
//# sourceMappingURL=logical-properties.js.map