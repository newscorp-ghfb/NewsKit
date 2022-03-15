import React, {useCallback} from 'react';
import {IconButton} from '../../../icon-button';
import {ButtonSize} from '../../../button/types';
import {useAudioPlayerContext} from '../../context';
import {PlayPauseButtonProps} from './types';
import {useKeypress} from '../../../utils/hooks/use-keypress';

const defaultKeyboardShortcuts = {
  toggle: ['k', ' '],
};

export const PlayPauseButton: React.FC<PlayPauseButtonProps> = React.memo(
  ({
    onClick: consumerOnClick,
    keyboardShortcuts: keyboardShortcutsProp,
    ...props
  }) => {
    const {
      getPlayPauseButtonProps,
      audioSectionRef,
      togglePlay,
    } = useAudioPlayerContext();

    const {playStateIcon, ariaLabel, ariaPressed, loading, onClick} =
      getPlayPauseButtonProps! &&
      getPlayPauseButtonProps({onClick: consumerOnClick});

    // Keyboard shortcuts
    const options = {target: audioSectionRef, preventDefault: false};
    const keyboardShortcuts = {
      ...defaultKeyboardShortcuts,
      ...keyboardShortcutsProp,
    };

    const toggleAction = useCallback(
      ({target, key}: KeyboardEvent) => {
        const {tagName} = target as HTMLElement;
        const actionKeys = [' ', 'Enter'];
        const actionElements = ['BUTTON', 'INPUT', 'A'];
        const isActionKey = actionKeys.includes(key);
        const isActionElement = target && actionElements.includes(tagName);

        if (
          typeof togglePlay === 'function' &&
          (!isActionKey || (isActionKey && !isActionElement))
        ) {
          togglePlay();
        }
      },
      [togglePlay],
    );

    useKeypress(keyboardShortcuts.toggle, toggleAction, options); // toggle

    return (
      <IconButton
        data-testid="audio-player-play-pause-button"
        aria-label={ariaLabel}
        aria-pressed={ariaPressed}
        loading={loading}
        onClick={onClick}
        size={props.size || ButtonSize.Large}
        overrides={props.overrides}
        {...props}
      >
        {playStateIcon}
      </IconButton>
    );
  },
);
