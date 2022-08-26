import React from 'react';
import {IconButton} from '../../icon-button';
import {ButtonProps, IconButtonProps} from '../../button/types';
import {
  IconFilledPlayArrow,
  IconFilledPause,
  IconFilledStop,
} from '../../icons';
import {styled} from '../../utils';

export const IconVisibilityButton = styled(IconButton)<
  IconButtonProps & {hide?: boolean}
>`
  ${props => props.hide && 'opacity: 0; pointer-events: none;'}
`;
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
        size="large"
        {...props}
      >
        {playStateIcon}
      </IconButton>
    );
  },
);
