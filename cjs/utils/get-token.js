"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getToken = void 0;
var get_1 = require("./get");
var responsive_helpers_1 = require("./responsive-helpers");
/**
 *  Allows the user to leave the token type off  Resolves token type. Optionally a type can be appended
 *
 * @param obj - Defaults or overrides object
 * @param breakpoints - Theme breakpoints
 * @param path - Token path from either defaults or overrides object
 * @param [autoKey] - Explicitly defined token type e.g. 'stylePreset'
 * @returns The resolved path
 *
 * @remarks
 * This allows us to assume a particular token type will listed under the appropriate name,
   e.g.when dealing with a 'stylePreset' the path will likely end in '.stylePreset', this means the user can
   optionally leave that extra part off and if needed we append it ourselves.
 */
var getAutoResolvingPath = function (obj, breakpoints, path, autoKey) {
    var modifiedPath = path.endsWith('.') ? path.slice(0, -1) : path;
    var value = (0, get_1.get)(obj, modifiedPath);
    if (typeof value === 'string' || (0, responsive_helpers_1.isResponsive)(value, breakpoints)) {
        return value;
    }
    return autoKey ? (0, get_1.get)(obj, "".concat(modifiedPath, ".").concat(autoKey)) : value;
};
/**
 * Takes props and paths for default and prop overrides object, returning the token name to use.
 *
 * @param props - The component props containing the theme and possibly some overrides
 * @param defaultPath - The path of the defaults in the theme
 * @param [overridePath] - The path of the override in props.overrides
 * @param [propName] - The prop we're dealing with and will append if needed, e.g. 'stylePreset'
 * @returns The resolved token name
 *
 */
var getToken = function (props, defaultPath, overridePath, propName) {
    var defaultToken = getAutoResolvingPath(props.theme.componentDefaults, props.theme.breakpoints, "".concat(defaultPath), propName);
    if (!overridePath && overridePath !== '') {
        return defaultToken;
    }
    var overrideToken = getAutoResolvingPath(props, props.theme.breakpoints, "overrides.".concat(overridePath), propName);
    return overrideToken || defaultToken;
};
exports.getToken = getToken;
//# sourceMappingURL=get-token.js.map