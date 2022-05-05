import {MQ} from '../utils/style';
import {LogicalProps} from '../utils/logical-properties';

export interface OrderedListProps {
  overrides?: {
    spaceInline?: MQ<string>; // Used as the gap between items. Should be renamed but not deprecated.
    content?: {
      stylePreset?: MQ<string>;
      typographyPreset?: MQ<string>;
    };
    counter?: {
      stylePreset?: MQ<string>;
      typographyPreset?: MQ<string>;
      minWidth?: MQ<string>;
    };
  } & LogicalProps;
}
