import * as React from 'react';
import {StorybookHeading} from '../../test/storybook-comps';
import {Accordion} from '../accordion';
import {TextBlock} from '../../text-block';
import {Stack} from '../../stack';
import {Button} from '../../button';

export default {
  title: 'NewsKit Light/accordion',
  component: () => 'None',
};

export const StoryAccordion = () => (
  <>
    <StorybookHeading>Accordion</StorybookHeading>
    <Accordion
      header={}
    >
      <TextBlock>This is a text block</TextBlock>
    </Accordion>
  </>
);
StoryAccordion.storyName = 'accordion';
