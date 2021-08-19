import * as React from 'react';
import {ScreenReaderOnly} from '../screen-reader-only';
import {StorybookHeading} from '../../test/storybook-comps';
import {getSSRId} from '../../utils/get-ssr-id';

const srOnly = getSSRId();

export default {
  title: 'NewsKit Light/screen-reader-only',
  component: () => 'None',
};

export const StoryScreenReaderOnly = () => (
  <React.Fragment>
    <StorybookHeading>Screen reader only</StorybookHeading>
    <a href="..." aria-describedby={srOnly}>
      Google
    </a>
    <ScreenReaderOnly id={srOnly}>
      The best known search engine
    </ScreenReaderOnly>
  </React.Fragment>
);
StoryScreenReaderOnly.storyName = 'screen-reader-only';
StoryScreenReaderOnly.parameters = {eyes: {include: false}};
