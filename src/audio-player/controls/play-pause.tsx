import React from 'react';
import {IconButton} from '../../button/icon-button';
import {ButtonSize} from '../../button/types';
import {Play, Pause, Square} from '../../icons';

export interface PlayerButtonProps {
  isPlaying: boolean;
  canPause: boolean;
  onClick: () => void;
  $stylePreset?: string;
}

export const PlayerButton: React.FC<PlayerButtonProps> = React.memo(
  ({isPlaying, canPause, ...props}) => {
    const notPlaying = canPause ? <Pause /> : <Square />;
    return (
      <IconButton
        data-testid="audio-player-play-button"
        aria-pressed={isPlaying}
        $size={ButtonSize.Large}
        {...props}
      >
        {isPlaying ? notPlaying : <Play />}
      </IconButton>
    );
  },
);
