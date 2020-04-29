import {SizingKeys, IconSizeKeys} from '../themes';
import {PaddingPresetKeys} from '../themes/mappers/spacing';

export interface BaseFlagProps {
  typePreset?: string;
  stylePreset?: string;
  isDisabled?: boolean;
  minHeight?: SizingKeys;
  padding?: PaddingPresetKeys;
  iconSize?: IconSizeKeys;
}
