import React from 'react';
import {Block, InlineMessage, toNewsKitIcon} from 'newskit';
import {Info as FilledInfo} from '@emotion-icons/material/Info';
import {ComponentPageTemplate} from '../../templates/component-page-template';
import {LayoutProps} from '../../components/layout';
import {MetaStatus} from '../../components/meta/types';
import {getIllustrationComponent} from '../../components/illustrations/illustration-loader';
import {Link} from '../../components/link';
import {UsageKind} from '../../components/usage-card';
import {ContentText} from '../../components/text-section/content-text';

const IconFilledInfo = toNewsKitIcon(FilledInfo);

const infoIcon = (
  <IconFilledInfo
    overrides={{
      size: 'iconSize020',
    }}
  />
);

const gridPropsRows = [
  {
    name: 'children',
    type: 'Cell',
    default: undefined,
    description: `The cell components must be used as children of the grid. Using anything other than the cell components will break the grid functionality.`,
    required: true,
  },
  {
    name: 'xsMargin',
    type: 'string',
    default: 'space040',
    description: (
      <>
        An override for the grid margin spacing at the <b>xs</b> and upwards
        breakpoint.
      </>
    ),
    required: undefined,
  },
  {
    name: 'smMargin',
    type: 'string',
    default: 'space040',
    description: (
      <>
        An override for the grid margin spacing at the <b>sm</b> and upwards
        breakpoint.
      </>
    ),
    required: undefined,
  },
  {
    name: 'mdMargin',
    type: 'string',
    default: 'space040',
    description: (
      <>
        An override for the grid margin spacing at the <b>md</b> and upwards
        breakpoint.
      </>
    ),
    required: undefined,
  },
  {
    name: 'lgMargin',
    type: 'string',
    default: 'space050',
    description: (
      <>
        An override for the grid margin spacing at the <b>lg</b> and upwards
        breakpoint.
      </>
    ),
    required: undefined,
  },
  {
    name: 'xlMargin',
    type: 'string',
    default: 'space050',
    description: (
      <>
        An override for the grid margin spacing at the <b>xl</b> breakpoint.
      </>
    ),
    required: undefined,
  },
  {
    name: 'xsColumnGutter',
    type: 'string',
    default: 'space040',
    description: (
      <>
        An override for the column gutter spacing at the <b>xs</b> and upwards
        breakpoint. This applies to all direct children cells, but not the cells
        in further nested grids.
      </>
    ),
    required: undefined,
  },
  {
    name: 'smColumnGutter',
    type: 'string',
    default: 'space040',
    description: (
      <>
        An override for the column gutter spacing at the <b>sm</b> and upwards
        breakpoint. This applies to all direct children cells, but not the cells
        in further nested grids.
      </>
    ),
    required: undefined,
  },
  {
    name: 'mdColumnGutter',
    type: 'string',
    default: 'space040',
    description: (
      <>
        An override for the column gutter spacing at the <b>md</b> and upwards
        breakpoint. This applies to all direct children cells, but not the cells
        in further nested grids.
      </>
    ),
    required: undefined,
  },
  {
    name: 'lgColumnGutter',
    type: 'string',
    default: 'space050',
    description: (
      <>
        An override for the column gutter spacing at the <b>lg</b> and upwards
        breakpoint. This applies to all direct children cells, but not the cells
        in further nested grids.
      </>
    ),
    required: undefined,
  },
  {
    name: 'xlColumnGutter',
    type: 'string',
    default: 'space050',
    description: (
      <>
        An override for the column gutter spacing at the <b>xl</b> breakpoint.
        This applies to all direct children cells, but not the cells in further
        nested grids.
      </>
    ),
    required: undefined,
  },
  {
    name: 'xsRowGutter',
    type: 'string',
    default: 'space040',
    description: (
      <>
        An override for the row gutter spacing at the <b>xs</b> and upwards
        breakpoint. This applies to all direct children cells, but not the cells
        in further nested grids.
      </>
    ),
    required: undefined,
  },
  {
    name: 'smRowGutter',
    type: 'string',
    default: 'space040',
    description: (
      <>
        An override for the row gutter spacing at the <b>sm</b> and upwards
        breakpoint. This applies to all direct children cells, but not the cells
        in further nested grids.
      </>
    ),
    required: undefined,
  },
  {
    name: 'mdRowGutter',
    type: 'string',
    default: 'space040',
    description: (
      <>
        An override for the row gutter spacing at the <b>md</b> and upwards
        breakpoint. This applies to all direct children cells, but not the cells
        in further nested grids.
      </>
    ),
    required: undefined,
  },
  {
    name: 'lgRowGutter',
    type: 'string',
    default: 'space050',
    description: (
      <>
        An override for the row gutter spacing at the <b>lg</b> and upwards
        breakpoint. This applies to all direct children cells, but not the cells
        in further nested grids.
      </>
    ),
    required: undefined,
  },
  {
    name: 'xlRowGutter',
    type: 'string',
    default: 'space050',
    description: (
      <>
        An override for the row gutter spacing at the <b>xl</b> breakpoint. This
        applies to all direct children cells, but not the cells in further
        nested grids.
      </>
    ),
    required: undefined,
  },
  {
    name: 'maxWidth',
    type: 'string',
    default: '1920px',
    description:
      'The maximum width of the Grid container component. The Grid will not grow bigger than 1920px wide.',
    required: undefined,
  },
];

const GridCellComponent = (layoutProps: LayoutProps) => (
  <ComponentPageTemplate
    headTags={{
      title: 'Grid',
      description:
        'The grid and cell are used together to construct a visual grid for responsive page layout.',
    }}
    layoutProps={layoutProps}
    pageIntroduction={{
      type: 'Layout',
      name: 'Grid & cell',
      hero: {
        illustration: 'components/grid-cell-illustration',
      },
      introduction:
        'The grid and cell are used together to construct a visual grid for responsive page layout.',
    }}
    componentDefaultsKey="grid"
    meta={{
      status: MetaStatus.Supported,
      introduced: 'v0.2.0',
      codeUrl: 'https://github.com/newscorp-ghfb/newskit/tree/main/src/grid',
      figmaUrl:
        'https://www.figma.com/file/3l0UDvk1l2vsXpbtWlYWoP/%F0%9F%9F%A2-NK-NewsKit-Theme?node-id=4208%3A5779',
    }}
    interactiveDemo={{
      introduction: (
        <>
          <Link href="https://newskit-grid-demo.vercel.app/" target="_blank">
            This demo
          </Link>{' '}
          allows you to preview the grid, the variations, and configuration
          options.
        </>
      ),
    }}
    anatomy={{
      introduction:
        'The grid contains no required elements and five optional elements.',
      media: getIllustrationComponent('components/grid-cell/anatomy'),
      rows: [
        {
          name: 'Column',
          description:
            'The NewsKit grid has 12 columns. The width of the columns depends on the size of the grid.',
          optional: true,
        },
        {
          name: 'Column gutter',
          description:
            'The space between columns are called gutters. These are fixed sizes but vary at different breakpoints.',
          optional: true,
        },
        {
          name: 'Container margin',
          description:
            'The container margins are on the outside edges of the grid, providing space between the edge of the screen and the grid.',
          optional: true,
        },
        {
          name: 'Cell',
          description:
            'Cells are used to contain the content. They can span any number of columns, resize with the grid and change at different breakpoints.',
          optional: true,
        },
        {
          name: 'Row gutter',
          description:
            'The spacing between each cell row (i.e. top and bottom when cells are wrapped) is called the row gutters. These can vary at different breakpoints.',
          optional: true,
        },
      ],
    }}
    options={{
      components: [
        {
          title: 'Grid options',
          introduction:
            'The grid has the following options to provide an appropriate experience for different scenarios.',
          cards: [
            {
              title: 'Breakpoints',
              description: (
                <>
                  There are 5 breakpoints. The breakpoint ranges can be set via
                  the{' '}
                  <Link href="https://newskit.co.uk/theme/foundation/breakpoints/#usage">
                    theme breakpoint values.
                  </Link>
                </>
              ),

              media: getIllustrationComponent(
                'components/grid-cell/gridoptions/breakpoints',
              ),
            },
            {
              title: 'Gutter width',
              description:
                'The gutter width can be set for each breakpoint. These can be set via the theme or overridden at the component level.',

              media: getIllustrationComponent(
                'components/grid-cell/gridoptions/gutter-width',
              ),
            },
            {
              title: 'Margin width',
              description:
                'The margin width can be set for each breakpoint. These can be set via the theme or overridden at the component level.',

              media: getIllustrationComponent(
                'components/grid-cell/gridoptions/margin-width',
              ),
            },
            {
              title: 'Max width',
              description:
                'The maximum width of the grid can be set. This can be set via the theme or overridden at the component level.',

              media: getIllustrationComponent(
                'components/grid-cell/gridoptions/max-width',
              ),
            },
          ],
        },
        {
          title: 'Cell options',
          introduction:
            'Cells have the following options to provide an appropriate experience for different scenarios.',
          cards: [
            {
              title: 'Span',
              description:
                'Cells can be set to span any number of columns in the grid. If set to ‘full-width’ the cell will span all 12 columns and breakout across the margin of the grid. It will still be confined by the grids max-width.',

              media: getIllustrationComponent(
                'components/grid-cell/celloptions/span',
              ),
            },
            {
              title: 'Order',
              description:
                'The order that cells appear can be changed at different breakpoints.',

              media: getIllustrationComponent(
                'components/grid-cell/celloptions/order',
              ),
            },
            {
              title: 'Visibility',
              description:
                'Cells can be set to be hidden at different breakpoints.',

              media: getIllustrationComponent(
                'components/grid-cell/celloptions/visibility',
              ),
            },
            {
              title: 'Offset',
              description:
                'Cells can be set to be offset by a specified number of columns.',

              media: getIllustrationComponent(
                'components/grid-cell/celloptions/offset',
              ),
            },
          ],
        },
      ],
      cards: [],
    }}
    behaviors={{
      title: 'Grid behaviours',
      introduction: 'The following guidance describes how the grid behaves.',
      cards: [
        {
          title: 'Max-width',
          description:
            'When the maximum width of the grid is reached, the grid will become fixed and the margins grow to fill the screen.',
          media: getIllustrationComponent(
            'components/grid-cell/behaviours/max-width',
          ),
        },
        {
          title: 'Nested grids',
          description: (
            <>
              A grid can be{' '}
              <Link
                href="https://github.com/lhaggar/newskit-grid-demo/blob/master/pages/nesting.js"
                target="_blank"
              >
                nested inside of a parent grid
              </Link>{' '}
              by adding it to a cell of that grid.
            </>
          ),
          media: getIllustrationComponent(
            'components/grid-cell/behaviours/nested-grids',
          ),
        },
      ],
    }}
    usage={{
      introduction: 'Here’s how and when to use the grid:',
      layout: '2-span',
      cards: [
        {
          title: 'Do align content',
          description:
            'Whenever possible, make sure page elements are lined up both horizontally and/or vertically.',
          kind: UsageKind.DO,
          media: getIllustrationComponent('components/grid-cell/usage/do-01'),
        },
        {
          title: 'Avoid aligning everything to the grid',
          description:
            'Individual elements within the cells should align with each other rather than with the grid columns.',
          kind: UsageKind.DONT,
          media: getIllustrationComponent('components/grid-cell/usage/dont-01'),
        },
        {
          title: 'Avoid making gutters too wide',
          description:
            'They should be balanced against the column width to ensure page elements relate to each other.',
          kind: UsageKind.DONT,
          media: getIllustrationComponent('components/grid-cell/usage/dont-02'),
        },
      ],
    }}
    accessibility={{
      introduction: (
        <>
          The grid has the following accessibility considerations:
          <Block spaceStack="space100" />
          <ContentText title="Visibility of content">
            Content passed to cells can be set as{' '}
            <Link
              href="https://www.newskit.co.uk/components/visibility/"
              target="_blank"
            >
              visible and hidden
            </Link>{' '}
            at different breakpoints. When used &apos;hidden&apos; excludes
            content from focus order when the screen size matches the applied
            breakpoint.
          </ContentText>
        </>
      ),
    }}
    componentAPI={{
      components: [
        {
          title: 'Grid',
          summary:
            'The grid has a range of props that can be used to define an appropriate experience for different use cases.',
          propsRows: gridPropsRows,
        },
        {
          title: 'Cell',
          summary: `The cell has a range of props that can be used to define an appropriate experience for different use cases.`,
          propsRows: [
            {
              name: 'children',
              type: 'React.ReactNode',
              default: '',
              description:
                'The children of a column are rendered in that column, any supported React node is allowed.',
              required: true,
            },
            {
              name: 'xs',
              type: 'number | ‘full-width’',
              default: '1',
              description: (
                <>
                  The amount of columns for cell to span at the <b>xs</b> and
                  upwards breakpoint. If set to &apos;full-width&apos; the cell
                  will span all 12 columns and breakout across the margin of the
                  grid. It will still be confined by the grid &apos;s max-width.
                </>
              ),
              required: undefined,
            },
            {
              name: 'sm',
              type: 'number | ‘full-width’',
              default: '1',
              description: (
                <>
                  The amount of columns for cell to span at the <b>sm</b> and
                  upwards breakpoint. If set to &apos;full-width&apos; the cell
                  will span all 12 columns and breakout across the margin of the
                  grid. It will still be confined by the grid &apos;s max-width.
                </>
              ),
              required: undefined,
            },
            {
              name: 'md',
              type: 'number | ‘full-width’',
              default: '1',
              description: (
                <>
                  The amount of columns for cell to span at the <b>md</b> and
                  upwards breakpoint. If set to &apos;full-width&apos; the cell
                  will span all 12 columns and breakout across the margin of the
                  grid. It will still be confined by the grid &apos;s max-width.
                </>
              ),
              required: undefined,
            },
            {
              name: 'lg',
              type: 'number | ‘full-width’',
              default: '1',
              description: (
                <>
                  The amount of columns for cell to span at the <b>lg</b> and
                  upwards breakpoint. If set to &apos;full-width&apos; the cell
                  will span all 12 columns and breakout across the margin of the
                  grid. It will still be confined by the grid &apos;s max-width.
                </>
              ),
              required: undefined,
            },
            {
              name: 'xl',
              type: 'number | ‘full-width’',
              default: '1',
              description: (
                <>
                  The amount of columns for cell to span at the <b>xl</b> and
                  upwards breakpoint. If set to &apos;full-width&apos; the cell
                  will span all 12 columns and breakout across the margin of the
                  grid. It will still be confined by the grid &apos;s max-width.
                </>
              ),
              required: undefined,
            },
            {
              name: 'xsHidden',
              type: 'boolean',
              default: 'false',
              description: (
                <>
                  If true, the Cell will be hidden at the <b>xs</b> breakpoint.
                  Unlike other breakpoint props this has no effect on other
                  breakpoints.
                </>
              ),
              required: undefined,
            },
            {
              name: 'smHidden',
              type: 'boolean',
              default: 'false',
              description: (
                <>
                  If true, the Cell will be hidden at the <b>sm</b> breakpoint.
                  Unlike other breakpoint props this has no effect on other
                  breakpoints.
                </>
              ),
              required: undefined,
            },
            {
              name: 'mdHidden',
              type: 'boolean',
              default: 'false',
              description: (
                <>
                  If true, the Cell will be hidden at the <b>md</b> breakpoint.
                  Unlike other breakpoint props this has no effect on other
                  breakpoints.
                </>
              ),
              required: undefined,
            },
            {
              name: 'lgHidden',
              type: 'boolean',
              default: 'false',
              description: (
                <>
                  If true, the Cell will be hidden at the <b>lg</b> breakpoint.
                  Unlike other breakpoint props this has no effect on other
                  breakpoints.
                </>
              ),
              required: undefined,
            },
            {
              name: 'xlHidden',
              type: 'boolean',
              default: 'false',
              description: (
                <>
                  If true, the Cell will be hidden at the <b>xl</b> breakpoint.
                  Unlike other breakpoint props this has no effect on other
                  breakpoints.
                </>
              ),
              required: undefined,
            },
            {
              name: 'xsOrder',
              type: 'number',
              description: (
                <>
                  If set, this is the flex order number than will be applied at
                  the <b>xs</b> and upwards breakpoint.
                </>
              ),
              required: undefined,
            },
            {
              name: 'smOrder',
              type: 'number',
              description: (
                <>
                  If set, this is the flex order number than will be applied at
                  the <b>sm</b> and upwards breakpoint.
                </>
              ),
              required: undefined,
            },
            {
              name: 'mdOrder',
              type: 'number',
              description: (
                <>
                  If set, this is the flex order number than will be applied at
                  the <b>md</b> and upwards breakpoint.
                </>
              ),
              required: undefined,
            },
            {
              name: 'lgOrder',
              type: 'number',
              description: (
                <>
                  If set, this is the flex order number than will be applied at
                  the <b>lg</b> and upwards breakpoint.
                </>
              ),
              required: undefined,
            },
            {
              name: 'xlOrder',
              type: 'number',
              description: (
                <>
                  If set, this is the flex order number than will be applied at
                  the <b>xl</b> and upwards breakpoint.
                </>
              ),
              required: undefined,
            },
            {
              name: 'xsOffset',
              type: 'number',
              description: (
                <>
                  If set, specifies the amount of columns the cell will be
                  offset by at the <b>xs</b> and larger breakpoints.
                </>
              ),
              required: undefined,
            },
            {
              name: 'smOffset',
              type: 'number',
              description: (
                <>
                  If set, specifies the amount of columns the cell will be
                  offset by at the <b>sm</b> and larger breakpoints.
                </>
              ),
              required: undefined,
            },
            {
              name: 'mdOffset',
              type: 'number',
              description: (
                <>
                  If set, specifies the amount of columns the cell will be
                  offset by at the <b>md</b> and larger breakpoints.
                </>
              ),
              required: undefined,
            },
            {
              name: 'lgOffset',
              type: 'number',
              description: (
                <>
                  If set, specifies the amount of columns the cell will be
                  offset by at the <b>lg</b> and larger breakpoints.
                </>
              ),
              required: undefined,
            },
            {
              name: 'xlOffset',
              type: 'number',
              description: (
                <>
                  If set, specifies the amount of columns the cell will be
                  offset by at the <b>xl</b> breakpoints.
                </>
              ),
              required: undefined,
            },
          ],
          propsFooter: (
            <>
              <InlineMessage
                icon={infoIcon}
                role="region"
                aria-label="columns info"
                overrides={{marginBlockStart: 'space050'}}
              >
                The number of columns are set globally at the theme level.
              </InlineMessage>
            </>
          ),
        },
        {
          title: 'Grid component defaults',
          summary: 'The grid has a range of predefined defaults.',
          overridesRows: [
            {
              attribute: 'grid.containerMargin',
              type: 'MQ<String>',
              default: [
                'xs = space04',
                'sm = space040',
                'md = space040',
                'lg = space050',
                'xl = space050',
              ],
              description:
                'An override for the grid margin spacing at a specific breakpoint and upwards. and upwards breakpoint.',
            },
            {
              attribute: 'grid.columnGutters',
              type: 'String',
              default: [
                'xs = space04',
                'sm = space040',
                'md = space040',
                'lg = space050',
                'xl = space050',
              ],
              description:
                'An override for the column gutter spacing at a specific breakpoint and upwards. This applies to all direct children cells, but not the cells in further nested grids.',
            },
            {
              attribute: 'grid.rowGutters',
              type: 'String',
              default: [
                'xs = space04',
                'sm = space040',
                'md = space040',
                'lg = space050',
                'xl = space050',
              ],
              description:
                'An override for the row gutter spacing at a specific breakpoint and upwards.. This applies to all direct children cells, but not the cells in further nested grids.',
            },
            {
              attribute: 'grid.columns',
              type: 'number',
              default: '12',
              description:
                'The total columns available to use. Each Cell by default takes up 1 column. If there are more Cells in a Grid than columns, or the Cell components inside a Grid span a total greater than 12, they will wrap.',
            },
          ],
        },
      ],
    }}
    related={{
      related: ['Grid Layout', 'Block', 'Stack', 'Visibility'],
    }}
  />
);
export default GridCellComponent;
