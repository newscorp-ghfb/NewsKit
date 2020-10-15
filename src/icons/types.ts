import {FloatProperty} from 'csstype';

export interface LegacyStyledSvgProps {
  $color?: string;
  float?: FloatProperty;
  margin?: string;
  size?: string;
  viewBox?: string;
  title?: string;
}

export interface LegacySvgProps extends Omit<LegacyStyledSvgProps, '$color'> {
  color?: string;
  focusable?: string;
}

export type LegacyColoredSvgProps = Omit<LegacySvgProps, 'color'>;

export interface SvgProps extends React.SVGAttributes<SVGElement> {
  title?: string;
  overrides?: {
    stylePreset?: string;
    size?: string;
  };
}
