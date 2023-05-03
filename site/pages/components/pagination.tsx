import React from 'react';
import {Info as FilledInfo} from '@emotion-icons/material/Info';
import {InlineMessage, LinkInline, UnorderedList, toNewsKitIcon} from 'newskit';
import {InlineCode} from '../../components/markdown-elements';
import {ComponentPageTemplate} from '../../templates/component-page-template';
import {LayoutProps} from '../../components/layout';
import {MetaStatus} from '../../components/meta/types';
import {getIllustrationComponent} from '../../components/illustrations/illustration-loader';
import {UsageKind} from '../../components/usage-card';
import {IconFilledCircle} from '../../components/icons';
import {Link} from '../../components/link';
import {commonLogicalProps} from '../../components/component-api/common-logical-props';
import {OverridesRowsProps} from '../../components/component-api';

const IconFilledInfo = toNewsKitIcon(FilledInfo);

const infoIcon = (
  <IconFilledInfo
    overrides={{
      size: 'iconSize020',
    }}
  />
);

const PaginationComponent = (layoutProps: LayoutProps) => (
  <ComponentPageTemplate
    headTags={{
      title: 'Pagination',
      description: 'Pagination lets users navigate through multiple pages.',
    }}
    layoutProps={layoutProps}
    pageIntroduction={{
      type: 'Navigation',
      name: 'Pagination',
      hero: {
        illustration: 'components/pagination/hero',
      },
      introduction: 'Pagination lets users navigate through multiple pages.',
    }}
    componentDefaultsKey="pagination"
    meta={{
      status: MetaStatus.Supported,
      introduced: 'v7.1.0',
      storybookId: 'components-pagination--story-default',
      codeUrl: '',
      figmaUrl:
        'https://www.figma.com/file/MkU4xtY2yPcCpfhzQCuSnK/v5.0-%F0%9F%9F%A2-NewsKit-component-library?node-id=13255%3A179266&t=YHF77CaB2nhMe5VH-0',
    }}
    anatomy={{
      introduction:
        'The pagination contains 3 required elements and 5 optional elements.',
      rows: [
        {
          name: 'Pagination',
          description: 'Combines pagination items',
          component: ['Unordered List'],
        },
        {
          name: 'FirstItem',
          description: 'Link to first item',
          component: ['Button'],
          optional: true,
        },
        {
          name: 'PreviousItem',
          description: 'Link to previous item',
          component: ['Button'],
        },
        {
          name: 'Boundaries',
          description:
            'Items to the left and right of the sibling pagination items',
          component: ['Button'],
          optional: true,
        },
        {
          name: 'Truncation',
          description:
            'Icon applied when there are more items than the width allows',
          component: ['Icon'],
          optional: true,
        },
        {
          name: 'Siblings',
          description:
            'Items to the left and right of the selected pagination item',
          component: ['Button'],
          optional: true,
        },
        {
          name: 'NextItem',
          description: 'Link to next item',
          component: ['Button'],
        },
        {
          name: 'LastItem',
          description: 'Link to last item',
          component: ['Button'],
          optional: true,
        },
      ],
      media: getIllustrationComponent('components/pagination/anatomy'),
    }}
    options={{
      introduction:
        'The pagination has options that can be used to provide an appropriate experience for different use cases.',
      cards: [
        {
          title: 'First and last pagination item',
          description: 'Links to the first and last item.',
          media: getIllustrationComponent(
            'components/pagination/options/firstlast',
          ),
        },
        {
          title: 'Truncation',
          description:
            'Truncation can be applied when there are more items than the width allows. Ellipsis are used to indicate additional items. Double truncation is applied when the current item is separated from both the first and last item.',
          media: getIllustrationComponent(
            'components/pagination/options/truncation',
          ),
        },
        {
          title: 'Siblings',
          description: 'The main pagination items.',
          media: getIllustrationComponent(
            'components/pagination/options/siblings',
          ),
        },
        {
          title: 'Boundaries',
          description:
            'Pagination items to the left and right of the siblings.',
          media: getIllustrationComponent(
            'components/pagination/options/boundaries',
          ),
        },
        {
          title: 'Size',
          description:
            'There are three sizes of pagination: small, medium, and large. The default is medium.',
          media: getIllustrationComponent('components/pagination/options/size'),
        },
      ],
    }}
    states={{
      introduction: 'Pagination has the following states:',
      layout: '2-span',
      cards: [
        {
          title: 'Base',
          description:
            'The default style before the user interacts with the pagination.',
          media: getIllustrationComponent('components/pagination/states/base'),
        },
        {
          title: 'Focus',
          description:
            'Communicates that a user has highlighted a pagination item (e.g. via keyboard or voice).',
          media: getIllustrationComponent('components/pagination/states/focus'),
        },
        {
          title: 'Hover',
          description:
            'The pagination item changes style to let the user know it’s interactive.',
          media: getIllustrationComponent('components/pagination/states/hover'),
        },
        {
          title: 'Active',
          description:
            'The pagination item changes style to provide feedback to the user that it has been interacted with.',
          media: getIllustrationComponent(
            'components/pagination/states/active',
          ),
        },
        {
          title: 'Selected',
          description:
            'The pagination item changes style to let the user know it is the current item that has been selected.',
          media: getIllustrationComponent(
            'components/pagination/states/selected',
          ),
        },
        {
          title: 'Disabled',
          description:
            'Communicates that a pagination item exists, but isn’t available in that scenario. Applies when the user has reached the first or last pagination item.',
          media: getIllustrationComponent(
            'components/pagination/states/disabled',
          ),
        },
      ],
    }}
    usage={{
      introduction:
        'The following guidance describes how and when to appropriately use the pagination component.',
      layout: '2-span',
      cards: [
        {
          title: 'Use pagination when there are more than 25 results',
          description:
            'This helps reduce cognitive load as the user is not overwhelmed with information.',
          kind: UsageKind.DO,
          media: getIllustrationComponent('components/pagination/usage/do-01'),
        },
        {
          title: 'Don’t split pagination over multiple lines',
          description:
            'This can make pagination difficult for users to understand.',
          kind: UsageKind.DONT,
          media: getIllustrationComponent('components/pagination/usage/do-02'),
        },
        {
          title: 'Do position pagination in a consistent place on each page',
          description:
            'Pagination should appear in close proximity to the content, typically beneath the search results or listing.',
          kind: UsageKind.DO,
          media: getIllustrationComponent('components/pagination/usage/do-03'),
        },
      ],
    }}
    accessibility={{
      introduction: (
        <>
          The Pagination has the following accessibility considerations:
          <br />
          <br />
          <UnorderedList
            markerAlign="start"
            listItemMarker={IconFilledCircle}
            overrides={{
              content: {
                typographyPreset: 'editorialParagraph030',
              },
              marginBlockStart: 'space050',
              marginBlockEnd: 'space090',
              spaceStack: 'space060',
            }}
          >
            <>
              Pagination is structured using an unordered list. The nav element
              is labeled ‘pagination’, making it a navigation landmark so that
              it is easy to locate using assistive tools.
            </>
          </UnorderedList>
        </>
      ),
      focusOrder: {
        title: 'Focus order',
        tableRows: [
          {
            order: 1,
            element: 'Pagination item',
            role: 'Focusses to the first pagination item',
          },
          {
            order: 2,
            element: 'Pagination item',
            role: 'Focusses to the next pagination item',
          },
        ],
      },
      interaction: {
        title: 'Keyboard interactions',
        tableRows: [
          {
            command: ['Tab'],
            description:
              'When focus is outside the pagination, moves focus to the first pagination item. If focus is on a pagination item, moves focus to the next item',
          },
          {
            command: ['Space or Enter'],
            description: 'Activates the pagination item',
          },
        ],
      },
      aria: {
        title: 'WAI-ARIA',
        tableRows: [
          {
            element: 'nav',
            attribute: 'aria-label',
            value: 'pagination',
            description:
              'Describes the type of navigation provided in the nav element as pagination.',
          },
          {
            element: 'link',
            attribute: 'aria-label',
            value: 'go to previous / next page',
            description: (
              <>
                Used to inform the assistive technology user what has been
                indicated via styling. Indicates the link points to the previous
                page
              </>
            ),
          },
          {
            element: 'link',
            attribute: 'aria-label',
            value: 'go to page [number]',
            description: 'Indicates the link points to a page number',
          },
          {
            element: 'link',
            attribute: 'aria-current',
            value: 'page',
            description: 'Indicates the current page',
          },
          {
            element: 'link',
            attribute: 'aria-disabled',
            value: 'true',
            description: 'Indicates a disabled link',
          },
        ],
      },
    }}
    componentAPI={{
      components: [
        {
          title: 'Pagination',
          summary:
            'The Pagination container component holds React content for its children',
          propsRows: [
            {
              name: 'children',
              type: 'ReactNode',
              default: '',
              description:
                'Must use one or all of PaginationItemFirst, PaginationItemPrev, PaginationsItems, PaginationItemNext and PaginationItemLast',
              required: true,
            },
            {
              name: 'size',
              type: ['small', 'medium', 'large'],
              default: 'medium',
              description: 'Defines the size of the pagination items',
              required: false,
            },
            {
              name: 'totalItems',
              type: 'number',
              description: 'Total number of items',
              required: true,
            },
            {
              name: 'pageSize',
              type: 'number',
              description: 'Number of items per page',
              required: true,
            },
            {
              name: 'page',
              type: 'number',
              description:
                'Latest selected page if wishing to control that state externally. If omitted, we will keep track of that for you',
              required: false,
            },
            {
              name: 'defaultPage',
              type: 'number',
              default: '1',
              description: 'Initial selected page (static value)',
              required: false,
            },
            {
              name: 'buildHref',
              type: '(number) => string',
              description: (
                <>
                  Normally required but not if onPageChange is set.Template to
                  build href for every link{' '}
                  <InlineCode>(number) ⇒ string</InlineCode>
                </>
              ),
              required: false,
            },
            {
              name: 'onPageChange',
              type: '(number) => void',
              default: '',
              description:
                'Action that occurs after a pagination item is clicked on to change page',
              required: false,
            },
          ],
          propsFooter: (
            <InlineMessage
              id="pagination-info"
              aria-label="pagination info"
              icon={infoIcon}
              role="region"
              overrides={{
                marginBlockStart: 'space030',
              }}
            >
              From the Pagination props, it is possible to derive lastPage and
              selected props. This is something we do in the
              PaginationProviderContext that child components of Pagination can
              access. See{' '}
              <Link
                href="https://storybook.newskit.co.uk/?path=/docs/components-pagination--story-default"
                target="_blank"
              >
                Storybook examples
              </Link>{' '}
              for how to use the usePaginationContext hook in your custom
              components.
              <br />
              <br />
              For reference, these are all the values it returns. In practice,
              you would only need a few of them:
              <br />
              <InlineCode>
                {`const { size, changePage, page, lastPage, pageSize, totalItems, buildHref } = usePaginationContext();`}
              </InlineCode>
              <br />
              <br />
              Most of these properties are also passed, for convenience, in the
              itemButton and itemDescription overrides that PaginationItems
              supports (to avoid the need to call the hook).
              <br />
              <br />
              If writing a custom input component, lastPage can be used to
              validate that an input page number is within a valid range and
              selected can be used to just override the selected item button.
            </InlineMessage>
          ),
          overridesRows: [
            {
              attribute: 'stylePreset',
              type: 'MQ<string>',
              description:
                'If provided, overrides the stylePreset of the pagination',
            },
            {
              attribute: 'gap',
              type: 'MQ<string>',
              description:
                'If provided, this overrides the gap applied between pagination items.',
            },
            ...(commonLogicalProps() as OverridesRowsProps[]),
          ],
        },
        {
          title: 'Pagination items',
          summary:
            'The PaginationItems child component shows pagination item links with numbers. Override icon if you want to change the appearance of the truncation icon. Override itemButton/itemDescription if you want to change/extend the appearance of the generated buttons.',
          propsRows: [
            {
              name: 'children',
              type: 'ReactNode',
              default: '',
              description:
                'If specified, is passed on to each generated pagination item as children, instead of page number.',
              required: false,
            },
            {
              name: 'truncation',
              type: 'boolean',
              default: 'true',
              description: 'Show truncation',
              required: false,
            },
            {
              name: 'siblings',
              type: 'number',
              default: '3',
              description:
                'Number of siblings on left/right side of current page',
              required: false,
            },
            {
              name: 'boundaries',
              type: 'number',
              default: '1',
              description: 'Number of elements on left/right edges',
              required: false,
            },
            {
              name: 'eventOriginator',
              type: 'string',
              default: 'pagination-item',
              description:
                'Allows users to add an event originator custom name.',
              required: false,
            },
            {
              name: 'eventContext',
              type: 'object',
              description:
                'Allows users to add extra event data to click events.',
              required: false,
            },
          ],

          overridesRows: [
            {
              attribute: 'stylePreset',
              type: 'MQ<string>',
              default: 'paginationItem',
              description:
                'If provided, this overrides the pagination item styling.',
            },
            {
              attribute: 'typographyPreset',
              type: 'MQ<string>',
              default: [
                'small - utilityButton010',
                'medium - utilityButton020',
                'large - utilityButton030',
              ],
              description:
                'If provided, this overrides the pagination item typography preset.',
            },
            ...(commonLogicalProps('overridesRow', {
              paddingInline: 'space020',
              paddingBlock: 'space000',
              marginInline: 'space010',
            }) as OverridesRowsProps[]),
            {
              attribute: 'minHeight',
              type: 'MQ<string>',
              default: [
                'small - sizing050',
                'medium - sizing060',
                'large - sizing070',
              ],
              description:
                'If provided, this overrides the min height of the pagination item',
            },
            {
              attribute: 'minWidth',
              type: 'MQ<string>',
              default: [
                'small - sizing050',
                'medium - sizing060',
                'large - sizing070',
              ],
              description:
                'If provided, this overrides the min width of the pagination item',
            },
            {
              attribute: 'iconSize',
              type: 'MQ<string>',
              default: [
                'small - iconSize10',
                'medium - iconSize20',
                'large - iconSize20',
              ],
              description:
                'If provided, this overrides the size of the truncation icon',
            },
            {
              attribute: 'icon',
              type: 'Override <NewskitIconProps>',
              default: 'IconFilledMoreHoriz',
              description:
                'If provided, overrides the default (ellipsis) truncation icon',
            },
            {
              attribute: 'itemButton',
              type: [
                'Override<ButtonOrButtonLinkProps',
                '& PaginationItemProps>',
              ],
              default: 'PaginationButton',
              description:
                'If provided, overrides the item button with a custom component. The Storybook pages shows input and dropdown examples.',
            },
            {
              attribute: 'itemDescription',
              type: [
                'Override<TextBlockProps &',
                'PaginationItemDescriptionProps>',
              ],
              default: '',
              description:
                'If a TextBlock-based component is provided, it displays a description after the item button; otherwise no text shows.',
            },
          ],
        },
        {
          title: 'Pagination navigation items',
          summary:
            'The PaginationItemFirst, PaginationItemPrev, PaginationItemNext and PaginationItemLast child components all take no props and the same set of overrides. Override icon if you want to change the appearance of the navigation icon. The defaults for paginationfirstItem, paginationPrevItem, paginationNextItem and paginationLastItem all reference the paginationItem stylePreset.',
          propsRows: [
            {
              name: 'children',
              type: 'ReactNode',
              default: '',
              description:
                'Can be optionally used to add text to the right (PaginationItemFirst, PaginationItemPrev) or the left (PaginationItemNext and PaginationItemLast) of the icon',
              required: false,
            },
          ],

          overridesFooter: (
            <InlineMessage
              id="button-docs-link"
              aria-label="button docs link"
              icon={infoIcon}
              role="region"
              overrides={{
                marginBlockStart: 'space030',
              }}
            >
              Please refer to the{' '}
              <LinkInline href="/components/button/#component-api">
                Button
              </LinkInline>{' '}
              page for full set of props that can be used as overrides for
              PaginationFirstItem, PaginationLastItem, PaginationNextItem and
              PaginationPrevItem.
            </InlineMessage>
          ),
          overridesRows: [
            {
              attribute: 'stylePreset',
              type: 'MQ<string>',
              default: 'paginationItem',
              description:
                'If provided, this overrides the pagination item styling.',
            },
            {
              attribute: 'typographyPreset',
              type: 'MQ<string>',
              default: [
                'small - utilityButton010',
                'medium - utilityButton020',
                'large - utilityButton030',
              ],
              description:
                'If provided, this overrides the pagination item typography preset.',
            },
            ...(commonLogicalProps('overridesRow', {
              paddingInline: 'space020',
              paddingBlock: 'space000',
              marginInline: 'space010',
            }) as OverridesRowsProps[]),
            {
              attribute: 'minHeight',
              type: 'MQ<string>',
              default: [
                'small - sizing050',
                'medium - sizing060',
                'large - sizing070',
              ],
              description:
                'If provided, this overrides the min height of the pagination item',
            },
            {
              attribute: 'width',
              type: 'MQ<string>',
              default: [
                'small - sizing050',
                'medium - sizing060',
                'large - sizing070',
              ],
              description:
                'If provided, this overrides the width of the pagination item',
            },
            {
              attribute: 'iconSize',
              type: 'MQ<string>',
              default: [
                'small - iconSize10',
                'medium - iconSize20',
                'large - iconSize20',
              ],
              description:
                'If provided, this overrides the size of the respective navigation icon',
            },
            {
              attribute: 'icon',
              type: 'Override <NewskitIconProps>',
              default: [
                'first - IconFilledFirstPage',
                'prev - IconFilledChevronLeft',
                'next - IconFilledChevronRight',
                'last - IconFilledLastPage',
              ],
              description:
                'If provided, overrides the respective navigation icon',
            },
          ],
        },
        {
          title: 'Pagination list item',
          summary:
            'The PaginationListItem is a styled LI element that should be used inside any custom Pagination components you write.',
          propsRows: [
            {
              name: 'children',
              type: 'ReactNode',
              default: '',
              description:
                'Used to make the item button part of an unordered list (UL).',
              required: true,
            },
            {
              name: 'key',
              type: 'string',
              default: '',
              description:
                'Unique identifier required to make the ordereed list valid HTML.',
              required: true,
            },
          ],
        },
        {
          title: 'Pagination button',
          summary:
            'The PaginationButton is default item button implementation. It is based on the Button component, as that supports a lot of styling options. These props do not need to be supplied manually, they will be provided in the props of the itemButton function. Overrides passed into PaginationItems get turned into standard Button props before being passed into this component.',
          propsRows: [
            {
              name: 'children',
              type: 'ReactNode',
              default: '',
              description:
                'If specified, this React component will be displayed instead of the page number. eg Can be used to show a circle icon',
              required: true,
            },
            {
              name: 'size',
              type: ['small', 'medium', 'large'],
              default: 'medium',
              description: "Defines the button's size.",
              required: false,
            },
            {
              name: 'selected',
              type: 'boolean',
              default: '',
              description: 'Whether this item is the selected page.',
              required: true,
            },
            {
              name: 'pageNumber',
              type: 'number',
              default: '',
              description: 'The page number of the button to be rendered.',
              required: true,
            },
            {
              name: 'lastPage',
              type: 'number',
              default: '',
              description:
                'The last page (calculated from totalPages and pageSize).',
              required: true,
            },
            {
              name: 'href',
              type: 'string',
              default: '',
              description:
                'If provided, turns the button into an anchor element.',
              required: false,
            },
            {
              name: 'changePage',
              type: '(number) => void',
              default: '',
              description:
                'If href not provided, the changePage function will be called on button click.',
              required: false,
            },
            {
              name: 'onClick',
              type: '(MouseEvent) => void',
              default: '',
              description:
                'If href not provided, the callback function to be called after changePage is called.',
              required: false,
            },
          ],
          propsFooter: (
            <InlineMessage
              id="button-docs-link-2"
              aria-label="button docs link 2"
              icon={infoIcon}
              role="region"
              overrides={{
                marginBlockStart: 'space030',
              }}
            >
              Please refer to the{' '}
              <LinkInline href="/components/button/#component-api">
                Button
              </LinkInline>{' '}
              page for the other props.
              <br />
              <br />
              The default PaginationButton can be overridden, or added to, by
              using the itemButton render prop in PaginationItems&apos;
              overrides. Go to{' '}
              <Link
                href="https://storybook.newskit.co.uk/?path=/docs/components-pagination--story-default"
                target="_blank"
              >
                Storybook examples
              </Link>{' '}
              for code examples. The Variations in Input / Buttons with Input
              for Selected Item story is an advanced customisation example. It
              uses the itemButton function to render a custom component for
              selected items only. The normal items use the default
              PaginationButton.
            </InlineMessage>
          ),
        },
        {
          title: 'Truncation icon defaults',
          summary: 'Default overrides used by the truncation icon.',

          overridesRows: [
            {
              attribute: 'stylePreset',
              type: 'MQ<string>',
              default: 'paginationItemNonInteractive',
              description:
                'If provided, this overrides the truncation item styling.',
            },
            {
              attribute: 'typographyPreset',
              type: 'MQ<string>',
              default: [
                'small - utilityButton010',
                'medium - utilityButton020',
                'large - utilityButton030',
              ],
              description:
                'If provided, this overrides the truncation item typography preset (in case using text instead of an icon).',
            },
            ...(commonLogicalProps(
              'overridesRow',
              {
                marginInline: 'space000',
              },
              true,
            ) as OverridesRowsProps[]),
            {
              attribute: 'width',
              type: 'MQ<string>',
              default: [
                'small - sizing050',
                'medium - sizing060',
                'large - sizing070',
              ],
              description:
                'If provided, this overrides the width of the truncation item',
            },
            {
              attribute: 'iconSize',
              type: 'MQ<string>',
              default: [
                'small - iconSize10',
                'medium - iconSize20',
                'large - iconSize20',
              ],
              description:
                'If provided, this overrides the icon size of the truncation item',
            },
          ],
        },
        {
          title: 'Pagination item description defaults',
          summary:
            'Default overrides used by the TextBlock-based itemDescription override in PaginationItems. It uses utilityBody instead of utilityButton fonts, to match the lighter weight of text inside input/dropdown custom components.',

          overridesRows: [
            {
              attribute: 'stylePreset',
              type: 'MQ<string>',
              default: 'paginationItemNonInteractive',
              description:
                'If provided, this overrides the truncation item styling.',
            },
            {
              attribute: 'typographyPreset',
              type: 'MQ<string>',
              default: [
                'small - utilityBody010',
                'medium - utilityBody020',
                'large - utilityBody030',
              ],
              description:
                'If provided, this overrides the pagination item display typography preset.',
            },
            ...(commonLogicalProps(
              'overridesRow',
              {
                paddingInline: 'space020',
                marginInline: 'space010',
                marginBlockEnd: 'space000',
              },
              true,
            ) as OverridesRowsProps[]),
            {
              attribute: 'iconSize',
              type: 'MQ<string>',
              default: [
                'small - iconSize10',
                'medium - iconSize20',
                'large - iconSize20',
              ],
              description:
                'If provided, this overrides the icon size of the pagination item display component',
            },
          ],
        },
      ],
    }}
    related={{
      related: ['Unordered List', 'Button', 'Icon'],
    }}
  />
);

export default PaginationComponent;
