import React from 'react';
import {IconButton} from '../../../icon-button';
import {useAudioPlayerContext} from '../../context';
import defaults from './defaults';
import {withOwnTheme} from '../../../utils/with-own-theme';
import {useButtonOverrides, useKeyboardShortcutsOnButton} from '../../utils';
import {AudioPlayerSkipPreviousButtonProps} from './types';

const defaultKeyboardShortcuts = ['shift + p'];

const ThemelessAudioPlayerSkipPreviousButton = React.forwardRef<
  HTMLButtonElement,
  AudioPlayerSkipPreviousButtonProps
>(({...props}, ref) => {
  const {getSkipPreviousButtonProps} = useAudioPlayerContext();

  const overrides = useButtonOverrides(props, 'audioPlayerSkipPreviousButton');

  const propsFromContext =
    getSkipPreviousButtonProps! && getSkipPreviousButtonProps(props);

  useKeyboardShortcutsOnButton({
    props: propsFromContext as AudioPlayerSkipPreviousButtonProps,
    defaults: defaultKeyboardShortcuts,
  });

  return (
    <IconButton
      ref={ref}
      data-testid="audio-player-skip-previous-button"
      size="medium"
      overrides={overrides}
      {...propsFromContext}
    />
  );
});

export const AudioPlayerSkipPreviousButton = withOwnTheme(
  ThemelessAudioPlayerSkipPreviousButton,
)({defaults});
