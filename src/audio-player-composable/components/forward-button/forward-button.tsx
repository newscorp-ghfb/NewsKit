import React from 'react';
import {ButtonSize} from '../../../button/types';
import {IconButton} from '../../../icon-button';
import {withOwnTheme} from '../../../utils/with-own-theme';
import {useAudioPlayerContext} from '../../context';
import {AudioPlayerIconButtonWithShortcuts} from '../../types';
import {useButtonOverrides, useKeyboardShortcutsOnButton} from '../../utils';
import defaults from './defaults';

const defaultKeyboardShortcuts = ['l'];

const ThemelessAudioPlayerForwardButton: React.FC<
  AudioPlayerIconButtonWithShortcuts & {
    seconds?: number;
  }
> = React.memo(props => {
  const {getForwardButtonProps} = useAudioPlayerContext();

  const overrides = useButtonOverrides(props, 'audioPlayerForwardButton');

  const propsFromContext =
    getForwardButtonProps! && getForwardButtonProps(props);

  useKeyboardShortcutsOnButton({
    props: propsFromContext as AudioPlayerIconButtonWithShortcuts,
    defaults: defaultKeyboardShortcuts,
  });

  return (
    <IconButton
      data-testid="audio-player-forward-button"
      size={ButtonSize.Medium}
      overrides={overrides}
      {...propsFromContext}
    />
  );
});

export const AudioPlayerForwardButton = withOwnTheme(
  ThemelessAudioPlayerForwardButton,
)({
  defaults,
});
