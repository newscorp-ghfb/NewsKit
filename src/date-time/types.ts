import {LogicalProps} from '../utils/logical-properties';
import {MQ} from '../utils/style';

export interface DateTimeProps {
  date: string | number;
  dateFormat?: string;
  prefix?: string;
  suffix?: string;
  overrides?: {
    stylePreset?: MQ<string>;
    typographyPreset?: MQ<string>;
    prefix?: {
      stylePreset?: MQ<string>;
      typographyPreset?: MQ<string>;
    };
    suffix?: {
      stylePreset?: MQ<string>;
      typographyPreset?: MQ<string>;
    };
  } & LogicalProps;
}
