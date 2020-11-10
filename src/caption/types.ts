import {MQ} from '../utils/style';

export interface CaptionOverrides {
  typographyPreset?: MQ<string>;
  stylePreset?: MQ<string>;
  spaceStack?: MQ<string>;
  spaceInset?: MQ<string>;
  credit?: {
    typographyPreset?: MQ<string>;
    stylePreset?: MQ<string>;
  };
}
export interface CaptionProps {
  captionText?: string;
  creditText?: string;
  overrides?: CaptionOverrides;
}
