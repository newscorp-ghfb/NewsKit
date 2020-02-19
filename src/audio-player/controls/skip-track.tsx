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
    {...props}
    icon={SkipNextIcon}
    $size={ButtonSize.Large}
  />
));

export const SkipPreviousButton: React.FC<SkipButtonProps> = React.memo(
  props => (
    <Button
      data-testid="audio-player-skip-previous"
      {...props}
      icon={SkipPreviousIcon}
      $size={ButtonSize.Large}
    >
      <SkipPrevious />
    </StyledButton>
  ),
);
