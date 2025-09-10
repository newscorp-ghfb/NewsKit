import { __assign, __rest } from "tslib";
import React from 'react';
import { IconButton } from '../../../icon-button';
import { withOwnTheme } from '../../../utils/with-own-theme';
import { useAudioPlayerContext } from '../../context';
import { useButtonOverrides, useKeyboardShortcutsOnButton } from '../../utils';
import defaults from './defaults';
var defaultKeyboardShortcuts = ['j'];
var ThemelessAudioPlayerReplayButton = React.forwardRef(function (_a, ref) {
    var props = __rest(_a, []);
    var getReplayButtonProps = useAudioPlayerContext().getReplayButtonProps;
    var overrides = useButtonOverrides(props, 'audioPlayerReplayButton');
    var propsFromContext = getReplayButtonProps && getReplayButtonProps(props);
    useKeyboardShortcutsOnButton({
        props: propsFromContext,
        defaults: defaultKeyboardShortcuts,
    });
    return (React.createElement(IconButton, __assign({ ref: ref, "data-testid": "audio-player-replay-button", size: "medium", overrides: overrides }, propsFromContext)));
});
export var AudioPlayerReplayButton = withOwnTheme(ThemelessAudioPlayerReplayButton)({
    defaults: defaults,
});
//# sourceMappingURL=replay-button.js.map