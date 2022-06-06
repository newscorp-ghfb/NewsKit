import * as React from 'react';
import {
  StorybookHeading,
  StorybookSubHeading,
} from '../../test/storybook-comps';
import {Accordion} from '../accordion';
import {TextBlock} from '../../text-block';
import {
  IconFilledAccountBalance,
  IconFilledExpandLess,
  IconFilledExpandMore,
} from '../../icons';
import {createTheme, ThemeProvider} from '../../theme';

const myCustomAccordionTheme = createTheme({
  name: 'my-custom-accordion-theme',
  overrides: {
    stylePresets: {
      accordionHeaderCustom: {
        base: {
          backgroundColor: '#7FFFD4',
          color: 'black',
          borderStyle: 'none none solid none',
          borderColor: '#6a040f',
          borderWidth: '{{borders.borderWidth030}}',
        },
        hover: {
          backgroundColor: '#f08080',
          color: '#FFD23F',
        },
        disabled: {
          backgroundColor: 'interactiveDisabled010',
          color: 'inkNonEssential',
        },
      },
      accordionDividerCustom: {
        base: {
          borderColor: '#f7aef8',
          borderWidth: '{{borders.borderWidth030}}',
          borderStyle: 'solid',
        },
      },
      accordionPanelCustom: {
        base: {
          borderStyle: 'none none dotted none',
          borderColor: '#fb8500',
          borderWidth: '{{borders.borderWidth030}}',
        },
      },
    },
  },
});

export default {
  title: 'NewsKit Light/accordion',
  component: () => 'None',
};

export const StoryAccordion = () => (
  <>
    <StorybookHeading>Accordion</StorybookHeading>
    <StorybookSubHeading>Expanded</StorybookSubHeading>
    <Accordion
      header="Header1"
      label="Label1"
      expanded
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
    <StorybookSubHeading>Collapsed</StorybookSubHeading>
    <Accordion
      header="Header2"
      label="Label2"
      expanded={false}
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
    >
      <TextBlock>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        malesuada lacus ex, sit amet blandit leo lobortis eget.
      </TextBlock>
    </Accordion>
    <br />
    <br />
    <StorybookSubHeading>Disabled</StorybookSubHeading>
    <Accordion
      header="Header3"
      disabled
      expanded={false}
      label="Label3"
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
    >
      <TextBlock>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        malesuada lacus ex, sit amet blandit leo lobortis eget.
      </TextBlock>
    </Accordion>
    <br />
    <StorybookSubHeading>HeaderText & IndicatorIcon</StorybookSubHeading>
    <div>
      <Accordion
        header="Header4"
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
      <Accordion
        header="Header5"
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

export const StoryAccordionOverrides = () => (
  <>
    <StorybookHeading>Accordion</StorybookHeading>
    <StorybookSubHeading>Overrides</StorybookSubHeading>
    <ThemeProvider theme={myCustomAccordionTheme}>
      <Accordion
        header="Header"
        label="Label"
        expanded
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
        overrides={{
          header: {
            minWidth: 'sizing050',
            minHeight: 'sizing060',
            stylePreset: 'accordionHeaderCustom',
            typographyPreset: 'utilityButton020',
            spaceInline: 'space030',
            indicatorIcon: {
              stylePreset: 'inkPositive',
            },
            indicatorLabel: {
              stylePreset: 'inkPositive',
              typographyPreset: 'utilityButton020',
            },
            startEnhancer: {
              stylePreset: 'inkPositive',
            },
          },
          panel: {
            stylePreset: 'accordionPanelCustom',
          },
          divider: {
            stylePreset: 'accordionDividerCustom',
          },
        }}
      >
        <TextBlock>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </TextBlock>
      </Accordion>
    </ThemeProvider>
  </>
);

StoryAccordionOverrides.storyName = 'accordion-with-overrides';
