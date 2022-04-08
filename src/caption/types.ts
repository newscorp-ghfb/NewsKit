import {LogicalProps} from '../utils/logical-properties';
import {MQ} from '../utils/style';

export interface CaptionOverrides extends LogicalProps {
  typographyPreset?: MQ<string>;
  stylePreset?: MQ<string>;
  spaceStack?: MQ<string>; // deppricated
  spaceInset?: MQ<string>; // deppricated
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
