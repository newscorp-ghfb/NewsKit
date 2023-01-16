import * as React from 'react';
import {ScreenReaderOnly} from '../screen-reader-only';
import {getSSRId} from '../../utils/get-ssr-id';
import {LinkStandalone} from '../../link';

const srOnly = getSSRId();

export const StoryScreenReaderOnly = () => (
  <>
    <LinkStandalone href="..." aria-describedby={srOnly}>
      Google
    </LinkStandalone>
    <ScreenReaderOnly id={srOnly}>
      The best known search engine
    </ScreenReaderOnly>
  </>
);
StoryScreenReaderOnly.storyName = 'ScreenReaderOnly';
StoryScreenReaderOnly.parameters = {
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
