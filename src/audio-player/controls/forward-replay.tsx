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

export const ReplayButton: React.FC<TrackControlProps> = React.memo(props => (
  <Button
    data-testid="audio-player-replay"
    $size={ButtonSize.Medium}
    {...props}
  />
));
