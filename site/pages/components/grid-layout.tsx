import React from 'react';
import {
  Block,
  styled,
  GridLayout,
  toNewsKitIcon,
  InlineMessage,
  GridLayoutItem,
  getColorCssFromTheme,
} from 'newskit';
import {Info as FilledInfo} from '@emotion-icons/material/Info';
import {Link} from '../../components/link';
import {UsageKind} from '../../components/usage-card';
import {InlineCode} from '../../components/markdown-elements';
import {MetaStatus} from '../../components/meta/types';
import {ContentText} from '../../components/text-section/content-text';
import {LayoutProps} from '../../components/layout';
import {ComponentPageTemplate} from '../../templates/component-page-template';
import {getIllustrationComponent} from '../../components/illustrations/illustration-loader';

const IconFilledInfo = toNewsKitIcon(FilledInfo);

const infoIcon = (
  <IconFilledInfo
    overrides={{
      size: 'iconSize020',
    }}
  />
);

const PlaygroundContainer = styled.div`
  display: flex;
  width: 100%;
  height: 200px;
  align-items: center;
  justify-content: center;
`;

const GridBox = styled.div`
  min-width: 100%;
  min-height: 100%;
  ${getColorCssFromTheme('background', 'inkBrand010')}
`;

const alignControl = [
  {
    label: 'none',
    value: '',
    isDefault: true,
  },
  {
    label: 'center',
    value: 'center',
  },
  {
    label: 'start',
    value: 'start',
  },
  {
    label: 'end',
    value: 'end',
  },
  {
    label: 'stretch',
    value: 'stretch',
  },
];

const spaceControl = [
  ...alignControl,
  {
    label: 'space-between',
    value: 'space-between',
  },
  {
    label: 'space-around',
    value: 'space-around',
  },
  {
    label: 'space-evenly',
    value: 'space-evenly',
  },
];

const GridLayoutComponent = (layoutProps: LayoutProps) => (
  <ComponentPageTemplate
    headTags={{
      title: 'Grid Layout',
      description:
        'The grid layout component is a flexible, responsive grid that can be used for building both page layouts and components; based on CSS grid.',
    }}
    layoutProps={layoutProps}
    pageIntroduction={{
      type: 'Layout',
      name: 'Grid Layout',
      hero: {
        illustration: 'components/grid-layout-illustration',
      },
      introduction: (
        <>
          The grid layout component is a flexible, responsive grid that can be
          used for building both page layouts and components; based on{' '}
          <Link
            href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout"
            target="_blank"
          >
            CSS grid.{' '}
          </Link>
        </>
      ),
    }}
    componentDefaultsKey="gridLayout"
    meta={{
      status: MetaStatus.Beta,
      introduced: 'v5.1.0',
      codeUrl:
        'https://github.com/newscorp-ghfb/newskit/tree/main/src/grid-layout',
      figmaUrl:
        'https://www.figma.com/file/FSbCQa6SzVR3K48ZWLeD77/%F0%9F%9F%A2-NK-Web-Components?node-id=9893%3A158142',
      storybookId: 'components-grid-layout--responsive-example',
    }}
    interactiveDemo={{
      introduction:
        'This demo allows you to preview the grid layout component, its variations, and configuration options.',
      playground: {
        componentName: 'GridLayout',
        component: state => (
          <PlaygroundContainer>
            <GridLayout
              {...state}
              overrides={{width: '90%', minHeight: '200px'}}
            >
              <GridLayoutItem>
                <GridBox />
              </GridLayoutItem>
              <GridLayoutItem>
                <GridBox />
              </GridLayoutItem>
              <GridLayoutItem>
                <GridBox />
              </GridLayoutItem>
              <GridLayoutItem>
                <GridBox />
              </GridLayoutItem>
              <GridLayoutItem>
                <GridBox />
              </GridLayoutItem>
              <GridLayoutItem>
                <GridBox />
              </GridLayoutItem>
            </GridLayout>
          </PlaygroundContainer>
        ),
        knobs: [
          {
            name: 'columns',
            propName: 'columns',
            options: [
              {
                label: 'none',
                value: '',
                isDefault: true,
              },
              {
                label: 'repeat(4, 1fr)',
                value: 'repeat(4, 1fr)',
              },
              {
                label: '1fr 2fr 1fr',
                value: '1fr 2fr 1fr',
              },
              {
                label: '100px 1fr 1fr',
                value: '100px 1fr 1fr',
              },
              {
                label: 'auto auto auto',
                value: 'auto auto auto',
              },
              {
                label: '100px 150px 200px',
                value: '100px 150px 200px',
              },
              {
                label: '1fr 1fr',
                value: '1fr 1fr',
              },
            ],
          },
          {
            name: 'rows',
            propName: 'rows',
            options: [
              {
                label: 'none',
                value: '',
                isDefault: true,
              },
              {
                label: 'repeat(2, 50px)',
                value: 'repeat(2, 50px)',
              },
              {
                label: '20px 50px 100px',
                value: '20px 50px 100px',
              },
            ],
          },
          {
            name: 'columnGap',
            propName: 'columnGap',
            options: [
              {
                label: 'space020',
                value: 'space020',
                isDefault: true,
              },
              {
                label: 'space040',
                value: 'space040',
                isDefault: true,
              },
            ],
          },
          {
            name: 'autoFlow',
            propName: 'autoFlow',
            options: [
              {
                label: 'row',
                value: 'row',
                isDefault: true,
              },
              {
                label: 'column',
                value: 'column',
              },
              {
                label: 'dense',
                value: 'dense',
              },
            ],
          },
          {
            name: 'autoColumns',
            propName: 'autoColumns',
            options: [
              {
                label: 'none',
                value: '',
                isDefault: true,
              },
              {
                label: 'auto',
                value: 'auto',
              },
              {
                label: '100px',
                value: '100px',
              },
              {
                label: 'minmax(100px, auto)',
                value: 'minmax(100px, auto)',
              },
            ],
          },
          {
            name: 'autoRows',
            propName: 'autoRows',
            options: [
              {
                label: 'none',
                value: '',
                isDefault: true,
              },
              {
                label: 'auto',
                value: 'auto',
              },
              {
                label: '10%',
                value: '10%',
              },
              {
                label: 'minmax(20px, auto)',
                value: 'minmax(20px, auto)',
              },
            ],
          },
          {
            name: 'rowGap',
            propName: 'rowGap',
            options: [
              {
                label: 'space020',
                value: 'space020',
                isDefault: true,
              },
              {
                label: 'space040',
                value: 'space040',
                isDefault: true,
              },
            ],
          },
          {
            name: 'justifyContent',
            propName: 'justifyContent',
            options: spaceControl,
          },
          {
            name: 'alignContent',
            propName: 'alignContent',
            options: spaceControl,
          },
          {
            name: 'alignItems',
            propName: 'alignItems',
            options: alignControl,
          },
          {
            name: 'justifyItems',
            propName: 'justifyItems',
            options: alignControl,
          },
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ] as any,
      },
    }}
    anatomy={{
      introduction: 'The grid layout component contains the following.',
      rows: [
        {
          name: 'Grid layout',
          description: 'Container for the grid',
          component: 'GridLayout',
          optional: undefined,
        },
        {
          name: 'Grid layout item',
          description: 'Layout item for the grid',
          component: 'GridLayoutItem',
          optional: undefined,
        },
      ],
      media: getIllustrationComponent('components/grid-layout/anatomy'),
    }}
    options={{
      introduction:
        'The grid layout component has options that can be used to provide an appropriate experience for different use cases.',
      cards: [
        {
          title: 'Row gap & column gap',
          description:
            'The row gap and column gap can be set for each breakpoint.',
          media: getIllustrationComponent(
            'components/grid-layout/options/row-column-gap',
          ),
        },
        {
          title: 'Max-width',
          description:
            'When the defined maximum width of the grid is reached (default set to auto), the grid will become fixed and the margins grow to fill the screen.',
          media: getIllustrationComponent(
            'components/grid-layout/options/max-width',
          ),
        },
        {
          title: 'Span',
          description: `Cells can be set to span any number of columns in the grid. If set to ‘full-width’ the cell will span all 12 columns and breakout across the margin of the grid. It will still be confined by the grid's max-width.`,
          media: getIllustrationComponent(
            'components/grid-layout/options/span',
          ),
        },
        {
          title: 'Order',
          description:
            'The order that cells appear can be changed at different breakpoints.',
          media: getIllustrationComponent(
            'components/grid-layout/options/order',
          ),
        },
        {
          title: 'Offset',
          description:
            'Cells can be set to be offset by a specified number of columns.',
          media: getIllustrationComponent(
            'components/grid-layout/options/offset',
          ),
        },
      ],
    }}
    usage={{
      introduction:
        'The following guidance describes how and when to appropriately use the grid layout component.',
      cards: [
        {
          description:
            'Whenever possible, make sure page elements are lined up both horizontally and/ or vertically.',
          kind: UsageKind.DO,
          media: getIllustrationComponent('components/grid-layout/usage/do-01'),
        },
        {
          description:
            'Avoid aligning everything to the grid. Individual elements within the cells should align with each other rather than with the grid columns.',
          kind: UsageKind.DONT,
          media: getIllustrationComponent(
            'components/grid-layout/usage/dont-01',
          ),
        },
      ],
    }}
    tutorials={{
      introduction:
        'Learn how to use the grid layout component effectively using the tutorials below.',
      cards: [
        {
          title: 'Grid Layout tutorial',
          description:
            'Step-by-step guide for engineers to build a layout using the grid layout component.',
          media: getIllustrationComponent('guides/grid-layout-guide/hero'),
          href: '/getting-started/code/grid-layout-step-by-step/',
        },
        {
          title: 'How to build a Section using Grid Layouts',
          description:
            'Guide in Figma for designers to use the grid layout component (internal only).',
          media: getIllustrationComponent(
            'components/grid-layout/tutorials/designers',
          ),
          href:
            'https://www.figma.com/file/DkQzpgAZSze5ghznccAI7l/Grid-Layout-Guide',
        },
      ],
    }}
    accessibility={{
      introduction: (
        <>
          The grid layout has the following accessibility considerations:
          <Block spaceStack="space100" />
          <ContentText title="Ordering" lastItem>
            Ordering can be used to render items in a different order to their
            tab order, this can be useful when building accessible interfaces as
            it allows the most important items to be focused first, even if they
            don’t visually appear this way.
          </ContentText>
        </>
      ),
    }}
    componentAPI={{
      introduction: `Below are the properties for the Grid Layout component:`,
      components: [
        {
          title: 'Grid Layout',
          summary:
            'The grid layout has a range of props that can be used to define an appropriate experience for different use cases.',
          propsRows: [
            {
              name: 'rowGap',
              type: 'MQ<string>',
              description: (
                <>
                  If provided, applies rowGap to the grid, using the{' '}
                  <InlineCode>row-gap</InlineCode>{' '}
                  <Link
                    href="https://developer.mozilla.org/en-US/docs/Web/CSS/row-gap"
                    target="_blank"
                  >
                    css property.
                  </Link>
                </>
              ),
              required: null,
            },
            {
              name: 'columnGap',
              type: 'MQ<string>',
              description: (
                <>
                  If provided with, applies columnGap to the grid, using the{' '}
                  <InlineCode>column-gap</InlineCode>{' '}
                  <Link
                    href="https://developer.mozilla.org/en-US/docs/Web/CSS/column-gap"
                    target="_blank"
                  >
                    css property.
                  </Link>
                </>
              ),
              required: null,
            },
            {
              name: 'rows',
              type: 'MQ<string>',
              description: (
                <>
                  Defines the line names and track sizing functions of the grid
                  rows, using the <InlineCode>grid-template-rows</InlineCode>{' '}
                  <Link
                    href="https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-rows"
                    target="_blank"
                  >
                    css property.
                  </Link>
                </>
              ),
              required: null,
            },
            {
              name: 'columns',
              type: 'MQ<string>',
              description: (
                <>
                  Defines the line names and track sizing functions of the grid
                  columns, using the{' '}
                  <InlineCode>grid-template-columns</InlineCode>{' '}
                  <Link
                    href="https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-columns"
                    target="_blank"
                  >
                    css property.
                  </Link>
                </>
              ),
              required: null,
            },
            {
              name: 'autoFlow',
              type: 'MQ<string>',
              description: (
                <>
                  Controls how the auto-placement algorithm works, specifying
                  exactly how auto-placed items get flowed into the grid, using
                  the <InlineCode>grid-auto-flow</InlineCode>{' '}
                  <Link
                    href="https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-flow"
                    target="_blank"
                  >
                    css property.
                  </Link>
                </>
              ),
              required: null,
            },
            {
              name: 'autoRows',
              type: 'MQ<string>',
              description: (
                <>
                  Specifies the size of an implicitly-created grid row track or
                  pattern of tracks, using the{' '}
                  <InlineCode>grid-auto-rows</InlineCode>{' '}
                  <Link
                    href="https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-rows"
                    target="_blank"
                  >
                    css property.
                  </Link>
                </>
              ),
              required: null,
            },
            {
              name: 'autoColumns',
              type: 'MQ<string>',
              description: (
                <>
                  Specifies the size of an implicitly-created grid column track
                  or pattern of tracks, using the{' '}
                  <InlineCode>grid-auto-columns</InlineCode>{' '}
                  <Link
                    href="https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-columns"
                    target="_blank"
                  >
                    css property.
                  </Link>
                </>
              ),
              required: null,
            },
            {
              name: 'justifyContent',
              type: 'MQ<string>',
              description: (
                <>
                  If parent container has remaining space, this aligns the grid
                  along the inline axis, using the{' '}
                  <InlineCode>justify-content</InlineCode>{' '}
                  <Link
                    href="https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content"
                    target="_blank"
                  >
                    css property.
                  </Link>
                </>
              ),
              required: null,
            },
            {
              name: 'alignContent',
              type: 'MQ<string>',
              description: (
                <>
                  If parent container has remaining space, this aligns the grid
                  along the block axis, using the{' '}
                  <InlineCode>align-content</InlineCode>{' '}
                  <Link
                    href="https://developer.mozilla.org/en-US/docs/Web/CSS/align-content"
                    target="_blank"
                  >
                    css property.
                  </Link>
                </>
              ),
              required: null,
            },
            {
              name: 'justifyItems',
              type: 'MQ<string>',
              description: (
                <>
                  Aligns the grid items along the inline axis, using the{' '}
                  <InlineCode>justify-items</InlineCode>{' '}
                  <Link
                    href="https://developer.mozilla.org/en-US/docs/Web/CSS/justify-items"
                    target="_blank"
                  >
                    css property.
                  </Link>
                </>
              ),
              required: null,
            },
            {
              name: 'alignItems',
              type: 'MQ<string>',
              description: (
                <>
                  Aligns the grid items along the block axis, using the{' '}
                  <InlineCode>align-items</InlineCode>{' '}
                  <Link
                    href="https://developer.mozilla.org/en-US/docs/Web/CSS/align-items"
                    target="_blank"
                  >
                    css property.
                  </Link>
                </>
              ),
              required: null,
            },
            {
              name: 'areas',
              type: 'MQ<string>',
              description: (
                <>
                  Specifies named grid areas, establishing the cells in the grid
                  and assigning them names. It visually represents the layout of
                  the grid, using the{' '}
                  <InlineCode>grid-template-areas</InlineCode>{' '}
                  <Link
                    href="https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-areas"
                    target="_blank"
                  >
                    css property.
                  </Link>
                </>
              ),
              required: null,
            },
            {
              name: 'inline',
              type: 'MQ<boolean>',
              default: 'false',
              description: (
                <>
                  Specifies whether the grid should be displayed in-line, using
                  the <InlineCode>display: inline-grid</InlineCode>{' '}
                  <Link
                    href="https://developer.mozilla.org/en-US/docs/Web/CSS/display"
                    target="_blank"
                  >
                    css property.
                  </Link>
                </>
              ),
              required: null,
            },
          ],
          overridesRows: [
            {
              attribute: 'width',
              type: 'MQ<string>',
              default: '',
              description: 'If provided, this overrides the width of the Grid.',
            },
            {
              attribute: 'minWidth',
              type: 'MQ<string>',
              default: '',
              description:
                'If provided, this overrides the minWidth of the Grid.',
            },
            {
              attribute: 'maxWidth',
              type: 'MQ<string>',
              default: '',
              description:
                'If provided, this overrides the maxWidth of the Grid.',
            },
            {
              attribute: 'height',
              type: 'MQ<string>',
              default: '',
              description:
                'If provided, this overrides the height of the Grid.',
            },
            {
              attribute: 'minHeight',
              type: 'MQ<string>',
              default: '',
              description:
                'If provided, this overrides the minHeight of the Grid.',
            },
            {
              attribute: 'maxHeight',
              type: 'MQ<string>',
              default: '',
              description:
                'If provided, this overrides the maxHeight of the Grid.',
            },
          ],
        },
        {
          title: 'Grid Layout Item',
          summary:
            'The grid layout item has a range of props that can be used to define an appropriate experience for different use cases. Use this component within the NewsKit GridLayout component.',
          propsRows: [
            {
              name: 'area',
              type: 'string',
              description: (
                <>
                  Assigns a name to an item so that it can be referenced by a
                  template created with the GridLayout areas property, using the{' '}
                  <InlineCode>grid-area</InlineCode>{' '}
                  <Link
                    href="https://developer.mozilla.org/en-US/docs/Web/CSS/grid-area"
                    target="_blank"
                  >
                    css property.
                  </Link>
                </>
              ),
              required: null,
            },
            {
              name: 'order',
              type: 'MQ<number>',
              description: (
                <>
                  Sets the order in which to display items in a grid. Items are
                  sorted by ascending order value and then by their oder of
                  appearance in the DOM, using the{' '}
                  <InlineCode>order</InlineCode>{' '}
                  <Link
                    href="https://developer.mozilla.org/en-US/docs/Web/CSS/order"
                    target="_blank"
                  >
                    css property.
                  </Link>
                </>
              ),
              required: null,
            },
            {
              name: 'justifySelf',
              type: 'MQ<string>',
              description: (
                <>
                  Aligns an item inside its containing block on the inline axis,
                  using the <InlineCode>justify-self</InlineCode>{' '}
                  <Link
                    href="https://developer.mozilla.org/en-US/docs/Web/CSS/justify-self"
                    target="_blank"
                  >
                    css property.
                  </Link>
                </>
              ),
              required: null,
            },
            {
              name: 'alignSelf',
              type: 'MQ<string>',
              description: (
                <>
                  Aligns an item inside its containing block on the block axis,
                  using the <InlineCode>align-self</InlineCode>{' '}
                  <Link
                    href="https://developer.mozilla.org/en-US/docs/Web/CSS/align-self"
                    target="_blank"
                  >
                    css property.
                  </Link>
                </>
              ),
              required: null,
            },
            {
              name: 'column',
              type: 'MQ<string>',
              description: (
                <>
                  Determines a grid item’s location within the grid by referring
                  to specific grid columns, using the{' '}
                  <InlineCode>grid-column</InlineCode>{' '}
                  <Link
                    href="https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column"
                    target="_blank"
                  >
                    css property.
                  </Link>
                </>
              ),
              required: null,
            },
            {
              name: 'row',
              type: 'MQ<string>',
              description: (
                <>
                  Determines a grid item’s location within the grid by referring
                  to specific rows, using the <InlineCode>grid-row</InlineCode>{' '}
                  <Link
                    href="https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row"
                    target="_blank"
                  >
                    css property.
                  </Link>
                </>
              ),
              required: null,
            },
          ],
          propsFooter: (
            <InlineMessage
              icon={infoIcon}
              role="region"
              aria-label="GridLayoutItem"
              overrides={{
                marginBlockStart: 'space070',
              }}
            >
              GridLayoutItem is derived from the{' '}
              <Link href="/components/block/">block</Link> component, so all it
              allows stylePresets, transitionPresets, and logicalProps.
            </InlineMessage>
          ),
        },
      ],
    }}
    related={{
      related: ['Block', 'Grid', 'Stack', 'Visibility'],
    }}
  />
);

export default GridLayoutComponent;
