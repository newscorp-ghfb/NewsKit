import {LogicalProps} from '../utils/logical-properties';
import {MQ} from '../utils/style';

// Caption component will be rebuilt in https://nidigitalsolutions.jira.com/browse/PPDSC-2091 to introduce breaking changes on the interface.
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
