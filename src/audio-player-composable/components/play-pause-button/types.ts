import {ButtonProps, ButtonSize} from '../../../button';

export interface PlayPauseButtonProps {
  size?: ButtonSize;
  onClick?: () => void;
  overrides?: ButtonProps['overrides'];
}
