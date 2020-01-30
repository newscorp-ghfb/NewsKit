import React from 'react';
import {PlayerButton as StyledButton} from '../styled';
import {Forward10, Replay10} from '../../icons';
import {ButtonSize} from '../../button';

export interface TrackControls {
  onClick: () => void;
}

export const ForwardButton: React.FC<TrackControls> = ({onClick}) => (
  <StyledButton
    data-testid="audio-player-forward"
    onClick={onClick}
    icon={() => <Forward10 $size="iconSize030" $color="buttonFill" />}
    $size={ButtonSize.Large}
  />
);

export const ReplayButton: React.FC<TrackControls> = ({onClick}) => (
  <StyledButton
    data-testid="audio-player-replay"
    onClick={onClick}
    icon={() => <Replay10 $size="iconSize030" $color="buttonFill" />}
    $size={ButtonSize.Large}
  />
);
