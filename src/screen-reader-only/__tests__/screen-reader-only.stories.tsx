import * as React from 'react';
import {ScreenReaderOnly} from '../screen-reader-only';
import {getSSRId} from '../../utils/get-ssr-id';
import {LinkStandalone} from '../../link';
import {StorybookCase, StorybookPage} from '../../test/storybook-comps';

const srOnly = getSSRId();

export const StorySreenReaderOnlyDefault = () => (
  <StorybookPage>
    <StorybookCase>
      <LinkStandalone href="https://google.com" aria-describedby={srOnly}>
        Google
      </LinkStandalone>
      <ScreenReaderOnly id={srOnly}>
        The best known search engine
      </ScreenReaderOnly>
    </StorybookCase>
  </StorybookPage>
);
StorySreenReaderOnlyDefault.storyName = 'Default';
StorySreenReaderOnlyDefault.parameters = {
  percy: {skip: true},
};

export default {
  title: 'Utilities/ScreenReaderOnly',
  component: ScreenReaderOnly,
  parameters: {
    nkDocs: {
      title: 'Screen reader',
      url: 'https://newskit.co.uk/components/visibility/',
      description:
        'ScreenReaderOnly wraps an element making sure that it is not visible to the user, but still readable by a screen reader.',
    },
  },
};
