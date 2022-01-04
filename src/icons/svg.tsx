import {FloatProperty} from 'csstype';
import {SizingKeys, ColorKeys} from '../themes';
import {styled, getColorFromTheme, getSizingFromTheme} from '../utils/style';

export interface SvgProps {
  viewBox: string;
  $size: SizingKeys;
  $color?: ColorKeys;
  $float?: FloatProperty;
  $margin?: SizingKeys;
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
