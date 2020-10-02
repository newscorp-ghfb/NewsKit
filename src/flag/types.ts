import {
  SizingKeys,
  IconSizeKeys,
  PaddingPresetKeys,
  SpacePresetKeys,
} from '../theme';
import {MQ} from '../utils/style';

export enum FlagSize {
  Small = 'small',
  Large = 'large',
}

export interface BaseFlagProps {
  disabled?: boolean;
  isLoading?: boolean;
  overrides?: {
    typographyPreset?: MQ<string>;
    stylePreset?: MQ<string>;
    spaceInset?: MQ<PaddingPresetKeys>;

    width?: SizingKeys | string;
    height?: SizingKeys | string;
    minWidth?: SizingKeys | string;
    minHeight?: SizingKeys | string;

    iconSize?: IconSizeKeys;
    spaceInline?: MQ<SpacePresetKeys>;
  };
}

export interface FlagProps extends BaseFlagProps {
  size?: FlagSize;
}
