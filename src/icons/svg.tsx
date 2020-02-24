import {styled, getColorFromTheme, getSizingFromTheme} from '../utils/style';
import {SvgProps} from './types';

export const Svg = styled.svg<SvgProps>`
  fill: ${getColorFromTheme('inkBase', '$color')};
  color: ${getColorFromTheme('inkBase', '$color')};
  width: ${getSizingFromTheme(undefined, '$size')};
  height: ${getSizingFromTheme(undefined, '$size')};
  margin: ${getSizingFromTheme(undefined, '$margin')};
  ${({$float}) => ($float ? `float: ${$float}` : `display: inline-block;`)};
`;
