import React from 'react';
import {IconButton} from '../../button/iconButton';
import {ButtonSize} from '../../button/types';
import {Play, Pause} from '../../icons';

export interface PlayerButtonProps {
  isPlaying: boolean;
  onClick: () => void;
}

export const PlayerButton: React.FC<PlayerButtonProps> = React.memo(
  ({isPlaying, onClick}) => (
    <IconButton
      data-testid="audio-player-play-button"
      aria-pressed={isPlaying}
      onClick={onClick}
      $size={ButtonSize.Large}
    >
      {isPlaying ? <Pause /> : <Play />}
    </IconButton>
  ),
);
