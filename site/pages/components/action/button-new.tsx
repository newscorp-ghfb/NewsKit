import React from 'react';
import {Button, ButtonSize} from 'newskit';
import {MetaStatus} from '../../../components/meta/types';
import {LayoutProps} from '../../../components/layout';
import {ComponentPageTemplate} from '../../../components/component-page-template';

export default (layoutProps: LayoutProps) => (
  <ComponentPageTemplate
    layoutProps={layoutProps}
    pageIntroduction={{
      type: 'Component',
      name: 'Button',
      hero: {src: '/static/button-hero.svg', alt: 'buttom-hero-image'},
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
    compliance={{interactive: true, variations: false, themes: null}}
    usage={{
      introduction:
        'Add details of when and how to use this component. This could include do’s and don’ts to support guidance details.',
      cards: [
        {
          title: 'Title',
          description: 'Description',
          allowed: true,
          media: {
            src: '/static/placeholder-16x9.png',
            alt: 'src alt',
          },
        },
        {
          title: 'Title',
          description: 'Description',
          allowed: true,
          media: {
            src: '/static/placeholder-16x9.png',
            alt: 'src alt',
          },
        },
        {
          title: 'Title',
          description: 'Description',
          allowed: false,
          media: {
            src: '/static/placeholder-16x9.png',
            alt: 'src alt',
          },
        },
      ],
    }}
    props={{
      summary: `Buttons have a number of props to facilitate a variety of uses:`,
      columns: ['Name', 'Type', 'Default', 'Description', 'Required'],
      rows: [
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
    }}
    overrides={{
      summary:
        'If provided, overrides the respective presets for the component and provided elements. Here are the overrides that the Button accepts:',
      columns: ['Name', 'Type', 'Description'],
      rows: [
        {
          name: 'spaceInset',
          type: 'MQ<string>',
          description: 'If provided, this overrides the padding of the Button.',
        },
        {
          name: 'stylePreset',
          type: 'MQ<string>',
          description: `If provided, this overrides the style preset applied to the Button.`,
        },
        {
          name: 'typographyPreset',
          type: 'MQ<string>',
          description:
            'If provided, this overrides the typography preset applied to the Button.',
        },
        {
          name: 'spaceInline',
          type: 'MQ<string>',
          description:
            'If provided, this overrides the space between multiple children in the underlying Stack. If less than 2 children are passed, this prop is irrelevant.',
        },
        {
          name: 'iconSize',
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
                Note: You can also set the icon size by passing it directly as a
                size prop to the icon, but by doing this you will override the
                iconSize passed from overrides. We discourage this approach but
                we will keep the functionality in case it is needed.
              </i>
            </>
          ),
        },
        {
          name: 'width',
          type: 'string',
          description:
            'If provided, this sets a fixed width to the Button. This can be a sizing token from the theme, or any CSS length value, e.g. 100% for a full-width element.',
        },
        {
          name: 'height',
          type: 'string',
          description:
            'If provided, this sets a fixed height to the Button. This can be a sizing token from the theme, or any CSS length value.',
        },
        {
          name: 'minHeight',
          type: 'string',
          description:
            'If provided, this sets a minimum height to the Flag. This can be a sizing token from the theme, or any CSS length value. By default, sizing050 or sizing060 is used depending on the `size` prop.',
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
      list: ['Item', 'Item', 'Item', 'Item'],
      media: {
        src: '/static/placeholder-16x9.png',
        alt: 'Card Media',
      },
    }}
    variations={{
      introduction:
        'The three main variations of button must include at least one element (either text or icon) and have some optional elements which allow for interface customisation.',
      cards: [
        {
          label: 'Title',
          description: 'Description',
          media: {
            src: '/static/placeholder-16x9.png',
            alt: 'Card Media',
          },
        },
        {
          label: 'Title',
          description: 'Description',
          media: {
            src: '/static/placeholder-16x9.png',
            alt: 'Card Media',
          },
        },
        {
          label: 'Title',
          description: 'Description',
          media: {
            src: '/static/placeholder-16x9.png',
            alt: 'Card Media',
          },
        },
        {
          label: 'Title',
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
          label: 'Title',
          description: 'Description',
          media: {
            src: '/static/placeholder-16x9.png',
            alt: 'Card Media',
          },
        },
        {
          label: 'Title',
          description: 'Description',
          media: {
            src: '/static/placeholder-16x9.png',
            alt: 'Card Media',
          },
        },
        {
          label: 'Title',
          description: 'Description',
          media: {
            src: '/static/placeholder-16x9.png',
            alt: 'Card Media',
          },
        },
        {
          label: 'Title',
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
      cards: [
        {
          label: 'Title',
          description: 'Description',
          href: 'http://localhost:8081/components/action/button',
          media: {
            src: '/static/placeholder-16x9.png',
            alt: 'Card Media',
          },
        },
        {
          label: 'Title',
          description: 'Description',
          href: 'http://localhost:8081/components/action/button',
          media: {
            src: '/static/placeholder-16x9.png',
            alt: 'Card Media',
          },
        },
        {
          label: 'Title',
          description: 'Description',
          href: 'http://localhost:8081/components/action/button',
          media: {
            src: '/static/placeholder-16x9.png',
            alt: 'Card Media',
          },
        },
        {
          label: 'Title',
          description: 'Description',
          href: 'http://localhost:8081/components/action/button',
          media: {
            src: '/static/placeholder-16x9.png',
            alt: 'Card Media',
          },
        },
      ],
    }}
    accessibility={{
      introduction:
        'Add details of any Accessibility considerations for this component (to include aria labels, keyboard interactions and any other considerations such as WCAG guidance).',
      focusOrder: {
        title: 'Focus order',
        description: 'Some random text here',
        table: {
          columns: ['Order', 'Element', 'Role'],
          rows: [
            {
              order: ['1'],
              element: 'element',
              role: 'Role',
            },
            {
              order: ['2'],
              element: 'element',
            },
            {
              order: ['3'],
              element: 'element',
            },
            {
              order: ['4'],
              element: 'element',
            },
            {
              order: ['5'],
              element: 'element',
            },
            {
              order: ['6'],
              element: 'element',
            },
            {
              order: ['7'],
              element: 'element',
            },
            {
              order: ['8'],
              element: 'element',
            },
          ],
        },
      },
      interaction: {
        title: 'Keyboard Interactions',
        description: 'Some random text',
        table: {
          columns: ['Command', 'Description'],
          rows: [
            {
              command: ['ctrl', 'esc'],
              description: 'description',
            },
            {
              command: ['ctrl', 'esc'],
              description: 'description',
            },
            {
              command: ['ctrl', 'esc'],
              description: 'description',
            },
            {
              command: ['ctrl', 'esc'],
              description: 'description',
            },
            {
              command: ['ctrl', 'esc'],
              description: 'description',
            },
            {
              command: ['ctrl', 'esc'],
              description: 'description',
            },
            {
              command: ['ctrl', 'esc'],
              description: 'description',
            },
            {
              command: ['ctrl', 'esc'],
              description: 'description',
            },
          ],
        },
      },
      aria: {
        title: 'WAI-ARIA',
        description: 'Some random text',
        table: {
          columns: ['Category', 'Attribute', 'Value', 'Description'],
          rows: [
            {
              category: '2',
              attribute: 'description',
              value: 'value',
              description: 'description',
            },
            {
              category: '3',
              attribute: 'description',
              value: 'value',
              description: 'description',
            },
            {
              category: '4',
              attribute: 'description',
              value: 'value',
              description: 'description',
            },
            {
              category: '5',
              attribute: 'description',
              value: 'value',
              description: 'description',
            },
            {
              category: '6',
              attribute: 'description',
              value: 'value',
              description: 'description',
            },
            {
              category: '7',
              attribute: 'description',
              value: 'value',
              description: 'description',
            },
            {
              category: '8',
              attribute: 'description',
              value: 'value',
              description: 'description',
            },
          ],
        },
      },
    }}
    seo={{
      title: 'SEO Considerations',
      introduction: 'Seo text',
    }}
    featureCard={{
      title: 'Patterns',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas iaculis in arcu vitae posuere.',
      buttonLabel: 'Read more',
      stylePrefix: 'patternsCard',
      layout: 'horizontal',
      href: 'patterns',
    }}
  />
);
