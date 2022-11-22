import React from 'react';
import {InlineMessage, toNewsKitIcon, UnorderedList} from 'newskit';
import {Info as FilledInfo} from '@emotion-icons/material/Info';
import {InlineCode} from '../../components/markdown-elements';
import {UsageKind} from '../../components/usage-card';
import {ComponentPageTemplate} from '../../templates/component-page-template';
import {LayoutProps} from '../../components/layout';
import {MetaStatus} from '../../components/meta/types';
import {OrderedList} from '../../../src/ordered-list';
import {getIllustrationComponent} from '../../components/illustrations/illustration-loader';
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

const commonPropsRows = [
  {
    name: 'children',
    type: 'Array<React.ReactNode>',
    description: (
      <>
        An array of react nodes or strings to populate the ordered list
        component.
        <br />
        <br />
        Note - if the node is a react element, a unique key must be given to
        each element within the array.
      </>
    ),
    required: true,
  },
];
const commonOverridesRows = [
  {
    attribute: 'orderedList.spaceInline',
    type: 'MQ<string>',
    default: 'space040',
    description:
      'If provided, this overrides the space between the ordered list counter and the content.',
  },
  {
    attribute: 'orderedList.content.stylePreset',
    type: 'MQ<string>',
    default: 'inkBase',
    description:
      'If provided, this overrides the style preset applied to the ordered list content.',
  },
  {
    attribute: 'orderedList.content.typographyPreset',
    type: 'MQ<string>',
    default: 'editorialParagraph010',
    description:
      'If provided, this overrides the typography preset applied to the ordered list content.',
  },
  {
    attribute: 'orderedList.counter.stylePreset',
    type: 'MQ<string>',
    default: 'inkBase',
    description:
      'If provided, this overrides the style preset applied to the unordered list counter.',
  },
  {
    attribute: 'orderedList.counter.typographyPreset',
    type: 'MQ<string>',
    default: 'editorialParagraph010',
    description:
      'If provided, this overrides the typography preset applied to the unordered list counter.',
  },
  {
    attribute: 'orderedList.counter.minWidth',
    type: 'MQ<string>',
    default: 'sizing050',
    description:
      'If provided, this overrides the min width between the ordered list counter and the content.',
  },
  ...(commonLogicalProps() as OverridesRowsProps[]),
];

const OrderedListComponent = (layoutProps: LayoutProps) => (
  <ComponentPageTemplate
    headTags={{
      title: 'Ordered List',
      description:
        'Ordered lists make blocks of text easier to read, structuring sequential information into manageable, numbered items.',
    }}
    layoutProps={layoutProps}
    pageIntroduction={{
      type: 'Text',
      name: 'Ordered List',
      hero: {
        illustration: 'components/ordered-list-illustration',
      },
      introduction:
        'Ordered lists make blocks of text easier to read, structuring sequential information into manageable, numbered items.',
    }}
    componentDefaultsKey="orderedlist"
    meta={{
      status: MetaStatus.Supported,
      introduced: 'v0.2.0',
      codeUrl:
        'https://github.com/newscorp-ghfb/newskit/tree/main/src/ordered-list',
      storybookId: 'components-ordered-list--story-ordered-list-default',
      figmaUrl:
        'https://www.figma.com/file/FSbCQa6SzVR3K48ZWLeD77/%F0%9F%9F%A2-NK-Web-Components?node-id=324%3A6&t=4J9R35wp8IXwtzPU-0',
    }}
    interactiveDemo={{
      introduction:
        'This demo allows you to preview the ordered list component, its variations, and configuration options.',
      playground: {
        componentName: 'OrderedList',
        component: state => (
          <OrderedList {...state}>
            <>Prince Harry</>
            <>Meghan Markle</>
            <>Royal Family</>
          </OrderedList>
        ),
        knobs: [
          {
            name: 'Overrides',
            propName: 'overrides',
            options: [
              {
                label: 'Default',
                value: {
                  content: {
                    typographyPreset: 'editorialParagraph010',
                  },
                  counter: {
                    typographyPreset: 'editorialParagraph010',
                  },
                },
                isDefault: true,
              },
              {
                label: 'utilityButton020',
                value: {
                  content: {
                    typographyPreset: 'utilityButton020',
                  },
                  counter: {
                    typographyPreset: 'utilityButton020',
                  },
                },
              },
            ],
          },
          {
            name: 'Style Preset Overrides',
            propName: 'overrides',
            options: [
              {
                label: 'Default',
                value: {
                  content: {
                    stylePreset: 'inkBase',
                  },
                  counter: {
                    stylePreset: 'inkBase',
                  },
                },
                isDefault: true,
              },
              {
                label: 'inkPositive',
                value: {
                  content: {
                    stylePreset: 'inkPositive',
                  },
                  counter: {
                    stylePreset: 'inkPositive',
                  },
                },
              },
              {
                label: 'inkNegative',
                value: {
                  content: {
                    stylePreset: 'inkNegative',
                  },
                  counter: {
                    stylePreset: 'inkNegative',
                  },
                },
              },
            ],
          },
          {
            name: 'Margin Preset Overrides',
            propName: 'overrides',
            options: [
              {
                label: 'space010',
                value: {
                  spaceInline: 'space010',
                },
                isDefault: true,
              },
              {
                label: 'space020',
                value: {
                  spaceInline: 'space030',
                },
              },
            ],
          },
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ] as any,
      },
    }}
    anatomy={{
      introduction: 'The ordered list contains two required elements.',
      media: getIllustrationComponent('components/ordered-list/anatomy-01'),
      rows: [
        {
          name: 'Content',
          description: 'The content of the ordered list',
          component: ['Text Block'],
        },
        {
          name: 'Counter',
          description: 'The counter applied to the content of the ordered list',
          component: 'CSS',
        },
      ],
    }}
    options={{
      introduction:
        'The ordered list has options that can be used to provide an appropriate experience for different use cases.',
      cards: [
        {
          title: 'Counter',
          description:
            'The counter applied to the content of the ordered list can be overridden to use any typography preset.',
          media: getIllustrationComponent(
            'components/ordered-list/options/counter',
          ),
        },
      ],
    }}
    usage={{
      introduction:
        'The following guidance describes how and when to appropriately use the ordered list component.',
      layout: '2-span',
      cards: [
        {
          description:
            'Ordered list items are numbered, so use them in instances where items need to appear in numerical order.',
          kind: UsageKind.DO,
          media: getIllustrationComponent(
            'components/ordered-list/usage/do-01',
          ),
        },
        {
          description:
            'Use ordered lists to break up blocks of sequential information into manageable numbered items.',
          kind: UsageKind.DO,
          media: getIllustrationComponent(
            'components/ordered-list/usage/do-02',
          ),
        },
      ],
    }}
    accessibility={{
      introduction: (
        <>
          The ordered list has the following accessibility considerations:
          <br />
          <br />
          <UnorderedList
            markerAlign="start"
            listItemMarker={IconFilledCircle}
            overrides={{
              content: {
                typographyPreset: 'editorialParagraph020',
              },
              spaceStack: 'space070',
            }}
          >
            <>
              The <InlineCode>ol</InlineCode> element is for{' '}
              <Link
                href="https://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/H48"
                target="_blank"
              >
                grouping a collection of items
              </Link>{' '}
              that appear in sequential numerical order.
            </>
            <>
              Ordered lists are not keyboard operable unless the list items
              themselves are operable e.g. with{' '}
              <Link
                href="http://ncu-newskit-docs.s3-website-eu-west-1.amazonaws.com/ppdsc-2298-newskit-homepage-update-whats-new-section/components/link/"
                target="_blank"
              >
                links
              </Link>
              .
            </>
            <>
              Using unordered lists purely as a means of indenting text is
              discouraged. Refer to{' '}
              <Link
                href="https://www.w3.org/TR/html4/struct/lists.html#h-10.2"
                target="_blank"
              >
                Lists in HTML documents 10.2 in WCAG 2.1
              </Link>{' '}
              This is a stylistic issue and indenting of text can be achieved
              using the{' '}
              <Link
                href="https://newskit.ceng-dev.newsuk.tech/components/text-block/"
                target="_blank"
              >
                text block component.
              </Link>
            </>
          </UnorderedList>
        </>
      ),
    }}
    componentAPI={{
      components: [
        {
          title: 'Ordered list',
          summary:
            'The ordered list has a range of props that can be used to define an appropriate experience for different use cases.',
          propsRows: commonPropsRows,
          propsFooter: (
            <>
              <InlineMessage
                icon={infoIcon}
                role="region"
                aria-label="ul info"
                overrides={{
                  marginBlockStart: 'space030',
                }}
              >
                Any prop valid on a{' '}
                <Link
                  href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ol"
                  target="_blank"
                >
                  ol The ordered list element
                </Link>{' '}
                is also valid on the ordered list component.
              </InlineMessage>
            </>
          ),
          overridesSummary:
            'The ordered list has a range of predefined elements and attributes that can be overridden to define its appearance.',
          overridesRows: commonOverridesRows,
        },
      ],
    }}
    related={{
      related: ['Unordered List', 'Text Block'],
    }}
  />
);

export default OrderedListComponent;
