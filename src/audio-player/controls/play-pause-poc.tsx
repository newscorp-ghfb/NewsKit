import React, {useContext} from 'react';
import {IconButton} from '../../icon-button';
import {ButtonSize, ButtonProps, IconButtonProps} from '../../button/types';
import {
  IconFilledPlayArrow,
  IconFilledPause,
  IconFilledStop,
} from '../../icons';
import {styled} from '../../utils';
import {AudioPlayerContext} from '../context';

export const IconVisibilityButton = styled(IconButton)<
  IconButtonProps & {hide?: boolean}
>`
  ${props => props.hide && 'opacity: 0; pointer-events: none;'}
`;
export interface PlayerButtonPOCProps {
  onClick?: () => void;
  overrides?: ButtonProps['overrides'];
}

export const PlayerButtonPOC: React.FC<PlayerButtonPOCProps> = React.memo(
  ({onClick, ...props}) => {
    const {playing, canPause, loading, togglePlay} = useContext(
      AudioPlayerContext,
    );

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
