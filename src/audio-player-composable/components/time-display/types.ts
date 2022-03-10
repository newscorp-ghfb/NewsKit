import {MQ} from '../../../utils';

export interface StyledLabelProps {
  length?: number;
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
