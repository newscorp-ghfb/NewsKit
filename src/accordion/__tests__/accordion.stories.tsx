import * as React from 'react';
import {StorybookSubHeading} from '../../test/storybook-comps';
import {Accordion} from '../accordion';
import {Block} from '../../block';
import {TextBlock} from '../../text-block';
import {
  IconFilledAccountBalance,
  IconFilledCancel,
  IconFilledStarOutline,
} from '../../icons';
import {createTheme, ThemeProvider} from '../../theme';
import {styled} from '../../utils/style';
import {AccordionIconProps} from '../types';

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
          borderWidth: '{{borders.borderWidth020}}',
        },
        hover: {
          backgroundColor: '#f08080',
          color: '#FFD23F',
        },
      },
      accordionPanelCustom: {
        base: {
          borderStyle: 'none none solid none',
          borderColor: '#fb8500',
          borderWidth: '{{borders.borderWidth020}}',
        },
      },
      customIconFilledCancel: {
        base: {
          backgroundColor: '{{colors.interfaceInformative010}}',
          iconColor: '{{colors.inkInverse}}',
        },
      },
    },
  },
});

const StyledBlock = styled(Block)`
  display: flex;
  align-items: center;
`;

const CustomIndicator = ({expanded}: AccordionIconProps) =>
  expanded ? (
    <IconFilledStarOutline overrides={{size: 'iconSize020'}} />
  ) : (
    <IconFilledCancel
      overrides={{size: 'iconSize020', stylePreset: 'customIconFilledCancel'}}
    />
  );

export default {
  title: 'NewsKit Light/accordion',
  component: () => 'None',
};

export const StoryAccordion = () => {
  const [event, showEvent] = React.useState('');
  return (
    <>
      <StorybookSubHeading>Expanded</StorybookSubHeading>
      <Accordion
        header={
          <StyledBlock>
            <IconFilledAccountBalance
              overrides={{size: 'iconSize020', marginInlineEnd: '8px'}}
            />
            Accordion 1
          </StyledBlock>
        }
        label="Label"
        expanded
      >
        <TextBlock>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </TextBlock>
      </Accordion>
      <StorybookSubHeading>Collapsed</StorybookSubHeading>
      <Accordion
        header={
          <StyledBlock>
            <IconFilledAccountBalance
              overrides={{size: 'iconSize020', marginInlineEnd: '8px'}}
            />
            Accordion 2
          </StyledBlock>
        }
        label="Label"
        expanded={false}
      >
        <TextBlock>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </TextBlock>
      </Accordion>
      <StorybookSubHeading>Disabled</StorybookSubHeading>
      <Accordion
        header={
          <StyledBlock>
            <IconFilledAccountBalance
              overrides={{size: 'iconSize020', marginInlineEnd: '8px'}}
            />
            Accordion 3
          </StyledBlock>
        }
        disabled
        expanded={false}
        label="Label"
      >
        <TextBlock>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </TextBlock>
      </Accordion>
      <StorybookSubHeading>onClick event</StorybookSubHeading>
      <Accordion
        header={
          <StyledBlock>
            <IconFilledAccountBalance
              overrides={{size: 'iconSize020', marginInlineEnd: '8px'}}
            />
            Accordion 4
          </StyledBlock>
        }
        label="Label"
        expanded
        onClick={() => {
          console.log('onClick event');
          showEvent('onClick event');
        }}
      >
        <TextBlock>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </TextBlock>
      </Accordion>
      <div data-testid="event">{event}</div>
    </>
  );
};
StoryAccordion.storyName = 'accordion';

export const StoryAccordionVariants = () => (
  <>
    <StorybookSubHeading>Without StartEnhancer</StorybookSubHeading>
    <Accordion
      header={<StyledBlock>Accordion 5</StyledBlock>}
      expanded
      label="Label"
    >
      <TextBlock>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        malesuada lacus ex, sit amet blandit leo lobortis eget.
      </TextBlock>
    </Accordion>
    <StorybookSubHeading>Without Label</StorybookSubHeading>
    <Accordion
      header={
        <StyledBlock>
          <IconFilledAccountBalance
            overrides={{size: 'iconSize020', marginInlineEnd: '8px'}}
          />
          Accordion 6
        </StyledBlock>
      }
      expanded
    >
      <TextBlock>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        malesuada lacus ex, sit amet blandit leo lobortis eget.
      </TextBlock>
    </Accordion>
    <StorybookSubHeading>Without Header</StorybookSubHeading>
    <Accordion label="Label" expanded>
      <TextBlock>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        malesuada lacus ex, sit amet blandit leo lobortis eget.
      </TextBlock>
    </Accordion>
  </>
);
StoryAccordionVariants.storyName = 'accordion-variants';

export const StoryAccordionMinWidthHeightOverrides = () => (
  <>
    <StorybookSubHeading>Min-width & Min-height Overrides</StorybookSubHeading>
    <Accordion
      header={
        <StyledBlock>
          <IconFilledAccountBalance
            overrides={{size: 'iconSize020', marginInlineEnd: '8px'}}
          />
          Accordion 7
        </StyledBlock>
      }
      label="Label"
      expanded
      overrides={{
        header: {
          minWidth: 'sizing090',
          minHeight: 'sizing090',
        },
      }}
    >
      <TextBlock>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        malesuada lacus ex, sit amet blandit leo lobortis eget.
      </TextBlock>
    </Accordion>
  </>
);
StoryAccordionMinWidthHeightOverrides.storyName =
  'accordion-min-width-height-overrides';

export const StoryAccordionOverrides = () => (
  <>
    <ThemeProvider theme={myCustomAccordionTheme}>
      <StorybookSubHeading>Style Overrides</StorybookSubHeading>
      <Accordion
        header={
          <StyledBlock>
            <IconFilledAccountBalance
              overrides={{size: 'iconSize020', marginInlineEnd: '8px'}}
            />
            Accordion 8
          </StyledBlock>
        }
        label="Label"
        expanded
        overrides={{
          header: {
            stylePreset: 'accordionHeaderCustom',
            typographyPreset: 'utilityButton020',
            spaceInline: 'space030',
            paddingBlock: 'spaceInset040',
            paddingInline: 'spaceInset040',
            indicatorLabel: {
              typographyPreset: 'utilityButton020',
            },
          },
          panel: {
            stylePreset: 'accordionPanelCustom',
          },
        }}
      >
        <TextBlock>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </TextBlock>
      </Accordion>
      <StorybookSubHeading>Indicator Icon Prop Overrides</StorybookSubHeading>
      <Accordion
        header={
          <StyledBlock>
            <IconFilledAccountBalance
              overrides={{size: 'iconSize020', marginInlineEnd: '8px'}}
            />
            Accordion 9
          </StyledBlock>
        }
        label="Label"
        expanded
        overrides={{
          header: {
            indicatorIcon: {
              props: {
                overrides: {
                  stylePreset: 'inkNegative',
                  size: 'iconSize010',
                },
              },
            },
          },
        }}
      >
        <TextBlock>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </TextBlock>
      </Accordion>
      <StorybookSubHeading>Indicator Icon Override</StorybookSubHeading>
      <Accordion
        header={
          <StyledBlock>
            <IconFilledAccountBalance
              overrides={{size: 'iconSize020', marginInlineEnd: '8px'}}
            />
            Accordion 10
          </StyledBlock>
        }
        label="Label"
        overrides={{
          header: {
            indicatorIcon: {
              stylePreset: 'inkPositive',
              size: 'iconSize030',
            },
          },
        }}
      >
        <TextBlock>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </TextBlock>
      </Accordion>
      <StorybookSubHeading>
        Indicator Icon Component Overrides
      </StorybookSubHeading>
      <Accordion
        header={
          <StyledBlock>
            <IconFilledAccountBalance
              overrides={{size: 'iconSize020', marginInlineEnd: '8px'}}
            />
            Accordion 11
          </StyledBlock>
        }
        label="Label"
        expanded
        overrides={{
          header: {
            indicatorIcon: CustomIndicator,
          },
        }}
      >
        <TextBlock>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </TextBlock>
      </Accordion>
      <Accordion
        header={
          <StyledBlock>
            <IconFilledAccountBalance
              overrides={{size: 'iconSize020', marginInlineEnd: '8px'}}
            />
            Accordion 12
          </StyledBlock>
        }
        label="Label"
        overrides={{
          header: {
            indicatorIcon: CustomIndicator,
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
