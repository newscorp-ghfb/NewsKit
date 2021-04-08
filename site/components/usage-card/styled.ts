import {Block, getSpacingFromTheme, styled} from 'newskit';

export const RelativeBlock = styled(Block)`
  position: relative;
`;

export const AbsoluteBlock = styled(Block)`
  position: absolute;
  right: ${getSpacingFromTheme('space040')};
  top: ${getSpacingFromTheme('space040')};
  z-index: 1;
`;
