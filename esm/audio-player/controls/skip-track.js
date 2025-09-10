import { __assign } from "tslib";
import React from 'react';
import { IconFilledSkipNext, IconFilledSkipPrevious } from '../../icons';
import { IconVisibilityButton } from './play-pause';
export var SkipNextButton = React.memo(function (props) { return (React.createElement(IconVisibilityButton, __assign({ "data-testid": "audio-player-skip-next", "aria-label": "Skip next", size: "medium", hide: true }, props),
    React.createElement(IconFilledSkipNext, null))); });
export var SkipPreviousButton = React.memo(function (props) { return (React.createElement(IconVisibilityButton, __assign({ "data-testid": "audio-player-skip-previous", "aria-label": "Skip previous", size: "medium", hide: true }, props),
    React.createElement(IconFilledSkipPrevious, null))); });
//# sourceMappingURL=skip-track.js.map