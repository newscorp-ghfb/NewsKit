import {Block, getSizingCssFromTheme, styled} from 'newskit';

export const StyledBlockForDivider = styled(Block)`
  ${getSizingCssFromTheme('width', 'sizing090')};
  line-height: 0;
`;

export const InlineBlock = styled(Block)`
  display: inline-block;
`;

export const InlineDividerContainer = styled(Block)`
  display: inline-block;
  ${getSizingCssFromTheme('height', 'sizing090')};
`;
