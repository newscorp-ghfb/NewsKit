import React from 'react';
import {SkipNext, SkipPrevious} from '../../icons';
import {ButtonSize, Button} from '../../button';

export interface SkipButtonProps {
  onClick: () => void;
  disabled?: boolean;
  stylePreset?: string;
}

export const SkipNextButton: React.FC<SkipButtonProps> = React.memo(
  ({stylePreset, ...props}) => (
    <IconButton
      data-testid="audio-player-skip-next"
      size={ButtonSize.Medium}
      overrides={{stylePreset}}
      {...props}
    >
      <SkipNext focusable="false" title="next" />
    </IconButton>
  ),
);

export const SkipPreviousButton: React.FC<SkipButtonProps> = React.memo(
  ({stylePreset, ...props}) => (
    <IconButton
      data-testid="audio-player-skip-previous"
      size={ButtonSize.Medium}
      overrides={{stylePreset}}
      {...props}
    >
      <SkipPrevious focusable="false" title="previous" />
    </IconButton>
  ),
);
