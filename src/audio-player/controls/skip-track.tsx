import React from 'react';
import {IconFilledSkipNext, IconFilledSkipPrevious} from '../../icons';
import {ButtonSize, ButtonOverrides} from '../../button';
import {IconVisibilityButton} from './play-pause';

export interface SkipButtonProps {
  onClick?: () => void;
  disabled?: boolean;
  hide?: boolean;
  overrides?: ButtonOverrides;
}

export const SkipNextButton: React.FC<SkipButtonProps> = React.memo(props => (
  <IconVisibilityButton
    data-testid="audio-player-skip-next"
    aria-label="Skip next"
    size={ButtonSize.Medium}
    hide
    {...props}
  >
    <IconFilledSkipNext />
  </IconVisibilityButton>
));

export const SkipPreviousButton: React.FC<SkipButtonProps> = React.memo(
  props => (
    <IconVisibilityButton
      data-testid="audio-player-skip-previous"
      aria-label="Skip previous"
      size={ButtonSize.Medium}
      hide
      {...props}
    >
      <IconFilledSkipPrevious />
    </IconVisibilityButton>
  ),
);
