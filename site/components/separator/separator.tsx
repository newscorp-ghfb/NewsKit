import {Block, Divider, getSpacingFromTheme, styled} from 'newskit';
import React from 'react';

const StyledBlock = styled(Block)`
  margin-top: ${getSpacingFromTheme('space110')};
  margin-bottom: ${getSpacingFromTheme('space110')};
`;

export const Separator = () => (
  <StyledBlock>
    <Divider />
  </StyledBlock>
);
