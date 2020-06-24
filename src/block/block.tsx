import React from 'react';
import {
  styled,
  MQ,
  getPaddingPreset,
  getSpacingInline,
  getSpacingStack,
} from '../utils/style';
import {SpacingPresetKeys, PaddingPresetKeys} from '../themes/mappers/spacing';
import {StylePresetKeys} from '../themes/mappers/style-preset';
import {getStylePreset} from '../utils/style-preset';

export interface BlockProps {
  as?: keyof JSX.IntrinsicElements;
  overrides?: {
    stylePreset?: MQ<StylePresetKeys>;
    paddingPreset?: MQ<PaddingPresetKeys>;
    spaceInline?: MQ<SpacingPresetKeys>;
    spaceStack?: MQ<SpacingPresetKeys>;
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
