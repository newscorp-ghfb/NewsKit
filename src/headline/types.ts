import {ResponsiveValue} from '../utils/style';
import {LogicalProps} from '../utils/logical-properties';

export interface HeadlineOverrides extends LogicalProps {
  typographyPreset?: ResponsiveValue<string>;
  kicker?: {
    stylePreset?: ResponsiveValue<string>;
    spaceInline?: ResponsiveValue<string>;
  };
  heading?: {
    stylePreset?: ResponsiveValue<string>;
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
