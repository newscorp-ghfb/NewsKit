import {PaddingPresetKeys} from '../themes/mappers/spacing';
import {SizingKeys, IconSizeKeys} from '../themes';

export enum FlagSize {
  Small = 'small',
  Large = 'large',
}

export interface BaseFlagProps {
  disabled?: boolean;
  isLoading?: boolean;

  overrides?: {
    typePreset?: string;
    stylePreset?: string;
    paddingPreset?: PaddingPresetKeys;

    width?: SizingKeys | string;
    height?: SizingKeys | string;
    minWidth?: SizingKeys | string;
    minHeight?: SizingKeys | string;

    iconSize?: IconSizeKeys;
    space?: SizingKeys;
  };
}

export interface FlagProps extends BaseFlagProps {
  size?: FlagSize;
}
