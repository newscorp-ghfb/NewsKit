import * as React from 'react';
import {OrderedList} from '..';
import {StorybookHeading} from '../../test/storybook-comps';

const listData = [`alpha`, `bravo`, `charlie`, `delta`, `echo`, `foxtrot`];

export default {
  name: 'ordered-list',
  children: [
    {
      name: 'ordered-list-default',
      type: 'story',
      component: () => (
        <React.Fragment>
          <StorybookHeading>Ordered list defaults</StorybookHeading>
          <OrderedList>{listData}</OrderedList>
        </React.Fragment>
      ),
    },
  ],
};
