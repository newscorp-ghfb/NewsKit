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
export interface BylineProps extends React.HTMLAttributes<HTMLDivElement> {
  bylineData: BylineData[];
  overrides?: {
    stylePreset?: MQ<string>;
    typographyPreset?: MQ<string>;
    spaceStack?: MQ<string>; // LOGICAL_PROPS_TO_DO: Used as the gap between items. Should be renamed.
    link?: {
      stylePreset?: MQ<string>;
      typographyPreset?: MQ<string>;
    };
    divider?: {
      stylePreset?: MQ<string>;
      spaceInline?: MQ<string>; // LOGICAL_PROPS_TO_DO: Used as the gap between items. Should be renamed.
    };
  } & LogicalProps;
}
