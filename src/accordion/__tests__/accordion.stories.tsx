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
      headerText="Header"
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
      aria-controls="panel1-content"
      id="panel1-header"
      expanded
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
      headerText="Header"
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
      expanded={false}
      aria-controls="panel2-content"
      id="panel2-header"
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
      headerText="Header"
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
      aria-controls="panel3-content"
      id="panel3-header"
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
        headerText="Header"
        indicatorIcon={
          <IconFilledExpandLess
            overrides={{
              size: 'iconSize020',
            }}
          />
        }
        expanded
        aria-controls="panel4-content"
        id="panel4-header"
      >
        <TextBlock>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </TextBlock>
      </Accordion>
      <Accordion
        headerText="Header"
        indicatorIcon={
          <IconFilledExpandLess
            overrides={{
              size: 'iconSize020',
            }}
          />
        }
        aria-controls="panel5-content"
        id="panel5-header"
      />
    </div>
  </>
);
StoryAccordion.storyName = 'accordion';
