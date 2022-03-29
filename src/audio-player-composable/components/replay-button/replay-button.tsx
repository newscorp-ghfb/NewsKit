import React from 'react';
import {ButtonOverrides, ButtonSize} from '../../../button/types';
import {IconButton} from '../../../icon-button';
import {useTheme} from '../../../theme';
import {filterOutFalsyProperties} from '../../../utils/filter-object';
import {useKeypress} from '../../../utils/hooks/use-keypress';
import {withOwnTheme} from '../../../utils/with-own-theme';
import {useAudioPlayerContext} from '../../context';
import {AudioPlayerIconButtonProps} from '../../types';
import defaults from './defaults';

const defaultKeyboardShortcuts = {
  replay: ['j'],
};

const ThemelessAudioPlayerReplayButton: React.FC<
  AudioPlayerIconButtonProps & {
    keyboardShortcuts: {
      forward: string[] | string;
    };
    seconds: number;
  }
> = React.memo(
  ({overrides, keyboardShortcuts: keyboardShortcutsProp, ...props}) => {
    const {getReplayButtonProps, audioSectionRef} = useAudioPlayerContext();

    const theme = useTheme();

    const audioPlayerReplayOverrides: ButtonOverrides = {
      ...theme.componentDefaults.audioPlayerReplayButton,
      ...filterOutFalsyProperties(overrides),
    };

    const propsFromContext =
      getReplayButtonProps! && getReplayButtonProps(props);

    // Keyboard shortcuts
    const options = {target: audioSectionRef, preventDefault: false};
    const keyboardShortcuts = {
      ...defaultKeyboardShortcuts,
      ...keyboardShortcutsProp,
    };
    useKeypress(
      keyboardShortcuts.replay,
      // @ts-ignore
      e => propsFromContext.onClick(e),
      options,
    );

    return (
      <IconButton
        data-testid="audio-player-replay-button"
        size={ButtonSize.Medium}
        overrides={audioPlayerReplayOverrides}
        {...propsFromContext}
      />
    );
  },
);

export const AudioPlayerReplayButton = withOwnTheme(
  ThemelessAudioPlayerReplayButton,
)({
  defaults,
});
