import {Divider, Block, Circle, getSizingFromTheme, styled} from "newskit";

const StyledBlock = styled(Block)`
  width: ${getSizingFromTheme('iconSize040')};
`;

<StyledBlock>
  <Block overrides={{marginPreset: 'spaceStack020'}}>
    <Circle size="iconSize040" />
  </Block>
  <Block overrides={{marginPreset: 'spaceStack020'}}>
    <Divider />
  </Block>
  <Block overrides={{marginPreset: 'spaceStack020'}}>
    <Circle size="iconSize040" />
  </Block>
  <Block overrides={{marginPreset: 'spaceStack020'}}>
    <Divider />
  </Block>
  <Block>
    <Circle size="iconSize040" />
  </Block>
</StyledBlock>