import { __assign, __makeTemplateObject, __rest } from "tslib";
import React from 'react';
import { IconButton } from '../../icon-button';
import { IconFilledPlayArrow, IconFilledPause, IconFilledStop, } from '../../icons';
import { styled } from '../../utils';
export var IconVisibilityButton = styled(IconButton)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), function (props) { return props.hide && 'opacity: 0; pointer-events: none;'; });
export var PlayerButton = React.memo(function (_a) {
    var playing = _a.playing, canPause = _a.canPause, props = __rest(_a, ["playing", "canPause"]);
    var playStateIcon = React.createElement(IconFilledPlayArrow, null);
    var ariaLabel = 'Play';
    var ariaPressed = false;
    if (playing) {
        ariaPressed = true;
        if (canPause) {
            playStateIcon = React.createElement(IconFilledPause, null);
            ariaLabel = 'Pause';
        }
        else {
            playStateIcon = React.createElement(IconFilledStop, null);
            ariaLabel = 'Stop';
        }
    }
    return (React.createElement(IconButton, __assign({ "data-testid": "audio-player-play-button", "aria-pressed": ariaPressed, "aria-label": ariaLabel, size: "large" }, props), playStateIcon));
});
var templateObject_1;
//# sourceMappingURL=play-pause.js.map