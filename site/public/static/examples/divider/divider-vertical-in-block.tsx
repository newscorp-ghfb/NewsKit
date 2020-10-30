import {Divider, Block, IconFilledCircle, getSizingFromTheme, styled} from "newskit";

const InlineIconContainer = styled(Block)`
  display: inline-block;
`;

const InlineDividerContainer = styled(Block)`
  display: inline-block;
  height: ${getSizingFromTheme('iconSize040')};
`;

<Block>
  <InlineIconContainer overrides={{marginPreset: 'spaceInline020'}}>
    <IconFilledCircle overrides={{size: 'iconSize040'}} />
  </InlineIconContainer>
  <InlineDividerContainer
    overrides={{marginPreset: 'spaceInline020'}}
  >
    <Divider vertical />
  </InlineDividerContainer>
  <InlineIconContainer overrides={{marginPreset: 'spaceInline020'}}>
    <IconFilledCircle overrides={{size: 'iconSize040'}} />
  </InlineIconContainer>
  <InlineDividerContainer
    overrides={{marginPreset: 'spaceInline020'}}
  >
    <Divider vertical />
  </InlineDividerContainer>
  <InlineIconContainer>
    <IconFilledCircle overrides={{size: 'iconSize040'}} />
  </InlineIconContainer>
</Block>