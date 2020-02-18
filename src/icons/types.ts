import {FloatProperty} from 'csstype';
import {IconSizeKeys, ColorKeys} from '../themes';

export interface SvgProps extends SvgBase {
  viewBox: string;
  $color?: ColorKeys;
  $float?: FloatProperty;
  $margin?: IconSizeKeys;
}
export interface SvgLabels {
  title?: string;
  ariaLabel?: string;
}
export interface SvgBase {
  $size?: IconSizeKeys;
}
