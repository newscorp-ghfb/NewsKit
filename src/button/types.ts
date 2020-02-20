import {ColorKeys} from '../themes';
import {SvgProps} from '../icons';
import {SizingKeys} from '../themes/newskit-light/spacing';

export type GenericIcon = React.ComponentType<
  Pick<SvgProps, '$size' | '$color'>
>;
export interface ButtonProps {
  $size?: ButtonSize;
  icon?: GenericIcon;
  $iconColor?: ColorKeys;
  $stylePreset?: string;
  equalSides?: boolean;
}

export interface ButtonSizing {
  paddingX: SizingKeys;
  paddingY: SizingKeys;
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
