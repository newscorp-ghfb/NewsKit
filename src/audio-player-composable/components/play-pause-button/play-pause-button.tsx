import React, {useCallback} from 'react';
import {IconButton} from '../../../icon-button';
import {useAudioPlayerContext} from '../../context';
import defaults from './defaults';
import {withOwnTheme} from '../../../utils/with-own-theme';
import {useButtonOverrides, useKeyboardShortcutsOnButton} from '../../utils';
import {AudioPlayerPlayPauseButtonProps} from './types';

const defaultKeyboardShortcuts = ['k', ' '];

const ThemelessAudioPlayerPlayPauseButton = React.forwardRef<
  HTMLButtonElement,
  AudioPlayerPlayPauseButtonProps
>(({...props}, ref) => {
  const {getPlayPauseButtonProps, togglePlay} = useAudioPlayerContext();

  const propsFromContext =
    getPlayPauseButtonProps! && getPlayPauseButtonProps(props);

  const overrides = useButtonOverrides(props, 'audioPlayerPlayPauseButton');

  const toggleAction = useCallback(
    ({target, key}: KeyboardEvent) => {
      const {tagName} = target as HTMLElement;
      const actionKeys = [' ', 'Enter'];
      const actionElements = ['BUTTON', 'INPUT', 'A'];
      const isActionKey = actionKeys.includes(key);
      const isActionElement = target && actionElements.includes(tagName);

      if (
        typeof togglePlay === 'function' &&
        (!isActionKey ||
          // pressing Space or Enter when the focused element is a Button, A or Input will not trigger the toggle
          (isActionKey && !isActionElement))
      ) {
        togglePlay();
      }
    },
    [togglePlay],
  );

  useKeyboardShortcutsOnButton({
    props: propsFromContext as AudioPlayerPlayPauseButtonProps,
    defaults: defaultKeyboardShortcuts,
    action: toggleAction,
  });

  return (
    <IconButton
      ref={ref}
      data-testid="audio-player-play-pause-button"
      size="large"
      overrides={overrides}
      {...propsFromContext}
    />
  );
});

export const AudioPlayerPlayPauseButton = withOwnTheme(
  ThemelessAudioPlayerPlayPauseButton,
)({defaults});
