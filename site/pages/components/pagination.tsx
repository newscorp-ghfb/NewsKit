import React from 'react';
import {Info as FilledInfo} from '@emotion-icons/material/Info';
import {LinkInline, toNewsKitIcon} from 'newskit';
import {InlineCode} from '../../components/markdown-elements';
import {ComponentPageTemplate} from '../../templates/component-page-template';
import {LayoutProps} from '../../components/layout';
import {MetaStatus} from '../../components/meta/types';
import {getIllustrationComponent} from '../../components/illustrations/illustration-loader';
import {UsageKind} from '../../components/usage-card';
import {UnorderedList} from '../../../src/unordered-list';
import {IconFilledCircle} from '../../components/icons';
import {Link} from '../../components/link';
import {commonLogicalProps} from '../../components/component-api/common-logical-props';
import {OverridesRowsProps} from '../../components/component-api';
import {InlineMessage} from '../../../src/inline-message';

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
      introduced: 'v5.6.0',
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
          component: ['UnorderedList'],
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
        title: 'Focus Order',
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
        title: 'Keyboard Interactions',
        tableRows: [
          {
            command: ['Tab'],
            description:
              'When focus is outside the pagination, moves focus to the first pagination item. If focus is on a pagination item, moves focus to the next item',
          },
          {
            command: ['Space'],
            description: 'Activates the pagination item',
          },
        ],
      },
      aria: {
        title: 'WAI-ARIA',
        tableRows: [
          {
            element: 'pagination',
            attribute: 'role',
            value: 'navigation',
            description: (
              <>
                Identifies major groups of links used for navigating through a
                website or page content{' '}
                <Link
                  href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Navigation_Role"
                  target="_blank"
                >
                  Learn more about the navigation role at MDN Web Docs
                </Link>
              </>
            ),
          },
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
            value: 'goto previous / next page',
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
            value: 'goto page [number]',
            description: 'Indicates the link points to a page number',
          },
          {
            element: 'link',
            attribute: 'aria-current',
            value: 'current',
            description: 'Indicates the current page',
          },
          {
            element: 'link',
            attribute: 'aria-disabled',
            value: 'false',
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
            'Pagination has a range of props that can be used to define an appropriate experience for different use cases.',
          propsRows: [
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
              type: '(number) ⇒ string',
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
              default: 'void',
              description:
                'Action that occurs after a pagination item is clicked on to change page',
              required: false,
            },
            {
              name: 'size',
              type: ['small', 'medium', 'large'],
              default: 'medium',
              description: 'Defines the size of the pagination item',
              required: false,
            },
          ],
          propsFooter: (
            <InlineMessage
              icon={infoIcon}
              role="region"
              aria-label="pagination info"
              overrides={{
                marginBlockStart: 'space030',
              }}
            >
              Please refer to the{' '}
              <LinkInline href="/components/button/#component-api">
                IconButton
              </LinkInline>{' '}
              for props and overrides for PaginationFirstItem,
              PaginationLastItem, PaginationNextItem and PaginationPreviousItem.
              <br />
              <br />
              From the Pagination props, it is possible to calculate the
              lastPage. This is something we do in the PaginationProviderContext
              that child components of Pagination can access. If using a custom
              input component, lastPage can be used to validate that an input
              page number is within a valid range. See Storybook examples link
              tbc for how to use the usePaginationContext hook in your custom
              components.
            </InlineMessage>
          ),
          overridesRows: [
            {
              attribute: 'stylePreset',
              type: 'MQ<string>',
              description:
                'If provided, overrides the stylePreset of the pagination',
            },
            ...(commonLogicalProps() as OverridesRowsProps[]),
          ],
        },
        {
          title: 'Pagination Items',
          summary: 'Show pagination item links with numbers.',
          propsRows: [
            {
              name: 'children',
              type: ['Exclude', '<React.ReactNode>', 'undefined'],
              description: 'Label and icon of the pagination item',
              required: true,
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
              name: 'eventContext = {}',
              type: 'object',
              description:
                'Allows users to add extra event data to click events.',
              required: false,
            },
            {
              name: 'eventOriginator',
              type: 'string',
              default: 'pagination-link',
              description:
                'Allows users to add an event originator custom name.	',
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
            ...(commonLogicalProps() as OverridesRowsProps[]),
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
