import { __assign, __rest } from "tslib";
import React from 'react';
import { IconButton } from '../../../icon-button';
import { withOwnTheme } from '../../../utils/with-own-theme';
import { useAudioPlayerContext } from '../../context';
import { useButtonOverrides, useKeyboardShortcutsOnButton } from '../../utils';
import defaults from './defaults';
var defaultKeyboardShortcuts = ['l'];
var ThemelessAudioPlayerForwardButton = React.forwardRef(function (_a, ref) {
    var props = __rest(_a, []);
    var getForwardButtonProps = useAudioPlayerContext().getForwardButtonProps;
    var overrides = useButtonOverrides(props, 'audioPlayerForwardButton');
    var propsFromContext = getForwardButtonProps && getForwardButtonProps(props);
    useKeyboardShortcutsOnButton({
        props: propsFromContext,
        defaults: defaultKeyboardShortcuts,
    });
    return (React.createElement(IconButton, __assign({ ref: ref, "data-testid": "audio-player-forward-button", size: "medium", overrides: overrides }, propsFromContext)));
});
export var AudioPlayerForwardButton = withOwnTheme(ThemelessAudioPlayerForwardButton)({
    defaults: defaults,
});
//# sourceMappingURL=forward-button.js.map