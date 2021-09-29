import { Divider, Block, IconFilledFacebook, getSizingCssFromTheme, styled } from 'newskit';

export const InlineBlock = styled(Block)`
  display: inline-block;
`;

export const InlineDividerContainer = styled(Block)`
  display: inline-block;
  ${getSizingCssFromTheme('height', 'sizing090')};
`;

export const Example = () => (
  <Block>
    <InlineBlock spaceInline="space020">
      <IconFilledFacebook overrides={{ size: 'sizing090' }} />
    </InlineBlock>
    <InlineDividerContainer spaceInline="space020">
      <Divider vertical />
    </InlineDividerContainer>
    <InlineBlock spaceInline="space020">
      <IconFilledFacebook overrides={{ size: 'sizing090' }} />
    </InlineBlock>
  </Block>)
