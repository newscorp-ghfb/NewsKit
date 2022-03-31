import React from 'react';
import {ButtonSize} from '../../../button/types';
import {IconButton} from '../../../icon-button';
import {withOwnTheme} from '../../../utils/with-own-theme';
import {useAudioPlayerContext} from '../../context';
import {AudioPlayerIconButtonWithShortcuts} from '../../types';
import {useButtonOverrides, useKeyboardShortcutsOnButton} from '../../utils';
import defaults from './defaults';

const defaultKeyboardShortcuts = ['j'];

const ThemelessAudioPlayerReplayButton: React.FC<
  AudioPlayerIconButtonWithShortcuts & {
    seconds?: number;
  }
> = React.memo(props => {
  const {getReplayButtonProps} = useAudioPlayerContext();

  const overrides = useButtonOverrides(props, 'audioPlayerReplayButton');

  const propsFromContext = getReplayButtonProps! && getReplayButtonProps(props);

  useKeyboardShortcutsOnButton({
    props: propsFromContext as AudioPlayerIconButtonWithShortcuts,
    defaults: defaultKeyboardShortcuts,
  });

  return (
    <IconButton
      data-testid="audio-player-replay-button"
      size={ButtonSize.Medium}
      overrides={overrides}
      {...propsFromContext}
    />
  );
});

export const AudioPlayerReplayButton = withOwnTheme(
  ThemelessAudioPlayerReplayButton,
)({
  defaults,
});
