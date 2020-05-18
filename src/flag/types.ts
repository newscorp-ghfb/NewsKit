import {PaddingPresetKeys} from '../themes/mappers/spacing';
import {SizingKeys, IconSizeKeys} from '../themes';

export enum FlagSize {
  Small = 'small',
  Large = 'large',
}

export interface BaseFlagProps {
  typePreset?: string;
  stylePreset?: string;
  padding?: PaddingPresetKeys;
  space?: SizingKeys;
  iconSize?: IconSizeKeys;

  width?: SizingKeys | string;
  height?: SizingKeys | string;
  minHeight?: SizingKeys | string;
  minWidth?: SizingKeys | string;

  disabled?: boolean;
  isLoading?: boolean;
}

export interface StyledBaseFlagProps extends BaseFlagProps {
  $width?: SizingKeys | string;
  $height?: SizingKeys | string;
}

export interface FlagProps extends BaseFlagProps {
  size?: FlagSize;
}
