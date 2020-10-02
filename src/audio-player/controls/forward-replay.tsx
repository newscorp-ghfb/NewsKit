import React from 'react';
import {Forward10, Replay10} from '../../icons';
import {ButtonSize, ButtonProps} from '../../button';
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
    size={ButtonSize.Medium}
    {...props}
  >
    <Forward10 focusable="false" title="fast forward 10 seconds" />
  </IconButton>
));

export const BackwardButton: React.FC<TrackControlProps> = React.memo(props => (
  <IconButton
    data-testid="audio-player-backward"
    size={ButtonSize.Medium}
    {...props}
  >
    <Replay10 focusable="false" title="rewind 10 seconds" />
  </IconButton>
));
