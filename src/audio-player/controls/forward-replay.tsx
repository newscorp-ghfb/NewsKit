import React from 'react';
import {StyledButton} from '../styled';
import {Forward10, Replay10} from '../../icons';
import {ButtonSize} from '../../button';

export interface TrackControlProps {
  onClick: () => void;
}

export const ForwardButton: React.FC<TrackControlProps> = React.memo(
  ({onClick}) => (
    <StyledButton
      data-testid="audio-player-forward"
      onClick={onClick}
      $size={ButtonSize.Large}
    >
      <Forward10 />
    </StyledButton>
  ),
);

export const ReplayButton: React.FC<TrackControlProps> = React.memo(
  ({onClick}) => (
    <StyledButton
      data-testid="audio-player-replay"
      onClick={onClick}
      $size={ButtonSize.Large}
    >
      <Replay10 />
    </StyledButton>
  ),
);
