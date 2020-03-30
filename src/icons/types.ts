import {FloatProperty} from 'csstype';
import {IconSizeKeys, ColorKeys} from '../themes';

export interface InternalSvgProps {
  $color?: ColorKeys;
  $float?: FloatProperty;
  $margin?: IconSizeKeys;
  $size?: IconSizeKeys;
  viewBox?: string;
  title?: string;
}

export interface SvgProps extends InternalSvgProps {
  focusable?: string;
}

export type ColoredSvgProps = Omit<SvgProps, '$color'>;
