import {MQ} from '../utils/style';

export interface BylineData {
  author: string;
  href?: string;
  title?: string;
  location?: string;
  ariaLabel?: string;
}

export interface BylineProps {
  bylineData: BylineData[];
  overrides?: {
    stylePreset?: MQ<string>;
    typographyPreset?: MQ<string>;
    spaceStack?: MQ<string>;
    link?: {
      stylePreset?: MQ<string>;
      typographyPreset?: MQ<string>;
    };
    divider?: {
      stylePreset?: MQ<string>;
      spaceInline?: MQ<string>;
    };
  };
}
