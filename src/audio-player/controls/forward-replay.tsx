import React from 'react';
import {Forward10, Replay10} from '../../icons';
import {ButtonSize, Button} from '../../button';

export interface TrackControlProps {
  onClick: () => void;
  $stylePreset?: string;
}

export const ForwardButton: React.FC<TrackControlProps> = React.memo(props => (
  <IconButton
    data-testid="audio-player-forward"
    $size={ButtonSize.Medium}
    {...props}
  >
    <Forward10 />
  </IconButton>
));

export const BackwardButton: React.FC<TrackControlProps> = React.memo(props => (
  <IconButton
    data-testid="audio-player-backward"
    $size={ButtonSize.Medium}
    {...props}
  />
));
