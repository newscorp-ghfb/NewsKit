import {LogicalProps} from '../utils/logical-properties';
import {MQ} from '../utils/style';

export interface CaptionProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  creditText?: string;
  overrides?: {
    typographyPreset?: MQ<string>;
    stylePreset?: MQ<string>;
    spaceStack?: MQ<string>; // LOGICAL_PROPS_TO_DO: Used as the gap between items. Should be renamed.
    credit?: {
      typographyPreset?: MQ<string>;
      stylePreset?: MQ<string>;
    };
  } & LogicalProps;
}
