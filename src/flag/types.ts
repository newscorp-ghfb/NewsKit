import {FlagSize} from './utils';
import {BaseFlagProps} from '../baseFlag/types';

export interface FlagProps extends BaseFlagProps {
  $size?: FlagSize;
}
