import * as React from 'react';
import {ScreenReaderOnly} from '../screen-reader-only';
import {StorybookHeading} from '../../test/storybook-comps';

export default {
  name: 'screen-reader-only',
  children: [
    {
      component: () => (
        <React.Fragment>
          <StorybookHeading>Screen reader only</StorybookHeading>
          <a href="..." aria-describedby="sr-only">
            Google
          </a>
          <ScreenReaderOnly id="sr-only">
            The best known search engine
          </ScreenReaderOnly>
        </React.Fragment>
      ),
      name: 'screen-reader-only',
      type: 'story',
    },
  ],
};
