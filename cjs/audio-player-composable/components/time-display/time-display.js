"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AudioPlayerTimeDisplay = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var utils_1 = require("../../../utils");
var context_1 = require("../../context");
var with_own_theme_1 = require("../../../utils/with-own-theme");
var defaults_1 = tslib_1.__importDefault(require("./defaults"));
var style_presets_1 = tslib_1.__importDefault(require("./style-presets"));
var text_block_1 = require("../../../text-block");
var StyledTextBlock = (0, utils_1.styled)(text_block_1.TextBlock)(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  display: block;\n  ", "\n  ", ";\n"], ["\n  display: block;\n  ", "\n  ", ";\n"])), (0, utils_1.getStylePreset)("audioPlayerTimeDisplay", ''), (0, utils_1.getTypographyPreset)("audioPlayerTimeDisplay", ''));
var ThemelessTimeDisplay = react_1.default.forwardRef(function (_a, ref) {
    var _b = _a.overrides, overrides = _b === void 0 ? {} : _b, format = _a.format, restProps = tslib_1.__rest(_a, ["overrides", "format"]);
    var getTimeDisplayProps = (0, context_1.useAudioPlayerContext)().getTimeDisplayProps;
    var _c = getTimeDisplayProps(), defaultFormat = _c.format, currentTime = _c.currentTime, duration = _c.duration;
    var formatFn = typeof format === 'function' ? format : defaultFormat;
    return (react_1.default.createElement(StyledTextBlock, tslib_1.__assign({ ref: ref, as: "span", overrides: overrides, "data-testid": "audio-player-time-display" }, restProps), formatFn({ currentTime: currentTime, duration: duration })));
});
exports.AudioPlayerTimeDisplay = (0, with_own_theme_1.withOwnTheme)(ThemelessTimeDisplay)({
    defaults: defaults_1.default,
    stylePresets: style_presets_1.default,
});
var templateObject_1;
//# sourceMappingURL=time-display.js.map