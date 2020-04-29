import * as React from 'react';
import {UnorderedList} from '..';
import {Twitter} from '../../icons';

export const name = 'unordered-list';

const listData = [
  `alpha`,
  <Twitter size="iconSize010" />,
  2,
  `delta`,
  `echo`,
  `foxtrot`,
];

export const component = () => [
  <UnorderedList>{listData}</UnorderedList>,
  <UnorderedList listItemMarker={() => <Twitter size="iconSize010" />}>
    {listData}
  </UnorderedList>,
];
