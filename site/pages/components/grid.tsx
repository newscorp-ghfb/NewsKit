import React from 'react';
import {Block} from 'newskit';
import {ComponentPageTemplate} from '../../templates/component-page-template';
import {LayoutProps} from '../../components/layout';
import {MetaStatus} from '../../components/meta/types';
import {getIllustrationComponent} from '../../components/illustrations/illustration-loader';
import {Link} from '../../components/link';
import {UsageKind} from '../../components/usage-card';
import {ContentText} from '../../components/text-section/content-text';

const commonOverridesRows = [
  {
    attribute: 'xsMargin',
    type: 'String',
    default: 'space040',
    description: `An override for the grid margin spacing at the xs and upwards breakpoint.`,
  },
  {
    attribute: 'smMargin',
    type: 'String',
    default: 'space040',
    description: `An override for the grid margin spacing at the sm and upwards breakpoint.`,
  },
  {
    attribute: 'mdMargin',
    type: 'String',
    default: 'space040',
    description: `An override for the grid margin spacing at the md and upwards breakpoint.`,
  },
  {
    attribute: 'lgMargin',
    type: 'String',
    default: 'space050',
    description: `An override for the grid margin spacing at the lg and upwards breakpoint.`,
  },
  {
    attribute: 'xlMargin',
    type: 'String',
    default: 'space050',
    description: `An override for the grid margin spacing at the xl breakpoint.`,
  },
  {
    attribute: 'xsColumnGutter',
    type: 'String',
    default: 'space040',
    description: ` An override for the column gutter spacing at the xs and upwards breakpoint. This applies to all direct children cells, but not the cells in further nested grids.`,
  },
  {
    attribute: 'smColumnGutter',
    type: 'String',
    default: 'space040',
    description: `An override for the column gutter spacing at the sm and upwards breakpoint. This applies to all direct children cells, but not the cells in further nested grids.`,
  },
  {
    attribute: 'mdColumnGutter',
    type: 'String',
    default: 'space040',
    description: `An override for the column gutter spacing at the md and upwards breakpoint. This applies to all direct children cells, but not the cells in further nested grids.`,
  },
  {
    attribute: 'lgColumnGutter',
    type: 'String',
    default: 'space050',
    description: `An override for the column gutter spacing at the lg and upwards breakpoint. This applies to all direct children cells, but not the cells in further nested grids.`,
  },
  {
    attribute: 'xlColumnGutter',
    type: 'String',
    default: 'space050',
    description: `An override for the column gutter spacing at the xl breakpoint. This applies to all direct children cells, but not the cells in further nested grids.`,
  },
  {
    attribute: 'xsRowGutter',
    type: 'String',
    default: 'space040',
    description: `An override for the row gutter spacing at the xs and upwards breakpoint. This applies to all direct children cells, but not the cells in further nested grids.`,
  },
  {
    attribute: 'smRowGutter',
    type: 'String',
    default: 'space040',
    description: `An override for the row gutter spacing at the sm and upwards breakpoint. This applies to all direct children cells, but not the cells in further nested grids.`,
  },
  {
    element: '',
    attribute: 'mdRowGutter',
    type: 'String',
    default: 'space040',
    description: `An override for the row gutter spacing at the md and upwards breakpoint. This applies to all direct children cells, but not the cells in further nested grids.`,
  },
  {
    attribute: 'lgRowGutter',
    type: 'String',
    default: 'space050',
    description: `An override for the row gutter spacing at the lg and upwards breakpoint. This applies to all direct children cells, but not the cells in further nested grids.`,
  },
  {
    attribute: 'xlRowGutter',
    type: 'String',
    default: 'space050',
    description: `An override for the row gutter spacing at the xl breakpoint. This applies to all direct children cells, but not the cells in further nested grids.`,
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
        },
        {
          name: 'Column gutter',
          description:
            'The space between columns are called gutters. These are fixed sizes but vary at different breakpoints.',
        },
        {
          name: 'Container margin',
          description:
            'The container margins are on the outside edges of the grid, providing space between the edge of the screen and the grid.',
        },
        {
          name: 'Cell',
          description:
            'Cells are used to contain the content. They can span any number of columns, resize with the grid and change at different breakpoints.',
        },
        {
          name: 'Row gutter',
          description:
            'The spacing between each cell row (i.e. top and bottom when cells are wrapped) is called the row gutters. These can vary at different breakpoints.',
        },
      ],
    }}
    options={{
      introduction:
        'The grid has the following options to provide an appropriate experience for different scenarios.',
      cards: [
        {
          title: 'Breakpoints (Grid)',
          description: (
            <>
              There are 5 breakpoints. The breakpoint ranges can be set via the{' '}
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
          title: 'Gutter width (Grid)',
          description:
            'The gutter width can be set for each breakpoint. These can be set via the theme or overridden at the component level.',

          media: getIllustrationComponent(
            'components/grid-cell/gridoptions/gutter-width',
          ),
        },
        {
          title: 'Margin width (Grid)',
          description:
            'The margin width can be set for each breakpoint. These can be set via the theme or overridden at the component level.',

          media: getIllustrationComponent(
            'components/grid-cell/gridoptions/margin-width',
          ),
        },
        {
          title: 'Max width (Grid)',
          description:
            'The maximum width of the grid can be set. This can be set via the theme or overridden at the component level.',

          media: getIllustrationComponent(
            'components/grid-cell/gridoptions/max-width',
          ),
        },
        {
          title: 'Span (Cell)',
          description:
            'Cells can be set to span any number of columns in the grid. If set to ‘full-width’ the cell will span all 12 columns and breakout across the margin of the grid. It will still be confined by the grids max-width.',

          media: getIllustrationComponent(
            'components/grid-cell/celloptions/span',
          ),
        },
        {
          title: 'Order (Cell)',
          description:
            'The order that cells appear can be changed at different breakpoints.',

          media: getIllustrationComponent(
            'components/grid-cell/celloptions/order',
          ),
        },
        {
          title: 'Visibility (Cell)',
          description:
            'Cells can be set to be hidden at different breakpoints.',

          media: getIllustrationComponent(
            'components/grid-cell/celloptions/visibility',
          ),
        },
        {
          title: 'Offset (Cell)',
          description:
            'Cells can be set to be offset by a specified number of columns.',

          media: getIllustrationComponent(
            'components/grid-cell/celloptions/offset',
          ),
        },
      ],
    }}
    behaviors={{
      title: 'Grid behaviours',
      introduction: 'The following guidance describes how the grid behaves',
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
              A grid can be nested inside of a parent grid by adding it to a
              cell of that grid.{' '}
              <Link href="https://github.com/lhaggar/newskit-grid-demo/blob/master/pages/nesting.js">
                See example.
              </Link>
            </>
          ),
          media: getIllustrationComponent(
            'components/grid-cell/behaviours/nested-grids',
          ),
        },
      ],
    }}
    usage={{
      introduction:
        'The following guidance describes how and when to appropriately use the grid.',
      layout: '2-span',
      cards: [
        {
          description:
            'Align your content. Whenever possible, make sure page elements are lined up both horizontally and/or vertically.',
          kind: UsageKind.DO,
          media: getIllustrationComponent('components/grid-cell/usage/do-01'),
        },
        {
          description:
            'Avoid aligning everything to the grid. Individual elements within the cells should align with each other rather than with the grid columns.',
          kind: UsageKind.DONT,
          media: getIllustrationComponent('components/grid-cell/usage/dont-01'),
        },
        {
          description:
            'Avoid making gutters too wide. They should be balanced against the column width to ensure page elements relate to each other.',
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
            Content passed to cells can be set as visible and hidden at
            different breakpoints. When used `hidden` excludes content from
            focus order when the screen size matches the applied breakpoint.{' '}
            <Link href="https://www.newskit.co.uk/components/visibility/">
              Read more.
            </Link>
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
          propsRows: [
            {
              name: 'children',
              type: 'Cell',
              default: undefined,
              description: `The cell components must be used as children of the grid. Using anything other than the cell components will break the grid functionality.`,
              required: true,
            },
          ],
          overridesRows: commonOverridesRows,
        },
        {
          title: 'Cell',
          summary: `TThe cell has a range of props that can be used to define an appropriate experience for different use cases.`,
          propsRows: [
            {
              name: 'Root',
              type: 'React.ReactNode',
              default: '',
              description:
                'The children of a column are rendered in that column, any supported React node is allowed.',
              required: true,
            },
            {
              name: 'xs span',
              type: [
                'xsHidden',
                'smHidden',
                'mdHidden',
                'lgHidden',
                'xlHidden',
              ],
              default: '',
              description:
                'The children of a column are rendered in that column, any supported React node is allowed.',
              required: true,
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
