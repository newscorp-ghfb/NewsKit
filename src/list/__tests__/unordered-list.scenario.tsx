import * as React from 'react';
import {UnorderedList} from '..';
import {StorybookHeading} from '../../test/storybook-comps';
import {Twitter, Circle} from '../../icons';
import {Link} from '../../link';

const listData = [
  `alpha`,
  <Twitter key="uniqueIconKey" size="iconSize010" />,
  2,
  `delta`,
  <Link key="uniqueLinkKey" href="http://localhost:6006">
    Click me!
  </Link>,
  `
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et est in diam finibus sagittis. Phasellus iaculis mattis ante vitae.`,
  `foxtrot`,
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
          <StorybookHeading>Unordered list with markers</StorybookHeading>
          <UnorderedList listItemMarker={Circle}>{listData}</UnorderedList>
          <br />
          <br />
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
