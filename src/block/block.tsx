import React from 'react';
import {styled, getMarginPreset, MQ, getPaddingPreset} from '../utils/style';
import {as as renderAs} from '../utils/component';
import {MarginPresetKeys, PaddingPresetKeys} from '../themes/mappers/spacing';
import {StylePresetKeys} from '../themes/mappers/style-preset';
import {getStylePreset} from '../utils/style-preset';

export interface BlockProps {
  as?: keyof JSX.IntrinsicElements;
  overrides?: {
    stylePreset?: MQ<StylePresetKeys>;
    paddingPreset?: MQ<PaddingPresetKeys>;
    marginPreset?: MQ<MarginPresetKeys>;
  };
}

const StyledDiv = styled.div<BlockProps>`
  ${getMarginPreset('')}
  ${getStylePreset('')}
  ${getPaddingPreset('')}
`;

export const Block: React.FC<BlockProps> = ({as, overrides = {}, ...props}) => {
  const asProp = as ? renderAs(as) : {};
  return <StyledDiv overrides={overrides} {...props} {...asProp} />;
};
