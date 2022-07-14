import React from 'react';
import {UnorderedList} from 'newskit';
import {IconFilledCircle} from '../../components/icons';
import {getIllustrationComponent} from '../../components/illustrations/illustration-loader';
import {UsageKind} from '../../components/usage-card';
import {MetaStatus} from '../../components/meta/types';
import {LayoutProps} from '../../components/layout';
import {ComponentPageTemplate} from '../../templates/component-page-template';

const unorderedListOverrides = {
  spaceStack: 'space040',
  content: {
    typographyPreset: 'editorialParagraph020',
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
        illustration: 'components/image-illustration',
      },
      introduction:
        'Accordions show and hide related content. Use them to break up long pages into segmented, prioritised sections.',
    }}
    componentDefaultsKey="Menu"
    meta={{
      status: MetaStatus.Beta,
      introduced: 'v5.6.0',
      codeUrl:
        'https://github.com/newscorp-ghfb/newskit/tree/main/src/accordion',
      figmaUrl:
        'https://www.figma.com/file/FSbCQa6SzVR3K48ZWLeD77/%F0%9F%9F%A2-NK-Web-Components?node-id=324%3A4',
    }}
    anatomy={{
      introduction:
        'The Accordion contains three required elements and no optional elements.',

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
      media: getIllustrationComponent('components/image-illustration'),
    }}
    options={{
      introduction:
        'The Accordion has options that can be used to provide an appropriate experience for different use cases.',
      cards: [
        {
          title: 'Single accordion or accordion group',
          description:
            'The Accordion can be used as a single instance, or in a group of accordions stacked vertically.',
          media: getIllustrationComponent('components/image-illustration'),
        },
        {
          title: 'Heading level',
          description:
            'The Accordion title is wrapped in a heading tag. The tag is <h3> by default but can be altered to fit the information architecture of the page.',
          media: getIllustrationComponent('components/image-illustration'),
        },
        {
          title: 'Icon',
          description:
            'The indicator icon is a chevron by default but can be changed to another icon.',
          media: getIllustrationComponent('components/image-illustration'),
        },
      ],
    }}
    states={{
      introduction: 'The Accordion has the following states:',
      cards: [
        {
          title: 'Base',
          description:
            'The Accordion has a base state. This is the base style of the Accordion before it has been interacted with by a user.',
          media: getIllustrationComponent('components/image-illustration'),
        },
        {
          title: 'Focus',
          description:
            'The Accordion has a visual focus state when in focus. The focus state outlines the heading container.',
          media: getIllustrationComponent('components/image-illustration'),
        },
        {
          title: 'Hover',
          description:
            'The Accordion has a hover state. The style of the header and the cursor changes to visually communicate that the Accordion is an interactive element.',
          media: getIllustrationComponent('components/image-illustration'),
        },
        {
          title: 'Disabled',
          description:
            'The Accordion has a disabled state. The Accordion in a disabled state is not available to the user in that scenario. When the user’s cursor hovers over an Accordion in a disabled state, the cursor shows as not allowed.',
          media: getIllustrationComponent('components/image-illustration'),
        },
      ],
    }}
    behaviors={{
      introduction:
        'The following guidance describes how an Accordion behaves.',
      cards: [
        {
          title: 'Collapsed/expanded',
          description: (
            <>
              The Accordion has two states:
              <br />
              <br />
              <UnorderedList
                listItemMarker={IconFilledCircle}
                overrides={unorderedListOverrides}
              >
                <>collapsed with the panel closed</>
                <>expanded with the panel open</>
              </UnorderedList>
              <br />
              The default state is collapsed. The chevron icon points down when
              the Accordion panel is collapsed and points up when the Accordion
              panel is expanded.
            </>
          ),
          media: getIllustrationComponent('components/image-illustration'),
        },
        {
          title: 'First expanded on load',
          description: 'The first Accordion in a group is expanded on load.',
          media: getIllustrationComponent('components/image-illustration'),
        },
        {
          title: 'Expand all',
          description:
            'The Accordion displays all panels in a group expanded on load.',
          media: getIllustrationComponent('components/image-illustration'),
        },
        {
          title: 'Expand single',
          description:
            'Only one single panel can be expanded. When an Accordion panel is expanded, the open panel is collapsed. ',
          media: getIllustrationComponent('components/image-illustration'),
        },
      ],
    }}
    usage={{
      introduction:
        'The following guidance describes how and when to appropriately use the Accordion component.',
      cards: [
        {
          description: 'Use an Accordion to provide supporting information.',
          kind: UsageKind.DO,
          media: getIllustrationComponent('components/image-illustration'),
        },
        {
          description: 'Conceal important information in an Accordion.',
          kind: UsageKind.DONT,
          media: getIllustrationComponent('components/image-illustration'),
        },
        {
          description:
            'Write short, meaningful headings that allow users to understand what is inside the panel. Group together related topics.',
          kind: UsageKind.DO,
          media: getIllustrationComponent('components/image-illustration'),
        },
        {
          description: 'Nest accordions within themselves.',
          kind: UsageKind.DONT,
          media: getIllustrationComponent('components/image-illustration'),
        },
      ],
    }}
    accessibility={{
      introduction: (
        <>
          The Accordion has the following accessibility considerations:
          <br />
          <br />
          <UnorderedList
            listItemMarker={IconFilledCircle}
            overrides={unorderedListOverrides}
          >
            <>
              Accordions must be discoverable and readable with a mouse, other
              pointer devices, keyboard, screen reader, zoom tools, and any
              other assistive technology.
            </>
            <>
              Exercise care in choosing how Accordions are used and the content
              they contain. Hiding content in Accordions can make it more
              difficult for a user to scan the page and increases their
              cognitive load.
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
            role: 'Focuses to the header.',
          },
          {
            order: 2,
            element: 'Panel',
            role:
              'If the panel is expanded, focuses to first interactive element in the panel, then each subsequent element.',
          },
        ],
      },
      interaction: {
        title: 'Keyboard Interactions',
        tableRows: [
          {
            command: ['Space or Rtn'],
            description:
              'Expand or collapse a section. If the implementation allows only one panel to be expanded at a time, and there is a panel expanded, the expanded panel will collapse.',
          },
          {
            command: ['Tab'],
            description: 'Moves focus to the next focusable element',
          },
          {
            command: ['Shift & Tab'],
            description: 'Moves focus to the previous focusable element',
          },
        ],
      },
      aria: {
        title: 'WAI-ARIA',
        tableRows: [
          {
            element: 'button',
            attribute: [
              'aria-expanded="true"',
              'aria-controls=”ID”',
              'role="region"',
            ],
            value: '',
            description: (
              <>
                Set to true when the Accordion panel is expanded, otherwise set
                to false.
                <br />
                <br />
                Points to the ID of the panel which the header controls.
                <br />
                <br />
                Creates a landmark for the current expanded accordion.
              </>
            ),
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
                region elements are required to have an accessible name to be
                identified as a landmark.
              </>
            ),
          },
        ],
      },
    }}
    seo={{
      title: 'SEO Considerations',
      introduction: (
        <>
          Ensure all text, icons, and images are visible in the Accordion so
          that information can be crawled and indexed.
          <br />
          <br />
          The Accordion component and its content are rendered to the DOM, but
          only visible to the user when the panel is open.
        </>
      ),
    }}
    compliance={{
      states: true,
      variations: true,
      themes: true,
      behaviours: true,
      usage: true,
      accessibility: true,
      seo: true,
      performance: false,
      design: true,
      props: true,
      uiKit: true,
    }}
    related={{
      related: ['Tabs', 'Link', 'Menu'],
    }}
  />
);

export default AccordionComponent;
