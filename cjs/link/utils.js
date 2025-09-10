"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.withLinkTheme = exports.isLinkExternal = void 0;
var tslib_1 = require("tslib");
var defaults_1 = tslib_1.__importDefault(require("./defaults"));
var style_presets_1 = tslib_1.__importDefault(require("./style-presets"));
var with_own_theme_1 = require("../utils/with-own-theme");
var isLinkExternal = function (href) {
    var hostName = href && href.match(/^https?:\/\/(?:www\.)?([^/?#]+)(?:[/?#]|$)/i);
    if (hostName && typeof window !== 'undefined') {
        var hostLocation = window.location.host;
        if (hostName[1] !== hostLocation.replace('www.', '')) {
            return true;
        }
    }
    return false;
};
exports.isLinkExternal = isLinkExternal;
var withLinkTheme = function (BaseComponent) { return (0, with_own_theme_1.withOwnTheme)(BaseComponent)({ defaults: defaults_1.default, stylePresets: style_presets_1.default }); };
exports.withLinkTheme = withLinkTheme;
//# sourceMappingURL=utils.js.map