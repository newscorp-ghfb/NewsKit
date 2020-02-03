import {IconComponent} from '../icons';

export interface ButtonProps {
  $size?: ButtonSize;
  icon?: IconComponent;
  $stylePreset?: string;
}

export enum ButtonSize {
  Small = 'small',
  Medium = 'medium',
  Large = 'large',
}
