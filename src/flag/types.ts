import {BaseFlagProps} from '../base-flag/types';
import {PaddingPresetKeys} from '../themes/mappers/spacing';

export enum FlagSize {
  Small = 'small',
  Large = 'large',
}

export interface FlagProps extends BaseFlagProps {
  $size?: FlagSize;
  $spacing?: PaddingPresetKeys;
}
