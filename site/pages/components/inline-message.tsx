import React from 'react';
import {
  InlineMessageProps,
  styled,
  InlineMessage,
  toNewsKitIcon,
} from 'newskit';
import {Info as FilledInfo} from '@emotion-icons/material/Info';
import {MetaStatus} from '../../components/meta/types';
import {LayoutProps} from '../../components/layout';
import {Link} from '../../components/link';
import {ComponentPageTemplate} from '../../templates/component-page-template';
import {Mono} from '../../components/flags';
import {UsageKind} from '../../components/usage-card';

import {getIllustrationComponent} from '../../components/illustrations/illustration-loader';
import {
  logicalMarginOverrideProps,
  logicalPaddingOverrideProps,
} from '../../components/component-api/common-logical-props';

const IconFilledInfo = toNewsKitIcon(FilledInfo);

const PlaygroundContainer = styled.div`
  display: flex;
  width: 100%;
  height: 200px;
  align-items: center;
  justify-content: center;
`;

const InlineMessageComponent = (layoutProps: LayoutProps) => (
  <ComponentPageTemplate
    headTags={{
      title: 'Inline Message',
      description:
        'Inline messages communicate contextual information. They’re positioned inline, close to the element they’re adding context to.',
    }}
    layoutProps={layoutProps}
    pageIntroduction={{
      type: 'Feedback & Status',
      name: 'Inline message',
      hero: {
        illustration: 'components/inline-message/inline-message-illustration',
      },
      introduction: `Inline messages communicate contextual information. They’re positioned inline, close to the element they’re adding context to.`,
    }}
    componentDefaultsKey="inlineMessage"
    meta={{
      status: MetaStatus.Supported,
      introduced: 'v3.3.0',
      codeUrl:
        'https://github.com/newscorp-ghfb/newskit/tree/main/src/inline-message',
      figmaUrl:
        'https://www.figma.com/file/FSbCQa6SzVR3K48ZWLeD77/%F0%9F%9F%A2-NK-Web-Components?node-id=3826%3A144444&t=ysdLVMGI1BOxtCPo-0',
    }}
    interactiveDemo={{
      introduction:
        'This demo lets you preview the inline message component, its variations and configuration options.',
      playground: {
        componentName: 'InlineMessage',
        component: state => {
          const {icon, ...restProps} = state as InlineMessageProps;
          return (
            <PlaygroundContainer>
              <InlineMessage
                {...restProps}
                icon={
                  icon && (
                    <IconFilledInfo
                      overrides={{
                        stylePreset: 'inkContrast',
                        size: 'iconSize020',
                      }}
                    />
                  )
                }
                aria-label="lorem ipsum"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </InlineMessage>
            </PlaygroundContainer>
          );
        },
        knobs: [
          {
            name: 'Intent',
            propName: 'overrides',
            options: [
              {
                isDefault: true,
                label: 'informative',
                value: {
                  stylePreset: 'inlineMessageInformative',
                },
              },
              {
                label: 'negative',
                value: {
                  stylePreset: 'inlineMessageNegative',
                },
              },
            ],
          },
          {
            name: 'Icon',
            propName: 'icon',
            options: [
              {
                label: 'Unset',
                value: undefined,
              },
              {
                label: 'With Icon',
                value: 'your icon here',
                isDefault: true,
              },
            ],
          },
          {
            name: 'Title',
            propName: 'title',
            value: 'InlineMessage title',
          },
          {
            name: 'Message',
            propName: 'children',
            value: "InlineMessage's message will display here",
          },
        ],
      },
    }}
    anatomy={{
      introduction:
        'The inline message component contains one required element and two optional elements.',
      rows: [
        {
          name: 'Icon',
          description: 'Indicates the status or intent.',
          component: 'Icons',
          optional: true,
        },
        {
          name: 'Title',
          description: 'Reinforces the message text.',
          component: 'Text Block',
          optional: true,
        },
        {
          name: 'Message',
          description: 'Communicates what’s about to happen or has happened.',
          component: ['Text Block', 'Link'],
        },
      ],
      media: getIllustrationComponent(
        'components/inline-message/inline-message-anatomy-illustration',
      ),
    }}
    options={{
      introduction: 'The inline message has options for different use cases:',
      cards: [
        {
          title: 'Intent',
          description:
            'An inline message has two intents: informative and negative. Each communicates a specific tone to the user.',
          media: getIllustrationComponent(
            'components/inline-message/inline-message-options-intent-illustration',
          ),
        },
        {
          title: 'Icon',
          description:
            'Display an icon as a visual cue and help users with colour blindness discern the message tone.',
          media: getIllustrationComponent(
            'components/inline-message/inline-message-options-icon-illustration',
          ),
        },
        {
          title: 'Title',
          description:
            'Give the inline message a title to provide more context.',
          media: getIllustrationComponent(
            'components/inline-message/inline-message-options-title-illustration',
          ),
        },
      ],
    }}
    behaviors={{
      introduction: 'Here’s how the inline message behaves:',
      cards: [
        {
          title: 'Text overflow wrap',
          description:
            'When the title and/or message in the inline message is too long for the available horizontal space, it wraps to form another line.',
          media: getIllustrationComponent(
            'components/inline-message/inline-message-behaviours-text-overflow-illustration',
          ),
        },
      ],
    }}
    usage={{
      introduction: 'Here’s how and when to use the inline message:',
      cards: [
        {
          title: 'Do use inline messages to give context',
          description:
            'Use an inline message to provide additional context or supporting information to a particular UI element or function (e.g. delivery terms within a delivery address form).',
          kind: UsageKind.DO,
          media: getIllustrationComponent(
            'components/inline-message/usage/do-01',
          ),
        },
        {
          title: 'Don’t use for critical messages',
          description:
            'Avoid using inline messages for critical system-level messages such as errors (e.g. loss of functionality). For critical messages, a component that partially or fully interrupts the user experience is more appropriate (e.g. banner or modal).',
          kind: UsageKind.DONT,
          media: getIllustrationComponent(
            'components/inline-message/usage/dont-01',
          ),
        },
        {
          title: 'Don’t use to add context to a single input',
          description:
            'Avoid using inline messages to add context to a single input (e.g. text input). Use assistive text instead.',
          kind: UsageKind.DONT,
          media: getIllustrationComponent(
            'components/inline-message/usage/dont-03',
          ),
        },
        {
          title: "Don't use multiple inline messages on a screen",
          description:
            'Think carefully before including more than one inline message per screen, as they can increase a user’s cognitive load and become less effective in drawing attention to content.',
          kind: UsageKind.DONT,
          media: getIllustrationComponent(
            'components/inline-message/usage/dont-02',
          ),
        },
      ],
    }}
    accessibility={{
      introduction:
        'The inline message meets accessibility best practices from the W3C guidelines.',
      aria: {
        title: 'WAI-ARIA',
        tableRows: [
          {
            element: 'InlineMessage',
            attribute: 'aria-role',
            value: 'region',
            description:
              'Identifies the role of the InlineMessage within an interface.',
          },
          {
            element: 'InlineMessage',
            attribute: 'aria-label',
            value: 'region',
            description: 'Defines the aria-label of the banner.',
            userSupplied: true,
          },
          {
            element: 'InlineMessage',
            attribute: 'aria-label',
            value: '"polite", "assertive" or "off" (default)',
            description: (
              <>
                Needs to be set when the banner appears on the screen at
                runtime.{' '}
                <Link
                  href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles"
                  target="_blank"
                >
                  Learn more about aria-live at MDN Web Docs
                </Link>
              </>
            ),
            userSupplied: true,
          },
        ],
      },
    }}
    componentAPI={{
      introduction: `The inline message has a range of props and overrides to define the experience in different use cases, and a range of predefined elements and attributes that you can override to define its appearance.`,
      components: [
        {
          title: 'Inline message',
          summary: ``,
          propsRows: [
            {
              name: 'children',
              type: `Exclude<React.ReactNode, 'undefined'>`,
              required: true,
              description: 'Sets the message of the inline message.',
            },
            {
              name: 'icon',
              type: 'ReactElement<NewsKitIcon>',
              description:
                'If provided, defines the icon displayed in the inline message.',
            },
            {
              name: 'title',
              type: 'string',
              description:
                'If provided, defines the content of the title in the inline message.',
            },
            {
              name: 'ariaLabel',
              type: 'React.ComponentType',
              description:
                'If provided, defines the aria-label of the inline message.',
            },
          ],
          overridesRows: [
            {
              attribute: 'stylePreset',
              type: 'MQ<string>',
              default: 'inlineMessageInformative',
              description: (
                <>
                  Overrides the stylePreset of the inline message that styles
                  the icon and the background.
                  <Mono>inlineMessageInformative</Mono> |
                  <Mono>inlineMessageNotice</Mono> |
                  <Mono>inlineMessageNegative</Mono>
                </>
              ),
            },
            {
              attribute: 'spaceInset(deprecated)',
              type: 'MQ<string>',
              default: 'spaceInset030',
              description:
                'This property is deprecated. Use paddingInline and paddingBlock instead.',
            },
            {
              attribute: 'content.title.stylePreset',
              type: 'MQ<string>',
              default: 'inkContrast',
              description: 'Overrides the stylePreset of the title.',
            },
            {
              attribute: 'content.title.typographyPreset',
              type: 'MQ<string>',
              default: 'utilityHeading010',
              description: 'Overrides the typographyPreset of the title.',
            },
            {
              attribute: 'content.title.spaceStack',
              type: 'MQ<string>',
              default: 'space030',
              description: 'Overrides the spaceStack of the title.',
            },
            {
              attribute: 'content.message.stylePreset',
              type: 'MQ<string>',
              default: 'inkBase',
              description: 'Overrides the stylePreset of the message.',
            },
            {
              attribute: 'content.message.typographyPreset',
              type: 'MQ<string>',
              default: 'utilityBody010',
              description: 'Overrides the typographyPreset of the message.',
            },
            {
              attribute: 'icon.spaceInline',
              type: 'MQ<string>',
              default: 'space030',
              description: 'Overrides the spaceInline of the icon.',
            },
            ...logicalMarginOverrideProps,
            ...logicalPaddingOverrideProps,
          ],
        },
      ],
    }}
    related={{
      related: ['Banner', 'Flag', 'Toast', 'Tooltip'],
    }}
  />
);

export default InlineMessageComponent;
