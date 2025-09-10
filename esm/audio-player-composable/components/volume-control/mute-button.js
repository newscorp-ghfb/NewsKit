import { __assign } from "tslib";
import React from 'react';
import { IconButton } from '../../../icon-button';
import { IconFilledVolumeOff, IconFilledVolumeUp } from '../../../icons';
import { getComponentOverrides } from '../../../utils/overrides';
import { useKeyboardShortcutsOnButton } from '../../utils';
var toggleMute = function (volume, unMutedVolume, onChange) { return (volume === 0 ? onChange(unMutedVolume) : onChange(0)); };
var DefaultIcon = function (_a) {
    var volume = _a.volume, overrides = _a.overrides;
    return volume === 0 ? (React.createElement(IconFilledVolumeOff, { overrides: overrides })) : (React.createElement(IconFilledVolumeUp, { overrides: overrides }));
};
export var MuteButton = React.forwardRef(function (_a, ref) {
    var volume = _a.volume, unMutedVolume = _a.unMutedVolume, onChange = _a.onChange, size = _a.size, muteKeyboardShortcuts = _a.muteKeyboardShortcuts, overrides = _a.overrides;
    useKeyboardShortcutsOnButton({
        props: {
            keyboardShortcuts: muteKeyboardShortcuts,
            onClick: function () {
                toggleMute(volume, unMutedVolume, onChange);
            },
        },
        defaults: 'm',
    });
    var _b = getComponentOverrides(overrides.muteButtonIcon, DefaultIcon, {
        volume: volume,
    }), MuteButtonIcon = _b[0], muteButtonIconProps = _b[1];
    return (React.createElement(IconButton, { ref: ref, "data-testid": "mute-button", "aria-label": volume === 0 ? 'Unmute' : 'Mute', onClick: function () { return toggleMute(volume, unMutedVolume, onChange); }, size: size, overrides: overrides },
        React.createElement(MuteButtonIcon, __assign({}, muteButtonIconProps))));
});
//# sourceMappingURL=mute-button.js.map