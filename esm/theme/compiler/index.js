import { __assign, __rest } from "tslib";
import { generateInkStylePresets } from './ink-style-preset-generator';
import { recurseUnknown } from '../../utils/recurse-unknown';
export var compileTheme = function (theme, options) {
    if (options === void 0) { options = {}; }
    if (!theme || theme.compiled === true) {
        return theme;
    }
    // eslint-disable-next-line no-console
    var errorLogger = options.errorLogger || console.error.bind(console);
    var uncompiledTheme = __assign(__assign({}, theme), { stylePresets: __assign(__assign({}, theme.stylePresets), generateInkStylePresets(theme)) });
    var _a = uncompiledTheme.icons, icons = _a === void 0 ? {} : _a, filteredTheme = __rest(uncompiledTheme, ["icons"]);
    return __assign(__assign({}, recurseUnknown(uncompiledTheme, filteredTheme, errorLogger)), { icons: icons, compiled: true });
};
//# sourceMappingURL=index.js.map