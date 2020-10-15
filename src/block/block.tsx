import React from 'react';
import {
  styled,
  MQ,
  getSpacingInset,
  getSpacingInlineHorizontal,
  getSpacingStackHorizontal,
  getStylePreset,
} from '../utils/style';

export interface BlockProps {
  as?: keyof JSX.IntrinsicElements;
  overrides?: {
    stylePreset?: MQ<string>;
    spaceInset?: MQ<string>;
    spaceInline?: MQ<string>;
    spaceStack?: MQ<string>;
  };
}

const StyledDiv = styled.div<BlockProps>`
  ${({overrides}) => overrides && overrides.stylePreset && getStylePreset('')}
  ${({overrides}) => overrides && overrides.spaceInset && getSpacingInset('')}
  ${({overrides}) =>
    overrides && overrides.spaceInline && getSpacingInlineHorizontal('')}
  ${({overrides}) =>
    overrides && overrides.spaceStack && getSpacingStackHorizontal('')}
`;

export const Block: React.FC<BlockProps> = ({as, overrides = {}, ...props}) => (
  <StyledDiv overrides={overrides} {...props} as={as} />
);
