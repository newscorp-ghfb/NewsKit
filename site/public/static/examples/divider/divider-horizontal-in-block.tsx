import {Divider, Block, IconFilledCircle, getSizingFromTheme, styled} from 'newskit';

const StyledBlock = styled(Block)`
  width: ${getSizingFromTheme('iconSize040')};
`;

<StyledBlock>
  <Block overrides={{marginPreset: 'spaceStack020'}}>
    <IconFilledCircle overrides={{size: 'iconSize040'}} />
  </Block>
  <Block overrides={{marginPreset: 'spaceStack020'}}>
    <Divider />
  </Block>
  <Block overrides={{marginPreset: 'spaceStack020'}}>
    <IconFilledCircle overrides={{size: 'iconSize040'}} />
  </Block>
  <Block overrides={{marginPreset: 'spaceStack020'}}>
    <Divider />
  </Block>
  <Block>
    <IconFilledCircle overrides={{size: 'iconSize040'}} />
  </Block>
</StyledBlock>;
