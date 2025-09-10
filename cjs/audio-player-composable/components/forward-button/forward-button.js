"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AudioPlayerForwardButton = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var icon_button_1 = require("../../../icon-button");
var with_own_theme_1 = require("../../../utils/with-own-theme");
var context_1 = require("../../context");
var utils_1 = require("../../utils");
var defaults_1 = tslib_1.__importDefault(require("./defaults"));
var defaultKeyboardShortcuts = ['l'];
var ThemelessAudioPlayerForwardButton = react_1.default.forwardRef(function (_a, ref) {
    var props = tslib_1.__rest(_a, []);
    var getForwardButtonProps = (0, context_1.useAudioPlayerContext)().getForwardButtonProps;
    var overrides = (0, utils_1.useButtonOverrides)(props, 'audioPlayerForwardButton');
    var propsFromContext = getForwardButtonProps && getForwardButtonProps(props);
    (0, utils_1.useKeyboardShortcutsOnButton)({
        props: propsFromContext,
        defaults: defaultKeyboardShortcuts,
    });
    return (react_1.default.createElement(icon_button_1.IconButton, tslib_1.__assign({ ref: ref, "data-testid": "audio-player-forward-button", size: "medium", overrides: overrides }, propsFromContext)));
});
exports.AudioPlayerForwardButton = (0, with_own_theme_1.withOwnTheme)(ThemelessAudioPlayerForwardButton)({
    defaults: defaults_1.default,
});
//# sourceMappingURL=forward-button.js.map