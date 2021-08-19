import * as React from 'react';
import {ScreenReaderOnly} from '../screen-reader-only';
import {StorybookHeading} from '../../test/storybook-comps';
import {getSSRId} from '../../utils/get-ssr-id';

const srOnly = getSSRId();

export default {
  title: 'screen-reader-only',
  children: [
    {
      storyName: 'screen-reader-only',
      storyFn: () => (
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
      parameters: {eyes: {include: false}},
    },
  ],
};
