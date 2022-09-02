import React from 'react';
import {
  styled,
  Flag,
  FlagProps,
  UnorderedList,
  InlineMessage,
  toNewsKitIcon,
} from 'newskit';
import {Info as FilledInfo} from '@emotion-icons/material/Info';
import {Link} from '../../components/link';
import {UsageKind} from '../../components/usage-card';
import {MetaStatus} from '../../components/meta/types';
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

const FlagComponent = (layoutProps: LayoutProps) => (
  <ComponentPageTemplate
    headTags={{
      title: 'Flag',
      description:
        'A flag is a non-interactive visual indicator used to communicate status.',
    }}
    layoutProps={layoutProps}
    pageIntroduction={{
      type: 'Feedback & Status',
      name: 'Flag',
      hero: {
        illustration: 'components/flag-illustration',
      },
      introduction:
        'A flag is a non-interactive visual indicator used to communicate status.',
    }}
    componentDefaultsKey="flag"
    meta={{
      status: MetaStatus.Supported,
      introduced: 'v0.8.0',
      codeUrl:
        'https://github.com/newscorp-ghfb/ncu-newskit/blob/develop/src/flag/flag.tsx',
      figmaUrl:
        'https://www.figma.com/file/FSbCQa6SzVR3K48ZWLeD77/%F0%9F%9F%A2-NK-Web-Components?node-id=1952%3A2650',
    }}
    interactiveDemo={{
      introduction:
        'This demo allows you to preview the flag component, its variations, and configuration options.',
      playground: {
        componentName: 'Flag',
        component: (props: FlagProps) => (
          <PlaygroundContainer>
            <Flag {...props} />
          </PlaygroundContainer>
        ),
        knobs: [
          {
            name: 'Content',
            propName: 'children',
            value: 'Flag Content',
          },
          {
            name: 'Flag Size',
            propName: 'size',
            options: [
              {
                label: 'Default (Small)',
                value: 'small',
                isDefault: true,
              },
              {
                label: 'Medium',
                value: 'medium',
              },
              {
                label: 'Large',
                value: 'large',
              },
            ],
          },
          {
            name: 'Spacing Preset',
            propName: 'overrides',
            options: [
              {
                label: 'Default',
                isDefault: true,
              },
              {
                label: 'spaceInsetSquish000',
                value: {
                  spaceInset: 'spaceInsetSquish000',
                },
              },
            ],
          },
          {
            name: 'Style Preset',
            propName: 'overrides',
            options: [
              {
                label: 'Default',
                isDefault: true,
              },
              {
                label: 'flagSolidPositive',
                value: {
                  stylePreset: 'flagSolidPositive',
                },
              },
              {
                label: 'flagMinimalPositive',
                value: {
                  stylePreset: 'flagMinimalPositive',
                },
              },
            ],
          },
          {
            name: 'Typography Preset',
            propName: 'overrides',
            options: [
              {
                label: 'Default',
                isDefault: true,
              },
              {
                label: 'utilityLabel010',
                value: {
                  typographyPreset: 'utilityLabel010',
                },
              },
              {
                label: 'label020',
                value: {
                  typographyPreset: 'label020',
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
        'The flag contains two required elements and one optional element.',
      rows: [
        {
          name: 'Container',
          description: 'The flag container',
        },
        {
          name: 'Icon',
          description:
            'Icon that can be positioned either before (leading) or after (trailing) the label.',
          component: 'Icon',
          optional: true,
        },
        {
          name: 'Label',
          description: (
            <>
              The label is the text attributed to the flag that provides
              context.
              <br />
              <br />
              Note - only if the children type supplied is a string or number it
              will be rendered inside a text block.
            </>
          ),
          component: 'Text Block',
        },
      ],
      media: getIllustrationComponent('components/flag/anatomy'),
    }}
    options={{
      introduction:
        'The flag has options that can be used to provide an appropriate experience for different use cases.',
      cards: [
        {
          title: 'Appearance',
          description:
            'By default, there are two styles of flag; solid and minimal, with colours set in the theme to communicate status to the user, eg. negative (red for high priority), or positive (green for active).',
          media: getIllustrationComponent('components/flag/options/appearance'),
        },
        {
          title: 'Size',
          description:
            'There are three sizes of flag; small, medium, and large.',
          media: getIllustrationComponent('components/flag/options/size'),
        },
        {
          title: 'Icons (leading & trailing)',
          description:
            'Icons can be displayed in a flag and can be positioned either before (leading) or after (trailing) the label in the flag.',
          media: getIllustrationComponent('components/flag/options/icons'),
        },
      ],
    }}
    usage={{
      introduction:
        'The following guidance describes how and when to appropriately use a flag component.',
      cards: [
        {
          description:
            'Use flags to draw attention to a new feature, piece of content, or status change that may be of particular interest to a user.',
          kind: UsageKind.DO,
          media: getIllustrationComponent('components/flag/usage/do-01'),
        },
        {
          description: (
            <>
              Avoid using flags for categorisation other than status. Consider
              using a <Link href="/components/tag/">tag</Link> instead.
            </>
          ),
          kind: UsageKind.DONT,
          media: getIllustrationComponent('components/flag/usage/dont-01'),
        },
        {
          description: 'Use flags as a non-interactive status indicator.',
          kind: UsageKind.DO,
          media: getIllustrationComponent('components/flag/usage/do-02'),
        },
      ],
    }}
    seo={{
      title: 'SEO Considerations',
      introduction: (
        <UnorderedList
          markerAlign="start"
          overrides={{
            marginBlockStart: 'space030',
            spaceStack: 'space050',
            content: {
              typographyPreset: 'editorialParagraph030',
            },
            marker: {
              spaceInline: 'space030',
            },
          }}
        >
          <>Ensure icons have alt text applied.</>
        </UnorderedList>
      ),
    }}
    componentAPI={{
      components: [
        {
          title: 'Flag',
          propsSummary:
            'The flag has a range of props that can be used to define an appropriate experience for different use cases.',
          overridesSummary:
            'The flag has a range of predefined elements and attributes that can be overridden to define its appearance.',
          propsRows: [
            {
              name: 'children',
              type: 'React.ReactNode',
              default: 'medium',
              description: (
                <>
                  If provided, the content of the flag is passed as the child of
                  the component.
                  <InlineMessage
                    icon={infoIcon}
                    role="region"
                    aria-label="Thumb and track"
                    overrides={{
                      marginBlockStart: 'space050',
                    }}
                  >
                    Only if the children type supplied is a string or number it
                    will be rendered inside a{' '}
                    <Link href="/components/text-block/">Text Block.</Link>
                  </InlineMessage>
                </>
              ),
              required: true,
            },
            {
              name: 'size',
              type: ['small', 'medium', 'large'],
              default: 'small',
              description: 'Defines the size of the flag.',
              required: undefined,
            },
          ],
          overridesRows: [
            {
              attribute: 'flag.spaceInset',
              type: 'MQ<string>',
              default: [
                'sm: spaceInsetSquish010',
                'md: spaceInsetSquish020',
                'lg: spaceInsetSquish020',
              ],
              description: 'Overrides the spaceInset of the flag.',
            },
            {
              attribute: 'flag.stylePreset',
              type: 'MQ<string>',
              default: 'flagDefault',
              description: 'Overrides the spaceInset of the flag.',
            },
            {
              attribute: 'flag.typographyPreset',
              type: 'MQ<string>',
              default: [
                'sm: utilityLabel010',
                'md: utilityLabel020',
                'lg: utilityLabel030',
              ],
              description: 'Overrides the typographyPreset of the flag.',
            },
            {
              attribute: 'flag.spaceInline',
              type: 'MQ<string>',
              default: 'space010',
              description: (
                <>
                  Overrides the spaceInline of the flag.
                  <br />
                  <br />
                  Note - If less than two children are passed, this prop is
                  irrelevant.
                </>
              ),
            },
            {
              attribute: 'flag.iconSize',
              type: 'MQ<string>',
              default: 'iconSize010',
              description: (
                <>
                  Overrides the iconSize of the flag.
                  <br />
                  <br />
                  Note - If no icons are present in the flag&apos;s children
                  then this prop is irrelevant.
                </>
              ),
            },
            {
              attribute: 'flag.width',
              type: 'MQ<string>',
              default: '',
              description: (
                <>
                  Overrides the width of the flag.
                  <br />
                  <br />
                  This can be a sizing token from the theme, or any CSS length
                  value, e.g. 100% for a full-width element.
                </>
              ),
            },
            {
              attribute: 'flag.height',
              type: 'MQ<string>',
              default: '',
              description: (
                <>
                  Overrides the height of the flag.
                  <br />
                  <br />
                  This can be a sizing token from the theme, or any CSS length
                  value.
                </>
              ),
            },
            {
              attribute: 'flag.minHeight',
              type: 'MQ<string>',
              default: ['sm: sizing050', 'md: sizing060', 'lg: sizing070'],
              description: (
                <>
                  Overrides the minHeight of the flag.
                  <br />
                  <br />
                  This can be a sizing token from the theme, or any CSS length
                  value.
                </>
              ),
            },
            {
              attribute: 'flag.maxHeight',
              type: 'MQ<string>',
              default: '',
              description: (
                <>
                  Overrides the maxHeight of the Flag.
                  <br />
                  <br />
                  This can be a sizing token from the theme, or any CSS length
                  value.
                </>
              ),
            },
            {
              attribute: 'flag.minWidth',
              type: 'MQ<string>',
              default: '',
              description: (
                <>
                  Overrides the minWidth of the flag.
                  <br />
                  <br />
                  This can be a sizing token from the theme, or any CSS length
                  value.
                </>
              ),
            },
            {
              attribute: 'flag.maxWidth',
              type: 'MQ<string>',
              default: '',
              description: (
                <>
                  Overrides the maxWidth of the flag.
                  <br />
                  <br />
                  This can be a sizing token from the theme, or any CSS length
                  value.
                </>
              ),
            },
          ],
        },
      ],
    }}
    related={{
      related: ['Tag', 'Toast', 'Banner', 'Inline Message'],
    }}
  />
);

export default FlagComponent;
