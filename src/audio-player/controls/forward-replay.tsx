import React from 'react';
import {Forward10, Replay10} from '../../icons';
import {ButtonSize, Button} from '../../button';

export interface TrackControlProps {
  onClick: () => void;
  $stylePreset?: string;
}

const ForwardIcon = () => <Forward10 $size="iconSize020" $color="buttonFill" />;
const ReplayIcon = () => <Replay10 $size="iconSize020" $color="buttonFill" />;

export const ForwardButton: React.FC<TrackControlProps> = React.memo(props => (
  <Button
    data-testid="audio-player-forward"
    icon={ForwardIcon}
    $size={ButtonSize.Large}
    {...props}
  />
));

export const ReplayButton: React.FC<TrackControlProps> = React.memo(props => (
  <Button
    data-testid="audio-player-replay"
    icon={ReplayIcon}
    $size={ButtonSize.Large}
    {...props}
  />
));
