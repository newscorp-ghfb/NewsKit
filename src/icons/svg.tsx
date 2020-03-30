import React from 'react';
import {styled, getColorFromTheme, getSizingFromTheme} from '../utils/style';
import {InternalSvgProps, SvgProps} from './types';
import {getBuiId} from '../utils/get-bui-id';

const SvgElement = styled.svg<InternalSvgProps>`
  fill: ${getColorFromTheme('inkBase', '$color')};
  color: ${getColorFromTheme('inkBase', '$color')};
  width: ${getSizingFromTheme(undefined, '$size')};
  height: ${getSizingFromTheme(undefined, '$size')};
  margin: ${getSizingFromTheme(undefined, '$margin')};
  ${({$float}) => ($float ? `float: ${$float}` : `display: inline-block;`)};
`;

export const Svg: React.FC<SvgProps> = ({children, title, ...props}) => {
  const id = getBuiId();
  return (
    <SvgElement viewBox="0 0 24 24" {...props} aria-labelledby={id}>
      {title && <title id={id}>{title}</title>}
      {children}
    </SvgElement>
  );
};
