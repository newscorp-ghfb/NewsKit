import {TagSize} from '../tag/utils';
import {FlagSize} from '../flag/utils';

export interface BaseFlagProps {
  disabled?: boolean;
  $size?: FlagSize | TagSize;
  $stylePreset?: string;
}
