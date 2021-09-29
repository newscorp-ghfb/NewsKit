import {Divider, Stack, StackChild, IconFilledFacebook} from "newskit";

export const Example = () => (
<Stack
  flow="horizontal-stretch"
  stackDistribution="center"
  spaceInline="space030"
>
  <IconFilledFacebook overrides={{size: 'iconSize040'}} />
  <StackChild>
    <Divider vertical />
  </StackChild>
  <IconFilledFacebook overrides={{size: 'iconSize040'}} />
</Stack>)