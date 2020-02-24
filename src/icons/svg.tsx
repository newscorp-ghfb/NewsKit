import {styled, getColorFromTheme, getSizingFromTheme} from '../utils/style';
import {InternalSvgProps} from './types';

export const Svg = styled.svg<InternalSvgProps>`
  display: inline-block;
  fill: ${getColorFromTheme('inkBase', '$color')};
  color: ${getColorFromTheme('inkBase', '$color')};
  width: ${getSizingFromTheme(undefined, '$size')};
  height: ${getSizingFromTheme(undefined, '$size')};
  float: ${({$float}) => $float};
  margin: ${getSizingFromTheme(undefined, '$margin')};
`;
