import { __assign } from "tslib";
import React from 'react';
import { IconFilledForward10, IconFilledReplay10 } from '../../icons';
import { IconButton } from '../../icon-button';
export var ForwardButton = React.memo(function (props) { return (React.createElement(IconButton, __assign({ "data-testid": "audio-player-forward", "aria-label": "Fast forward 10 seconds", size: "medium" }, props),
    React.createElement(IconFilledForward10, null))); });
export var BackwardButton = React.memo(function (props) { return (React.createElement(IconButton, __assign({ "data-testid": "audio-player-backward", "aria-label": "Rewind 10 seconds", size: "medium" }, props),
    React.createElement(IconFilledReplay10, null))); });
//# sourceMappingURL=forward-replay.js.map