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

const content = (
  <TextBlock>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
    malesuada lacus ex, sit amet blandit leo lobortis eget.
  </TextBlock>
);

const CustomIndicator = ({expanded}: AccordionIconProps) =>
  expanded ? (
    <IconFilledStarOutline overrides={{size: 'iconSize020'}} />
  ) : (
    <IconFilledCancel
      overrides={{size: 'iconSize020', stylePreset: 'customIconFilledCancel'}}
    />
  );

const Spacer = styled.div`
  margin-bottom: 30px;
`;

export default {
  title: 'NewsKit Light/accordion',
  component: () => 'None',
};

export const StoryAccordion = () => {
  const [expanded, toggleExpanded] = React.useState(false);
  return (
    <>
      <StorybookSubHeading>Expanded</StorybookSubHeading>
      <Spacer>
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
          {content}
        </Accordion>
      </Spacer>
      <StorybookSubHeading>Collapsed</StorybookSubHeading>
      <Spacer>
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
          {content}
        </Accordion>
      </Spacer>
      <StorybookSubHeading>Disabled</StorybookSubHeading>
      <Spacer>
        <Accordion
          header={
            <StyledBlock>
              <IconFilledAccountBalance
                overrides={{
                  size: 'iconSize020',
                  marginInlineEnd: '8px',
                  stylePreset: 'inkNonEssential',
                }}
              />
              Accordion 3
            </StyledBlock>
          }
          disabled
          expanded={false}
          label="Label"
          overrides={{
            header: {
              indicatorIcon: {
                stylePreset: 'inkNonEssential',
              },
            },
          }}
        >
          {content}
        </Accordion>
      </Spacer>
      <StorybookSubHeading>onClick event</StorybookSubHeading>
      <Spacer>
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
          expanded={expanded}
          onClick={() => toggleExpanded(!expanded)}
        >
          {content}
        </Accordion>
      </Spacer>
    </>
  );
};
StoryAccordion.storyName = 'accordion';

export const StoryAccordionVariants = () => (
  <>
    <StorybookSubHeading>Without StartEnhancer</StorybookSubHeading>
    <Spacer>
      <Accordion
        header={<StyledBlock>Accordion 5</StyledBlock>}
        expanded
        label="Label"
      >
        {content}
      </Accordion>
    </Spacer>
    <StorybookSubHeading>Without Label</StorybookSubHeading>
    <Spacer>
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
        {content}
      </Accordion>
    </Spacer>
    <StorybookSubHeading>Without Header</StorybookSubHeading>
    <Spacer>
      <Accordion label="Label" expanded>
        {content}
      </Accordion>
    </Spacer>
  </>
);
StoryAccordionVariants.storyName = 'accordion-variants';

export const StoryAccordionOverrides = () => (
  <>
    <ThemeProvider theme={myCustomAccordionTheme}>
      <StorybookSubHeading>Style Overrides</StorybookSubHeading>
      <Spacer>
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
              minWidth: 'sizing090',
              minHeight: 'sizing090',
              stylePreset: 'accordionHeaderCustom',
              typographyPreset: 'utilityButton020',
              spaceInline: 'space030',
              paddingBlock: 'spaceInset040',
              paddingInline: 'spaceInset040',
              label: {
                typographyPreset: 'utilityButton020',
              },
            },
            panel: {
              stylePreset: 'accordionPanelCustom',
            },
          }}
        >
          {content}
        </Accordion>
      </Spacer>
      <StorybookSubHeading>Indicator Icon Prop Overrides</StorybookSubHeading>
      <Spacer>
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
          {content}
        </Accordion>
      </Spacer>
      <StorybookSubHeading>Indicator Icon Override</StorybookSubHeading>
      <Spacer>
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
          {content}
        </Accordion>
      </Spacer>
      <StorybookSubHeading>
        Indicator Icon Component Overrides
      </StorybookSubHeading>
      <Spacer>
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
          {content}
        </Accordion>
      </Spacer>
      <Spacer>
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
          {content}
        </Accordion>
      </Spacer>
    </ThemeProvider>
  </>
);

StoryAccordionOverrides.storyName = 'accordion-with-overrides';
