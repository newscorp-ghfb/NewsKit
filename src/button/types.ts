import {ColorKeys} from '../themes';
import {SvgProps} from '../icons';

export interface ButtonProps {
  $size?: ButtonSize;
  icon?: React.ComponentType<Pick<SvgProps, '$size' | '$color'>>;
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
