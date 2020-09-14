import React from 'react';
import {SkipNext, SkipPrevious} from '../../icons';
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
    size={ButtonSize.Medium}
    {...props}
  >
    <SkipNext focusable="false" title="next" />
  </IconButton>
));

export const SkipPreviousButton: React.FC<SkipButtonProps> = React.memo(
  props => (
    <IconButton
      data-testid="audio-player-skip-previous"
      size={ButtonSize.Medium}
      {...props}
    >
      <SkipPrevious focusable="false" title="previous" />
    </IconButton>
  ),
);
