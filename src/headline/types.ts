import {MQ, CQ} from '../utils/style';
import {LogicalProps} from '../utils/logical-properties';

export interface HeadlineOverrides extends LogicalProps {
  typographyPreset?: MQ<string> & CQ; // < --- I don't like doing this, we could probably just allow it on MQ 🤔
  kicker?: {
    stylePreset?: MQ<string>;
    spaceInline?: MQ<string>;
  };
  heading?: {
    stylePreset?: MQ<string>;
  };
}

export interface HeadlineProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  kickerText?: string;
  headingAs?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span';
  kickerAs?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span';
  overrides?: HeadlineOverrides;
}

export interface HeadlinePropsWithRenderAs extends HeadlineProps {
  as?: React.ElementType;
}
