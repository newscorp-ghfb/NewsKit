import {ColorKeys, TypePresetKeys} from '../themes';
import {SizingKeys, IconSizeKeys} from '../themes/newskit-light/spacing';
import {ThemeProp} from '../utils/style-types';
import {PaddingPresetKeys} from '../themes/mappers/spacing';

export type StylePresetAndTheme = Pick<ButtonCommonProps, 'stylePreset'> &
  ThemeProp;
export interface ButtonCommonProps {
  size?: ButtonSize;
  iconColor?: ColorKeys;
  stylePreset?: string;
  isLoading?: boolean;
}

export interface ButtonCommonSizeOption {
  minHeight: SizingKeys;
  borderRadiusSize: SizingKeys;
  typePreset: TypePresetKeys;
  iconSize: IconSizeKeys;
}

export interface ButtonSizing extends ButtonCommonSizeOption {
  padding: PaddingPresetKeys;
  width?: SizingKeys;
  height?: SizingKeys;
}

export interface StyledButtonSizing extends ButtonCommonSizeOption {
  padding: PaddingPresetKeys;
  $width?: SizingKeys;
  $height?: SizingKeys;
}

export interface ButtonProps extends ButtonCommonProps {
  size?: RegularButtonSize;
}

export type RegularButtonSize = Exclude<ButtonSize, ButtonSize.Medium>;

export enum ButtonSize {
  Small = 'small',
  Medium = 'medium',
  Large = 'large',
}
