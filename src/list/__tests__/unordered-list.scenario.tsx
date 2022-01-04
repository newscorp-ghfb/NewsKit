import * as React from 'react';
import {UnorderedList} from '..';
import {Twitter} from '../../icons';

export const name = 'unordered-list';

const listData = [
  `alpha`,
  <Twitter $size="sizing030" />,
  2,
  `delta`,
  `echo`,
  `foxtrot`,
];

export const component = () => [
  <UnorderedList>{listData}</UnorderedList>,
  <UnorderedList listItemMarker={() => <Twitter $size="sizing030" />}>
    {listData}
  </UnorderedList>,
];
