import {ColorKeys} from '../themes';

export interface ButtonProps {
  $size?: ButtonSize;
  icon?: any; // eslint-disable-line
  $iconColor?: ColorKeys;
  $stylePreset?: string;
}

export enum ButtonSize {
  Small = 'small',
  Medium = 'medium',
  Large = 'large',
}
