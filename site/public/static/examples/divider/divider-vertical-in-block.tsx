import {Divider, Block, Circle, getSizingFromTheme, styled} from "newskit";

const InlineIconContainer = styled(Block)`
  display: inline-block;
`;

const InlineDividerContainer = styled(Block)`
  display: inline-block;
  height: ${getSizingFromTheme('iconSize040')};
`;

<Block>
  <InlineIconContainer overrides={{marginPreset: 'spaceInline020'}}>
    <Circle size="iconSize040" />
  </InlineIconContainer>
  <InlineDividerContainer
    overrides={{marginPreset: 'spaceInline020'}}
  >
    <Divider vertical />
  </InlineDividerContainer>
  <InlineIconContainer overrides={{marginPreset: 'spaceInline020'}}>
    <Circle size="iconSize040" />
  </InlineIconContainer>
  <InlineDividerContainer
    overrides={{marginPreset: 'spaceInline020'}}
  >
    <Divider vertical />
  </InlineDividerContainer>
  <InlineIconContainer>
    <Circle size="iconSize040" />
  </InlineIconContainer>
</Block>