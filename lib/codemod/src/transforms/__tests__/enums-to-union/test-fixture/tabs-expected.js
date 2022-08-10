import {Tabs, Tab} from 'newskit';

const Component = () => (
  <Tabs
    size="medium"
    align="start"
    vertical
    indicatorPosition="start"
    distribution="equal"
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
