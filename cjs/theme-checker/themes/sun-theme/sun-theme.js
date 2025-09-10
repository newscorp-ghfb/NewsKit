"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sunTheme = void 0;
var tslib_1 = require("tslib");
var TheSun_light_json_1 = tslib_1.__importDefault(require("@newskit-themes/the-sun/TheSun-light.json"));
var theme_1 = require("../../../theme");
exports.sunTheme = (0, theme_1.createTheme)({
    name: 'sun-theme',
    overrides: TheSun_light_json_1.default,
});
//# sourceMappingURL=sun-theme.js.map