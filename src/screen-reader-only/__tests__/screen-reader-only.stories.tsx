import * as React from 'react';
import {ScreenReaderOnly} from '../screen-reader-only';
import {StorybookHeading} from '../../test/storybook-comps';
import {getSSRId} from '../../utils/get-ssr-id';

const srOnly = getSSRId();

export default {
  title: 'Utilities/Screen Reader Only',
  component: () => 'None',
};

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
StoryScreenReaderOnly.storyName = 'Default';
StoryScreenReaderOnly.parameters = {
  eyes: {include: false},
  percy: {skip: true},
};
