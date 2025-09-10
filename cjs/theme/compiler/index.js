"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.compileTheme = void 0;
var tslib_1 = require("tslib");
var ink_style_preset_generator_1 = require("./ink-style-preset-generator");
var recurse_unknown_1 = require("../../utils/recurse-unknown");
var compileTheme = function (theme, options) {
    if (options === void 0) { options = {}; }
    if (!theme || theme.compiled === true) {
        return theme;
    }
    // eslint-disable-next-line no-console
    var errorLogger = options.errorLogger || console.error.bind(console);
    var uncompiledTheme = tslib_1.__assign(tslib_1.__assign({}, theme), { stylePresets: tslib_1.__assign(tslib_1.__assign({}, theme.stylePresets), (0, ink_style_preset_generator_1.generateInkStylePresets)(theme)) });
    var _a = uncompiledTheme.icons, icons = _a === void 0 ? {} : _a, filteredTheme = tslib_1.__rest(uncompiledTheme, ["icons"]);
    return tslib_1.__assign(tslib_1.__assign({}, (0, recurse_unknown_1.recurseUnknown)(uncompiledTheme, filteredTheme, errorLogger)), { icons: icons, compiled: true });
};
exports.compileTheme = compileTheme;
//# sourceMappingURL=index.js.map