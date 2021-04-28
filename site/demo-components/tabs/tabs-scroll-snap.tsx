import * as React from 'react';
import {Tabs, Tab, TextBlock} from 'newskit';

const tabs = [
  'News',
  'World',
  'Comment',
  'Business',
  'Sport',
  'Politics',
  'Art & Culture',
  'Life & Style',
  'Society',
  'Health',
  'Education',
  'Science',
  'Technology',
  'Transport',
];

export const TabsScrollSnap = () => (
  <Tabs>
    {tabs.map(tab => (
      <Tab label={tab}>
        <TextBlock typographyPreset="utilityBody020">{tab} content</TextBlock>
      </Tab>
    ))}
  </Tabs>
);
