import React from 'react';
import {
  Block,
  Flow,
  InlineMessage,
  Stack,
  StackDistribution,
  StructuredListCell,
  StructuredListItem,
  StructuredList,
  TextBlock,
  toNewsKitIcon,
} from 'newskit';
import {ArrowForwardIos as OutlinedArrowForwardIos} from '@emotion-icons/material-outlined/ArrowForwardIos';
import {Info as FilledInfo} from '@emotion-icons/material/Info';
import {Link} from '../../components/link';
import {InlineCode} from '../../components/markdown-elements';
import {MetaStatus} from '../../components/meta/types';
import {LayoutProps} from '../../components/layout';
import {ComponentPageTemplate} from '../../templates/component-page-template';
import {getIllustrationComponent} from '../../components/illustrations/illustration-loader';
import {
  logicalMarginOverrideProps,
  logicalPaddingOverrideProps,
} from '../../components/component-api/common-logical-props';

const IconOutlinedArrowForwardIos = toNewsKitIcon(OutlinedArrowForwardIos);
const IconFilledInfo = toNewsKitIcon(FilledInfo);

const infoIcon = (
  <IconFilledInfo
    overrides={{
      size: 'iconSize020',
    }}
  />
);

const StructuredListComponent = (layoutProps: LayoutProps) => (
  <ComponentPageTemplate
    headTags={{
      title: 'StructuredList',
      description: '',
    }}
    layoutProps={layoutProps}
    pageIntroduction={{
      type: 'Layout',
      name: 'Structured List',
      hero: {
        illustration: 'components/structured-list/hero',
      },
      introduction:
        'The Structured List is a layout component that groups similar or related content.',
    }}
    componentDefaultsKey="structuredList"
    meta={{
      status: MetaStatus.Beta,
      introduced: 'v3.5.0',
      codeUrl:
        'https://github.com/newscorp-ghfb/newskit/tree/main/src/structured-list',
    }}
    interactiveDemo={{
      introduction:
        'This demo allows you to preview the Structured List component, its variations, and configuration options.',
      playground: {
        componentName: 'StructuredList',
        component: state => (
          <StructuredList divider {...state} ariaLabel="list">
            <StructuredListItem href="/" ariaLabel="interactive list item">
              <StructuredListCell>
                <TextBlock
                  stylePreset="inkContrast"
                  typographyPreset="utilityHeading010"
                >
                  Label
                </TextBlock>
              </StructuredListCell>
              <StructuredListCell>
                <TextBlock
                  stylePreset="inkSubtle"
                  typographyPreset="utilityBody020"
                >
                  A short description of the label
                </TextBlock>
              </StructuredListCell>
            </StructuredListItem>
            <StructuredListItem ariaLabel="list item 1">
              <StructuredListCell>
                <TextBlock
                  stylePreset="inkContrast"
                  typographyPreset="utilityHeading010"
                >
                  Label
                </TextBlock>
              </StructuredListCell>
              <StructuredListCell>
                <TextBlock
                  stylePreset="inkSubtle"
                  typographyPreset="utilityBody020"
                >
                  A short description of the label
                </TextBlock>
              </StructuredListCell>
              <StructuredListCell>
                <Stack
                  stackDistribution={StackDistribution.End}
                  flow={Flow.HorizontalCenter}
                >
                  <IconOutlinedArrowForwardIos
                    overrides={{size: 'iconSize010'}}
                  />
                </Stack>
              </StructuredListCell>
            </StructuredListItem>
            <StructuredListItem ariaLabel="list item 2">
              <StructuredListCell>
                <TextBlock
                  stylePreset="inkContrast"
                  typographyPreset="utilityHeading010"
                >
                  Label
                </TextBlock>
              </StructuredListCell>
              <StructuredListCell>
                <TextBlock
                  stylePreset="inkSubtle"
                  typographyPreset="utilityBody020"
                >
                  A short description of the label
                </TextBlock>
              </StructuredListCell>
              <StructuredListCell>
                <Stack
                  stackDistribution={StackDistribution.End}
                  flow={Flow.HorizontalCenter}
                >
                  <IconOutlinedArrowForwardIos
                    overrides={{size: 'iconSize010'}}
                  />
                </Stack>
              </StructuredListCell>
            </StructuredListItem>
          </StructuredList>
        ),
        knobs: [
          {
            name: 'Divider',
            propName: 'divider',
            type: 'boolean',
            value: false,
          },
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ] as any,
      },
    }}
    anatomy={{
      introduction:
        'The Structured List contains three required elements and one optional element.',
      media: getIllustrationComponent('components/structured-list/anatomy'),
      rows: [
        {
          name: 'Wrapper',
          description: 'Includes the list item(s)',
          component: ['Grid', 'Block'],
          optional: undefined,
        },
        {
          name: 'List Item',
          description: 'Includes cells',
          component: ['Grid', 'Block'],
          optional: undefined,
        },
        {
          name: 'Cell',
          description:
            'Content within the cells. Any component can be parsed to each cell (ReactNode)',
          component: ['Grid', 'Block'],
          optional: undefined,
        },
        {
          name: 'Divider',
          description: 'Divider that appears at the bottom of a list item',
          component: 'Divider',
          optional: true,
        },
      ],
    }}
    options={{
      introduction:
        'The Structured List has options that can be used to provide an appropriate experience for different use cases.',
      cards: [
        {
          title: 'List item and cell layouts',
          description: (
            <>
              The Structured List Cell can be configured to achieve multiple
              layouts by using nested grids and the{' '}
              <InlineCode>pullRight</InlineCode> prop.
            </>
          ),
          media: getIllustrationComponent(
            'components/structured-list/options/options-item-and-cell-layouts',
          ),
        },
        {
          title: 'List item dividers',
          description: (
            <>
              <Link target="_blank" href="/components/divider">
                Dividers
              </Link>{' '}
              can applied to the bottom of List items to provide visual
              separation, set via the <InlineCode>divider</InlineCode> prop.
            </>
          ),
          media: getIllustrationComponent(
            'components/structured-list/options/options-divider',
          ),
        },
        {
          title: 'Interactive items',
          description: (
            <>
              <Block spaceStack="space030">
                Structured List items can be set to be interactive by supplying
                a link for an item.
              </Block>
              <InlineMessage
                icon={infoIcon}
                role="region"
                aria-label="checkbox label position"
              >
                If a HREF is passed to the component then a chevron is rendered
                in the last cell and the item becomes interactive (to indicate
                that the item is interactive the stylePreset and cursor is set
                to pointer).
              </InlineMessage>
            </>
          ),
          media: getIllustrationComponent(
            'components/structured-list/options/options-interactive',
          ),
        },
      ],
    }}
    states={{
      introduction:
        'When a Structured List is interactive, it has states including, base, hover, active, disabled, and focus.',
      layout: '3-span',
      cards: [
        {
          title: 'Base',
          description:
            'The Structured List has a base state. This is the base style of the list item before it has been interacted with by a user.',
          media: getIllustrationComponent(
            'components/structured-list/states/base',
          ),
        },
        {
          title: 'Hover',
          description:
            'The Structured List has a hover state. The style of the list item changes to visually communicate and provide feedback to the user that the list item is an interactive element.',
          media: getIllustrationComponent(
            'components/structured-list/states/hover',
          ),
        },
        {
          title: 'Active',
          description:
            'The Structured List has an active state. The style of the list item changes to visually communicate and provide feedback to the user that the Tab item has been interacted with.',
          media: getIllustrationComponent(
            'components/structured-list/states/active',
          ),
        },
        {
          title: 'Disabled',
          description:
            'The Structured List in a disabled state communicates that a list item exists, but is not available to the user in that scenario. When the user’s cursor hovers over a list item in a disabled state, the cursor shows as not-allowed. Disabled list items are often used to maintain layout consistency and communicate that a list item may become available if another condition has been met.',
          media: getIllustrationComponent(
            'components/structured-list/states/disabled',
          ),
        },
        {
          title: 'Focus',
          description:
            'Structured List in a focus state communicates that a user has highlighted a list item, using an input method such as a keyboard or voice.',
          media: getIllustrationComponent(
            'components/structured-list/states/focus',
          ),
        },
      ],
    }}
    behaviors={{
      introduction:
        'The following guidance describes how a Structured List behaves.',
      cards: [
        {
          title: 'Alignment',
          description: (
            <>
              On XS&gt; breakpoints, the content of the third cell align to the
              vertical center, and the content of the second cell moves below
              the first cell.
              <br />
              <br />
              On MD&gt; breakpoints, the content of the third cell align to the
              top.
            </>
          ),
          media: getIllustrationComponent(
            'components/structured-list/behaviours-alignment',
          ),
        },
      ],
    }}
    accessibility={{
      introduction:
        'The Structured List has the following accessibility considerations:',
      focusOrder: {
        title: 'Focus order',
        tableRows: [
          {
            order: 1,
            element: 'List item',
            role: 'Focusses on the first List item in the Structured List.',
          },
        ],
      },
      interaction: {
        title: 'Keyboard Interactions',
        tableRows: [
          {
            command: ['Tab'],
            description:
              'When focus is outside of the Structured List, it moves focus to the first List item (if it’s interactive). If focus is on a List item, it moves focus to the next element on the page.',
          },
          {
            command: ['Rtn'],
            description: 'If interactive, activates the List item.',
          },
          {
            command: ['Up arrow'],
            description: 'Focuses the previous List item.',
          },
          {
            command: ['Down arrow'],
            description: 'Focuses the next List item.',
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
              'Aria-label attribute is used to define the name of the Structured List',
            userSupplied: true,
          },
          {
            element: 'StructuredListItem',
            attribute: 'arialabel',
            value: '',
            description:
              'Aria-label attribute is used to define the name of the List item',
            userSupplied: true,
          },
        ],
      },
    }}
    componentAPI={{
      components: [
        {
          title: 'Structured List',
          propsSummary:
            'The Structured List has a range of props that can be used to define an appropriate experience for different use cases.',
          overridesSummary:
            'The Structured List has a range of predefined elements and attributes that can be overridden to define their appearance.',
          propsRows: [
            {
              name: 'children',
              type: 'React.ReactElement',
              description: 'An array of Structured List Item components',
              required: true,
            },
            {
              name: 'ariaLabel',
              type: 'string',
              description:
                'Defines the aria-label attribute of the Structured List	',
            },
            {
              name: 'divider',
              type: 'boolean',
              default: 'false',
              description: (
                <>
                  If true, renders a{' '}
                  <Link href="/components/divider">Divider</Link> component
                  between structured list items in a Structured List
                </>
              ),
              required: true,
            },
          ],
          overridesRows: [
            {
              attribute: 'divider',
              type: "DividerProps['overrides']",
              default: 'divider',
              description: (
                <>
                  If provided, this overrides the divider styling.{' '}
                  <Link href="/components/divider">
                    Refer to the Divider component for full documentation.
                  </Link>
                </>
              ),
            },
            {
              attribute: 'width',
              type: 'MQ<string>',
              default: '100%',
              description: 'Overrides width of the Structured List.',
            },
            ...logicalMarginOverrideProps,
            ...logicalPaddingOverrideProps,
          ],
        },
        {
          title: 'Structured List Item',
          propsSummary:
            'The Structured List Item has a range of props that can be used to define an appropriate experience for different use cases.',
          overridesSummary:
            'The Structured List Item has a range of predefined elements and attributes that can be overridden to define their appearance.',
          propsRows: [
            {
              name: 'children',
              type: 'React.ReactNode',
              description: 'An array of StructuredListCell components',
              required: true,
            },
            {
              name: 'href',
              type: 'string',
              required: false,
              description:
                'If supplied, ensures the list item is interactive linking to the href, sets a chevron icon to last cell in the list item and applies the listitem.stylePreset.',
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
            {
              name: 'linkIconAlign',
              type: `'start' | 'center' | 'end'`,
              default: 'start',
              description:
                'Vertically align the Icon when the StructuredListItem is Link',
            },
            {
              name: 'hideIcon',
              type: 'boolean',
              default: 'false',
              description:
                'If true, hides the link icon in the StructuredListItem',
            },
          ],
          overridesRows: [
            {
              attribute: 'stylePreset',
              type: 'MQ<string>',
              default: 'structuredListItem',
              description: `If provided, this overrides the stylePreset applied to the StructuredListItem's outer container. Can be used to override the background color of the StructuredListItem`,
            },
            {
              attribute: 'Label',
              type: 'MQ<string>',
              default: 'sizing100',
              description: `If provided, this overrides the minHeight applied to the StructuredListItem's most
              outer container.`,
            },
            {
              attribute: 'Label',
              type: 'MQ<string>',
              default: 'spaceInsetStretch040',
              description: `If provided, this overrides the spaceInset applied to the StructuredListItem's most
              outer container`,
            },
            {
              attribute: 'Label',
              type: 'string',
              default: 'iconSize010',
              description: `If provided with a sizing token, this will override the size of StructuredListItem's default icon.`,
            },
            {
              attribute: 'Label',
              type: 'MQ<string>',
              default: 'inkContrast',
              description: `If provided, this overrides the stylePreset applied to the StructuredListItem's default icon`,
            },
          ],
        },
        {
          title: 'Structured List Cell',
          summary:
            'The Structured List Cell has a range of props that can be used to define an appropriate experience for different use cases.',
          propsRows: [
            {
              name: 'children',
              type: 'React.ReactNode',
              description: 'Content rendered inside the Structured List Cell',
              required: true,
            },
            {
              name: 'pullRight',
              type: 'boolean',
              description:
                'If true, the cell with pullRight prop will be pulled to the right',
              default: 'false',
            },
            {
              name: 'align',
              type: `'start' | 'center' | 'end'`,
              default: 'start',
              description: 'Vertically align the content',
            },
          ],
        },
      ],
    }}
    related={{
      related: ['Block', 'Divider', 'Grid'],
    }}
  />
);

export default StructuredListComponent;
