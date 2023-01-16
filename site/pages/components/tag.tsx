import React from 'react';
import {InlineMessage, toNewsKitIcon, UnorderedList, Tag} from 'newskit';
import {Info as FilledInfo} from '@emotion-icons/material/Info';
import {ComponentPageTemplate} from '../../templates/component-page-template';
import {unorderedListOverrides} from '../patterns/forms/address';
import {MetaStatus} from '../../components/meta/types';
import {getIllustrationComponent} from '../../components/illustrations/illustration-loader';
import {UsageKind} from '../../components/usage-card';
import {LayoutProps} from '../../components/layout';
import {IconFilledCircle} from '../../components/icons';

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
    type: ['React.ReactNode'],
    description: (
      <>
        The content of the tag is passed as the child of the component.
        <InlineMessage
          icon={infoIcon}
          role="region"
          aria-label="Children type"
          overrides={{
            marginBlockStart: 'space030',
          }}
        >
          Only if the children type supplied is a string or number will it be
          rendered inside a text block.
        </InlineMessage>
      </>
    ),
    required: true,
  },
  {
    name: 'size',
    type: ['small', 'medium', 'large'],
    default: 'medium',
    description: 'Defines the size of the tag.',
  },
  {
    name: 'disabled',
    type: 'boolean',
    default: 'false',
    description: 'If true, renders the tag in a disabled state.',
  },
  {
    name: 'href',
    type: 'string',
    description: 'If provided, the tag component turns into an anchor element.',
  },
];

const commonOverridesRows = [
  {
    attribute: 'width',
    type: 'MQ<string>',
    description:
      'If provided, sets a fixed width to the tag. This can be a sizing token from the theme, or any CSS length value (e.g. 100% for a full-width element).',
  },
  {
    attribute: 'height',
    type: 'MQ<string>',
    description:
      'If provided, sets a fixed height to the tag. This can be a sizing token from the theme, or any CSS length value.',
  },
  {
    attribute: 'maxHeight',
    type: 'MQ<string>',
    description: (
      <>
        Overrides the maxHeight of the tag.
        <br />
        <br />
        This can be a sizing token from the theme, or any CSS length value.
      </>
    ),
  },
  {
    attribute: 'minWidth',
    type: 'MQ<string>',
    description:
      'If provided, sets a minimum width to the tag. This can be a sizing token from the theme, or any CSS length value.',
  },
  {
    attribute: 'minHeight',
    type: 'MQ<string>',
    default: ['small = sizing050', 'medium = sizing060', 'large = sizing070'],
    description:
      'If provided, sets a minimum width to the tag. This can be a sizing token from the theme, or any CSS length value.',
  },
  {
    attribute: 'stylePreset',
    type: 'MQ<string>',
    default: 'tagPrimary',
    description: 'If provided, overrides the stylePreset of the tag.',
  },
  {
    attribute: 'typographyPreset',
    type: 'MQ<string>',
    default: [
      'small = utilityButton010',
      'medium =  utilityButton020',
      'large = utilityButton030',
    ],
    description: 'If provided, overrides the typographyPreset of the tag.',
  },
  {
    attribute: 'transitionPreset',
    type: 'MQ<string>',
    default: ['backgroundColorChange'],
    description: 'If provided, overrides the transitionPreset of the tag.',
  },
  {
    attribute: 'spaceInset',
    type: 'MQ<string>',
    default: [
      'small = spaceInsetSquish010',
      'medium = spaceInsetSquish020',
      'large = spaceInsetSquish020',
    ],
    description:
      "If provided, overrides the padding of the tag. Otherwise, use spaceInsetSquish010 or spaceInsetSquish020, depending on the 'size' prop.",
  },
  {
    attribute: 'spaceInline',
    type: 'MQ<string>',
    default: ['small = space010', 'medium = space010', 'large = space010'],
    description:
      'If provided, overrides the space between multiple children in the underlying stack.',
  },
  {
    attribute: 'icon.size',
    type: 'MQ<string>',
    default: ['iconSize010', 'iconSize010', 'iconSize020'],
    description: (
      <>
        If provided, overrides the size of any icons applied to the tag.
        <br />
        <br />
        Note: You can also set the icon size by passing it directly as a size
        prop to the icon, but by doing this you will override the iconSize
        passed from overrides.
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

const TagComponent = (layoutProps: LayoutProps) => (
  <ComponentPageTemplate
    headTags={{
      title: 'Tag',
      description:
        'Tags are used to classify content, typically using keywords.',
    }}
    layoutProps={layoutProps}
    pageIntroduction={{
      type: 'Navigation',
      name: 'Tag',
      hero: {
        illustration: 'components/tag-illustration',
      },
      introduction:
        'Tags are used to classify content, typically using keywords.',
    }}
    componentDefaultsKey="tag"
    meta={{
      status: MetaStatus.Supported,
      introduced: 'v0.2.0',
      codeUrl: 'https://github.com/newscorp-ghfb/newskit/tree/main/src/tag',
      figmaUrl:
        'https://www.figma.com/file/FSbCQa6SzVR3K48ZWLeD77/%F0%9F%9F%A2-NK-Web-Components?node-id=1952%3A3407',
    }}
    interactiveDemo={{
      introduction:
        'This demo allows you to preview the tag component, its variations, and configuration options.',
      playground: {
        componentName: 'Tag',
        component: state => <Tag {...state} />,
        knobs: [
          {
            name: 'Content',
            propName: 'children',
            value: 'Tag Content',
          },
          {
            name: 'Link',
            propName: 'href',
            value: 'https://www.newskit.co.uk/',
          },
          {
            name: 'Disabled',
            propName: 'disabled',
            type: 'boolean',
            value: false,
          },
          {
            name: 'Tag Size',
            propName: 'size',
            options: [
              {
                label: 'small',
                value: 'small',
              },
              {
                label: 'medium',
                value: 'medium',
                isDefault: true,
              },
              {
                label: 'large',
                value: 'large',
              },
            ],
          },
          {
            name: 'Overrides',
            propName: 'overrides',
            options: [
              {
                label: 'Default',
                value: undefined,
                isDefault: true,
              },
              {
                label: 'Style Preset',
                value: {
                  stylePreset: 'tagPrimaryInverse',
                  typographyPreset: undefined,
                },
              },
              {
                label: 'Typography Preset',
                value: {
                  stylePreset: undefined,
                  typographyPreset: 'utilityLabel010',
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
        'The tag contains two required elements and one optional element.',
      rows: [
        {
          name: 'Container',
          description: 'The tag container',
        },
        {
          name: 'Icon',
          description:
            'Icon that can be positioned either before (leading) or after (trailing) the label',
          component: ['Icon'],
          optional: true,
        },
        {
          name: 'Label',
          description: (
            <>
              The label is the text attributed to the tag that provides context
              <br />
              <br />
              Note: only if the children type supplied is a string or number
              will it be rendered inside a text block
            </>
          ),
          component: ['Text Block'],
        },
      ],
      media: getIllustrationComponent('components/tag/anatomy'),
    }}
    options={{
      introduction:
        'The tag has options that can be used to provide an appropriate experience for different use cases.',
      cards: [
        {
          title: 'Size',
          description:
            'There are three sizes of tag: small, medium, and large.',
          media: getIllustrationComponent('components/tag/options/size'),
        },
        {
          title: 'Icons (leading & trailing)',
          description:
            'Icons can be displayed in a tag and can be positioned either before (leading) or after (trailing) the label in the tag.',
          media: getIllustrationComponent('components/tag/options/icons'),
        },
        {
          title: 'Label',
          description:
            'Labels can be displayed in a tag. A label can give more context to what a tag indicates.',
          media: getIllustrationComponent('components/tag/options/lable'),
        },
      ],
    }}
    states={{
      introduction: 'The tag has the following states:',
      cards: [
        {
          title: 'Base',
          description:
            'The tag has a base state. This is the base style of the tag before it has been interacted with by a user.',
          media: getIllustrationComponent('components/tag/states/base'),
        },
        {
          title: 'Hover',
          description:
            'The tag has a hover state. The style of the tag changes to visually communicate and provide feedback to the user that the tag is an interactive element.',
          media: getIllustrationComponent('components/tag/states/hover'),
        },
        {
          title: 'Focus',
          description:
            'The tag in a focus state communicates that a user has highlighted a tag, using an input method such as a keyboard or voice.',
          media: getIllustrationComponent('components/tag/states/focus'),
        },
        {
          title: 'Active',
          description:
            'The tag has an active state. The style of the tag changes to visually communicate and provide feedback to the user that the tag has been interacted with.',
          media: getIllustrationComponent('components/tag/states/active'),
        },
      ],
    }}
    behaviors={{
      introduction: 'The following guidance describes how a tag behaves.',
      cards: [
        {
          title: 'Fixed and full width',
          description: (
            <>
              Tags can be displayed in two ways, but consideration should be
              made to how they will respond and react to containers around them:
              <br />
              <br />
              Fixed width - size dependent on content (label, icons).
              <br />
              <br />
              Full width - size responsive to the container it is applied to.
            </>
          ),
          media: getIllustrationComponent(
            'components/tag/behaviours/fixed-and-full-width',
          ),
        },
      ],
    }}
    usage={{
      introduction: 'Here’s how and when to use tags:',
      cards: [
        {
          title: 'Do make sure tags relate to the content',
          description:
            'Tags should always have a direct relationship to the content they represent.',
          kind: UsageKind.DO,
          media: getIllustrationComponent('components/tag/usage/do-01'),
        },
        {
          title: "Don't make tags too wide",
          description:
            'Avoid using full-width tags in wide containers. They are generally appropriate for small devices or contained components.',
          kind: UsageKind.DONT,
          media: getIllustrationComponent('components/tag/usage/dont-01'),
        },
        {
          title: 'Do make sure tags have sufficient clearance',
          description:
            'Do allow a sufficient hit area when placing two or more tags inline make sure they are a sufficient size or have spacing between them to avoid users accidentally hitting the wrong tag.',
          kind: UsageKind.DO,
          media: getIllustrationComponent('components/tag/usage/do-02'),
        },
        {
          title: "Don't have multiple words for labels",
          description:
            'Avoid having multiple words for tag labels. They should be short and clear.',
          kind: UsageKind.DONT,
          media: getIllustrationComponent('components/tag/usage/dont-02'),
        },
      ],
    }}
    accessibility={{
      introduction: 'The tag has the following accessibility considerations:',
      focusOrder: {
        title: 'Focus order',
        tableRows: [
          {
            order: 1,
            element: 'Tag container',
            role: 'Focusses to the tag container',
          },
        ],
      },
      interaction: {
        title: 'Keyboard Interactions',
        tableRows: [
          {
            command: ['Enter'],
            description: 'Activates the tag',
          },
        ],
      },
      aria: {
        title: 'WAI-ARIA',
        tableRows: [
          {
            element: 'label',
            attribute: 'ariaLabel',
            value: 'string',
            description: (
              <>
                The aria-label attribute is used to define a string that labels
                the action that will be performed when the user interacts with
                the tag.
              </>
            ),
            userSupplied: true,
          },
        ],
      },
    }}
    seo={{
      title: 'SEO',
      introduction: (
        <UnorderedList
          markerAlign="start"
          listItemMarker={IconFilledCircle}
          overrides={unorderedListOverrides}
        >
          <>Tags are good for site navigation (for crawlers and users).</>
          <>Ensure icons have alt text applied.</>
        </UnorderedList>
      ),
    }}
    componentAPI={{
      components: [
        {
          title: 'Tag',
          summary:
            'The tag has a range of props that can be used to define an appropriate experience for different use cases.',
          propsRows: commonPropsRows,
          overridesRows: commonOverridesRows,
        },
      ],
    }}
    related={{
      related: ['Link', 'Menu', 'Tabs'],
    }}
  />
);

export default TagComponent;
