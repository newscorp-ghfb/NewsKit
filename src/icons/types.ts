import {FloatProperty} from 'csstype';
import {IconSizeKeys, ColorKeys} from '../themes';

export interface SvgProps {
  $color?: ColorKeys;
  $float?: FloatProperty;
  $margin?: IconSizeKeys;
  $size?: IconSizeKeys;
  title?: string;
  ariaLabel?: string;
}

export type InternalSvgProps = Pick<
  SvgProps,
  '$color' | '$float' | '$margin' | '$size'
> & {viewBox: string};
