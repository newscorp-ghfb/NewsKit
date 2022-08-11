import React from 'react';
import {styled, GridLayout, GridLayoutItem, getColorFromTheme} from 'newskit';
import {Link} from '../../components/link';
import {UsageKind} from '../../components/usage-card';
import {MetaStatus} from '../../components/meta/types';
import {LayoutProps} from '../../components/layout';
import {ComponentPageTemplate} from '../../templates/component-page-template';
import {getIllustrationComponent} from '../../components/illustrations/illustration-loader';

const PlaygroundContainer = styled.div`
  display: flex;
  width: 100%;
  height: 200px;
  align-items: center;
  justify-content: center;
`;

const BigRedBlock = styled.div`
  width: 100px;
  height: 100px;
  background: ${getColorFromTheme('illustrationPalette040')};
`;

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
    }}
    interactiveDemo={{
      introduction:
        'This demo allows you to preview the Grid Layout component, its variations, and configuration options.',
      playground: {
        componentName: 'GridLayout',
        component: state => (
          <PlaygroundContainer>
            <GridLayout {...state} columns="1fr 1fr 1fr">
              <GridLayoutItem>
                <BigRedBlock />
              </GridLayoutItem>
              <GridLayoutItem>
                <BigRedBlock />
              </GridLayoutItem>
              <GridLayoutItem>
                <BigRedBlock />
              </GridLayoutItem>
              <GridLayoutItem>
                <BigRedBlock />
              </GridLayoutItem>
              <GridLayoutItem>
                <BigRedBlock />
              </GridLayoutItem>
              <GridLayoutItem>
                <BigRedBlock />
              </GridLayoutItem>
            </GridLayout>
          </PlaygroundContainer>
        ),
        knobs: [
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
    componentAPI={{
      introduction: `Below are the properties for the Grid Layout component:`,
      components: [
        {
          title: 'GridLayout',
          summary:
            'Grid Layout has a range of props that can be used to define an appropriate experience for different use cases.',
          propsRows: [
            {
              name: 'rowGap',
              type: 'MQ<string>',
              required: false,
              description: 'If provided with, applies rowGap to the grid.',
            },
            {
              name: 'columnGap',
              type: 'MQ<string>',
              required: false,
              description: 'If provided with, applies columnGap to the grid.',
            },
            {
              name: 'rows',
              type: 'MQ<string>',
              required: false,
              description:
                'Defines the line names and track sizing functions of the grid rows.',
            },
            {
              name: 'columns',
              type: 'MQ<string>',
              required: false,
              description:
                'Defines the line names and track sizing functions of the grid columns.',
            },
            {
              name: 'justifyContent',
              type: 'MQ<string>',
              required: false,
              description:
                'If parent container has remaining space, this aligns the grid along the inline axis.',
            },
            {
              name: 'alignContent',
              type: 'MQ<string>',
              required: false,
              description:
                'If parent container has remaining space, this aligns the grid along the block axis.',
            },
            {
              name: 'justifyItems',
              type: 'MQ<string>',
              required: false,
              description: 'Aligns the grid items along the inline axis.',
            },
            {
              name: 'alignItems',
              type: 'MQ<string>',
              required: false,
              description: 'Aligns the grid items along the block axis.',
            },
            {
              name: 'areas',
              type: 'MQ<string>',
              required: false,
              description:
                'Specifies named grid areas, establishing the cells in the grid and assigning them names. It visually represents the layout of the grid.',
            },
            {
              name: 'inline',
              type: 'MQ<boolean>',
              required: false,
              default: 'false',
              description:
                'Specifies whether the grid should be displayed in-line',
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
          title: 'GridLayoutItem',
          summary:
            'Grid Layout Item has a range of props that can be used to define an appropriate experience for different use cases. Use this component within the NewsKit GridLayout component.',
          propsRows: [
            {
              name: 'area',
              type: 'string',
              required: false,
              description:
                'Assigns a name to an item so that it can be referenced by a template created with the GridLayout areas property.',
            },
            {
              name: 'order',
              type: 'MQ<number>',
              required: false,
              description:
                'Sets the order in which to display items in a grid. Items are sorted by ascending order value and then by their oder of appearance in the DOM.',
            },
            {
              name: 'justifySelf',
              type: 'MQ<string>',
              required: false,
              description:
                'Aligns an item inside its containing block on the inline axis.',
            },
            {
              name: 'alignSelf',
              type: 'MQ<string>',
              required: false,
              description:
                'Aligns an item inside its containing block on the block axis.',
            },
            {
              name: 'column',
              type: 'MQ<string>',
              required: false,
              description:
                'Determines a grid item’s location within the grid by referring to specific grid columns.',
            },
            {
              name: 'row',
              type: 'MQ<string>',
              required: false,
              description:
                'Determines a grid item’s location within the grid by referring to specific rows.',
            },
          ],
        },
      ],
    }}
  />
);

export default GridLayoutComponent;
