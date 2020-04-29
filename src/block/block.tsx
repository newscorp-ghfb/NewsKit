import React from 'react';
import {styled, getMarginPresetFromTheme, MQ} from '../utils/style';
import {as as renderAs} from '../utils/component';
import {MarginPresetKeys} from '../themes/mappers/spacing';

export interface BlockProps {
  margin?: MQ<MarginPresetKeys>;
  as?: keyof JSX.IntrinsicElements;
}

const StyledDiv = styled.div<BlockProps>`
  ${getMarginPresetFromTheme(undefined, 'margin')};
`;

export const Block: React.FC<BlockProps> = ({as, ...props}) => {
  const asProp = as ? renderAs(as) : {};
  return <StyledDiv {...props} {...asProp} />;
};
