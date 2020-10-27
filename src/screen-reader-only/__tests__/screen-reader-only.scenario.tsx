import * as React from 'react';
import {ScreenReaderOnly} from '../screen-reader-only';
import {StorybookHeading} from '../../test/storybook-comps';
import {getSSRId} from '../../utils/get-ssr-id';

const srOnly = getSSRId();

export default {
  name: 'screen-reader-only',
  children: [
    {
      name: 'screen-reader-only',
      parameters: {eyes: {include: false}},
      type: 'story',
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
    },
  ],
};
