import React from 'react';
import {PlayerButton as StyledButton} from '../styled';
import {Play, Pause} from '../../icons';
import {ButtonSize} from '../../button';

export interface PlayerButtonProps {
  isPlaying: boolean;
  onClick: () => void;
}

const PlayIcon = () => <Play $size="iconSize030" $color="buttonFill" />;
const PauseIcon = () => <Pause $size="iconSize030" $color="buttonFill" />;

export const PlayerButton: React.FC<PlayerButtonProps> = React.memo(
  ({isPlaying, onClick}) => (
    <StyledButton
      data-testid="audio-player-play-button"
      aria-pressed={isPlaying}
      onClick={onClick}
      icon={isPlaying ? PauseIcon : PlayIcon}
      $size={ButtonSize.Large}
    />
  ),
);
