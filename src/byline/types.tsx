import {LogicalProps} from '../utils/logical-properties';
import {MQ} from '../utils/style';

export interface BylineData {
  author: string;
  href?: string;
  title?: string;
  location?: string;
  ariaLabel?: string;
  key?: string | number;
}

export interface BylineOverrides extends LogicalProps {
  stylePreset?: MQ<string>;
  typographyPreset?: MQ<string>;
  spaceStack?: MQ<string>; // Note: LogicalProps can not replace spaceStack! spaceStack = Stack's gap
  link?: {
    stylePreset?: MQ<string>;
    typographyPreset?: MQ<string>;
  };
  divider?: {
    stylePreset?: MQ<string>;
    spaceInline?: MQ<string>; // Note: LogicalProps can not simply replace spaceInline as it's used if whitespace
  };
}

export interface BylineProps {
  bylineData: BylineData[];
  overrides?: BylineOverrides;
}
