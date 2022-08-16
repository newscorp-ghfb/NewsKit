import {MQ} from '../utils/style';
import {LogicalProps} from '../utils/logical-properties';

export interface OrderedListProps {
  children: React.ReactNode | Array<React.ReactNode>;
  overrides?: {
    spaceInline?: MQ<string>; // LOGICAL_PROPS_TO_DO: Used as the gap between items. Should be renamed.
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

export interface OrderedListItemProps
  extends Omit<OrderedListProps, 'children'> {
  children: React.ReactNode;
}
