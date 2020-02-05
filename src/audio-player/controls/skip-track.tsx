import React from 'react';
import {StyledButton} from '../styled';
import {SkipNext, SkipPrevious} from '../../icons';
import {ButtonSize} from '../../button';

export interface SkipButtonProps {
  onClick: () => void;
  disabled?: boolean;
}

const SkipNextIcon = () => <SkipNext $size="iconSize020" $color="buttonFill" />;
const SkipPreviousIcon = () => (
  <SkipPrevious $size="iconSize020" $color="buttonFill" />
);

export const SkipNextButton: React.FC<SkipButtonProps> = React.memo(
  ({onClick, disabled = false}) => (
    <StyledButton
      data-testid="audio-player-skip-next"
      onClick={onClick}
      disabled={disabled}
      icon={SkipNextIcon}
      $size={ButtonSize.Large}
    />
  ),
);

export const SkipPreviousButton: React.FC<SkipButtonProps> = React.memo(
  ({onClick, disabled = false}) => (
    <StyledButton
      data-testid="audio-player-skip-previous"
      onClick={onClick}
      disabled={disabled}
      icon={SkipPreviousIcon}
      $size={ButtonSize.Large}
    />
  ),
);
