import * as React from 'react';
import {Story as StoryType} from '@storybook/react';
import {
  StorybookHeading,
  StorybookSubHeading,
} from '../../test/storybook-comps';
import {Accordion} from '../accordion';
import {Block} from '../../block';
import {TextBlock} from '../../text-block';
import {Image} from '../../image';
import {
  IconFilledAccountBalance,
  IconFilledCancel,
  IconFilledStarOutline,
} from '../../icons';
import {ThemeProvider, CreateThemeArgs} from '../../theme';
import {styled} from '../../utils/style';
import {AccordionIconProps} from '../types';
import {createCustomThemeWithBaseThemeSwitch} from '../../test/theme-select-object';
import {AccordionGroup} from '../accordion-group';

const accordionCustomThemeObject: CreateThemeArgs = {
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
        'focus-visible': {
          outlineColor: '{{outlines.outlineColorDefault}}',
          outlineStyle: '{{outlines.outlineStyleDefault}}',
          outlineWidth: '{{outlines.outlineWidthDefault}}',
          safariOutlineStyle: '{{outlines.safariOutlineStyleDefault}}',
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
      customOutlineColor: {
        base: {
          backgroundColor: '{{colors.interface010}}',
          color: '{{colors.inkBase}}',
          borderStyle: 'none none solid none',
          borderColor: '{{colors.interface050}}',
          borderWidth: '{{borders.borderWidth010}}',
        },
        'focus-visible': {
          outlineColor: 'red',
          outlineStyle: '{{outlines.outlineStyleDefault}}',
          outlineWidth: '{{outlines.outlineWidthDefault}}',
          outlineOffset: '{{outlines.outlineOffsetDefault}}',
        },
      },
      customOutlineStyle: {
        base: {
          backgroundColor: '{{colors.interface010}}',
          color: '{{colors.inkBase}}',
          borderStyle: 'none none solid none',
          borderColor: '{{colors.interface050}}',
          borderWidth: '{{borders.borderWidth010}}',
        },
        'focus-visible': {
          outlineColor: 'red',
          outlineStyle: 'dotted',
          outlineWidth: '{{outlines.outlineWidthDefault}}',
          outlineOffset: '{{outlines.outlineOffsetDefault}}',
        },
      },
      customOutlineWidth: {
        base: {
          backgroundColor: '{{colors.interface010}}',
          color: '{{colors.inkBase}}',
          borderStyle: 'none none solid none',
          borderColor: '{{colors.interface050}}',
          borderWidth: '{{borders.borderWidth010}}',
        },
        'focus-visible': {
          outlineColor: 'red',
          outlineStyle: 'dotted',
          outlineWidth: '5px',
          outlineOffset: '{{outlines.outlineOffsetDefault}}',
        },
      },
      customOutlineOffset: {
        base: {
          backgroundColor: '{{colors.interface010}}',
          color: '{{colors.inkBase}}',
          borderStyle: 'none none solid none',
          borderColor: '{{colors.interface050}}',
          borderWidth: '{{borders.borderWidth010}}',
        },
        'focus-visible': {
          outlineColor: 'red',
          outlineStyle: 'dotted',
          outlineWidth: '5px',
          outlineOffset: '5px',
        },
      },
    },
  },
};

const StyledBlock = styled(Block)`
  display: flex;
  align-items: center;
`;

const content = (
  <TextBlock stylePreset="inkContrast">
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

// max-height (used for the default accordion transition) is incorrectly calculated
// from scroll height in the Applitools test environment. Unset here as a temporary
// measure while we wait for a fix from Applitools.
const scriptHooks = {
  beforeCaptureScreenshot:
    'Array.from(document.querySelectorAll(\'.nk-accordion-enter-done\')).forEach(elt => elt.style.maxHeight="unset")',
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
StoryAccordion.parameters = {eyes: {scriptHooks}};

export const StoryAccordionOverrides = () => (
  <>
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
  </>
);

StoryAccordionOverrides.storyName = 'accordion-with-overrides';
StoryAccordionOverrides.parameters = {eyes: {scriptHooks}};

export const StoryAccordionGroupUnControlled = () => (
  <>
    <StorybookHeading>Accordion Group UnControlled</StorybookHeading>
    <StorybookSubHeading>No expanded</StorybookSubHeading>
    <AccordionGroup>
      <Accordion header="Header 21">{content}</Accordion>
      <Accordion header="Header 22">{content}</Accordion>
      <Accordion header="Header 23">{content}</Accordion>
    </AccordionGroup>
    <StorybookSubHeading>Multiply</StorybookSubHeading>
    <AccordionGroup defaultExpanded={[1]}>
      <Accordion header="Header 31">{content}</Accordion>
      <Accordion header="Header 32">{content}</Accordion>
      <Accordion header="Header 33">{content}</Accordion>
    </AccordionGroup>
    <StorybookSubHeading>Single</StorybookSubHeading>
    <AccordionGroup defaultExpanded={[1, 2]} expandSingle>
      <Accordion header="Header 41">{content}</Accordion>
      <Accordion header="Header 42">{content}</Accordion>
      <Accordion header="Header 43">{content}</Accordion>
    </AccordionGroup>
  </>
);
StoryAccordionGroupUnControlled.storyName = 'accordion-group-uncontrolled';
StoryAccordionGroupUnControlled.parameters = {eyes: {scriptHooks}};

export const StoryAccordionGroupControlled = () => {
  const [expanded1, setExpanded1] = React.useState([1]);
  const [expanded2, setExpanded2] = React.useState([1]);

  return (
    <>
      <StorybookHeading>Accordion Group Controlled</StorybookHeading>
      <StorybookSubHeading>Multiply</StorybookSubHeading>
      <AccordionGroup expanded={expanded1} onChange={setExpanded1}>
        <Accordion header="Header 51">{content}</Accordion>
        <Accordion header="Header 52">{content}</Accordion>
        <Accordion header="Header 53">{content}</Accordion>
      </AccordionGroup>
      <StorybookSubHeading>Single</StorybookSubHeading>
      <AccordionGroup expanded={expanded2} onChange={setExpanded2} expandSingle>
        <Accordion header="Header 61">{content}</Accordion>
        <Accordion header="Header 62">{content}</Accordion>
        <Accordion header="Header 63">{content}</Accordion>
      </AccordionGroup>
    </>
  );
};
StoryAccordionGroupControlled.storyName = 'accordion-group-controlled';
StoryAccordionGroupControlled.parameters = {eyes: {scriptHooks}};

export const StoryAccordionOutlineOverrides = () => (
  <>
    <StorybookSubHeading>Accordion Outline Overrides</StorybookSubHeading>
    <Spacer>
      <Accordion
        header={
          <StyledBlock>
            <IconFilledAccountBalance
              overrides={{size: 'iconSize020', marginInlineEnd: '8px'}}
            />
            Custom Color
          </StyledBlock>
        }
        label="Hide"
        expanded
        overrides={{
          header: {
            stylePreset: 'customOutlineColor',
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
            Custom Style
          </StyledBlock>
        }
        label="Hide"
        expanded
        overrides={{
          header: {
            stylePreset: 'customOutlineStyle',
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
            Custom Width
          </StyledBlock>
        }
        label="Hide"
        expanded
        overrides={{
          header: {
            stylePreset: 'customOutlineWidth',
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
            Custom Offset
          </StyledBlock>
        }
        label="Hide"
        expanded
        overrides={{
          header: {
            stylePreset: 'customOutlineOffset',
          },
        }}
      >
        {content}
      </Accordion>
    </Spacer>
  </>
);

StoryAccordionOutlineOverrides.storyName = 'accordion-with-outline-overrides';
StoryAccordionOutlineOverrides.parameters = {eyes: {scriptHooks}};

export const StoryAccordionGroupTransitionOverrides = () => {
  const noTransitions = {
    header: {
      transitionPreset: [],
    },
    panel: {
      transitionPreset: [],
    },
  };

  const slowTransitions = {
    header: {
      transitionPreset: {
        extend: 'backgroundColorChange',
        base: {
          transitionDuration: '1000ms',
        },
      },
    },
    panel: {
      transitionPreset: [
        {
          extend: 'maxHeightChange',
          base: {
            transitionProperty: 'max-height',
          },
          enterActive: {
            transitionDuration: '2000ms',
          },
          exitActive: {
            transitionDuration: '2000ms',
          },
        },
        {
          extend: 'slideLeft',
          enterActive: {
            transitionDuration: '2000ms',
          },
          exitActive: {
            transitionDuration: '2000ms',
          },
        },
      ],
    },
  };

  return (
    <>
      <StorybookHeading>Accordion Group Transition Overrides</StorybookHeading>
      <StorybookSubHeading>No transitions</StorybookSubHeading>
      <AccordionGroup>
        <Accordion header="Header 64" overrides={noTransitions}>
          {content}
        </Accordion>
        <Accordion header="Header 65" overrides={noTransitions}>
          {content}
        </Accordion>
        <Accordion header="Header 66" overrides={noTransitions}>
          {content}
        </Accordion>
      </AccordionGroup>
      <StorybookSubHeading>Multiple slow transitions</StorybookSubHeading>
      <AccordionGroup>
        <Accordion header="Header 67" overrides={slowTransitions}>
          {content}
        </Accordion>
        <Accordion header="Header 68" overrides={slowTransitions}>
          {content}
        </Accordion>
        <Accordion header="Header 69" overrides={slowTransitions}>
          {content}
        </Accordion>
      </AccordionGroup>
    </>
  );
};
StoryAccordionGroupTransitionOverrides.storyName =
  'accordion-group-transition-overrides';
StoryAccordionGroupTransitionOverrides.parameters = {
  eyes: {include: false},
  percy: {skip: true},
};

export default {
  title: 'Components/accordion',
  component: () => 'None',
  decorators: [
    (Story: StoryType, context: {globals: {backgrounds: {value: string}}}) => (
      <ThemeProvider
        theme={createCustomThemeWithBaseThemeSwitch(
          context?.globals?.backgrounds?.value,
          accordionCustomThemeObject,
        )}
      >
        <Story />
      </ThemeProvider>
    ),
  ],
};
