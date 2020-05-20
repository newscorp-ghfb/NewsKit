import React from 'react';
import {styled, getTypePreset} from '../utils/style';
import {getStylePreset} from '../utils/style-preset';
import {isInlineElement} from '../utils/inline-tags';
import {StandfirstProps} from './types';

const StyledText = styled.h2<StandfirstProps>`
  ${getStylePreset('standfirst.styledText', 'styledText', {
    filterStates: ['base'],
    filterStyles: ['color'],
  })};
  ${getTypePreset('standfirst.styledText', 'styledText', {
    withCrop: true,
  })}
  padding: 1px 0;
  ${({renderStyledTextAs}) =>
    renderStyledTextAs &&
    (isInlineElement(renderStyledTextAs) ? 'display: inline-block' : '')}
`;

export const Standfirst: React.FC<StandfirstProps> = ({
  children,
  renderStyledTextAs,
  overrides = {},
}) => (
  <StyledText renderStyledTextAs={renderStyledTextAs} overrides={overrides}>
    {children}
  </StyledText>
);
