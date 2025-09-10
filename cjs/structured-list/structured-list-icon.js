"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StructuredListIcon = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var icons_1 = require("../icons");
var utils_1 = require("../link/utils");
var stack_1 = require("../stack");
var get_token_1 = require("../utils/get-token");
var theme_1 = require("../theme");
var StructuredListIcon = function (_a) {
    var overrides = _a.overrides, href = _a.href;
    var theme = (0, theme_1.useTheme)();
    var iconSizeToken = (0, get_token_1.getToken)({ theme: theme, overrides: overrides }, 'structuredListItem.icon', 'icon', 'size');
    var iconStylePresetToken = (0, get_token_1.getToken)({ theme: theme, overrides: overrides }, 'structuredListItem.icon', 'icon', 'stylePreset');
    return (react_1.default.createElement(stack_1.Stack, { stackDistribution: "flex-end", flow: "horizontal-center" }, href && (0, utils_1.isLinkExternal)(href) ? (react_1.default.createElement(icons_1.IconFilledLaunch, { overrides: {
            size: iconSizeToken,
            stylePreset: iconStylePresetToken,
        } })) : (react_1.default.createElement(icons_1.IconOutlinedArrowForwardIos, { overrides: {
            size: iconSizeToken,
            stylePreset: iconStylePresetToken,
        } }))));
};
exports.StructuredListIcon = StructuredListIcon;
//# sourceMappingURL=structured-list-icon.js.map