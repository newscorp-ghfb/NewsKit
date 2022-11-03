import React from 'react';
import {InlineMessage, toNewsKitIcon} from 'newskit';
import {Info as FilledInfo} from '@emotion-icons/material/Info';
import {Link} from '../../components/link';
import {UsageKind} from '../../components/usage-card';
import {MetaStatus} from '../../components/meta/types';
import {LayoutProps} from '../../components/layout';
import {commonLogicalProps} from '../../components/component-api/common-logical-props';
import {OverridesRowsProps} from '../../components/component-api';
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

const commonPropsRows = () => [
  {
    name: 'children',
    type: 'string',
    description: `Passes the content of the button as the child of the component. If the children type is a string or number, it’ll be rendered inside a text block`,
    required: true,
  },
  {
    name: 'size',
    type: ['small', 'medium', 'large'],
    default: 'medium',
    description: `Defines the button’s size`,
  },
  {
    name: 'state',
    type: ['valid', 'invalid', 'disabled'],
    description: `If true, renders the button in a valid, invalid or disabled state`,
  },
  {
    name: 'loading',
    type: 'boolean',
    default: 'false',
    description: `If true, renders the button’s loading state`,
  },
  {
    name: 'eventOriginator',
    type: 'string',
    default: 'button',
    description:
      "Allows users to add event originator custom name (e.g. 'play-button')",
  },
  {
    name: 'href',
    type: 'string',
    description: `If provided, turns the button into an anchor element`,
  },
];

const commonOverridesRows = [
  {
    attribute: 'button.size',
    type: 'small | medium | large',
    default: 'medium',
    description: `If provided, this overrides the size of the button.`,
  },
  {
    attribute: 'width',
    type: 'MQ<string>',
    description: `If provided, sets a fixed width for the button. Can be a sizing token from the theme, or any CSS length value (e.g. 100% for a full width element)`,
  },
  {
    attribute: 'height',
    type: 'MQ<string>',
    description: `If provided, sets a fixed height to the button. Can be a sizing token from the theme, or any CSS length value`,
  },
  {
    attribute: 'minWidth',
    type: 'MQ<string>',
    default: ['small = sizing090', 'medium = sizing100', 'large = sizing110'],
    description: `If provided, sets a minimum width for the button. Can be a sizing token from the theme, or any CSS length value`,
  },
  {
    attribute: 'minHeight',
    type: 'MQ<string>',
    default: ['small = sizing060', 'medium = sizing080', 'large = sizing090'],
    description:
      'If provided, sets a maximum height for the button. Can be a sizing token from the theme, or any CSS length value',
  },
  {
    attribute: 'button.stylePreset',
    type: 'MQ<string>',
    default: 'buttonSolidPrimary',
    description: 'If provided, overrides the stylePreset of the button',
  },
  {
    attribute: 'button.typographyPreset',
    type: 'MQ<string>',
    default: [
      'small = utilityBody020',
      'medium = utilityBody020',
      'large = utilityBody030',
    ],
    description: 'If provided, overrides the typographyPreset of the button',
  },
  {
    attribute: 'button.transitionPreset',
    type: 'MQ<string>',
    default: ['backgroundColorChange', 'borderColorChange'],
    description: 'If provided, overrides the transitionPreset of the button',
  },
  {
    attribute: 'button.spaceInset',
    type: 'MQ<string>',
    default: [
      'small = spaceInsetSquish020',
      'medium = spaceInsetSquish030',
      'large = spaceInsetSquish040',
    ],
    description: 'If provided, overrides the inset space of the button',
  },
  {
    attribute: 'button.spaceInline',
    type: 'MQ<string>',
    default: ['small = space020', 'medium = space020', 'large = space020'],
    description:
      'If provided, overrides the space between multiple children in the underlying stack',
  },
  {
    attribute: 'button.icon.size',
    type: 'MQ<string>',
    default: [
      'small = iconSize010',
      'medium = iconSize020',
      'large = iconSize030',
    ],
    description: (
      <>
        If provided, overrides the size of any icons applied to the button. You
        can also set the icon size by passing it directly as a size prop to the
        icon, but by doing this you’ll override the iconSize passed from
        overrides
      </>
    ),
  },
  {
    attribute: 'loadingIndicator.stylePreset',
    type: 'MQ<string>',
    default: 'indeterminateProgressIndicatorPrimary',
    description:
      'If provided, overrides the style preset applied to the underlying indeterminate progress indicator icon. The loading indicator icon is shown only when the loading prop is set to ‘true’',
  },
  ...(commonLogicalProps() as OverridesRowsProps[]),
];

const ButtonComponent = (layoutProps: LayoutProps) => (
  <ComponentPageTemplate
    headTags={{
      title: 'Button',
      description: 'Buttons let users make choices and take action.',
    }}
    layoutProps={layoutProps}
    pageIntroduction={{
      type: 'Actions & Inputs',
      name: 'Button',
      hero: {
        illustration: 'components/button/hero',
      },
      introduction: `Buttons let users make choices and take action.`,
    }}
    componentDefaultsKey="textField"
    meta={{
      status: MetaStatus.Supported,
      introduced: 'v0.2.0',
      introducedLink: false,
      codeUrl:
        'https://github.com/newscorp-ghfb/newskit/tree/develop/src/button',
      figmaUrl:
        'https://www.figma.com/file/FSbCQa6SzVR3K48ZWLeD77/%F0%9F%9F%A2-NK-Web-Components?node-id=1817%3A8822',
    }}
    anatomy={{
      components: [
        {
          title: 'Button',
          summary:
            'The button component contains two required elements and one optional element.',
          media: getIllustrationComponent('components/button/anatomy-button'),
          rows: [
            {
              name: 'Container',
              description: 'HTML button element',
              optional: undefined,
            },
            {
              name: 'Icon',
              description:
                'Can be positioned either before (leading) or after (trailing) the label',
              component: 'Icon',
              optional: true,
            },
            {
              name: 'Label',
              description: (
                <>
                  Text attributed to the button to provide context
                  <br />
                  <br />
                  Note - If the children type is a string or number, it will be
                  rendered inside a text block
                </>
              ),
              component: 'Text Block',
              optional: undefined,
            },
          ],
        },
        {
          title: 'Icon Button',
          summary:
            'The icon button contains one required element and one optional element.',
          media: getIllustrationComponent('components/button/anatomy-icon'),
          rows: [
            {
              name: 'Container',
              description: 'HTML button element',
              optional: undefined,
            },
            {
              name: 'Icon',
              description: (
                <>
                  Positioned in the centre of the container
                  <br />
                  <br />
                  Note - If using an icon button, always supply an icon
                </>
              ),
              component: 'Icon',
              optional: true,
            },
          ],
        },
      ],
      rows: [],
    }}
    options={{
      introduction: 'The button has options for different use cases.',
      cards: [
        {
          title: 'Appearance',
          description: (
            <>
              There are three button styles by default: solid, outlined and
              minimal.
              <InlineMessage
                icon={infoIcon}
                role="region"
                aria-label="Inverse Buttons"
                title="Note"
                overrides={{
                  marginBlockStart: 'space030',
                }}
              >
                Use inverse buttons on darker backgrounds.
              </InlineMessage>
            </>
          ),
          media: getIllustrationComponent(
            'components/button/options/appearence',
          ),
        },
        {
          title: 'Intent',
          description:
            'The button has four intents: primary, secondary, positive and negative. Each communicates a specific tone to the user.',
          media: getIllustrationComponent('components/button/options/intent'),
        },
        {
          title: 'Size',
          description: 'The button comes in small, medium (default) and large.',
          media: getIllustrationComponent('components/button/options/size'),
        },
        {
          title: 'Border radius and width',
          description: (
            <>
              Override the button’s{' '}
              <Link href="/theme/foundation/borders/">border</Link> radius and
              border width, and apply them to the theme.
            </>
          ),
          media: getIllustrationComponent(
            'components/button/options/border-radius-and-width',
          ),
        },
        {
          title: 'Icons (leading & trailing)',
          description:
            'Add an icon to a button either before (leading) or after (trailing) the label.',
          media: getIllustrationComponent(
            'components/button/options/icons-leading-trailing',
          ),
        },
        {
          title: 'Label',
          description:
            'Add a label to a button to give users more context about what the button does.',
          media: getIllustrationComponent('components/button/options/label'),
        },
        {
          title: 'Icon Button',
          description:
            'The icon button has the same options, behaviours and properties as the button, but with a single icon in the centre of the container.',
          media: getIllustrationComponent('components/button/options/icons'),
        },
        {
          title: 'Button as a link',
          description: (
            <>
              Render buttons as <Link href="/components/link/">links.</Link> The
              link is styled like a button but behaves like a link.
            </>
          ),
          media: getIllustrationComponent(
            'components/button/options/button-link',
          ),
        },
      ],
    }}
    states={{
      introduction: 'The Button has the following states:',
      layout: '3-span',
      cards: [
        {
          title: 'Base',
          description:
            'The default style before the user interacts with the button.',
          media: getIllustrationComponent('components/button/states/base'),
        },
        {
          title: 'Hover',
          description:
            'The button changes style to let the user know it’s interactive.',
          media: getIllustrationComponent('components/button/states/hover'),
        },
        {
          title: 'Focus',
          description:
            'Communicates that a user has highlighted a button (e.g. via keyboard or voice).',
          media: getIllustrationComponent('components/button/states/focus'),
        },
        {
          title: 'Active',
          description:
            'The button changes style to let the user know they’ve interacted with it.',
          media: getIllustrationComponent('components/button/states/active'),
        },
        {
          title: 'Disabled',
          description: (
            <>
              Communicates that a button exists, but isn’t available in that
              scenario. When the user hovers over a button in a disabled state,
              the cursor shows as ‘not allowed.
              <br />
              <br />
              Disabled buttons maintain layout consistency and communicate that
              a button may become available if another condition is met.
            </>
          ),
          media: getIllustrationComponent('components/button/states/disabled'),
        },
        {
          title: 'Loading',
          description: (
            <>
              Communicates that an action will become available when loading is
              complete, or that an action is being completed.
              <br />
              <br />
              The background colour of the button changes and a loading
              indicator is displayed.
            </>
          ),
          media: getIllustrationComponent('components/button/states/loading'),
        },
      ],
    }}
    behaviors={{
      introduction: 'Here’s how the button behaves:',
      cards: [
        {
          title: 'Fixed and full width',
          description: (
            <>
              Buttons can be either fixed width or full width. Consider how
              they’ll respond and react to containers around them:
              <br />
              <br />
              Fixed width - size dependant on content (e.g. label or icon)
              <br />
              <br />
              Full width - size responsive to container
              <InlineMessage
                icon={infoIcon}
                role="region"
                aria-label="Full width Buttons"
                title="Note"
                overrides={{
                  marginBlockStart: 'space050',
                }}
              >
                Use full width buttons on smaller screen sizes, or in components
                ({'e.g. '}
                <Link href="/components/card/">cards</Link>), where the width is
                restricted.
              </InlineMessage>
            </>
          ),
          media: getIllustrationComponent(
            'components/button/behaviours/fixed-and-full-width',
          ),
        },
        {
          title: 'Transition',
          description:
            'When the user hovers over a button, or a button is active, the backgroundColor and/or borderColor transitions.',
          media: getIllustrationComponent(
            'components/button/behaviours/transition',
          ),
        },
        {
          title: 'Clickable area',
          description:
            'Buttons have a minimum clickable area (also known as hit area or touch target area). The size of the clickable area changes according to the size of the button.',
          media: getIllustrationComponent(
            'components/button/behaviours/clickable-area',
          ),
        },
      ],
    }}
    usage={{
      introduction: 'Here’s how and when to use the button:',
      cards: [
        {
          description:
            'When placing two or more buttons inline, keep at least an 8px gap between them.',
          kind: UsageKind.DO,
          media: getIllustrationComponent('components/button/usage/do1'),
        },
        {
          description:
            'Full-width buttons are generally appropriate for small devices or contained components.',
          kind: UsageKind.DONT,
          media: getIllustrationComponent('components/button/usage/dont1'),
        },
        {
          description:
            'When deciding between a fixed or full width button, consider how it will respond and react to the containers around it.',
          kind: UsageKind.DO,
          media: getIllustrationComponent('components/button/usage/do2'),
        },
        {
          description:
            'Place related buttons next to each other so associated actions are relative, and to reduce cognitive load.',
          kind: UsageKind.DONT,
          media: getIllustrationComponent('components/button/usage/dont2'),
        },
        {
          description:
            'Avoid stacking buttons when there’s enough space to place them side by side.',
          kind: UsageKind.DONT,
          media: getIllustrationComponent('components/button/usage/dont4'),
        },
        {
          description:
            'Avoid having more than one primary (high emphasis) button on a screen to help guide the user to the primary action.',
          kind: UsageKind.DONT,
          media: getIllustrationComponent('components/button/usage/dont3'),
        },
      ],
    }}
    accessibility={{
      introduction:
        'The button has the following accessibility considerations:',
      focusOrder: {
        title: 'Focus order',
        tableRows: [
          {
            order: 1,
            element: 'Button container',
            role: 'Focusses to the button container',
          },
        ],
      },
      interaction: {
        title: 'Keyboard Interactions',
        tableRows: [
          {
            command: ['_Space', '_Enter'],
            description: 'Activates the button.',
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
            description:
              'Define a string that labels the action to be performed when the user interacts with the button',
            userSupplied: true,
          },
          {
            element: 'required',
            attribute: 'aria-required',
            value: 'object',
            description:
              'Informs the user that an element is required. When set to ‘true’, screen readers notify users that the element is required',
            userSupplied: true,
          },
          {
            element: 'invalid',
            attribute: 'aria-required',
            value: 'object',
            description:
              'Informs the user when there’s an error. Set to ‘false’ by default. Screen readers will alert users when the element is set to any value other than ‘false‘',
            userSupplied: true,
          },
        ],
      },
      infoNoticeAria: (
        <>
          The button supports native{' '}
          <Link
            href="https://www.w3.org/TR/html-aria/#docconformance"
            target="_blank"
          >
            HTML
          </Link>{' '}
          and{' '}
          <Link
            href="https://www.w3.org/TR/wai-aria-1.1/#button"
            target="_blank"
          >
            aria attributes
          </Link>
          .
        </>
      ),
    }}
    seo={{
      title: 'SEO',
      introduction: 'Ensure icons have alt text applied.',
    }}
    componentAPI={{
      components: [
        {
          title: 'Button',
          propsSummary: `The button has a range of props that can be used to define an appropriate experience for different use cases.`,
          overridesSummary: `The button has a range of props that can be used to define an appropriate experience for different use cases.`,
          propsRows: commonPropsRows(),
          overridesRows: commonOverridesRows,
        },
        {
          title: 'Icon Button',
          propsSummary: `The icon button has a range of props that can be used to define an appropriate experience for different use cases.`,
          overridesSummary: `The icon button has a range of props that can be used to define an appropriate experience for different use cases.`,
          propsRows: commonPropsRows(),
          overridesRows: commonOverridesRows,
        },
      ],
    }}
    related={{
      related: ['Checkbox', 'Form', 'Radio Button', 'Select'],
    }}
  />
);

export default ButtonComponent;
