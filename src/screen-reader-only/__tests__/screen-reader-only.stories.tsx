import * as React from 'react';
import {ScreenReaderOnly} from '../screen-reader-only';
import {StorybookHeading} from '../../test/storybook-comps';
import {getSSRId} from '../../utils/get-ssr-id';

const srOnly = getSSRId();

export const StoryScreenReaderOnly = () => (
  <>
    <StorybookHeading>Screen reader only</StorybookHeading>
    <a href="..." aria-describedby={srOnly}>
      Google
    </a>
    <ScreenReaderOnly id={srOnly}>
      The best known search engine
    </ScreenReaderOnly>
  </>
);
StoryScreenReaderOnly.storyName = 'screenReaderOnly';
StoryScreenReaderOnly.parameters = {eyes: {include: false}};

export default {
  title: 'Utilities/screenReaderOnly',
  component: () => 'None',
  parameters: {
    nkDocs: {
      title: 'screenReaderOnly',
      url: 'https://newskit.co.uk/components/visibility/',
      description:
        'screenReaderOnly wraps an element making sure that it is not visible to the user, but still readable by a screen reader.',
    },
  },
};
