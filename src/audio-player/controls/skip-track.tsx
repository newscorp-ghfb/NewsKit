import React from 'react';
import {StyledButton} from '../styled';
import {SkipNext, SkipPrevious} from '../../icons';
import {ButtonSize} from '../../button';

export interface SkipButtonProps {
  onClick: () => void;
  disabled?: boolean;
}

export const SkipNextButton: React.FC<SkipButtonProps> = React.memo(
  ({onClick, disabled = false}) => (
    <StyledButton
      data-testid="audio-player-skip-next"
      onClick={onClick}
      disabled={disabled}
      $size={ButtonSize.Large}
    >
      <SkipNext />
    </StyledButton>
  ),
);

export const SkipPreviousButton: React.FC<SkipButtonProps> = React.memo(
  ({onClick, disabled = false}) => (
    <StyledButton
      data-testid="audio-player-skip-previous"
      onClick={onClick}
      disabled={disabled}
      $size={ButtonSize.Large}
    >
      <SkipPrevious />
    </StyledButton>
  ),
);
