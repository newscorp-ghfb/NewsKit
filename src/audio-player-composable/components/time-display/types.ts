import {MQ} from '../../../utils';

export type FormatFn = ({
  currentTime,
  duration,
}: {
  currentTime: number;
  duration: number;
}) => string;
export interface StyledLabelProps {
  format?: FormatFn;

  overrides?: {
    typographyPreset?: MQ<string>;
    stylePreset?: MQ<string>;
  };
}
