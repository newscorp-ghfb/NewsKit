import React, { useCallback, useRef, useState } from 'react';
import { IconButton } from '../../../icon-button';
import defaults from './defaults';
import { withOwnTheme } from '../../../utils/with-own-theme';
import { IconFilledSlowMotionVideo } from '../../../icons/filled/material/icon-filled-slow-motion-video';
import { useTheme } from '../../../theme';
import { useBreakpointKey } from '../../../utils/hooks';
import { checkBreakpointProp } from '../../../utils/check-breakpoint-prop';
import { Modal } from '../../../modal';
import { useAudioPlayerContext } from '../../context';
import { PlaybackSpeedList } from './playback-speed-list';
import { Popover } from '../../../popover';
import { iconButtonOverrides, popoverOverrides, modalOverrides } from './utils';
var ThemelessAudioPlayerPlaybackSpeedControl = React.forwardRef(function (props, ref) {
    var theme = useTheme();
    var getPlaybackSpeedControlProps = useAudioPlayerContext().getPlaybackSpeedControlProps;
    var _a = getPlaybackSpeedControlProps(props), overrides = _a.overrides, setSpeed = _a.onChange, useModal = _a.useModal, playbackSpeed = _a.playbackSpeed, _b = _a.buttonSize, buttonSize = _b === void 0 ? 'medium' : _b;
    var _c = useState(false), isOpen = _c[0], setIsOpen = _c[1];
    var renderInModal = checkBreakpointProp(useModal, useBreakpointKey());
    var selectedOptionRef = useRef(null);
    var playbackSpeedList = (React.createElement(PlaybackSpeedList, { isInsideModal: renderInModal, selectedOptionRef: selectedOptionRef, playbackSpeed: playbackSpeed, updateSpeed: setSpeed, setIsOpen: setIsOpen, overrides: overrides, theme: theme }));
    var dismissHandler = useCallback(function () {
        setIsOpen(false);
    }, []);
    var toggleOpen = useCallback(function () {
        setIsOpen(function (open) { return !open; });
    }, []);
    return (React.createElement(React.Fragment, null,
        React.createElement(Popover, { ref: ref, open: isOpen && !renderInModal, content: playbackSpeedList, header: undefined, closePosition: "none", onDismiss: dismissHandler, enableDismiss: true, focusElementRef: selectedOptionRef, overrides: popoverOverrides(theme, overrides) }, props.children ? (
        // If there are children, trigger the open state
        // on click and pass the original onClick handler
        React.cloneElement(props.children, {
            onClick: function () {
                var _a, _b;
                toggleOpen();
                /* istanbul ignore next */
                if ((_b = (_a = props.children) === null || _a === void 0 ? void 0 : _a.props) === null || _b === void 0 ? void 0 : _b.onClick) {
                    props.children.props.onClick();
                }
            },
        })) : (React.createElement(IconButton, { "aria-label": "playback speed", "data-testid": "audio-player-playback-speed-control", overrides: iconButtonOverrides(theme, overrides), onClick: toggleOpen, size: buttonSize },
            React.createElement(IconFilledSlowMotionVideo, null)))),
        renderInModal && (React.createElement(Modal, { open: isOpen, onDismiss: dismissHandler, overrides: modalOverrides(theme, overrides) }, playbackSpeedList))));
});
export var AudioPlayerPlaybackSpeedControl = withOwnTheme(ThemelessAudioPlayerPlaybackSpeedControl)({ defaults: defaults });
//# sourceMappingURL=playback-speed-control.js.map