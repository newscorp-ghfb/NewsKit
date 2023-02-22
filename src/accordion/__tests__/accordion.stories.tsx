import * as React from 'react';
import {Story as StoryType} from '@storybook/react';
import {StorybookCase, StorybookPage} from '../../test/storybook-comps';
import {Accordion} from '../accordion';
import {Block} from '../../block';
import {TextBlock} from '../../text-block';
import {Image} from '../../image';
import {IconFilledAddCircle, IconOutlinedStarOutline} from '../../icons';
import {ThemeProvider, CreateThemeArgs} from '../../theme';
import {styled} from '../../utils/style';
import {createCustomThemeWithBaseThemeSwitch} from '../../test/theme-select-object';
import {AccordionGroup} from '../accordion-group';

const COLS = '1fr';
const CONTENT = (
  <TextBlock typographyPreset="editorialParagraph010" stylePreset="inkContrast">
    Panel content
  </TextBlock>
);

const IconContainer = styled(Block)`
  display: flex;
  align-items: center;
`;

export const StoryAccordionDefault = () => {
  const [expandedSingle, toggleExpandedSingle] = React.useState(false);
  const [expandedGroup, toggleExpandedGroup] = React.useState<number[]>([]);
  return (
    <StorybookPage columns={COLS}>
      <StorybookCase title="Single">
        <Accordion
          header="Header"
          expanded={expandedSingle}
          onClick={() => toggleExpandedSingle(!expandedSingle)}
        >
          {CONTENT}
        </Accordion>
      </StorybookCase>
      <StorybookCase title="Group">
        <AccordionGroup expanded={expandedGroup} onChange={toggleExpandedGroup}>
          <Accordion header="Header">{CONTENT}</Accordion>
          <Accordion header="Header">{CONTENT}</Accordion>
          <Accordion header="Header">{CONTENT}</Accordion>
        </AccordionGroup>
      </StorybookCase>
    </StorybookPage>
  );
};
StoryAccordionDefault.storyName = 'Default';

export const StoryAccordionStates = () => {
  const [expandedSingle, toggleExpandedSingle] = React.useState(false);
  return (
    <StorybookPage columns={COLS}>
      <StorybookCase title="Disabled">
        <Accordion
          disabled
          header="Header"
          expanded={expandedSingle}
          onClick={() => toggleExpandedSingle(!expandedSingle)}
        >
          {CONTENT}
        </Accordion>
      </StorybookCase>
    </StorybookPage>
  );
};
StoryAccordionStates.storyName = 'States';

export const StoryAccordionVariations = () => (
  <StorybookPage columns={COLS}>
    <StorybookCase title="Leading icon">
      <Accordion
        header={
          <IconContainer>
            <IconOutlinedStarOutline
              overrides={{size: 'iconSize020', marginInlineEnd: 'space030'}}
            />
            Header
          </IconContainer>
        }
      >
        {CONTENT}
      </Accordion>
    </StorybookCase>
    <StorybookCase title="Leading image">
      <Accordion
        header={
          <IconContainer>
            <Image
              src="/1x1-placeholder.png"
              alt="Example Image"
              overrides={{
                height: '30px',
                width: '30px',
                marginInlineEnd: '8px',
              }}
            />
            Header
          </IconContainer>
        }
      >
        {CONTENT}
      </Accordion>
    </StorybookCase>

    <StorybookCase title="Show label">
      <Accordion header="Header" label="Show">
        {CONTENT}
      </Accordion>
    </StorybookCase>
    <StorybookCase title="Hide label">
      <Accordion header="Header" label="Hide" expanded>
        {CONTENT}
      </Accordion>
    </StorybookCase>
  </StorybookPage>
);
StoryAccordionVariations.storyName = 'Variations';

export const StoryAccordionUncontrolled = () => (
  <StorybookPage columns={COLS}>
    <StorybookCase title="None expanded on load">
      <AccordionGroup>
        <Accordion header="Header">{CONTENT}</Accordion>
        <Accordion header="Header">{CONTENT}</Accordion>
      </AccordionGroup>
    </StorybookCase>
    <StorybookCase title="Can expand single">
      <AccordionGroup expandSingle defaultExpanded={[0]}>
        <Accordion header="Header">{CONTENT}</Accordion>
        <Accordion header="Header">{CONTENT}</Accordion>
      </AccordionGroup>
    </StorybookCase>
    <StorybookCase title="Can expand multiple">
      <AccordionGroup defaultExpanded={[0, 1]}>
        <Accordion header="Header">{CONTENT}</Accordion>
        <Accordion header="Header">{CONTENT}</Accordion>
      </AccordionGroup>
    </StorybookCase>
  </StorybookPage>
);
StoryAccordionUncontrolled.storyName = 'Uncontrolled';

export const StoryAccordionControlled = () => {
  const [expandedSingle, setExpandedSingle] = React.useState([0]);
  const [expandedMultiple, setExpandedMultiple] = React.useState([0, 1]);

  return (
    <StorybookPage columns={COLS}>
      <StorybookCase title="Can expand single">
        <AccordionGroup
          expanded={expandedSingle}
          onChange={setExpandedSingle}
          expandSingle
        >
          <Accordion header="Header">{CONTENT}</Accordion>
          <Accordion header="Header">{CONTENT}</Accordion>
        </AccordionGroup>
      </StorybookCase>
      <StorybookCase title="Can expand multiple">
        <AccordionGroup
          expanded={expandedMultiple}
          onChange={setExpandedMultiple}
        >
          <Accordion header="Header">{CONTENT}</Accordion>
          <Accordion header="Header">{CONTENT}</Accordion>
        </AccordionGroup>
      </StorybookCase>
    </StorybookPage>
  );
};
StoryAccordionControlled.storyName = 'Controlled';

export const StoryAccordionStylingOverrides = () => (
  <StorybookPage columns={COLS}>
    <StorybookCase title="Disabled">
      <Accordion
        header={
          <IconContainer>
            <IconOutlinedStarOutline
              overrides={{
                size: 'iconSize020',
                marginInlineEnd: '8px',
              }}
            />
            Header
          </IconContainer>
        }
        label="Show"
        overrides={{
          header: {stylePreset: 'accordionHeaderCustom'},
        }}
      >
        {CONTENT}
      </Accordion>
    </StorybookCase>
  </StorybookPage>
);
StoryAccordionStylingOverrides.storyName = 'Styling overrides';

export const StoryAccordionOverrides = () => (
  <StorybookPage columns={COLS}>
    <StorybookCase title="Indicator icon prop">
      <Accordion
        header="Header"
        label="Show"
        overrides={{
          header: {
            indicatorIcon: {
              props: {
                overrides: {
                  stylePreset: 'indicatorIconProp',
                  size: 'iconSize020',
                },
              },
            },
          },
        }}
      >
        {CONTENT}
      </Accordion>
    </StorybookCase>

    <StorybookCase title="Indicator icon">
      <Accordion
        header="Header"
        label="Show"
        overrides={{
          header: {
            indicatorIcon: {
              stylePreset: 'indicatorIconProp',
              size: 'iconSize030',
            },
          },
        }}
      >
        {CONTENT}
      </Accordion>
    </StorybookCase>

    <StorybookCase title="Indicator icon component">
      <Accordion
        header="Header"
        label="Hide"
        expanded
        overrides={{
          header: {
            indicatorIcon: () => (
              <IconFilledAddCircle
                overrides={{
                  size: 'iconSize020',
                  stylePreset: 'customIconFilledAddCircle',
                }}
              />
            ),
          },
        }}
      >
        {CONTENT}
      </Accordion>
    </StorybookCase>
  </StorybookPage>
);
StoryAccordionOverrides.storyName = 'Overrides';

export const StoryAccordionLogicalProps = () => (
  <StorybookPage columns={COLS}>
    <StorybookCase title="logical props overrides on Accordion">
      <Accordion
        header="Header"
        label="Show"
        expanded
        overrides={{
          paddingBlock: '12px',
          marginBlock: '12px',
          header: {
            paddingBlock: '12px',
            marginBlock: '12px',
          },
          panel: {
            paddingBlock: '12px',
            marginBlock: '12px',
          },
        }}
      >
        {CONTENT}
      </Accordion>
    </StorybookCase>
  </StorybookPage>
);
StoryAccordionLogicalProps.storyName = 'Logical props overrides';

export const StoryAccordionOutlineOverrides = () => (
  <StorybookPage columns={COLS}>
    <StorybookCase title="Custom colour">
      <Accordion
        label="Show"
        header="Header"
        overrides={{header: {stylePreset: 'customOutlineColor'}}}
      >
        {CONTENT}
      </Accordion>
    </StorybookCase>
    <StorybookCase title="Custom style">
      <Accordion
        label="Show"
        header="Header"
        overrides={{header: {stylePreset: 'customOutlineStyle'}}}
      >
        {CONTENT}
      </Accordion>
    </StorybookCase>
    <StorybookCase title="Custom width">
      <Accordion
        label="Show"
        header="Header"
        overrides={{header: {stylePreset: 'customOutlineWidth'}}}
      >
        {CONTENT}
      </Accordion>
    </StorybookCase>
    <StorybookCase title="Custom offset">
      <Accordion
        label="Show"
        header="Header"
        overrides={{header: {stylePreset: 'customOutlineOffset'}}}
      >
        {CONTENT}
      </Accordion>
    </StorybookCase>
  </StorybookPage>
);

StoryAccordionOutlineOverrides.storyName = 'Outline overrides';

export const StoryAccordionTransitionOverrides = () => {
  const noTransitions = {
    header: {transitionPreset: []},
    panel: {transitionPreset: []},
  };

  const slowTransitions = {
    header: {
      transitionPreset: {
        extend: 'backgroundColorChange',
        base: {transitionDuration: '1000ms'},
      },
    },
    panel: {
      transitionPreset: [
        {
          extend: 'maxHeightChange',
          base: {transitionProperty: 'max-height'},
          enterActive: {transitionDuration: '1500ms'},
          exitActive: {transitionDuration: '1500ms'},
        },
        {
          extend: 'slideLeft',
          enterActive: {transitionDuration: '1500ms'},
          exitActive: {transitionDuration: '1500ms'},
        },
      ],
    },
  };
  return (
    <StorybookPage columns={COLS}>
      <StorybookCase title="No transition">
        <AccordionGroup>
          <Accordion header="Header" overrides={noTransitions}>
            {CONTENT}
          </Accordion>
          <Accordion header="Header" overrides={noTransitions}>
            {CONTENT}
          </Accordion>
          <Accordion header="Header" overrides={noTransitions}>
            {CONTENT}
          </Accordion>
        </AccordionGroup>
      </StorybookCase>
      <StorybookCase title="Transition">
        <AccordionGroup>
          <Accordion header="Header" overrides={slowTransitions}>
            {CONTENT}
          </Accordion>
          <Accordion header="Header" overrides={slowTransitions}>
            {CONTENT}
          </Accordion>
          <Accordion header="Header" overrides={slowTransitions}>
            {CONTENT}
          </Accordion>
        </AccordionGroup>
      </StorybookCase>
    </StorybookPage>
  );
};
StoryAccordionTransitionOverrides.storyName = 'Transition overrides';
StoryAccordionTransitionOverrides.parameters = {
  percy: {skip: true},
};

const accordionCustomThemeObject: CreateThemeArgs = {
  name: 'my-custom-accordion-theme',
  overrides: {
    stylePresets: {
      accordionHeaderCustom: {
        base: {
          backgroundColor: '{{colors.interfaceInformative020}}',
          borderStyle: 'none none solid none',
          borderWidth: '{{borders.borderWidth010}}',
          color: '{{colors.inkContrast}}',
          iconColor: '{{colors.inkContrast}}',
        },
        hover: {
          backgroundColor: '{{colors.interfaceInformative010}}',
          color: '{{colors.inkInverse}}',
          iconColor: '{{colors.inkInverse}}',
        },
        'focus-visible': {
          outlineColor: '{{outlines.outlineColorDefault}}',
          outlineStyle: '{{outlines.outlineStyleDefault}}',
          outlineWidth: '{{outlines.outlineWidthDefault}}',
          safariOutlineStyle: '{{outlines.safariOutlineStyleDefault}}',
        },
      },
      customIconFilledAddCircle: {
        base: {iconColor: '{{colors.amber050}}'},
      },
      indicatorIconProp: {
        base: {iconColor: '{{colors.amber050}}'},
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
          outlineWidth: '3px',
          outlineOffset: '15px',
        },
      },
    },
  },
};

export default {
  title: 'Components/Accordion',
  component: Accordion,
  parameters: {
    nkDocs: {
      title: 'Accordion',
      url: 'https://newskit.co.uk/components/accordion',
      description:
        'Accordions show and hide related content. Use them to break up long pages into segmented, prioritised sections.',
    },
  },
  disabledRules: ['landmark-unique'],
  decorators: [
    (
      Story: StoryType,
      context: {name: string; globals: {backgrounds: {value: string}}},
    ) => (
      <ThemeProvider
        theme={createCustomThemeWithBaseThemeSwitch(
          context?.globals?.backgrounds?.value,
          accordionCustomThemeObject,
          context?.name,
        )}
      >
        <Story />
      </ThemeProvider>
    ),
  ],
};
