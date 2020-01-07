import {FloatProperty} from 'csstype';
import {IconSizeKeys, ColorKeys} from '../themes';
import {styled, getColorFromTheme, getSizingFromTheme} from '../utils/style';

export interface SvgProps {
  viewBox: string;
  $size: IconSizeKeys;
  $color?: ColorKeys;
  $float?: FloatProperty;
  $margin?: IconSizeKeys;
}

export interface SvgLabels {
  title?: string;
  ariaLabel?: string;
}

export const Svg = styled.svg<SvgProps>`
  display: inline-block;
  fill: ${getColorFromTheme('inkBase', '$color')};
  color: ${getColorFromTheme('inkBase', '$color')};
  width: ${getSizingFromTheme(undefined, '$size')};
  height: ${getSizingFromTheme(undefined, '$size')};
  float: ${({$float}) => $float};
  margin: ${getSizingFromTheme(undefined, '$margin')};
`;
