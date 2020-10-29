import {MQ} from '../utils/style';

export interface HeadlineOverrides {
  typographyPreset?: MQ<string>;
  kicker?: {
    stylePreset?: MQ<string>;
    spaceInline?: MQ<string>;
  };
  heading?: {
    stylePreset?: MQ<string>;
  };
}

export interface HeadlineProps {
  kickerText?: string;
  headingAs?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span';
  kickerAs?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span';
  overrides?: HeadlineOverrides;
}

export interface HeadlinePropsWithRenderAs extends HeadlineProps {
  as?: React.ElementType;
}
