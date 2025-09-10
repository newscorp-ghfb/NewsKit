"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AudioPlayerPlayPauseButton = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var icon_button_1 = require("../../../icon-button");
var context_1 = require("../../context");
var defaults_1 = tslib_1.__importDefault(require("./defaults"));
var with_own_theme_1 = require("../../../utils/with-own-theme");
var utils_1 = require("../../utils");
var defaultKeyboardShortcuts = ['k', ' '];
var ThemelessAudioPlayerPlayPauseButton = react_1.default.forwardRef(function (_a, ref) {
    var props = tslib_1.__rest(_a, []);
    var _b = (0, context_1.useAudioPlayerContext)(), getPlayPauseButtonProps = _b.getPlayPauseButtonProps, togglePlay = _b.togglePlay;
    var propsFromContext = getPlayPauseButtonProps && getPlayPauseButtonProps(props);
    var overrides = (0, utils_1.useButtonOverrides)(props, 'audioPlayerPlayPauseButton');
    var toggleAction = (0, react_1.useCallback)(function (_a) {
        var target = _a.target, key = _a.key;
        var tagName = target.tagName;
        var actionKeys = [' ', 'Enter'];
        var actionElements = ['BUTTON', 'INPUT', 'A'];
        var isActionKey = actionKeys.includes(key);
        var isActionElement = target && actionElements.includes(tagName);
        if (typeof togglePlay === 'function' &&
            (!isActionKey ||
                // pressing Space or Enter when the focused element is a Button, A or Input will not trigger the toggle
                (isActionKey && !isActionElement))) {
            togglePlay();
        }
    }, [togglePlay]);
    (0, utils_1.useKeyboardShortcutsOnButton)({
        props: propsFromContext,
        defaults: defaultKeyboardShortcuts,
        action: toggleAction,
    });
    return (react_1.default.createElement(icon_button_1.IconButton, tslib_1.__assign({ ref: ref, "data-testid": "audio-player-play-pause-button", size: "medium", overrides: overrides }, propsFromContext)));
});
exports.AudioPlayerPlayPauseButton = (0, with_own_theme_1.withOwnTheme)(ThemelessAudioPlayerPlayPauseButton)({ defaults: defaults_1.default });
//# sourceMappingURL=play-pause-button.js.map