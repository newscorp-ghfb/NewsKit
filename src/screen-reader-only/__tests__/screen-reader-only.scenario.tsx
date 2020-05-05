import * as React from 'react';
import {ScreenReaderOnly} from '../screen-reader-only';
import {StorybookHeading} from '../../test/storybook-comps';
import {getBuiId} from '../../utils/get-bui-id';

const srOnly = getBuiId();

export default {
  name: 'screen-reader-only',
  children: [
    {
      component: () => (
        <React.Fragment>
          <StorybookHeading>Screen reader only</StorybookHeading>
          <a href="..." aria-describedby={srOnly}>
            Google
          </a>
          <ScreenReaderOnly id={srOnly}>
            The best known search engine
          </ScreenReaderOnly>
        </React.Fragment>
      ),
      name: 'screen-reader-only',
      type: 'story',
    },
  ],
};
