import React from 'react';
import { SelectionList, SelectionListOption } from '../../../selection-list';
import { selectionListOptionOverrides, selectionListOverrides } from './utils';
var PLAYBACK_RATE_SCALE = [0.5, 0.8, 1, 1.2, 1.5, 2];
export var PlaybackSpeedList = function (_a) {
    var playbackSpeed = _a.playbackSpeed, updateSpeed = _a.updateSpeed, setIsOpen = _a.setIsOpen, theme = _a.theme, overrides = _a.overrides, selectedOptionRef = _a.selectedOptionRef, isInsideModal = _a.isInsideModal;
    return (React.createElement(SelectionList, { overrides: selectionListOverrides(theme, overrides), "aria-label": "playback speed" }, PLAYBACK_RATE_SCALE.map(function (speed) { return (React.createElement(SelectionListOption, { ref: playbackSpeed === speed ? selectedOptionRef : undefined, key: speed, overrides: selectionListOptionOverrides(theme, overrides), selected: playbackSpeed === speed, onClick: function () {
            updateSpeed(speed);
            if (!isInsideModal) {
                setIsOpen(false);
            }
        } },
        speed,
        "x")); })));
};
//# sourceMappingURL=playback-speed-list.js.map