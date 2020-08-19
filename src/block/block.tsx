import React from 'react';
import {
  styled,
  MQ,
  getPaddingPreset,
  getSpacingInline,
  getSpacingStack,
} from '../utils/style';
import {SpacePresetKeys, PaddingPresetKeys, StylePresetKeys} from '../theme';
import {getStylePreset} from '../utils/style-preset';

export interface BlockProps {
  as?: keyof JSX.IntrinsicElements;
  overrides?: {
    stylePreset?: MQ<StylePresetKeys>;
    paddingPreset?: MQ<PaddingPresetKeys>;
    spaceInline?: MQ<SpacePresetKeys>;
    spaceStack?: MQ<SpacePresetKeys>;
  };
}

const StyledDiv = styled.div<BlockProps>`
  ${({overrides}) => overrides && overrides.stylePreset && getStylePreset('')}
  ${({overrides}) =>
    overrides && overrides.paddingPreset && getPaddingPreset('')}
  ${({overrides}) => overrides && overrides.spaceInline && getSpacingInline('')}
  ${({overrides}) => overrides && overrides.spaceStack && getSpacingStack('')}
`;

export const Block: React.FC<BlockProps> = ({as, overrides = {}, ...props}) => (
  <StyledDiv overrides={overrides} {...props} as={as} />
);
