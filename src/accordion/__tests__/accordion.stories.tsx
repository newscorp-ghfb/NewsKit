import * as React from 'react';
import {StorybookHeading} from '../../test/storybook-comps';
import {Accordion} from '../accordion';
import {TextBlock} from '../../text-block';
import {
  IconFilledAccountBalance,
  IconFilledExpandLess,
  IconFilledExpandMore,
} from '../../icons';

export default {
  title: 'NewsKit Light/accordion',
  component: () => 'None',
};

export const StoryAccordion = () => (
  <>
    <StorybookHeading>Expanded</StorybookHeading>
    <Accordion
      headerText="Hello"
      label="Label"
      startEnhancer={
        <IconFilledAccountBalance overrides={{size: 'iconSize020'}} />
      }
      indicatorIcon={
        <IconFilledExpandMore
          overrides={{
            size: 'iconSize020',
          }}
        />
      }
      applyDivider
    >
      <TextBlock>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        malesuada lacus ex, sit amet blandit leo lobortis eget.
      </TextBlock>
    </Accordion>
    <br />
    <br />
    <StorybookHeading>Collapsed</StorybookHeading>
    <Accordion
      headerText="Hello"
      label="Label"
      startEnhancer={
        <IconFilledAccountBalance overrides={{size: 'iconSize020'}} />
      }
      indicatorIcon={
        <IconFilledExpandLess
          overrides={{
            size: 'iconSize020',
          }}
        />
      }
    >
      <TextBlock>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        malesuada lacus ex, sit amet blandit leo lobortis eget.
      </TextBlock>
    </Accordion>
    <br />
    <br />
    <StorybookHeading>Disabled</StorybookHeading>
    <Accordion
      headerText="Hello"
      disabled
      label="Label"
      startEnhancer={
        <IconFilledAccountBalance overrides={{size: 'iconSize020'}} />
      }
      indicatorIcon={
        <IconFilledExpandMore
          overrides={{
            size: 'iconSize020',
          }}
        />
      }
      applyDivider
    >
      <TextBlock>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        malesuada lacus ex, sit amet blandit leo lobortis eget.
      </TextBlock>
    </Accordion>
    <br />
    <StorybookHeading>HeaderText & IndicatorIcon</StorybookHeading>
    <div>
      <Accordion
        headerText="Hello"
        indicatorIcon={
          <IconFilledExpandLess
            overrides={{
              size: 'iconSize020',
            }}
          />
        }
        applyDivider
      >
        <TextBlock>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </TextBlock>
      </Accordion>
      <Accordion
        headerText="Hello"
        indicatorIcon={
          <IconFilledExpandLess
            overrides={{
              size: 'iconSize020',
            }}
          />
        }
      />
    </div>
  </>
);
StoryAccordion.storyName = 'accordion';
