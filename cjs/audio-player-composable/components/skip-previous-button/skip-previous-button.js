"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AudioPlayerSkipPreviousButton = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var icon_button_1 = require("../../../icon-button");
var context_1 = require("../../context");
var defaults_1 = tslib_1.__importDefault(require("./defaults"));
var with_own_theme_1 = require("../../../utils/with-own-theme");
var utils_1 = require("../../utils");
var defaultKeyboardShortcuts = ['shift + p'];
var ThemelessAudioPlayerSkipPreviousButton = react_1.default.forwardRef(function (_a, ref) {
    var props = tslib_1.__rest(_a, []);
    var getSkipPreviousButtonProps = (0, context_1.useAudioPlayerContext)().getSkipPreviousButtonProps;
    var overrides = (0, utils_1.useButtonOverrides)(props, 'audioPlayerSkipPreviousButton');
    var propsFromContext = getSkipPreviousButtonProps && getSkipPreviousButtonProps(props);
    (0, utils_1.useKeyboardShortcutsOnButton)({
        props: propsFromContext,
        defaults: defaultKeyboardShortcuts,
    });
    return (react_1.default.createElement(icon_button_1.IconButton, tslib_1.__assign({ ref: ref, "data-testid": "audio-player-skip-previous-button", size: "medium", overrides: overrides }, propsFromContext)));
});
exports.AudioPlayerSkipPreviousButton = (0, with_own_theme_1.withOwnTheme)(ThemelessAudioPlayerSkipPreviousButton)({ defaults: defaults_1.default });
//# sourceMappingURL=skip-previous-button.js.map