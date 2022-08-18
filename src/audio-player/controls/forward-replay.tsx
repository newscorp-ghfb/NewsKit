import React from 'react';
import {IconFilledForward10, IconFilledReplay10} from '../../icons';
import {ButtonProps} from '../../button';
import {IconButton} from '../../icon-button';
import {MQ} from '../../utils/style';

export interface TrackControlProps {
  onClick: () => void;
  stylePreset?: MQ<string>;
  overrides?: ButtonProps['overrides'];
}

export const ForwardButton: React.FC<TrackControlProps> = React.memo(props => (
  <IconButton
    data-testid="audio-player-forward"
    aria-label="Fast forward 10 seconds"
    size="medium"
    {...props}
  >
    <IconFilledForward10 />
  </IconButton>
));

export const BackwardButton: React.FC<TrackControlProps> = React.memo(props => (
  <IconButton
    data-testid="audio-player-backward"
    aria-label="Rewind 10 seconds"
    size="medium"
    {...props}
  >
    <IconFilledReplay10 />
  </IconButton>
));
