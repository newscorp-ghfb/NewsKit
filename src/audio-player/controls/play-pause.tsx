import React from 'react';
import {IconButton} from '../../icon-button';
import {ButtonSize, ButtonProps} from '../../button/types';
import {
  IconFilledPlayArrow,
  IconFilledPause,
  IconFilledStop,
} from '../../icons';

export interface PlayerButtonProps {
  playing: boolean;
  canPause: boolean;
  onClick: () => void;
  loading: boolean;
  overrides?: ButtonProps['overrides'];
}

export const PlayerButton: React.FC<PlayerButtonProps> = React.memo(
  ({playing, canPause, ...props}) => {
    let playStateIcon = <IconFilledPlayArrow />;
    let ariaLabel = 'Play';
    let ariaPressed = false;

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
        data-testid="audio-player-play-button"
        aria-pressed={ariaPressed}
        aria-label={ariaLabel}
        size={ButtonSize.Large}
        {...props}
      >
        {playStateIcon}
      </IconButton>
    );
  },
);
