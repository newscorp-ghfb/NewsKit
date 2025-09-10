import { __assign, __rest } from "tslib";
import React from 'react';
import { IconButton } from '../../../icon-button';
import { useAudioPlayerContext } from '../../context';
import defaults from './defaults';
import { withOwnTheme } from '../../../utils/with-own-theme';
import { useButtonOverrides, useKeyboardShortcutsOnButton } from '../../utils';
var defaultKeyboardShortcuts = ['shift + p'];
var ThemelessAudioPlayerSkipPreviousButton = React.forwardRef(function (_a, ref) {
    var props = __rest(_a, []);
    var getSkipPreviousButtonProps = useAudioPlayerContext().getSkipPreviousButtonProps;
    var overrides = useButtonOverrides(props, 'audioPlayerSkipPreviousButton');
    var propsFromContext = getSkipPreviousButtonProps && getSkipPreviousButtonProps(props);
    useKeyboardShortcutsOnButton({
        props: propsFromContext,
        defaults: defaultKeyboardShortcuts,
    });
    return (React.createElement(IconButton, __assign({ ref: ref, "data-testid": "audio-player-skip-previous-button", size: "medium", overrides: overrides }, propsFromContext)));
});
export var AudioPlayerSkipPreviousButton = withOwnTheme(ThemelessAudioPlayerSkipPreviousButton)({ defaults: defaults });
//# sourceMappingURL=skip-previous-button.js.map