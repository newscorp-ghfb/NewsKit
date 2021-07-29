import {Block, Divider, getSpacingCssFromTheme, styled} from 'newskit';
import React from 'react';

const StyledBlock = styled(Block)`
  ${getSpacingCssFromTheme('marginTop', {xs: 'space090', md: 'space100'})};
  ${getSpacingCssFromTheme('marginBottom', {xs: 'space070', md: 'space100'})};
`;

export const Separator = () => (
  <StyledBlock>
    <Divider />
  </StyledBlock>
);
