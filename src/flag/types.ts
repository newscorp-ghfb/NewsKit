import {BaseFlagProps} from '../base-flag/types';
import {SizingKeys} from '../themes';

export enum FlagSize {
  Small = 'small',
  Large = 'large',
}

export interface FlagProps extends BaseFlagProps {
  $size?: FlagSize;
  $spacing?: SizingKeys;
}
