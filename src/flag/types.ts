import {FlagSize} from './utils';
import {BaseFlagProps} from '../base-flag/types';
import {SizingKeys} from '../themes';

export interface FlagProps extends BaseFlagProps {
  $size?: FlagSize;
  $spacing?: SizingKeys;
}
