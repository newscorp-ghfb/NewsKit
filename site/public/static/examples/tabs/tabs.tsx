import {Tabs, TabSize, TabsDistribution, Tab} from 'newskit';

<Tabs
  size={TabSize.Small}
  distribution={TabsDistribution.LeftStacked}
  divider
  initialSelectedIndex={0}
>
  <Tab title="Tab 1">Content 1</Tab>
  <Tab title="Tab 2">Content 2</Tab>
  <Tab title="Tab 3">Content 3</Tab>
</Tabs>;
