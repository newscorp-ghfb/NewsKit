import React from 'react';
import {
  styled,
  MQ,
  getSpacingInset,
  getSpacingInlineHorizontal,
  getSpacingStackHorizontal,
  getStylePreset,
} from '../utils/style';
import {SpacePresetKeys, PaddingPresetKeys, StylePresetKeys} from '../theme';

export interface BlockProps {
  as?: keyof JSX.IntrinsicElements;
  overrides?: {
    stylePreset?: MQ<StylePresetKeys>;
    spaceInset?: MQ<PaddingPresetKeys>;
    spaceInline?: MQ<SpacePresetKeys>;
    spaceStack?: MQ<SpacePresetKeys>;
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
