import * as React from 'react';
import {UnorderedList} from '..';
import {
  StorybookHeading,
  StorybookSubHeading,
} from '../../test/storybook-comps';
import {IconFilledTwitter, IconFilledMood} from '../../icons';
import {Link} from '../../link';

const listData = [
  `alpha`,
  <IconFilledTwitter
    key="uniqueIconKey"
    title="twitter logo"
    overrides={{size: 'iconSize010'}}
  />,
  2,
  `Lorem ipsum dolor sit amet...`,
  <Link key="uniqueLinkKey" href="http://localhost:6006">
    Click me!
  </Link>,
];

export default {
  name: 'unordered-list',
  children: [
    {
      name: 'unordered-list-default',
      type: 'story',
      component: () => (
        <React.Fragment>
          <StorybookHeading>Unordered list defaults</StorybookHeading>
          <UnorderedList>{listData}</UnorderedList>
        </React.Fragment>
      ),
    },
    {
      name: 'unordered-list-with-marker',
      type: 'story',
      component: () => (
        <React.Fragment>
          <StorybookHeading>Unordered list</StorybookHeading>
          <StorybookSubHeading>with markers</StorybookSubHeading>
          <UnorderedList listItemMarker={IconFilledMood}>
            {listData}
          </UnorderedList>
          <br />
          <StorybookSubHeading>
            with markers and overridden marker iconSize
          </StorybookSubHeading>
          <UnorderedList
            overrides={{marker: {size: 'iconSize020'}}}
            listItemMarker={IconFilledMood}
          >
            {listData}
          </UnorderedList>
        </React.Fragment>
      ),
    },
  ],
};
