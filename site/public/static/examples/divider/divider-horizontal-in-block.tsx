import {Divider, Block, IconFilledFacebook, getSizingCssFromTheme, styled} from 'newskit';

const StyledBlock = styled(Block)`
  ${getSizingCssFromTheme('width', 'sizing090')};
  line-height:0;
`;

export const Example = () => (
<StyledBlock>
  <Block spaceStack="space020">
    <IconFilledFacebook />
  </Block>
  <Block spaceStack="space020">
    <Divider />
  </Block>
  <Block spaceStack="space020">
    <IconFilledFacebook />
  </Block>
</StyledBlock>);
