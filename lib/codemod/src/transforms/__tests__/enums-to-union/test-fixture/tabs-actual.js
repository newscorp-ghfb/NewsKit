import {
  Tabs,
  Tab,
  TabAlign,
  TabsIndicatorPosition,
  TabSize,
  TabsDistribution,
} from 'newskit';

const Component = () => (
  <Tabs
    size={TabSize.Medium}
    align={TabAlign.Start}
    vertical
    indicatorPosition={TabsIndicatorPosition.Start}
    distribution={TabsDistribution.Equal}
  >
    <Tab label="Tab">
      <LoremIpsum textNumber={1} />
    </Tab>
    <Tab label="Tab Two">
      <LoremIpsum textNumber={1} />
    </Tab>
    <Tab label="Tab Three is Long">
      <LoremIpsum textNumber={1} />
    </Tab>
  </Tabs>
);
