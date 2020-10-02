import {FloatProperty} from 'csstype';
import {IconSizeKeys, ColorKeys, StylePresetKeys} from '../theme';

export interface LegacyStyledSvgProps {
  $color?: ColorKeys | string;
  float?: FloatProperty;
  margin?: IconSizeKeys;
  size?: IconSizeKeys;
  viewBox?: string;
  title?: string;
}

export interface LegacySvgProps extends Omit<LegacyStyledSvgProps, '$color'> {
  color?: ColorKeys | string;
  focusable?: string;
}

export type LegacyColoredSvgProps = Omit<LegacySvgProps, 'color'>;

export interface SvgProps extends React.SVGAttributes<SVGElement> {
  title?: string;
  overrides?: {
    stylePreset?: StylePresetKeys;
    size?: IconSizeKeys;
  };
}
