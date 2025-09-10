import { __assign, __rest } from "tslib";
import React from 'react';
import { IconButton } from '../../../icon-button';
import { useAudioPlayerContext } from '../../context';
import defaults from './defaults';
import { withOwnTheme } from '../../../utils/with-own-theme';
import { useButtonOverrides, useKeyboardShortcutsOnButton } from '../../utils';
var defaultKeyboardShortcuts = ['shift + n'];
var ThemelessAudioPlayerSkipNextButton = React.forwardRef(function (_a, ref) {
    var props = __rest(_a, []);
    var getSkipNextButtonProps = useAudioPlayerContext().getSkipNextButtonProps;
    var overrides = useButtonOverrides(props, 'audioPlayerSkipNextButton');
    var propsFromContext = getSkipNextButtonProps && getSkipNextButtonProps(props);
    useKeyboardShortcutsOnButton({
        props: propsFromContext,
        defaults: defaultKeyboardShortcuts,
    });
    return (React.createElement(IconButton, __assign({ ref: ref, "data-testid": "audio-player-skip-next-button", size: "medium", overrides: overrides }, propsFromContext)));
});
export var AudioPlayerSkipNextButton = withOwnTheme(ThemelessAudioPlayerSkipNextButton)({ defaults: defaults });
//# sourceMappingURL=skip-next-button.js.map