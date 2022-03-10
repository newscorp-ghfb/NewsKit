import {MQ} from '../../../utils';

export interface StyledLabelProps {
  format?: ({
    currentTime,
    length,
  }: {
    currentTime: number;
    length: number;
  }) => string;
  overrides?: {
    typographyPreset?: MQ<string>;
    stylePreset?: MQ<string>;
  };
}
