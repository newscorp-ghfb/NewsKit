import {Stack} from 'newskit';

const Component = () => (
  <Stack
    list
    flow="vertical-center"
    stackDistribution="space-between"
    spaceInline="space030"
    ariaLabel="Tag list"
  >
    <Tag>child 1</Tag>
    <Tag>child 2</Tag>
  </Stack>
);
