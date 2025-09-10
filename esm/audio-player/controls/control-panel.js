import { __makeTemplateObject } from "tslib";
import React from 'react';
import { styled } from '../../utils/style';
import { ForwardButton, BackwardButton } from './forward-replay';
import { PlayerButton } from './play-pause';
import { SkipPreviousButton, SkipNextButton } from './skip-track';
import { Stack } from '../../stack';
import { StackChild } from '../../stack-child';
import { useTheme } from '../../theme';
import { getToken } from '../../utils/get-token';
export var ButtonsContainer = styled(Stack)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  min-width: 100%;\n"], ["\n  min-width: 100%;\n"])));
export var ControlPanel = React.memo(function (_a) {
    var onNextTrack = _a.onNextTrack, disableNextTrack = _a.disableNextTrack, onPreviousTrack = _a.onPreviousTrack, disablePreviousTrack = _a.disablePreviousTrack, showControls = _a.showControls, playing = _a.playing, loading = _a.loading, live = _a.live, onClickBackward = _a.onClickBackward, onClickForward = _a.onClickForward, togglePlay = _a.togglePlay, overrides = _a.overrides;
    return (React.createElement(Stack, { flow: "horizontal-center", stackDistribution: "center", flexGrow: true },
        React.createElement(ButtonsContainer, { flow: "horizontal-center", spaceInline: getToken({ theme: useTheme(), overrides: overrides }, 'audioPlayer.controls', '', 'space'), stackDistribution: live ? 'center' : 'flex-start' },
            React.createElement(StackChild, { order: 3 },
                React.createElement(PlayerButton, { canPause: showControls, playing: playing, onClick: togglePlay, overrides: overrides && overrides.playPauseButton, loading: loading })),
            React.createElement(StackChild, { order: 2 }, showControls && onClickBackward && (React.createElement(BackwardButton, { onClick: onClickBackward, overrides: overrides && overrides.replayButton }))),
            React.createElement(StackChild, { order: 3 }, showControls && onClickForward && (React.createElement(ForwardButton, { onClick: onClickForward, overrides: overrides && overrides.forwardButton }))),
            React.createElement(StackChild, { order: 1 }, showControls && (React.createElement(SkipPreviousButton, { onClick: onPreviousTrack, disabled: disablePreviousTrack || !onPreviousTrack, overrides: overrides && overrides.previousButton, hide: !onPreviousTrack }))),
            React.createElement(StackChild, { order: 3 }, showControls && (React.createElement(SkipNextButton, { onClick: onNextTrack, disabled: disableNextTrack || !onNextTrack, overrides: overrides && overrides.nextButton, hide: !onNextTrack }))))));
});
var templateObject_1;
//# sourceMappingURL=control-panel.js.map