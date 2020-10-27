import * as React from 'react';
import {UnorderedList} from '..';
import {
  StorybookHeading,
  StorybookSubHeading,
} from '../../test/storybook-comps';
import {Twitter, Circle} from '../../icons';
import {Link} from '../../link';

const listData = [
  `alpha`,
  <Twitter key="uniqueIconKey" size="iconSize010" />,
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
          <UnorderedList listItemMarker={Circle}>{listData}</UnorderedList>
          <br />
          <StorybookSubHeading>
            with markers and overridden marker iconSize
          </StorybookSubHeading>
          <UnorderedList
            overrides={{marker: {size: 'iconSize020'}}}
            listItemMarker={Circle}
          >
            {listData}
          </UnorderedList>
        </React.Fragment>
      ),
    },
  ],
};
