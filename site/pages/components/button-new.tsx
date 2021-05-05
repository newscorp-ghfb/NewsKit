import React from 'react';
import {Button, ButtonSize} from 'newskit';
import {UsageKind} from '../../components/usage-card';
import {MetaStatus} from '../../components/meta/types';
import {LayoutProps} from '../../components/layout';
import {ComponentPageTemplate} from '../../components/component-page-template';

export default (layoutProps: LayoutProps) => (
  <ComponentPageTemplate
    layoutProps={layoutProps}
    pageIntroduction={{
      type: 'Component',
      name: 'Button',
      hero: {src: '/static/button-hero.svg', alt: 'button-hero-image'},
      introduction:
        'Buttons allow users to make choices, take action and help guide them around the interface.',
    }}
    componentDefaultsKey="button"
    meta={{
      status: MetaStatus.Supported,
      introduced: 'v0.3',
      codeUrl: 'https://github.com/newscorp-ghfb/ncu-newskit',
      figmaUrl: 'https://github.com/newscorp-ghfb/ncu-newskit',
    }}
    compliance={{options: true, states: false, themes: null}}
    usage={{
      introduction:
        'Add details of when and how to use this component. This could include do’s and don’ts to support guidance details.',
      cards: [
        {
          description: 'Description',
          kind: UsageKind.DO,
          media: {
            src: '/static/placeholder-16x9.png',
            alt: 'src alt',
          },
        },
        {
          description: 'Description',
          kind: UsageKind.DO,
          media: {
            src: '/static/placeholder-16x9.png',
            alt: 'src alt',
          },
        },
        {
          description: 'Description',
          kind: UsageKind.DONT,
          media: {
            src: '/static/placeholder-16x9.png',
            alt: 'src alt',
          },
        },
      ],
    }}
    componentAPI={{
      introduction: `Buttons have a number of props to facilitate a variety of uses:`,
      components: [
        {
          title: 'Button1',
          summary:
            'This is a summary of the button1 component, only needed if more than 1 comp',
          propsRows: [
            {
              name: 'children',
              type: 'string',
              required: true,
              description: `The content of the Button is passed as the child of the component.`,
            },
            {
              name: 'size',
              type: 'ButtonSize',
              default: 'Medium',
              description: `Optional size of the Button.`,
            },
            {
              name: 'eventContext',
              type: 'object',
              description:
                "This props allows users to add extra event data to buttons' click events.",
            },
            {
              name: 'eventOriginator',
              type: 'string',
              default: 'button',
              description:
                "This props allows users to add event originator custom name. e.x.: 'play-button'.",
            },
          ],
        },
        {
          title: 'Button2',
          summary:
            'This is a summary of the button2 component, only needed if more than 1 comp',
          propsRows: [
            {
              name: 'children',
              type: 'string',
              required: true,
              description: `The content of the Button is passed as the child of the component.`,
            },
            {
              name: 'size',
              type: 'ButtonSize',
              default: 'Medium',
              description: `Optional size of the Button.`,
            },
            {
              name: 'eventContext',
              type: 'object',
              description:
                "This props allows users to add extra event data to buttons' click events.",
            },
            {
              name: 'eventOriginator',
              type: 'string',
              default: 'button',
              description:
                "This props allows users to add event originator custom name. e.x.: 'play-button'.",
            },
          ],
          overridesRows: [
            {
              attribute: 'spaceInset',
              type: 'MQ<string>',
              description:
                'If provided, this overrides the padding of the Button.',
            },
            {
              attribute: 'stylePreset',
              type: 'MQ<string>',
              description: `If provided, this overrides the style preset applied to the Button.`,
            },
            {
              attribute: 'typographyPreset',
              type: 'MQ<string>',
              description:
                'If provided, this overrides the typography preset applied to the Button.',
            },
            {
              attribute: 'spaceInline',
              type: 'MQ<string>',
              description:
                'If provided, this overrides the space between multiple children in the underlying Stack. If less than 2 children are passed, this prop is irrelevant.',
            },
            {
              attribute: 'iconSize',
              type: 'string',
              description: (
                <>
                  If provided, this overrides the icon size of any child icons.
                  Otherwise, iconSize010, iconSize020 or iconSize030 is used
                  depending on the `size` prop. If no icons are present in the
                  Button&apos;s children then this prop is irrelevant.
                  <br />
                  <br />
                  <i>
                    Note: You can also set the icon size by passing it directly
                    as a size prop to the icon, but by doing this you will
                    override the iconSize passed from overrides. We discourage
                    this approach but we will keep the functionality in case it
                    is needed.
                  </i>
                </>
              ),
            },
            {
              attribute: 'width',
              type: 'string',
              description:
                'If provided, this sets a fixed width to the Button. This can be a sizing token from the theme, or any CSS length value, e.g. 100% for a full-width element.',
            },
            {
              attribute: 'height',
              type: 'string',
              description:
                'If provided, this sets a fixed height to the Button. This can be a sizing token from the theme, or any CSS length value.',
            },
            {
              attribute: 'minHeight',
              type: 'string',
              description:
                'If provided, this sets a minimum height to the Flag. This can be a sizing token from the theme, or any CSS length value. By default, sizing050 or sizing060 is used depending on the `size` prop.',
            },
          ],
        },
      ],
    }}
    interactiveDemo={{
      introduction:
        'This demo allows you preview the button component, its variations, and configuration options.',
      playground: {
        componentName: 'Button',
        component: Button,
        knobs: [
          {
            name: 'Content',
            propName: 'children',
            value: 'Button Content',
          },
          {
            name: 'Button Size',
            propName: 'size',
            options: [
              {
                label: 'Default (Small)',
                value: ButtonSize.Small,
                isDefault: true,
              },
              {
                label: 'Large',
                value: ButtonSize.Large,
              },
            ],
          },
          {
            name: 'Spacing Preset',
            propName: 'overrides',
            options: [
              {
                label: 'Default',
                value: {
                  spaceInset: undefined,
                },
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
                value: {
                  stylePreset: undefined,
                },
                isDefault: true,
              },
              {
                label: 'buttonSolidPrimary',
                value: {
                  stylePreset: 'buttonSolidPrimary',
                },
                isDefault: true,
              },
              {
                label: 'buttonOutlinedPrimary',
                value: {
                  stylePreset: 'buttonOutlinedPrimary',
                },
              },
              {
                label: 'buttonMinimalPrimary',
                value: {
                  stylePreset: 'buttonMinimalPrimary',
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
                value: {
                  typographyPreset: undefined,
                },
                isDefault: true,
              },
              {
                label: 'utilityButton010',
                value: {
                  typographyPreset: 'utilityButton010',
                },
              },
              {
                label: 'utilityButton020',
                value: {
                  typographyPreset: 'utilityButton020',
                },
              },
              {
                label: 'utilityButton030',
                value: {
                  typographyPreset: 'utilityButton030',
                },
              },
            ],
          },
          {
            name: 'Width',
            propName: 'overrides',
            options: [
              {
                label: 'Default',
                value: {
                  width: undefined,
                },
                isDefault: true,
              },
              {
                label: 'Full-width',
                value: {
                  width: '100%',
                },
              },
              {
                label: 'Fix-width',
                value: {
                  width: '200px',
                },
              },
            ],
          },
          {
            name: 'Disabled',
            propName: 'disabled',
            value: false,
          },
          {
            name: 'Loading',
            propName: 'loading',
            value: false,
          },
          {
            name: 'href',
            propName: 'href',
            value: 'https://www.newskit.co.uk/',
          },
        ],
      },
    }}
    anatomy={{
      introduction:
        'The three main variations of button must include at least one element (either text or icon) and have some optional elements which allow for interface customisation.',
      rows: [
        {
          name: 'Container',
          description:
            'Some infomation on the container bit of this component.',
          component: 'Stack',
          optional: undefined,
        },
        {
          name: 'Divider',
          description: (
            <>
              More than one thing exists in the component, this is the second.
            </>
          ),
          component: 'Divider',
          optional: true,
        },
      ],
      media: {
        src: '/static/placeholder-16x9.png',
        alt: 'Card Media',
      },
    }}
    options={{
      introduction:
        'The three main variations of button must include at least one element (either text or icon) and have some optional elements which allow for interface customisation.',
      cards: [
        {
          title: 'Title',
          description: 'Description',
          media: {
            src: '/static/placeholder-16x9.png',
            alt: 'Card Media',
          },
        },
        {
          title: 'Title',
          description: 'Description',
          media: {
            src: '/static/placeholder-16x9.png',
            alt: 'Card Media',
          },
        },
        {
          title: 'Title',
          description: 'Description',
          media: {
            src: '/static/placeholder-16x9.png',
            alt: 'Card Media',
          },
        },
        {
          title: 'Title',
          description: 'Description',
          media: {
            src: '/static/placeholder-16x9.png',
            alt: 'Card Media',
          },
        },
      ],
    }}
    states={{
      introduction:
        'Button items have states including, base, hover, active, disabled and focus. They can be displayed with both, base or selected.',
      cards: [
        {
          title: 'Title',
          description: 'Description',
          media: {
            src: '/static/placeholder-16x9.png',
            alt: 'Card Media',
          },
        },
        {
          title: 'Title',
          description: 'Description',
          media: {
            src: '/static/placeholder-16x9.png',
            alt: 'Card Media',
          },
        },
        {
          title: 'Title',
          description: 'Description',
          media: {
            src: '/static/placeholder-16x9.png',
            alt: 'Card Media',
          },
        },
        {
          title: 'Title',
          description: 'Description',
          media: {
            src: '/static/placeholder-16x9.png',
            alt: 'Card Media',
          },
        },
        {
          title: 'Title',
          description: 'Description',
          media: {
            src: '/static/placeholder-16x9.png',
            alt: 'Card Media',
          },
        },
        {
          title: 'Title',
          description: 'Description',
          media: {
            src: '/static/placeholder-16x9.png',
            alt: 'Card Media',
          },
        },
      ],
    }}
    behaviors={{
      introduction:
        'The three main variations of button must include at least one element (either text or icon) and have some optional elements which allow for interface customisation.',
      cards: [
        {
          title: 'Title',
          description: 'Description',
          media: {
            src: '/static/placeholder-16x9.png',
            alt: 'Card Media',
          },
        },
        {
          title: 'Title',
          description: 'Description',
          media: {
            src: '/static/placeholder-16x9.png',
            alt: 'Card Media',
          },
        },
        {
          title: 'Title',
          description: 'Description',
          media: {
            src: '/static/placeholder-16x9.png',
            alt: 'Card Media',
          },
        },
        {
          title: 'Title',
          description: 'Description',
          media: {
            src: '/static/placeholder-16x9.png',
            alt: 'Card Media',
          },
        },
      ],
    }}
    related={{
      introduction:
        'The three main variations of button must include at least one element (either text or icon) and have some optional elements which allow for interface customisation.',
      related: ['Scroll'],
    }}
    accessibility={{
      introduction:
        'Add details of any Accessibility considerations for this component (to include aria labels, keyboard interactions and any other considerations such as WCAG guidance).',
      focusOrder: {
        title: 'Focus order',
        description: 'Some random text here',
        tableRows: [
          {
            order: 1,
            element: 'element',
            role: 'Role',
          },
          {
            order: 2,
            element: 'element',
          },
          {
            order: 3,
            element: 'element',
          },
        ],
      },
      interaction: {
        title: 'Keyboard Interactions',
        description: 'Some random text',
        tableRows: [
          {
            command: ['Ctrl', 'Up'],
            description: 'description',
          },
          {
            command: ['Ctrl', 'Down'],
            description: 'description',
          },
          {
            command: ['Ctrl', 'Left'],
            description: 'description',
          },
          {
            command: ['Ctrl', 'Right'],
            description: 'description',
          },
        ],
      },
      aria: {
        title: 'WAI-ARIA',
        description: 'Some random text',
        tableRows: [
          {
            element: 'one',
            attribute: ['attribute 1', 'attribute 2'],
            value: ['value 1', 'value 2'],
            description: 'description',
            userSupplied: true,
          },
          {
            element: 'two',
            attribute: 'attribute',
            value: 'value',
            description: 'description',
          },
          {
            element: 'three',
            attribute: 'attribute',
            value: 'value',
            description: 'description',
            userSupplied: true,
          },
        ],
      },
    }}
    seo={{
      title: 'SEO Considerations',
      introduction: 'Seo text',
    }}
  />
);
