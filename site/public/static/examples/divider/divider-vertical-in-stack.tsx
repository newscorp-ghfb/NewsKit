import {Divider, Stack, StackChild, AlignSelfValues, IconFilledCircle} from "newskit";

<Stack
  flow="horizontal-center"
  stackDistribution="center"
  space="sizing030"
>
  <IconFilledCircle overrides={{size: 'iconSize040'}} />
  <StackChild alignSelf={AlignSelfValues.Stretch}>
    <Divider vertical />
  </StackChild>
  <IconFilledCircle overrides={{size: 'iconSize040'}} />
  <StackChild alignSelf={AlignSelfValues.Stretch}>
    <Divider vertical />
  </StackChild>
  <IconFilledCircle overrides={{size: 'iconSize040'}} />
</Stack>