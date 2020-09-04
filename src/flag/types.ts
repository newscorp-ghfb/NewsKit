import {SizingKeys, IconSizeKeys, PaddingPresetKeys} from '../theme';

export enum FlagSize {
  Small = 'small',
  Large = 'large',
}

export interface BaseFlagProps {
  disabled?: boolean;
  isLoading?: boolean;
  overrides?: {
    typographyPreset?: string;
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
