import { __assign, __rest } from "tslib";
import React, { useCallback } from 'react';
import { IconButton } from '../../../icon-button';
import { useAudioPlayerContext } from '../../context';
import defaults from './defaults';
import { withOwnTheme } from '../../../utils/with-own-theme';
import { useButtonOverrides, useKeyboardShortcutsOnButton } from '../../utils';
var defaultKeyboardShortcuts = ['k', ' '];
var ThemelessAudioPlayerPlayPauseButton = React.forwardRef(function (_a, ref) {
    var props = __rest(_a, []);
    var _b = useAudioPlayerContext(), getPlayPauseButtonProps = _b.getPlayPauseButtonProps, togglePlay = _b.togglePlay;
    var propsFromContext = getPlayPauseButtonProps && getPlayPauseButtonProps(props);
    var overrides = useButtonOverrides(props, 'audioPlayerPlayPauseButton');
    var toggleAction = useCallback(function (_a) {
        var target = _a.target, key = _a.key;
        var tagName = target.tagName;
        var actionKeys = [' ', 'Enter'];
        var actionElements = ['BUTTON', 'INPUT', 'A'];
        var isActionKey = actionKeys.includes(key);
        var isActionElement = target && actionElements.includes(tagName);
        if (typeof togglePlay === 'function' &&
            (!isActionKey ||
                // pressing Space or Enter when the focused element is a Button, A or Input will not trigger the toggle
                (isActionKey && !isActionElement))) {
            togglePlay();
        }
    }, [togglePlay]);
    useKeyboardShortcutsOnButton({
        props: propsFromContext,
        defaults: defaultKeyboardShortcuts,
        action: toggleAction,
    });
    return (React.createElement(IconButton, __assign({ ref: ref, "data-testid": "audio-player-play-pause-button", size: "medium", overrides: overrides }, propsFromContext)));
});
export var AudioPlayerPlayPauseButton = withOwnTheme(ThemelessAudioPlayerPlayPauseButton)({ defaults: defaults });
//# sourceMappingURL=play-pause-button.js.map