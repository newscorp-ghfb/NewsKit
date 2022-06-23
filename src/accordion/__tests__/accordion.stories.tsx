import * as React from 'react';
import {StorybookSubHeading} from '../../test/storybook-comps';
import {Accordion} from '../accordion';
import {Block} from '../../block';
import {TextBlock} from '../../text-block';
import {Image} from '../../image';
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
      <StorybookSubHeading>Expanded/Collapsed</StorybookSubHeading>
      <Spacer>
        <Accordion
          header="Header 1"
          expanded={expanded}
          onClick={() => toggleExpanded(!expanded)}
        >
          {content}
        </Accordion>
      </Spacer>
      <StorybookSubHeading>Disabled</StorybookSubHeading>
      <Spacer>
        <Accordion
          header="Header 2"
          disabled
          expanded={false}
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
      <StorybookSubHeading>With leading icon</StorybookSubHeading>
      <Spacer>
        <Accordion
          header={
            <StyledBlock>
              <IconFilledAccountBalance
                overrides={{size: 'iconSize020', marginInlineEnd: '8px'}}
              />
              Header 3
            </StyledBlock>
          }
        >
          {content}
        </Accordion>
      </Spacer>
      <StorybookSubHeading>With leading image</StorybookSubHeading>
      <Spacer>
        <Accordion
          header={
            <StyledBlock>
              <Image
                src="/placeholder-3x2.png"
                alt="Example Image"
                overrides={{
                  height: '30px',
                  width: '30px',
                  marginInlineEnd: '8px',
                }}
              />
              Header 3
            </StyledBlock>
          }
        >
          {content}
        </Accordion>
      </Spacer>
      <StorybookSubHeading>With show label</StorybookSubHeading>
      <Spacer>
        <Accordion header="Header 4" label="Show">
          {content}
        </Accordion>
      </Spacer>
      <StorybookSubHeading>With hide label</StorybookSubHeading>
      <Spacer>
        <Accordion header="Header 5" label="Hide" expanded>
          {content}
        </Accordion>
      </Spacer>
    </>
  );
};
StoryAccordion.storyName = 'accordion';

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
              Header 6
            </StyledBlock>
          }
          label="Hide"
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
              Header 7
            </StyledBlock>
          }
          label="Show"
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
              Header 8
            </StyledBlock>
          }
          label="Show"
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
              Header 9
            </StyledBlock>
          }
          label="Hide"
          expanded
          overrides={{
            header: {
              indicatorIcon: CustomIndicator,
            },
          }}
        >
          {content}
        </Accordion>
        <Accordion
          header={
            <StyledBlock>
              <IconFilledAccountBalance
                overrides={{size: 'iconSize020', marginInlineEnd: '8px'}}
              />
              Header 10
            </StyledBlock>
          }
          label="Show"
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
