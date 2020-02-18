import {styled, getColorFromTheme, getSizingFromTheme} from '../utils/style';
import {SvgProps} from './types';

export const Svg = styled.svg<SvgProps>`
  display: inline-block;
  fill: ${getColorFromTheme('inkBase', '$color')};
  color: ${getColorFromTheme('inkBase', '$color')};
  width: ${({$size}) =>
    $size ? getSizingFromTheme(undefined, '$size') : '100%'};
  height: ${({$size}) =>
    $size ? getSizingFromTheme(undefined, '$size') : 'auto'};
  float: ${({$float}) => $float};
  margin: ${getSizingFromTheme(undefined, '$margin')};
`;
