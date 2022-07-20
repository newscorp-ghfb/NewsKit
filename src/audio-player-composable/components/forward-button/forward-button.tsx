import React from 'react';
import {ButtonSize} from '../../../button/types';
import {IconButton} from '../../../icon-button';
import {withOwnTheme} from '../../../utils/with-own-theme';
import {useAudioPlayerContext} from '../../context';
import {useButtonOverrides, useKeyboardShortcutsOnButton} from '../../utils';
import defaults from './defaults';
import {AudioPlayerForwardButtonProps} from './types';

const defaultKeyboardShortcuts = ['l'];

const ThemelessAudioPlayerForwardButton = React.forwardRef<
  HTMLButtonElement,
  AudioPlayerForwardButtonProps
>(({...props}, ref) => {
  const {getForwardButtonProps} = useAudioPlayerContext();

  const overrides = useButtonOverrides(props, 'audioPlayerForwardButton');

  const propsFromContext =
    getForwardButtonProps! && getForwardButtonProps(props);

  useKeyboardShortcutsOnButton({
    props: propsFromContext as AudioPlayerForwardButtonProps,
    defaults: defaultKeyboardShortcuts,
  });

  return (
    <IconButton
      ref={ref}
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
