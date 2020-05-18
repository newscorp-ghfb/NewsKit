import {FlagProps} from '../flag';

export enum ButtonSize {
  Small = 'small',
  Medium = 'medium',
  Large = 'large',
}

export interface ButtonProps
  extends Omit<FlagProps, 'size'>,
    React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: ButtonSize;
  isLoading?: boolean;
}
