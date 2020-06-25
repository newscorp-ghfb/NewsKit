import {Divider, Stack, StackChild, AlignSelfValues, Circle} from "newskit";

<Stack
  flow="horizontal-center"
  stackDistribution="center"
  space="sizing030"
>
  <Circle size="iconSize040" />
  <StackChild alignSelf={AlignSelfValues.Stretch}>
    <Divider vertical />
  </StackChild>
  <Circle size="iconSize040" />
  <StackChild alignSelf={AlignSelfValues.Stretch}>
    <Divider vertical />
  </StackChild>
  <Circle size="iconSize040" />
</Stack>