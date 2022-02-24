import React, {useContext} from 'react';
import {IconButton} from '../../icon-button';
import {ButtonSize} from '../../button/types';
import {
  IconFilledPlayArrow,
  IconFilledPause,
  IconFilledStop,
} from '../../icons';
import {AudioPlayerContext} from '../context';
import {PlayPauseButtonProps} from '../types';

export const PlayPauseButton: React.FC<PlayPauseButtonProps> = React.memo(
  ({onClick, ...props}) => {
    const {playing, canPause, loading, togglePlay} = useContext(
      AudioPlayerContext,
    );

    let playStateIcon = <IconFilledPlayArrow />;
    let ariaLabel = 'Play';
    let ariaPressed = false;
    // TODO remove ignore as we implement the "live" functionality back and write test for it
    /* istanbul ignore next */
    if (playing) {
      ariaPressed = true;
      if (canPause) {
        playStateIcon = <IconFilledPause />;
        ariaLabel = 'Pause';
      } else {
        playStateIcon = <IconFilledStop />;
        ariaLabel = 'Stop';
      }
    }

    return (
      <IconButton
        data-testid="audio-player-play-pause-button"
        aria-pressed={ariaPressed}
        aria-label={ariaLabel}
        size={ButtonSize.Large}
        loading={loading}
        onClick={() => {
          if (onClick) {
            onClick();
          }
          if (togglePlay) {
            togglePlay();
          }
        }}
        {...props}
      >
        {playStateIcon}
      </IconButton>
    );
  },
);
