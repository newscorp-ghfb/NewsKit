import {NewsKitIcon} from '../icons';
import {LogicalProps} from '../utils/logical-properties';
import {MQ} from '../utils/style';

export interface UnorderedListProps {
  listItemMarker?: NewsKitIcon | null;
  markerAlign?: 'start' | 'center' | 'end';
  overrides?: {
    spaceStack?: MQ<string>;
    content?: {
      stylePreset?: MQ<string>;
      typographyPreset?: MQ<string>;
    };
    marker?: {
      stylePreset?: MQ<string>;
      spaceInline?: MQ<string>;
      size?: string;
    };
  } & LogicalProps;
}
