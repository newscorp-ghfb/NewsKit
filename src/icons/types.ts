import {FloatProperty} from 'csstype';
import {IconSizeKeys, ColorKeys} from '../themes';

export interface StyledSvgProps {
  $color?: ColorKeys;
  float?: FloatProperty;
  margin?: IconSizeKeys;
  size?: IconSizeKeys;
  viewBox?: string;
  title?: string;
}

export interface SvgProps extends Omit<StyledSvgProps, '$color'> {
  color?: ColorKeys;
  focusable?: string;
}

export type ColoredSvgProps = Omit<SvgProps, 'color'>;
