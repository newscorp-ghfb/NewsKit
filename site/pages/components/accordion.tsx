import React from 'react';
import {UnorderedList} from 'newskit';
import {IconFilledCircle} from '../../components/icons';
import {getIllustrationComponent} from '../../components/illustrations/illustration-loader';
import {UsageKind} from '../../components/usage-card';
import {MetaStatus} from '../../components/meta/types';
import {LayoutProps} from '../../components/layout';
import {ComponentPageTemplate} from '../../templates/component-page-template';
import {
  getLogicalPropsTable,
  logicalPaddingOverrideProps,
} from '../../components/component-api/common-logical-props';

const unorderedListOverrides = {
  spaceStack: 'space040',
  content: {
    typographyPreset: 'editorialParagraph030',
  },
};

const AccordionComponent = (layoutProps: LayoutProps) => (
  <ComponentPageTemplate
    headTags={{
      title: 'Accordion',
      description:
        'Accordions show and hide related content. Use them to break up long pages into segmented, prioritised sections.',
    }}
    layoutProps={layoutProps}
    pageIntroduction={{
      type: 'Navigation',
      name: 'Accordion',
      hero: {
        illustration: 'components/accordion/hero',
      },
      introduction:
        'Accordions show and hide related content. Use them to break up long pages into segmented, prioritised sections.',
    }}
    componentDefaultsKey="Accordion"
    meta={{
      status: MetaStatus.Supported,
      introduced: 'v5.6.0',
      codeUrl:
        'https://github.com/newscorp-ghfb/newskit/tree/main/src/accordion',
      figmaUrl:
        'https://www.figma.com/file/FSbCQa6SzVR3K48ZWLeD77/%F0%9F%9F%A2-NK-Web-Components?node-id=324%3A4',
    }}
    anatomy={{
      introduction:
        'The accordion component contains three required elements and no optional elements.',
      rows: [
        {
          name: 'Header',
          description: 'The control for opening and closing the panel.',
          component: ['Text Block'],
          optional: undefined,
        },
        {
          name: 'Panel',
          description: 'The expanded panel.',
          component: ['Block'],
          optional: undefined,
        },
        {
          name: 'Indicator',
          description:
            'Indicates which state the accordion is in. Typically in the form of a chevron icon, a show/hide label, or both.',
          component: ['Label', 'Icon Button'],
          optional: undefined,
        },
      ],
      media: getIllustrationComponent('components/accordion/anatomy'),
    }}
    options={{
      introduction: 'The accordion has options for different use cases:',
      cards: [
        {
          title: 'Single accordion or accordion group',
          description:
            'Use the accordion as a single instance, or in a group of accordions stacked vertically.',
          media: getIllustrationComponent(
            'components/accordion/options/singlegroup',
          ),
        },
        {
          title: 'Heading level',
          description:
            'The accordion title is wrapped in a heading tag (<h3> by default). Alter it to fit the information architecture of the page.',
          media: getIllustrationComponent(
            'components/accordion/options/heading',
          ),
        },
        {
          title: 'Icon',
          description: 'Change the indicator icon from the default chevron.',
          media: getIllustrationComponent('components/accordion/options/icon'),
        },
      ],
    }}
    states={{
      introduction: 'The accordion has the following states:',
      cards: [
        {
          title: 'Base',
          description:
            'The default style before the user interacts with the accordion.',
          media: getIllustrationComponent('components/accordion/states/base'),
        },
        {
          title: 'Focus',
          description:
            'The accordion has a visual focus state when in focus. The focus state outlines the heading container.',
          media: getIllustrationComponent('components/accordion/states/focus'),
        },
        {
          title: 'Hover',
          description:
            'The header and cursor change style to let the user know the accordion is interactive.',
          media: getIllustrationComponent('components/accordion/states/hover'),
        },
        {
          title: 'Disabled',
          description:
            'Communicates that an accordion exists, but isn’t available in that scenario. When the user hovers over a checkbox in a disabled state, the cursor shows as ‘not allowed’.',
          media: getIllustrationComponent(
            'components/accordion/states/disabled',
          ),
        },
      ],
    }}
    behaviors={{
      introduction: 'Here’s how the accordion behaves:',
      cards: [
        {
          title: 'Collapsed/expanded',
          description: (
            <>
              The Accordion has two states:
              <UnorderedList
                listItemMarker={IconFilledCircle}
                overrides={{
                  content: {
                    typographyPreset: 'editorialParagraph020',
                  },
                  paddingBlockStart: 'space050',
                  paddingBlockEnd: 'space030',
                  spaceStack: 'space040',
                }}
              >
                <>collapsed with the panel closed</>
                <>expanded with the panel open</>
              </UnorderedList>
              The default state is collapsed. The chevron icon points down when
              the Accordion panel is collapsed and points up when the Accordion
              panel is expanded.
            </>
          ),
          media: getIllustrationComponent(
            'components/accordion/behaviours/collapseexpand',
          ),
        },
        {
          title: 'First expanded on load',
          description: 'The first Accordion in a group is expanded on load.',
          media: getIllustrationComponent(
            'components/accordion/behaviours/firstexpandedonload',
          ),
        },
        {
          title: 'Expand all',
          description: 'All panels in a group are expanded on load.',
          media: getIllustrationComponent(
            'components/accordion/behaviours/allexpandedonload',
          ),
        },
        {
          title: 'Expand single',
          description:
            'Only one panel can be expanded at a time. When the user expands another accordion panel, the current panel collapses.',
          media: getIllustrationComponent(
            'components/accordion/behaviours/singleexpanded',
          ),
        },
      ],
    }}
    usage={{
      introduction: 'Here’s how and when to use the accordion:',
      cards: [
        {
          title: 'Do use for supporting information',
          description: 'Use accordions to provide supporting information.',
          kind: UsageKind.DO,
          media: getIllustrationComponent('components/accordion/usage/do01'),
        },
        {
          title: 'Don’t use for important information',
          description: 'Avoid concealing crucial information in an accordion.',
          kind: UsageKind.DONT,
          media: getIllustrationComponent('components/accordion/usage/dont01'),
        },
        {
          title: 'Do make headlines short and clear',
          description:
            'Give accordions short, meaningful headings that tell users what’s inside the panel. Group together related topics.',
          kind: UsageKind.DO,
          media: getIllustrationComponent('components/accordion/usage/do02'),
        },
        {
          title: 'Don’t nest accordions',
          description: 'Avoid nesting accordions within themselves.',
          kind: UsageKind.DONT,
          media: getIllustrationComponent('components/accordion/usage/dont02'),
        },
      ],
    }}
    accessibility={{
      introduction: (
        <>
          The accordion has the following accessibility considerations:
          <br />
          <br />
          <UnorderedList
            markerAlign="start"
            listItemMarker={IconFilledCircle}
            overrides={unorderedListOverrides}
          >
            <>
              Accordions must be discoverable and readable with a mouse, other
              pointer devices, keyboard, screen reader, zoom tools and any other
              assistive technology.
            </>
            <>
              Exercise care in choosing how accordions are used and the content
              they contain. Hiding content in accordions can make it more
              difficult for a user to scan the page and increases cognitive
              load.
            </>
          </UnorderedList>
        </>
      ),
      focusOrder: {
        title: 'Focus order',
        tableRows: [
          {
            order: 1,
            element: 'Header',
            role: 'Focusses to the header',
          },
          {
            order: 2,
            element: 'Panel',
            role:
              'If the panel is expanded, focusses to the first interactive element in the panel, then each subsequent element',
          },
        ],
      },
      interaction: {
        title: 'Keyboard interactions',
        tableRows: [
          {
            command: ['Space or Rtn'],
            description:
              'Expand or collapse a panel. If the implementation allows only one panel to be expanded at a time, and there’s already a panel expanded, the expanded panel collapses',
          },
          {
            command: ['Tab'],
            description: 'Moves focus to the next focussable element',
          },
          {
            command: ['Shift', 'Tab'],
            description: 'Moves focus to the previous focussable element',
          },
        ],
      },
      aria: {
        title: 'WAI-ARIA',
        tableRows: [
          {
            element: 'button',
            attribute: ['aria-expanded="true"'],
            value: 'boolean',
            description: (
              <>
                Set to ‘true’ when the accordion panel is expanded, otherwise
                set to ‘false’
              </>
            ),
          },
          {
            element: 'button',
            attribute: 'aria-controls=”ID”',
            value: '',
            description:
              'Points to the ID of the panel which the header controls.',
          },
          {
            element: 'button',
            attribute: 'role="region"',
            value: '',
            description:
              'Creates a landmark for the current expanded accordion.',
          },
          {
            element: 'panel',
            attribute: 'aria-labelledby="IDREF"',
            value: '',
            description: (
              <>
                Defines the accessible name for the region element.
                <br />
                <br />
                References the accordion header button that expands and
                collapses the region.
                <br />
                <br />
                Region elements are required to have an accessible name to be
                identified as a landmark.
              </>
            ),
          },
        ],
      },
    }}
    seo={{
      title: 'SEO considerations',
      introduction: (
        <UnorderedList
          markerAlign="start"
          listItemMarker={IconFilledCircle}
          overrides={unorderedListOverrides}
        >
          <>
            Ensure all text, icons and images are visible in the accordion so
            that information can be crawled and indexed.
          </>
          <>
            The accordion component and its content are rendered to the DOM, but
            only visible to the user when the panel is open.
          </>
        </UnorderedList>
      ),
    }}
    componentAPI={{
      components: [
        {
          title: 'Accordion',
          propsSummary:
            'The accordion has a range of props for different use cases, and a range of predefined elements and attributes that can be overridden to define its appearance.',
          overridesSummary:
            'The accordion has a range of props for different use cases, and a range of predefined elements and attributes that can be overridden to define its appearance.',
          propsRows: [
            {
              name: 'children',
              type: "Exclude<React.ReactNode, 'undefined'>",
              description: `Displays supplied content in the open accordion panel`,
              required: undefined,
            },
            {
              name: 'expanded',
              type: 'boolean',
              default: 'false',
              description: `Determines if the panel is expanded or collapsed. If ‘true’, the panel is open`,
              required: undefined,
            },
            {
              name: 'disabled',
              type: 'boolean',
              default: 'false',
              description: `If ‘true’, renders the accordion in a disabled state`,
              required: undefined,
            },
            {
              name: 'header',
              type: "Exclude<React.ReactNode, 'undefined'>",
              description: `Displays the content of the header`,
              required: undefined,
            },
            {
              name: 'headerAs',
              type: "'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span';",
              default: 'h3',
              description: `Change the underlying HTML element on the header`,
              required: undefined,
            },

            {
              name: 'label',
              type: 'string',
              description: `Additional label on the accordion`,
              required: undefined,
            },
            {
              name: 'ariaControls',
              type: 'string',
              description: `HTML aria-controls attribute`,
              required: undefined,
            },
            {
              name: 'id',
              type: 'string',
              description: `HTML id attribute`,
              required: undefined,
            },
            {
              name: 'expanded',
              type: 'boolean',
              default: 'false',
              description: `Determines if the accordion is expanded or collapsed`,
              required: undefined,
            },
            {
              name: 'onChange',
              type: '(expanded: boolean) => void',
              description: `Emit event when accordion changes its state (expanded/collapsed)`,
              required: undefined,
            },
          ],
          overridesRows: [
            {
              attribute: 'header.transitionPreset',
              type: 'MQ<string>',
              default: 'backgroundColorChange',
              description:
                'If provided, overrides the transitionPreset of the accordion header',
            },
            {
              attribute: 'header.minWidth',
              type: 'MQ<string>',
              description:
                'If provided, overrides the minWidth property of the accordion panel',
            },
            {
              attribute: 'header.minHeight',
              type: 'MQ<string>',
              description:
                'If provided, overrides the minHeight property of the accordion panel',
            },

            {
              attribute: 'header.stylePreset',
              type: 'MQ<string>',
              default: 'accordionHeader',
              description:
                'If provided, overrides the stylePreset of the accordion header',
            },
            {
              attribute: 'header.typographyPreset',
              type: 'MQ<string>',
              default: 'utilityButton030',
              description:
                'If provided, overrides the typographyPreset of the accordion header',
            },
            {
              attribute: 'header.spaceInline',
              type: 'MQ<string>',
              default: 'space020',
              description:
                'If provided, overrides the inline space of the accordion header',
            },
            {
              attribute: 'header.indicatorIcon',
              type: 'Override<AccordionIconProps>',
              description: 'If provided, overrides the icon',
            },
            {
              attribute: 'header.indicatorIcon.stylePreset',
              type: 'MQ<string>',
              default: 'iconDefault',
              description:
                'If provided, overrides the stylePreset of the indicator icon',
            },
            {
              attribute: 'header.indicatorIcon.size',
              type: 'MQ<string>',
              default: 'iconSize020',
              description:
                'If provided, overrides the size of the indicator icon',
            },
            {
              attribute: 'header.label.typographyPreset',
              type: 'MQ<string>',
              default: 'utilityButton030',
              description:
                'If provided, overrides the typographyPreset of the indicator label',
            },

            {
              attribute: 'panel.stylePreset',
              type: 'MQ<string>',
              default: 'accordionPanel',
              description:
                'If provided, overrides the stylePreset of the accordion panel',
            },
            ...getLogicalPropsTable(logicalPaddingOverrideProps, 'panel', {
              paddingBlock: 'space030',
              paddingInline: 'space030',
            }),
          ],
        },
        {
          title: 'Accordion group',
          summary:
            'The accordion group has a range of props that can be used to define an appropriate experience for different use cases. Use this component to group accordions together.',
          propsRows: [
            {
              name: 'children',
              type: "Exclude<React.ReactNode, 'undefined'>",
              required: true,
              description: '',
            },
            {
              name: 'defaultExpanded',
              type: "number | number[] | 'all'",
              description: `Defines the index of the initially expanded accordion items (uncontrolled)`,
            },
            {
              name: 'expanded',
              type: "number | number[] | 'all'",
              description: `Defines the index of the expanded accordion items. When changing this value, AccordionGroup state is updated (controlled)`,
            },
            {
              name: 'expandSingle',
              type: 'boolean',
              default: 'false',
              description: `Determines whether the user can expand one or multiple items at the same time. When ‘true’, only one single accordion can be expanded`,
            },
            {
              name: 'onChange',
              type: '(expanded: number[]) => void',
              description: `Callback fired when expanded accordions change`,
            },
          ],
        },
      ],
    }}
    related={{
      related: ['Link', 'Menu', 'Tabs', 'Tag'],
    }}
  />
);

export default AccordionComponent;
