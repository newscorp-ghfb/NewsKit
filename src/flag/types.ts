import {FlagSize} from './utils';
import {BaseFlagProps} from '../baseFlag/types';
import {SizingKeys} from '../themes';

export interface FlagProps extends BaseFlagProps {
  $size?: FlagSize;
  $spacing?: SizingKeys;
}
