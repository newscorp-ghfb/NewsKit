import {ButtonProps, ButtonSize} from '../../../button';

export interface SkipButtonProps {
  size?: ButtonSize;
  onClick?: () => void;
  overrides?: ButtonProps['overrides'];
}
