import React from 'react';
import {
  InlineMessage,
  Stack,
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
      title: 'Structured list',
      description:
        'Structured lists group similar or related content together.',
    }}
    layoutProps={layoutProps}
    pageIntroduction={{
      type: 'Layout',
      name: 'Structured list',
      hero: {
        illustration: 'components/structured-list/hero',
      },
      introduction:
        'Structured lists group similar or related content together.',
    }}
    componentDefaultsKey="structuredList"
    meta={{
      status: MetaStatus.Supported,
      introduced: 'v3.5.0',
      codeUrl:
        'https://github.com/newscorp-ghfb/newskit/tree/main/src/structured-list',
    }}
    interactiveDemo={{
      introduction:
        'This demo lets you preview the structured list component, its variations and configuration options.',
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
                <Stack stackDistribution="flex-end" flow="horizontal-center">
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
                <Stack stackDistribution="flex-end" flow="horizontal-center">
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
        'The Structured list contains three required elements and one optional element.',
      media: getIllustrationComponent('components/structured-list/anatomy'),
      rows: [
        {
          name: 'Wrapper',
          description: 'Includes the list item(s)',
          component: ['Grid', 'Block'],
          optional: undefined,
        },
        {
          name: 'List item',
          description: 'Includes cells',
          component: ['Grid', 'Block'],
          optional: undefined,
        },
        {
          name: 'Cell',
          description:
            'Content within the cells. Any component can be passed to each cell (ReactNode)',
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
      introduction: 'The structured list has options for different use cases:',
      cards: [
        {
          title: 'List item and cell layouts',
          description: (
            <>
              Achieve multiple layouts by configuring the structured list cell
              using nested grids and the <InlineCode>pullRight</InlineCode>{' '}
              prop.
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
              Visually separate list items by applying{' '}
              <Link target="_blank" href="/components/divider">
                dividers
              </Link>{' '}
              to the bottom of a list item, via the divider prop.
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
              Make structured list items interactive by supplying a link for an
              item.
              <InlineMessage
                icon={infoIcon}
                role="region"
                aria-label="checkbox label position"
                overrides={{
                  marginBlockStart: 'space050',
                }}
              >
                If you pass a href to the component, it renders a chevron in the
                last cell and the item becomes interactive. To show that the
                item is interactive, the stylePreset and cursor are set to
                ‘pointer’.
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
      introduction: 'The structured list has the following states:',
      layout: '3-span',
      cards: [
        {
          title: 'Base',
          description:
            'The default style before the user interacts with the list item.',
          media: getIllustrationComponent(
            'components/structured-list/states/base',
          ),
        },
        {
          title: 'Hover',
          description:
            'The list item changes style to let the user know it’s interactive.',
          media: getIllustrationComponent(
            'components/structured-list/states/hover',
          ),
        },
        {
          title: 'Active',
          description:
            'The list item changes style to let the user know they’ve interacted with it.',
          media: getIllustrationComponent(
            'components/structured-list/states/active',
          ),
        },
        {
          title: 'Disabled',
          description: (
            <>
              Communicates that a list item exists, but isn’t available in that
              scenario. When the user hovers over a list item in a disabled
              state, the cursor shows as ‘not allowed’.
              <br />
              <br />
              Disabled list items maintain layout consistency and communicate
              that a list item may become available if another condition is met.
            </>
          ),
          media: getIllustrationComponent(
            'components/structured-list/states/disabled',
          ),
        },
        {
          title: 'Focus',
          description:
            'Communicates that a user has highlighted a list item (e.g. via keyboard or voice).',
          media: getIllustrationComponent(
            'components/structured-list/states/focus',
          ),
        },
      ],
    }}
    behaviors={{
      introduction: 'Here’s how the structured list behaves:',
      cards: [
        {
          title: 'Alignment',
          description: (
            <>
              On xs and sm breakpoints, the content of the third cell aligns to
              the vertical centre, and the content of the second cell moves
              below the first cell.
              <br />
              <br />
              On md and above breakpoints, the content of the third cell aligns
              to the top.
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
        'The structured list has the following accessibility considerations:',
      focusOrder: {
        title: 'Focus order',
        tableRows: [
          {
            order: 1,
            element: 'List item',
            role: 'Focusses to the first list item in the structured list',
          },
        ],
      },
      interaction: {
        title: 'Keyboard Interactions',
        tableRows: [
          {
            command: ['Tab'],
            description:
              'When focus is outside of the structured list, it moves focus to the first List item (if it’s interactive). If focus is on a List item, it moves focus to the next element on the page.',
          },
          {
            command: ['Rtn'],
            description: 'If interactive, activates the List item.',
          },
          {
            command: ['Up arrow'],
            description: 'Focusses to the previous list item',
          },
          {
            command: ['Down arrow'],
            description: 'Focusses to the next list item',
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
            description: 'Defines the name of the structured list',
            userSupplied: true,
          },
          {
            element: 'StructuredListItem',
            attribute: 'arialabel',
            value: '',
            description: 'Defines the name of the list item',
            userSupplied: true,
          },
        ],
      },
    }}
    componentAPI={{
      components: [
        {
          title: 'Structured list',
          propsSummary:
            'The structured list has a range of props for different use cases, and a range of predefined elements and attributes that can be overridden to define their appearance.',
          overridesSummary:
            'The structured list has a range of props for different use cases, and a range of predefined elements and attributes that can be overridden to define their appearance.',
          propsRows: [
            {
              name: 'children',
              type: 'React.ReactElement',
              description: 'An array of structured list item components',
              required: true,
            },
            {
              name: 'ariaLabel',
              type: 'string',
              description:
                'Defines the aria-label attribute of the structured list	',
            },
            {
              name: 'divider',
              type: 'boolean',
              default: 'false',
              description: (
                <>
                  If ‘true’, renders a{' '}
                  <Link href="/components/divider">Divider</Link> between
                  structured list items in a structured list
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
                  If provided, overrides the divider styling. See the{' '}
                  <Link href="/components/divider">divider</Link> styling. See
                  the divider page for more
                </>
              ),
            },
            {
              attribute: 'width',
              type: 'MQ<string>',
              default: '100%',
              description: 'Overrides the width of the structured list',
            },
            ...logicalMarginOverrideProps,
            ...logicalPaddingOverrideProps,
          ],
        },
        {
          title: 'Structured list item',
          propsSummary:
            'The structured list item has a range of props to define the experience in different use cases, and a range of predefined elements and attributes that can be overridden to define their appearance.',
          overridesSummary:
            'The structured list item has a range of props to define the experience in different use cases, and a range of predefined elements and attributes that can be overridden to define their appearance.',
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
                'If supplied, makes the list item into a link, adds a chevron icon into the last cell, and applies the listitem.stylePreset',
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
                'Vertically aligns the icon when the structuredListItem is a link',
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
              description: `If provided, overrides the stylePreset applied to the structuredListItem's outer container. Can be used to override the background colour of the structuredListItem`,
            },
            {
              attribute: 'Label',
              type: 'MQ<string>',
              default: 'sizing100',
              description: `If provided, overrides the minHeight applied to the structuredListItem's outermost container`,
            },
            {
              attribute: 'Label',
              type: 'MQ<string>',
              default: 'spaceInsetStretch040',
              description: `If provided, overrides the spaceInset applied to the structuredListItem's outermost container`,
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
          title: 'Structured list cell',
          summary:
            'The structured list cell has a range of props to define the experience in different use cases.',
          propsRows: [
            {
              name: 'children',
              type: 'React.ReactNode',
              description: 'Content rendered inside the structured list cell',
              required: true,
            },
            {
              name: 'pullRight',
              type: 'boolean',
              description: 'If true, pulls the cell to the right',
              default: 'false',
            },
            {
              name: 'align',
              type: `'start' | 'center' | 'end'`,
              default: 'start',
              description: 'Vertically aligns the content',
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
