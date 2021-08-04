import {Divider, Stack, StackChild, IconFilledCircle} from "newskit";

export const Example = () => (
<Stack
  flow="horizontal-stretch"
  stackDistribution="center"
  spaceInline="space030"
>
  <IconFilledCircle overrides={{size: 'iconSize040'}} />
  <StackChild>
    <Divider vertical />
  </StackChild>
  <IconFilledCircle overrides={{size: 'iconSize040'}} />
</Stack>)