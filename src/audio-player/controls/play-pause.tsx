import React from 'react';
import {IconButton} from '../../icon-button';
import {ButtonSize} from '../../button/types';
import {Play, Pause, Square} from '../../icons';

export interface PlayerButtonProps {
  isPlaying: boolean;
  canPause: boolean;
  onClick: () => void;
  isLoading: boolean;
  stylePreset?: string;
}

export const PlayerButton: React.FC<PlayerButtonProps> = React.memo(
  ({isPlaying, canPause, stylePreset, ...props}) => {
    const notPlaying = canPause ? (
      <Pause focusable="false" title="Pause" />
    ) : (
      <Square focusable="false" title="Stop" />
    );
    return (
      <IconButton
        data-testid="audio-player-play-button"
        aria-pressed={isPlaying ? 'true' : 'false'}
        size={ButtonSize.Large}
        overrides={{stylePreset}}
        {...props}
      >
        {isPlaying ? notPlaying : <Play focusable="false" title="Play" />}
      </IconButton>
    );
  },
);
