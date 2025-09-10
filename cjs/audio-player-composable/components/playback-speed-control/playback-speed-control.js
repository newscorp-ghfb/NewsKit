"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AudioPlayerPlaybackSpeedControl = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var icon_button_1 = require("../../../icon-button");
var defaults_1 = tslib_1.__importDefault(require("./defaults"));
var with_own_theme_1 = require("../../../utils/with-own-theme");
var icon_filled_slow_motion_video_1 = require("../../../icons/filled/material/icon-filled-slow-motion-video");
var theme_1 = require("../../../theme");
var hooks_1 = require("../../../utils/hooks");
var check_breakpoint_prop_1 = require("../../../utils/check-breakpoint-prop");
var modal_1 = require("../../../modal");
var context_1 = require("../../context");
var playback_speed_list_1 = require("./playback-speed-list");
var popover_1 = require("../../../popover");
var utils_1 = require("./utils");
var ThemelessAudioPlayerPlaybackSpeedControl = react_1.default.forwardRef(function (props, ref) {
    var theme = (0, theme_1.useTheme)();
    var getPlaybackSpeedControlProps = (0, context_1.useAudioPlayerContext)().getPlaybackSpeedControlProps;
    var _a = getPlaybackSpeedControlProps(props), overrides = _a.overrides, setSpeed = _a.onChange, useModal = _a.useModal, playbackSpeed = _a.playbackSpeed, _b = _a.buttonSize, buttonSize = _b === void 0 ? 'medium' : _b;
    var _c = (0, react_1.useState)(false), isOpen = _c[0], setIsOpen = _c[1];
    var renderInModal = (0, check_breakpoint_prop_1.checkBreakpointProp)(useModal, (0, hooks_1.useBreakpointKey)());
    var selectedOptionRef = (0, react_1.useRef)(null);
    var playbackSpeedList = (react_1.default.createElement(playback_speed_list_1.PlaybackSpeedList, { isInsideModal: renderInModal, selectedOptionRef: selectedOptionRef, playbackSpeed: playbackSpeed, updateSpeed: setSpeed, setIsOpen: setIsOpen, overrides: overrides, theme: theme }));
    var dismissHandler = (0, react_1.useCallback)(function () {
        setIsOpen(false);
    }, []);
    var toggleOpen = (0, react_1.useCallback)(function () {
        setIsOpen(function (open) { return !open; });
    }, []);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(popover_1.Popover, { ref: ref, open: isOpen && !renderInModal, content: playbackSpeedList, header: undefined, closePosition: "none", onDismiss: dismissHandler, enableDismiss: true, focusElementRef: selectedOptionRef, overrides: (0, utils_1.popoverOverrides)(theme, overrides) }, props.children ? (
        // If there are children, trigger the open state
        // on click and pass the original onClick handler
        react_1.default.cloneElement(props.children, {
            onClick: function () {
                var _a, _b;
                toggleOpen();
                /* istanbul ignore next */
                if ((_b = (_a = props.children) === null || _a === void 0 ? void 0 : _a.props) === null || _b === void 0 ? void 0 : _b.onClick) {
                    props.children.props.onClick();
                }
            },
        })) : (react_1.default.createElement(icon_button_1.IconButton, { "aria-label": "playback speed", "data-testid": "audio-player-playback-speed-control", overrides: (0, utils_1.iconButtonOverrides)(theme, overrides), onClick: toggleOpen, size: buttonSize },
            react_1.default.createElement(icon_filled_slow_motion_video_1.IconFilledSlowMotionVideo, null)))),
        renderInModal && (react_1.default.createElement(modal_1.Modal, { open: isOpen, onDismiss: dismissHandler, overrides: (0, utils_1.modalOverrides)(theme, overrides) }, playbackSpeedList))));
});
exports.AudioPlayerPlaybackSpeedControl = (0, with_own_theme_1.withOwnTheme)(ThemelessAudioPlayerPlaybackSpeedControl)({ defaults: defaults_1.default });
//# sourceMappingURL=playback-speed-control.js.map