import * as React from 'react';
import {StorybookHeading} from '../../test/storybook-comps';
import {Accordion} from '../accordion';
import {TextBlock} from '../../text-block';
import {IconFilledAccountBalance} from '../../icons';

export default {
  title: 'NewsKit Light/accordion',
  component: () => 'None',
};

export const StoryAccordion = () => (
  <>
    <StorybookHeading>Accordion</StorybookHeading>
    <Accordion
      headerText="Hello"
      startEnhancer={
        <IconFilledAccountBalance overrides={{size: 'iconSize020'}} />
      }
    >
      <TextBlock>This is a text block</TextBlock>
    </Accordion>
  </>
);
StoryAccordion.storyName = 'accordion';
