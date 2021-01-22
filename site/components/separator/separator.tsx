import {Block, Divider, getSpacingFromTheme, styled} from 'newskit';
import React from 'react';

const StyledBlock = styled(Block)`
  ${getSpacingFromTheme(
    {xs: 'space070', md: 'space100'},
    undefined,
    'margin-top',
  )};
  ${getSpacingFromTheme(
    {xs: 'space070', md: 'space100'},
    undefined,
    'margin-bottom',
  )};
`;

export const Separator = () => (
  <StyledBlock>
    <Divider />
  </StyledBlock>
);
