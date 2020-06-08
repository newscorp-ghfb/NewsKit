import React from 'react';
import {Forward10, Replay10} from '../../icons';
import {ButtonSize, Button} from '../../button';

export interface TrackControlProps {
  onClick: () => void;
  stylePreset?: string;
}

export const ForwardButton: React.FC<TrackControlProps> = React.memo(
  ({stylePreset, ...props}) => (
    <IconButton
      data-testid="audio-player-forward"
      size={ButtonSize.Medium}
      overrides={{stylePreset}}
      {...props}
    >
      <Forward10 focusable="false" title="fast forward 10 seconds" />
    </IconButton>
  ),
);

export const BackwardButton: React.FC<TrackControlProps> = React.memo(
  ({stylePreset, ...props}) => (
    <IconButton
      data-testid="audio-player-backward"
      size={ButtonSize.Medium}
      overrides={{stylePreset}}
      {...props}
    >
      <Replay10 focusable="false" title="rewind 10 seconds" />
    </IconButton>
  ),
);
