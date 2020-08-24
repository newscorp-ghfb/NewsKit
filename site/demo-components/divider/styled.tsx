import {Block, getSizingFromTheme, styled} from 'newskit';

export const StyledBlockForDivider = styled(Block)`
  width: ${getSizingFromTheme('iconSize040')};
`;

export const InlineBlock = styled(Block)`
  display: inline-block;
`;

export const InlineDividerContainer = styled(Block)`
  display: inline-block;
  height: ${getSizingFromTheme('iconSize040')};
`;
