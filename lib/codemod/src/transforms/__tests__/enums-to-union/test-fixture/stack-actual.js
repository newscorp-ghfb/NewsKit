import {Stack, Flow, StackDistribution} from 'newskit';

const Component = () => (
  <Stack
    list
    flow={Flow.VerticalCenter}
    stackDistribution={StackDistribution.SpaceBetween}
    spaceInline="space030"
    ariaLabel="Tag list"
  >
    <Tag>child 1</Tag>
    <Tag>child 2</Tag>
  </Stack>
);
