import React from 'react';
import {
  InlineMessage,
  toNewsKitIcon,
  UnorderedList,
  UnorderedListProps,
} from 'newskit';
import {Info as FilledInfo} from '@emotion-icons/material/Info';
import {LayoutProps} from '../../components/layout';
import {ComponentPageTemplate} from '../../templates/component-page-template';
import {MetaStatus} from '../../components/meta/types';
import {getIllustrationComponent} from '../../components/illustrations/illustration-loader';
import {UsageKind} from '../../components/usage-card';
import {IconFilledCircle} from '../../components/icons';
import {Link} from '../../components/link';
import {InlineCode} from '../../components/markdown-elements';
import {IconFilledStarOutline} from '../../../src/icons';

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
        An array of react nodes to populate the unordered list component.
        <br />
        <br />
        Note - if the node is a react element an unique key must be given to
        each element within the array.
      </>
    ),
    required: true,
  },
  {
    name: 'listItemMarker',
    type: 'IconComponent',
    description: 'Optional icon component to override the list style.',
  },
  {
    name: 'markerAlign',
    type: ['start', 'center', 'end'],
    default: 'center',
    description:
      'Vertically aligns the listItemMarker when the list has more than one line.',
  },
];
const commonOverridesRows = [
  {
    attribute: 'spaceStack',
    type: 'MQ<string>',
    default: 'space040',
    description:
      'If provided, this overrides the space between the unordered list items.',
  },
  {
    attribute: 'content.stylePreset',
    type: 'MQ<string>',
    default: 'inkBase',
    description:
      'If provided, this overrides the style preset applied to the unordered list content.',
  },
  {
    attribute: 'content.typographyPreset',
    type: 'MQ<string>',
    default: 'editorialParagraph010',
    description:
      'If provided, this overrides the typography preset applied to the unordered list content.',
  },
  {
    attribute: 'marker.stylePreset',
    type: 'MQ<string>',
    default: 'inkBase',
    description:
      'If provided, this overrides the style preset applied to the unordered list marker.',
  },
  {
    attribute: 'marker.spaceInline',
    type: 'MQ<string>',
    default: 'space020',
    description:
      'If provided, this overrides the space between the unordered list marker and the content.',
  },
  {
    attribute: 'marker.size',
    type: 'string',
    default: 'iconSize005',
    description: (
      <>
        If provided, overrides the size of the unordered list marker.
        <br />
        <br />
        Note - it is also possible to set the icon size by passing it directly
        as a <InlineCode>size</InlineCode> prop to the marker. However, by doing
        this you will override the <InlineCode>iconSize</InlineCode> passed from
        overrides.
      </>
    ),
  },
  {
    attribute: 'marginInline',
    type: 'MQ<string>',
    description:
      'It can take one space token to specify the logical inline start and end margin of the container. This space token can also be used on breakpoints.',
  },
  {
    attribute: 'marginInlineStart',
    type: 'MQ<string>',
    description:
      'It can take one space token to specify the logical inline start margin of the container. This space token can also be used on breakpoints.',
  },
  {
    attribute: 'marginInlineEnd',
    type: 'MQ<string>',
    description:
      'It can take one space token to specify the logical inline end margin of the container. This space token can also be used on breakpoints.',
  },
  {
    attribute: 'marginBlock',
    type: 'MQ<string>',
    description:
      'It can take one space token to specify the logical block start and end margin of the container. This space token can also be used on breakpoints.',
  },
  {
    attribute: 'marginBlockStart',
    type: 'MQ<string>',
    description:
      'It can take one space token to specify the logical block start margin of the container. This space token can also be used on breakpoints.',
  },
  {
    attribute: 'marginBlockEnd',
    type: 'MQ<string>',
    description:
      'It can take one space token to specify the logical block end margin of the container. This space token can also be used on breakpoints.',
  },
  {
    attribute: 'paddingInline',
    type: 'MQ<string>',
    description:
      'It can take one space token to specify the logical inline start and end padding of the container. This space token can also be used on breakpoints.',
  },
  {
    attribute: 'paddingInlineStart',
    type: 'MQ<string>',
    description:
      'It can take one space token to specify the logical inline start padding of the container. This space token can also be used on breakpoints.',
  },
  {
    attribute: 'paddingInlineEnd',
    type: 'MQ<string>',
    description:
      'It can take one space token to specify the logical inline end padding of the container. This space token can also be used on breakpoints.',
  },
  {
    attribute: 'paddingBlock',
    type: 'MQ<string>',
    description:
      'It can take one space token to specify the logical block start and end padding of the container. This space token can also be used on breakpoints.',
  },
  {
    attribute: 'paddingBlockStart',
    type: 'MQ<string>',
    description:
      'It can take one space token to specify the logical block start padding of the container. This space token can also be used on breakpoints.',
  },
  {
    attribute: 'paddingBlockEnd',
    type: 'MQ<string>',
    description:
      'It can take one space token to specify the logical block end padding of the container. This space token can also be used on breakpoints.',
  },
];

const UnorderedListComponent = (layoutProps: LayoutProps) => (
  <ComponentPageTemplate
    headTags={{
      title: 'Unordered List',
      description:
        'Unordered lists make blocks of related text easier to read, structuring information of equal value into manageable bulleted items.',
    }}
    layoutProps={layoutProps}
    pageIntroduction={{
      type: 'Text',
      name: 'Unordered List',
      hero: {
        illustration: 'components/unordered-list-illustration',
      },
      introduction:
        'Unordered lists make blocks of related text easier to read, structuring information of equal value into manageable bulleted items.',
    }}
    componentDefaultsKey="unorderedlist"
    meta={{
      status: MetaStatus.Supported,
      introduced: 'v0.2.0',
      codeUrl:
        'https://github.com/newscorp-ghfb/newskit/tree/main/src/unordered-list',
      storybookId: 'components-unordered-list--story-unordered-list-default',
      figmaUrl:
        'https://www.figma.com/file/FSbCQa6SzVR3K48ZWLeD77/%F0%9F%9F%A2-NK-Web-Components?node-id=2058%3A880',
    }}
    interactiveDemo={{
      introduction:
        'This demo allows you to preview the unordered list component, its variations, and configuration options.',
      playground: {
        componentName: 'UnorderedList',
        component: (props: UnorderedListProps) => <UnorderedList {...props} />,
        knobs: [
          {
            name: 'List Data',
            propName: 'children',
            value: [
              'NewsKit provides components, guidelines and standards to enable digital product teams to create high-quality, consistent products quickly. NewsKit is built on modular design principles and backed by best practice guidance for design and development.',
              'Unordered list items are not numbered, so use them in instances where ordering is not a factor. Where items are required to appear  in numerical order use an ordered list.',
              'Use unordered lists to break up blocks of related content into  manageable bulleted items to make the information easier for users to read',
            ],
          },
          {
            name: 'List Item Marker',
            propName: 'listItemMarker',
            options: [
              {
                label: 'Unset',
                value: undefined,
              },
              {
                label: 'star',
                value: IconFilledStarOutline,
              },
            ],
          },
          {
            name: 'Marker Align',
            propName: 'markerAlign',
            options: [
              {
                label: 'center',
                value: undefined,
                isDefault: true,
              },
              {
                label: 'start',
                value: 'start',
              },
              {
                label: 'end',
                value: 'end',
              },
            ],
          },
          {
            name: 'Marker Size',
            propName: 'overrides',
            options: [
              {
                label: 'Default (iconSize005)',
                value: {marker: {size: 'iconSize005'}},
                isDefault: true,
              },
              {
                label: 'iconSize010',
                value: {
                  marker: {
                    size: 'iconSize010',
                  },
                },
              },
              {
                label: 'iconSize020',
                value: {
                  marker: {
                    size: 'iconSize020',
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
                label: 'Default',
                value: {
                  spaceStack: 'space040',
                  marker: {
                    spaceInline: 'space020',
                  },
                },
                isDefault: true,
              },
              {
                label: 'increaseSpacing',
                value: {
                  spaceStack: 'space060',
                  marker: {spaceInline: 'space030'},
                },
              },
            ],
          },
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
                },
                isDefault: true,
              },
              {
                label: 'utilityButton020',
                value: {
                  content: {
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
                  marker: {
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
                  marker: {
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
                  marker: {
                    stylePreset: 'inkNegative',
                  },
                },
              },
            ],
          },
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ] as any,
      },
    }}
    anatomy={{
      introduction:
        'The unordered list contains one required element and one optional element.',
      media: getIllustrationComponent('components/unordered-list/anatomy-2'),
      rows: [
        {
          name: 'Content',
          description: 'The content of the unordered list',
          component: ['Text Block'],
        },
        {
          name: 'Marker',
          description:
            'The marker applied to the content of the unordered list',
          component: ['Icon'],
          optional: true,
        },
      ],
    }}
    options={{
      introduction:
        'The unordered list has options that can be used to provide an appropriate experience for different use cases.',
      cards: [
        {
          title: 'Marker',
          description:
            'The marker applied to the content of the unordered list can be overridden to use any icon.',
          media: getIllustrationComponent(
            'components/unordered-list/options/marker',
          ),
        },
        {
          title: 'Marker alignment',
          description:
            'The marker can be aligned at the centre, start, or end of the unordered list content.',
          media: getIllustrationComponent(
            'components/unordered-list/options/marker-alignment',
          ),
        },
      ],
    }}
    usage={{
      introduction: 'Here’s how and when to use the unordered list:',
      layout: '2-span',
      cards: [
        {
          title: 'Do use for non-sequential lists',
          description:
            'Unordered list items are not numbered, so use them in instances where ordering is not a factor. Where items are required to appear in numerical order use an ordered list.',
          kind: UsageKind.DO,
          media: getIllustrationComponent(
            'components/unordered-list/usage/do-01',
          ),
        },
        {
          title: "Don't use for numerically ordered lists",
          description:
            'Avoid unordered lists in instances where items are required to appear in numerical order. Instead use an ordered list.',
          kind: UsageKind.DONT,
          media: getIllustrationComponent(
            'components/unordered-list/usage/dont-01',
          ),
        },
        {
          title: 'Do use for bulleted lists that are easier to read',
          description:
            'Use unordered lists to break up blocks of related content into manageable bulleted items to make the information easier for users to read.',
          kind: UsageKind.DO,
          media: getIllustrationComponent(
            'components/unordered-list/usage/do-02',
          ),
        },
      ],
    }}
    accessibility={{
      introduction: (
        <>
          The unordered list has the following accessibility considerations:
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
              The ul element is for{' '}
              <Link
                href="https://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/H48"
                target="_blank"
              >
                grouping a collection of items
              </Link>{' '}
              that don&apos;t need to be in a specific numerical order.
            </>
            <>
              Unordered list are not keyboard operable unless the list items
              themselves are operable e.g. with links.
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
          title: 'Unordered list',
          summary:
            'The unordered list has a range of props that can be used to define an appropriate experience for different use cases.',
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
                Any prop valid on an{' '}
                <Link
                  href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ul"
                  target="_blank"
                >
                  ul The unordered list element
                </Link>
                , is also valid on the unordered list component.
              </InlineMessage>
            </>
          ),
          overridesRows: commonOverridesRows,
        },
      ],
    }}
    related={{
      related: ['Ordered List', 'Text Block'],
    }}
  />
);

export default UnorderedListComponent;
