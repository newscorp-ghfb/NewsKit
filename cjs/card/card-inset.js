"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CardInset = void 0;
var tslib_1 = require("tslib");
var with_default_props_1 = require("../utils/with-default-props");
var with_own_theme_1 = require("../utils/with-own-theme");
var card_1 = require("./card");
var defaults_1 = tslib_1.__importDefault(require("./defaults"));
var style_presets_1 = tslib_1.__importDefault(require("./style-presets"));
exports.CardInset = (0, with_own_theme_1.withOwnTheme)((0, with_default_props_1.withDefaultProps)(card_1.Card, {}, 'cardInset'))({
    defaults: defaults_1.default,
    stylePresets: style_presets_1.default,
});
//# sourceMappingURL=card-inset.js.map