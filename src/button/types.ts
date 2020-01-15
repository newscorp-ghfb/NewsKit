import {IconComponent} from '../icons';

export interface ButtonProps {
  $shape?: ButtonShape;
  $size?: ButtonSize;
  icon?: IconComponent;
}

export enum ButtonShape {
  Square = 'square',
  Rounded = 'rounded',
}

export enum ButtonSize {
  Small = 'small',
  Medium = 'medium',
  Large = 'large',
}
