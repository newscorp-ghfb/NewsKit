import React from 'react';
import {IconFilledSkipNext, IconFilledSkipPrevious} from '../../icons';
import {ButtonSize, ButtonProps} from '../../button';
import {IconButton} from '../../icon-button';

export interface SkipButtonProps {
  onClick: () => void;
  disabled?: boolean;
  overrides?: ButtonProps['overrides'];
}

export const SkipNextButton: React.FC<SkipButtonProps> = React.memo(props => (
  <IconButton
    data-testid="audio-player-skip-next"
    aria-label="Skip next"
    size={ButtonSize.Medium}
    {...props}
  >
    <IconFilledSkipNext />
  </IconButton>
));

export const SkipPreviousButton: React.FC<SkipButtonProps> = React.memo(
  props => (
    <IconButton
      data-testid="audio-player-skip-previous"
      aria-label="Skip previous"
      size={ButtonSize.Medium}
      {...props}
    >
      <IconFilledSkipPrevious />
    </IconButton>
  ),
);
