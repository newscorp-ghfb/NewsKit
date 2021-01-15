import {Block, Divider, getSpacingFromTheme, styled} from 'newskit';
import React from 'react';

const StyledBlock = styled(Block)`
  margin-top: ${getSpacingFromTheme('space100')};
  margin-bottom: ${getSpacingFromTheme('space100')};
`;

export const Separator = () => (
  <StyledBlock>
    <Divider />
  </StyledBlock>
);
