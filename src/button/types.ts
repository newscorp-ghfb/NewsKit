import {ColorKeys} from '../themes';

export interface ButtonProps {
  $size?: ButtonSize;
  icon?: React.ComponentType;
  $iconColor?: ColorKeys;
  $stylePreset?: string;
  iconPlacement?: IconPlacement;
}

export enum ButtonSize {
  Small = 'small',
  Medium = 'medium',
  Large = 'large',
}

export enum IconPlacement {
  Start = 'start',
  End = 'end',
}
