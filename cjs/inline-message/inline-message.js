"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InlineMessage = void 0;
var tslib_1 = require("tslib");
var toast_1 = require("../toast");
var utils_1 = require("../utils");
var defaults_1 = tslib_1.__importDefault(require("./defaults"));
var style_presets_1 = tslib_1.__importDefault(require("./style-presets"));
var with_own_theme_1 = require("../utils/with-own-theme");
var ThemelessInlineMessage = (0, utils_1.withDefaultProps)(toast_1.Toast, {
    role: 'region',
    ariaLive: 'off',
    'data-testid': 'inline-message',
}, 'inlineMessage', {
    maxWidth: '__delete',
    minWidth: '__delete',
    minHeight: '__delete',
    width: '100%',
});
exports.InlineMessage = (0, with_own_theme_1.withOwnTheme)(ThemelessInlineMessage)({
    defaults: defaults_1.default,
    stylePresets: style_presets_1.default,
});
//# sourceMappingURL=inline-message.js.map