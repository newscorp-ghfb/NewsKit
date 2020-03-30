import React from 'react';
import {SkipNext, SkipPrevious} from '../../icons';
import {ButtonSize, Button} from '../../button';

export interface SkipButtonProps {
  onClick: () => void;
  disabled?: boolean;
  $stylePreset?: string;
}

const SkipNextIcon = () => <SkipNext $size="iconSize020" $color="buttonFill" />;
const SkipPreviousIcon = () => (
  <SkipPrevious $size="iconSize020" $color="buttonFill" />
);

export const SkipNextButton: React.FC<SkipButtonProps> = React.memo(props => (
  <Button
    data-testid="audio-player-skip-next"
    $size={ButtonSize.Medium}
    {...props}
  >
    <SkipNext focusable="false" title="next" />
  </IconButton>
));

export const SkipPreviousButton: React.FC<SkipButtonProps> = React.memo(
  props => (
    <Button
      data-testid="audio-player-skip-previous"
      $size={ButtonSize.Medium}
      {...props}
    >
      <SkipPrevious focusable="false" title="previous" />
    </IconButton>
  ),
);
