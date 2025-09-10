"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MuteButton = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var icon_button_1 = require("../../../icon-button");
var icons_1 = require("../../../icons");
var overrides_1 = require("../../../utils/overrides");
var utils_1 = require("../../utils");
var toggleMute = function (volume, unMutedVolume, onChange) { return (volume === 0 ? onChange(unMutedVolume) : onChange(0)); };
var DefaultIcon = function (_a) {
    var volume = _a.volume, overrides = _a.overrides;
    return volume === 0 ? (react_1.default.createElement(icons_1.IconFilledVolumeOff, { overrides: overrides })) : (react_1.default.createElement(icons_1.IconFilledVolumeUp, { overrides: overrides }));
};
exports.MuteButton = react_1.default.forwardRef(function (_a, ref) {
    var volume = _a.volume, unMutedVolume = _a.unMutedVolume, onChange = _a.onChange, size = _a.size, muteKeyboardShortcuts = _a.muteKeyboardShortcuts, overrides = _a.overrides;
    (0, utils_1.useKeyboardShortcutsOnButton)({
        props: {
            keyboardShortcuts: muteKeyboardShortcuts,
            onClick: function () {
                toggleMute(volume, unMutedVolume, onChange);
            },
        },
        defaults: 'm',
    });
    var _b = (0, overrides_1.getComponentOverrides)(overrides.muteButtonIcon, DefaultIcon, {
        volume: volume,
    }), MuteButtonIcon = _b[0], muteButtonIconProps = _b[1];
    return (react_1.default.createElement(icon_button_1.IconButton, { ref: ref, "data-testid": "mute-button", "aria-label": volume === 0 ? 'Unmute' : 'Mute', onClick: function () { return toggleMute(volume, unMutedVolume, onChange); }, size: size, overrides: overrides },
        react_1.default.createElement(MuteButtonIcon, tslib_1.__assign({}, muteButtonIconProps))));
});
//# sourceMappingURL=mute-button.js.map