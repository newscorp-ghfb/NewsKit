import {ColorKeys} from '../themes';
import {SizingKeys} from '../themes/newskit-light/spacing';
import {ThemeProp} from '../utils/style';
import {PaddingPresetKeys} from '../themes/mappers/spacing';

export type StylePresetAndTheme = Pick<ButtonProps, '$stylePreset'> & ThemeProp;
export interface ButtonProps {
  $size?: ButtonSize;
  $iconColor?: ColorKeys;
  $stylePreset?: string;
}

export interface ButtonSizing {
  paddingX: PaddingPresetKeys | SizingKeys;
  paddingY: PaddingPresetKeys | SizingKeys;
  $width?: SizingKeys;
  $height?: SizingKeys;
}

export enum ButtonSize {
  Small = 'small',
  Medium = 'medium',
  Large = 'large',
}
