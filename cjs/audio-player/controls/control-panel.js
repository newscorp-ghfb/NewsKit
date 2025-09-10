"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ControlPanel = exports.ButtonsContainer = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var style_1 = require("../../utils/style");
var forward_replay_1 = require("./forward-replay");
var play_pause_1 = require("./play-pause");
var skip_track_1 = require("./skip-track");
var stack_1 = require("../../stack");
var stack_child_1 = require("../../stack-child");
var theme_1 = require("../../theme");
var get_token_1 = require("../../utils/get-token");
exports.ButtonsContainer = (0, style_1.styled)(stack_1.Stack)(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  min-width: 100%;\n"], ["\n  min-width: 100%;\n"])));
exports.ControlPanel = react_1.default.memo(function (_a) {
    var onNextTrack = _a.onNextTrack, disableNextTrack = _a.disableNextTrack, onPreviousTrack = _a.onPreviousTrack, disablePreviousTrack = _a.disablePreviousTrack, showControls = _a.showControls, playing = _a.playing, loading = _a.loading, live = _a.live, onClickBackward = _a.onClickBackward, onClickForward = _a.onClickForward, togglePlay = _a.togglePlay, overrides = _a.overrides;
    return (react_1.default.createElement(stack_1.Stack, { flow: "horizontal-center", stackDistribution: "center", flexGrow: true },
        react_1.default.createElement(exports.ButtonsContainer, { flow: "horizontal-center", spaceInline: (0, get_token_1.getToken)({ theme: (0, theme_1.useTheme)(), overrides: overrides }, 'audioPlayer.controls', '', 'space'), stackDistribution: live ? 'center' : 'flex-start' },
            react_1.default.createElement(stack_child_1.StackChild, { order: 3 },
                react_1.default.createElement(play_pause_1.PlayerButton, { canPause: showControls, playing: playing, onClick: togglePlay, overrides: overrides && overrides.playPauseButton, loading: loading })),
            react_1.default.createElement(stack_child_1.StackChild, { order: 2 }, showControls && onClickBackward && (react_1.default.createElement(forward_replay_1.BackwardButton, { onClick: onClickBackward, overrides: overrides && overrides.replayButton }))),
            react_1.default.createElement(stack_child_1.StackChild, { order: 3 }, showControls && onClickForward && (react_1.default.createElement(forward_replay_1.ForwardButton, { onClick: onClickForward, overrides: overrides && overrides.forwardButton }))),
            react_1.default.createElement(stack_child_1.StackChild, { order: 1 }, showControls && (react_1.default.createElement(skip_track_1.SkipPreviousButton, { onClick: onPreviousTrack, disabled: disablePreviousTrack || !onPreviousTrack, overrides: overrides && overrides.previousButton, hide: !onPreviousTrack }))),
            react_1.default.createElement(stack_child_1.StackChild, { order: 3 }, showControls && (react_1.default.createElement(skip_track_1.SkipNextButton, { onClick: onNextTrack, disabled: disableNextTrack || !onNextTrack, overrides: overrides && overrides.nextButton, hide: !onNextTrack }))))));
});
var templateObject_1;
//# sourceMappingURL=control-panel.js.map