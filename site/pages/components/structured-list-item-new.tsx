import React from 'react';
import {
  Flow,
  IconOutlinedArrowForwardIos,
  Stack,
  StackDistribution,
  StructuredListCell,
  StructuredListItem,
} from 'newskit';
import {MetaStatus} from '../../components/meta/types';
import {LayoutProps} from '../../components/layout';
import {ComponentPageTemplate} from '../../components/component-page-template';

export default (layoutProps: LayoutProps) => (
  <ComponentPageTemplate
    layoutProps={layoutProps}
    pageIntroduction={{
      type: 'Component',
      name: 'Structured List',
      hero: {
        src: '/static/button-hero.svg',
        alt: 'structured-list-item-demo-image',
      },
      introduction:
        'Structured lists group content that is similar or related.',
    }}
    componentDefaultsKey="structuredList"
    meta={{
      status: MetaStatus.Beta,
      introduced: 'v3.X.0',
      codeUrl: 'https://github.com/newscorp-ghfb/ncu-newskit',
      figmaUrl: 'https://github.com/newscorp-ghfb/ncu-newskit',
    }}
    interactiveDemo={{
      introduction:
        'This demo allows you to preview the StructuredList component, its variations, and configuration options.',
      playground: {
        componentName: 'StructuredList',
        component: state => (
          <StructuredListItem {...state}>
            <StructuredListCell>Label</StructuredListCell>
            <StructuredListCell>
              A short description of the label
            </StructuredListCell>
            <StructuredListCell>
              <Stack
                stackDistribution={StackDistribution.End}
                flow={Flow.HorizontalTop}
              >
                <IconOutlinedArrowForwardIos
                  overrides={{size: 'iconSize010'}}
                />
              </Stack>
            </StructuredListCell>
          </StructuredListItem>
        ),
        knobs: [],
      },
    }}
    anatomy={{
      introduction: 'Structure Lists contain three required elements.',
      rows: [
        {
          name: 'structuredListItem',
          description: 'Includes a list of Cells',
          component: ['Grid, Cell'],
          optional: undefined,
        },
        {
          name: 'structuredListCell',
          description: 'Includes content within the cells',
          component: 'Cell',
          optional: undefined,
        },
      ],
      media: {},
    }}
    states={{
      introduction:
        'When a structured list is interactive, it has states including, base, hover, active, disabled, and focus.',
      cards: [
        {
          title: 'Base',
          description:
            'Structured List has a base state. This is the base style of the list item before it has been interacted with by a user.',
        },
        {
          title: 'Hover',
          description:
            'Structured List has a hover state. The style of the list item changes to visually communicate and provide feedback to the user that the list item is an interactive element.',
        },
        {
          title: 'Active',
          description:
            'Structured List has an active state. The style of the list item changes to visually communicate and provide feedback to the user that the structured list item has been interacted with.',
        },
        {
          title: 'Disabled',
          description:
            'Structured List in a disabled state communicates that a list item exists, but is not available to the user in that scenario. When the user’s cursor hovers over a list item in a disabled state, the cursor shows as not-allowed. Disabled structured list items are often used to maintain layout consistency and communicate that a list item may become available if another condition has been met.',
        },
        {
          title: 'Focus',
          description:
            'Structured List in a focus state communicates that a user has highlighted an ist item, using an input method such as a keyboard or voice.',
        },
      ],
    }}
    behaviors={{
      introduction:
        'The following guidance describes how a structured list behaves.',
      cards: [
        {
          title: 'Alignment',
          description: `On XS> breakpoints, the content of the third cell align to the vertical center.
           On MD> breakpoints, the content of the third cell align to the top.`,
        },
      ],
    }}
    accessibility={{
      introduction: 'Structured List',
      focusOrder: {
        title: 'Focus order',
        tableRows: [
          {
            order: 1,
            element: 'listitem',
            role: 'Focusses to the first list item',
          },
        ],
      },
      interaction: {
        title: 'Keyboard Interactions',
        tableRows: [
          {
            command: ['Tab'],
            description:
              'When focus is outside of the StructuredList, it moves focus to the first list item (if it’s interactive). If focus is on a list item, it moves focus to the next element on the page.',
          },
          {
            command: ['Rtn'],
            description: 'Activates the list item.',
          },
        ],
      },
      aria: {
        title: 'WAI-ARIA',
        tableRows: [
          {
            element: 'StructuredList',
            attribute: 'arialabel',
            value: '',
            description:
              'Aria-label attribute is used to define the name of the structured list',
            userSupplied: true,
          },
          {
            element: 'StructuredListItem',
            attribute: 'arialabel',
            value: '',
            description:
              'Aria-label attribute is used to define the name of the listitem',
            userSupplied: true,
          },
        ],
      },
    }}
    componentAPI={{
      introduction:
        'StructuredList have a number of props to facilitate a variety of uses:',
      components: [
        {
          title: 'StructuredListItem',
          summary:
            'A StructuredListItem has a range of props that can be used to define an appropriate experience for different use cases.',
          propsRows: [
            {
              name: 'children',
              type: 'React.ReactNode',
              required: true,
              description: 'An array of StructuredListCell components',
            },
            {
              name: 'ariaLabel',
              type: 'string',
              description:
                'Defines the aria-label attribute of the StructuredListItem',
            },
            {
              name: 'disabled',
              type: 'boolean',
              default: 'false',
              description:
                'If true, renders a StructuredListItem in a disabled state',
            },
          ],
          overridesRows: [
            {
              attribute: 'stylePreset',
              type: 'MQ<string>',
              description: `If provided, this overrides the stylePreset applied to the StructuredListItem's most
                outer container. Can be used to override the background color of the StructuredListItem.`,
            },
            {
              attribute: 'minHeight',
              type: 'MQ<string>',
              description: `If provided, this overrides the minHeight applied to the StructuredListItem's most
                outer container.`,
            },
            {
              attribute: 'spaceInset',
              type: 'MQ<string>',
              description: `If provided, this overrides the spaceInset applied to the StructuredListItem's most
                outer container`,
            },
          ],
        },
        {
          title: 'StucturedListCell',
          summary:
            'A StucturedListCell has a range of props that can be used to define an appropriate experience for different use cases.',
          propsRows: [
            {
              name: 'children',
              type: 'React.ReactNode',
              required: true,
              description: 'Content rendered inside the Stuctured List Cell',
            },
            {
              name: 'pullRight',
              type: 'boolean',
              default: 'false',
              description:
                'If true, the cell with pullRight prop will be pulled to the right',
            },
          ],
        },
      ],
    }}
    compliance={{
      variations: true,
      states: true,
      behaviours: true,
      usage: true,
      accessibility: true,
      seo: true,
      props: true,
      performance: false,
      design: true,
      uiKit: true,
      themes: true,
    }}
  />
);
