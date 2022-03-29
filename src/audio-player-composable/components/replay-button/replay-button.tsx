import React from 'react';
import {ButtonOverrides, ButtonSize} from '../../../button/types';
import {IconButton} from '../../../icon-button';
import {useTheme} from '../../../theme';
import {filterOutFalsyProperties} from '../../../utils/filter-object';
import {withOwnTheme} from '../../../utils/with-own-theme';
import {useAudioPlayerContext} from '../../context';
import {AudioPlayerIconButtonWithShortcuts} from '../../types';
import {useKeyboardShortcutsOnButton} from '../../utils';
import defaults from './defaults';

const defaultKeyboardShortcuts = ['j'];

const ThemelessAudioPlayerReplayButton: React.FC<
  AudioPlayerIconButtonWithShortcuts & {
    seconds?: number;
  }
> = React.memo(({overrides, ...props}) => {
  const {getReplayButtonProps} = useAudioPlayerContext();

  const theme = useTheme();

  const audioPlayerReplayOverrides: ButtonOverrides = {
    ...theme.componentDefaults.audioPlayerReplayButton,
    ...filterOutFalsyProperties(overrides),
  };

  const propsFromContext = getReplayButtonProps! && getReplayButtonProps(props);

  useKeyboardShortcutsOnButton({
    props: propsFromContext as AudioPlayerIconButtonWithShortcuts,
    defaults: defaultKeyboardShortcuts,
  });

  return (
    <IconButton
      data-testid="audio-player-replay-button"
      size={ButtonSize.Medium}
      overrides={audioPlayerReplayOverrides}
      {...propsFromContext}
    />
  );
});

export const AudioPlayerReplayButton = withOwnTheme(
  ThemelessAudioPlayerReplayButton,
)({
  defaults,
});
