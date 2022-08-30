import React from 'react';
import {IconButton} from '../../../icon-button';
import {useAudioPlayerContext} from '../../context';
import defaults from './defaults';
import {withOwnTheme} from '../../../utils/with-own-theme';
import {useButtonOverrides, useKeyboardShortcutsOnButton} from '../../utils';
import {AudioPlayerSkipNextButtonProps} from './types';

const defaultKeyboardShortcuts = ['shift + n'];

const ThemelessAudioPlayerSkipNextButton = React.forwardRef<
  HTMLButtonElement,
  AudioPlayerSkipNextButtonProps
>(({...props}, ref) => {
  const {getSkipNextButtonProps} = useAudioPlayerContext();

  const overrides = useButtonOverrides(props, 'audioPlayerSkipNextButton');

  const propsFromContext =
    getSkipNextButtonProps! && getSkipNextButtonProps(props);

  useKeyboardShortcutsOnButton({
    props: propsFromContext as AudioPlayerSkipNextButtonProps,
    defaults: defaultKeyboardShortcuts,
  });

  return (
    <IconButton
      ref={ref}
      data-testid="audio-player-skip-next-button"
      size="medium"
      overrides={overrides}
      {...propsFromContext}
    />
  );
});

export const AudioPlayerSkipNextButton = withOwnTheme(
  ThemelessAudioPlayerSkipNextButton,
)({defaults});
