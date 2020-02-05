import React from 'react';
import {Button, ButtonSize} from '../../button';
import {Play, Pause} from '../../icons';

export interface PlayerButtonProps {
  isPlaying: boolean;
  onClick: () => void;
}

const PlayIcon = () => <Play $size="iconSize030" $color="buttonFill" />;
const PauseIcon = () => <Pause $size="iconSize030" $color="buttonFill" />;

export const PlayerButton: React.FC<PlayerButtonProps> = React.memo(
  ({isPlaying, onClick}) => (
    <Button
      data-testid="audio-player-play-button"
      aria-pressed={isPlaying}
      onClick={onClick}
      icon={isPlaying ? PauseIcon : PlayIcon}
      $size={ButtonSize.Large}
    />
  ),
);
