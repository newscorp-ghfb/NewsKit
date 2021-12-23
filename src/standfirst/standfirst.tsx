import React from 'react';
import {styled, getTypographyPreset, getStylePreset} from '../utils/style';

import {isInlineElement} from '../utils/inline-tags';
import {StandfirstProps} from './types';

const StyledText = styled.h2<StandfirstProps>`
  ${getStylePreset('standfirst.styledText', 'styledText', {
    filterStates: ['base'],
    filterStyles: ['color'],
  })};
  ${getTypographyPreset('standfirst.styledText', 'styledText', {
    withCrop: true,
  })}
  ${({as}) => as && (isInlineElement(as) ? 'display: inline-block' : '')}
`;

export const Standfirst: React.FC<StandfirstProps> = ({
  children,
  as,
  overrides = {},
}) => (
  <StyledText as={as} overrides={overrides}>
    {children}
  </StyledText>
);
