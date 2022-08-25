import React from 'react';
import {styled, getStylePreset} from '../utils/style';

import {isInlineElement} from '../utils/inline-tags';
import {StandfirstProps} from './types';
import defaults from './defaults';
import {withOwnTheme} from '../utils/with-own-theme';
import {getLogicalPropsAndTypographyPreset} from '../utils/logical-properties';

const StyledText = styled.h2<StandfirstProps>`
  ${getStylePreset('standfirst.styledText', 'styledText', {
    filterStates: ['base'],
    filterStyles: ['color'],
  })};
  ${getLogicalPropsAndTypographyPreset('standfirst.styledText', 'styledText')}
  ${({as}) => as && (isInlineElement(as) ? 'display: inline-block' : '')}
`;

const ThemelessStandfirst = React.forwardRef<
  HTMLHeadingElement,
  StandfirstProps
>(({children, as, overrides = {}, ...rest}, ref) => (
  <StyledText ref={ref} as={as} overrides={overrides} {...rest}>
    {children}
  </StyledText>
));

export const Standfirst = withOwnTheme(ThemelessStandfirst)({
  defaults,
});
