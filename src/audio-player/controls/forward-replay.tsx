import React from 'react';
import {StyledButton} from '../styled';
import {Forward10, Replay10} from '../../icons';
import {ButtonSize} from '../../button';

export interface TrackControlProps {
  onClick: () => void;
}

const ForwardIcon = () => <Forward10 $size="iconSize020" $color="buttonFill" />;
const ReplayIcon = () => <Replay10 $size="iconSize020" $color="buttonFill" />;

export const ForwardButton: React.FC<TrackControlProps> = React.memo(
  ({onClick}) => (
    <StyledButton
      data-testid="audio-player-forward"
      onClick={onClick}
      icon={ForwardIcon}
      $size={ButtonSize.Large}
    />
  ),
);

export const ReplayButton: React.FC<TrackControlProps> = React.memo(
  ({onClick}) => (
    <StyledButton
      data-testid="audio-player-replay"
      onClick={onClick}
      icon={ReplayIcon}
      $size={ButtonSize.Large}
    />
  ),
);
