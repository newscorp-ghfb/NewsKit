import React from 'react';
import {ButtonSize} from '../../../button/types';
import {IconButton} from '../../../icon-button';
import {withOwnTheme} from '../../../utils/with-own-theme';
import {useAudioPlayerContext} from '../../context';
import {useButtonOverrides, useKeyboardShortcutsOnButton} from '../../utils';
import defaults from './defaults';
import {AudioPlayerReplayButtonProps} from './types';

const defaultKeyboardShortcuts = ['j'];

const ThemelessAudioPlayerReplayButton = React.forwardRef<
  HTMLButtonElement,
  AudioPlayerReplayButtonProps
>(({...props}, ref) => {
  const {getReplayButtonProps} = useAudioPlayerContext();

  const overrides = useButtonOverrides(props, 'audioPlayerReplayButton');

  const propsFromContext = getReplayButtonProps! && getReplayButtonProps(props);

  useKeyboardShortcutsOnButton({
    props: propsFromContext as AudioPlayerReplayButtonProps,
    defaults: defaultKeyboardShortcuts,
  });

  return (
    <IconButton
      ref={ref}
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
