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

const commonPropsRows = (type?: string) => [
  {
    name: 'children',
    type: 'string',
    description: (
      <>
        The content of the ${type} Button is passed as the child of the
        component.
        {!type && (
          <InlineMessage
            icon={infoIcon}
            role="region"
            aria-label="Children type"
            title="Note"
            overrides={{
              marginBlockStart: 'space030',
            }}
          >
            Only if the children type supplied is a string or number it will be
            rendered inside a Text Block.
          </InlineMessage>
        )}
      </>
    ),
    required: true,
  },
  {
    name: 'size',
    type: ['small', 'medium', 'large'],
    default: 'medium',
    description: `Defines the size of the ${type} Button.`,
  },
  {
    name: 'state',
    type: ['valid', 'invalid', 'disabled'],
    description: `If true, renders the ${type} Button in a valid, invalid, or disabled state.`,
  },
  {
    name: 'loading',
    type: 'boolean',
    default: 'false',
    description: `If true, this will render the loading state of the ${type} Button.`,
  },
  {
    name: 'eventOriginator',
    type: 'string',
    default: 'button',
    description:
      "Allows users to add event originator custom name eg. 'play-button'.",
  },
  {
    name: 'href',
    type: 'string',
    description: `If provided, the ${type} Button component turns into an anchor element.`,
  },
];

const commonOverridesRows = [
  {
    attribute: 'button.size',
    type: 'buttonSize',
    default: 'medium',
    description: `If provided, this overrides the size of the Button.`,
  },
  {
    attribute: 'width',
    type: 'MQ<string>',
    description: `If provided, this sets a fixed width to the Button. This can be a sizing token from the theme, or any CSS length value, e.g. 100% for a full-width element.`,
  },
  {
    attribute: 'height',
    type: 'MQ<string>',
    description: `If provided, this sets a fixed height to the Button. This can be a sizing token from the theme, or any CSS length value.`,
  },
  {
    attribute: 'minWidth',
    type: 'MQ<string>',
    default: ['small = sizing090', 'medium = sizing100', 'large = sizing110'],
    description: `If provided, this sets a minimum width to the Button. This can be a sizing token from the theme, or any CSS length value.`,
  },
  {
    attribute: 'minHeight',
    type: 'MQ<string>',
    default: ['small = sizing060', 'medium = sizing080', 'large = sizing090'],
    description:
      'If provided, this sets a maximum height to the Button. This can be a sizing token from the theme, or any CSS length value.',
  },
  {
    attribute: 'button.stylePreset',
    type: 'MQ<string>',
    default: 'buttonSolidPrimary',
    description: 'If provided, overrides the stylePreset of the Button.',
  },
  {
    attribute: 'button.typographyPreset',
    type: 'MQ<string>',
    default: [
      'small = utilityBody020',
      'medium = utilityBody020',
      'large = utilityBody030',
    ],
    description: 'If provided, overrides the typographyPreset of the Button.',
  },
  {
    attribute: 'button.transitionPreset',
    type: 'MQ<string>',
    default: ['backgroundColorChange', 'borderColorChange'],
    description: 'If provided, overrides the transitionPreset of the Button.',
  },
  {
    attribute: 'button.spaceInset',
    type: 'MQ<string>',
    default: [
      'small = spaceInsetSquish020',
      'medium = spaceInsetSquish030',
      'large = spaceInsetSquish040',
    ],
    description: 'If provided, this overrides the inset space of the Button.',
  },
  {
    attribute: 'button.spaceInline',
    type: 'MQ<string>',
    default: ['small = space020', 'medium = space020', 'large = space020'],
    description:
      'If provided, overrides the space between multiple children in the underlying Stack.',
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
        If provided, this overrides the size of any icons applied to the Button.
        <br />
        <br />
        Note: You can also set the icon size by passing it directly as a size
        prop to the icon, but by doing this you will override the iconSize
        passed from overrides.
      </>
    ),
  },
  {
    attribute: 'loadingIndicator.stylePreset',
    type: 'MQ<string>',
    default: 'indeterminateProgressIndicatorPrimary',
    description:
      'If provided, this overrides the style preset applied to the underlying indeterminate progress indicator icon. The loading indicator icon is shown only when the loading prop is set to true.',
  },
  ...(commonLogicalProps() as OverridesRowsProps[]),
];

const ButtonComponent = (layoutProps: LayoutProps) => (
  <ComponentPageTemplate
    headTags={{
      title: 'Button',
      description:
        'Buttons allow users to make choices, take actions, and help guide around an interface with a single tap.',
    }}
    layoutProps={layoutProps}
    pageIntroduction={{
      type: 'Actions & Inputs',
      name: 'Button',
      hero: {
        illustration: 'components/button/hero',
      },
      introduction: `Buttons allow users to make choices, take actions, and help guide around an interface with a single tap.`,
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
            'The Button contains two required elements and one optional element.',
          media: getIllustrationComponent('components/button/anatomy-button'),
          rows: [
            {
              name: 'Container',
              description: 'The Button container, HTML Button element',
              optional: undefined,
            },
            {
              name: 'Icon',
              description:
                'Icon that can be positioned either before (leading) or after (trailing) the Label',
              component: 'Icon',
              optional: true,
            },
            {
              name: 'Label',
              description: (
                <>
                  The Label is the text attributed to the Button that provides
                  context
                  <br />
                  <br />
                  Note - only if the children type supplied is a string or
                  number it will be rendered inside a Text Block
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
            'The Icon Button contains one required element and one optional element.',
          media: getIllustrationComponent('components/button/anatomy-icon'),
          rows: [
            {
              name: 'Container',
              description: 'The Icon Button container, HTML Button element',
              optional: undefined,
            },
            {
              name: 'Icon',
              description: (
                <>
                  Icon that positioned the centre of the container.
                  <br />
                  <br />
                  If you are using an Icon Button an icon should always be
                  supplied.
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
      introduction:
        'The Button has options that can be used to provide an appropriate experience for different use cases.',
      cards: [
        {
          title: 'Appearance',
          description: (
            <>
              By default, there are three styles of Button; solid, outlined, and
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
                Inverse Buttons are intended for use on darker backgrounds.
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
            'The Button has four different intents: primary, secondary, positive, and negative. Each intent is used to communicate a specific semantic tone of the Button to the user.',
          media: getIllustrationComponent('components/button/options/intent'),
        },
        {
          title: 'Size',
          description:
            'There are three sizes of Button: small, medium (default), and large.',
          media: getIllustrationComponent('components/button/options/size'),
        },
        {
          title: 'Border radius and width',
          description: (
            <>
              The Border Radius and Border Width applied to the Button can be
              overridden and applied to the theme. <br />
              <br />
              <Link href="/theme/foundation/borders/">
                For more information, refer to the Borders foundations.
              </Link>
            </>
          ),
          media: getIllustrationComponent(
            'components/button/options/border-radius-and-width',
          ),
        },
        {
          title: 'Icons (leading & trailing)',
          description:
            'Icons can be displayed in a Button and can be positioned either before (leading) or after (trailing) the Label in the Button.',
          media: getIllustrationComponent(
            'components/button/options/icons-leading-trailing',
          ),
        },
        {
          title: 'Label',
          description:
            'Labels can be displayed in a Button. A Label can give more context to what the intended action the Button indicates.',
          media: getIllustrationComponent('components/button/options/label'),
        },
        {
          title: 'Icon Button',
          description:
            'The Icon Button component has the same options, behaviours, and properties as the Button component, but with a single icon positioned in the centre of the container.',
          media: getIllustrationComponent('components/button/options/icons'),
        },
        {
          title: 'Button as a link',
          description: (
            <>
              Buttons have the ability to render as{' '}
              <Link href="/components/link/">Links.</Link> In this case, the
              styling of the link looks like a Button but with the behaviour of
              a link.
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
            'The Button has a base state. This is the base style of the Button before it has been interacted with by a user.',
          media: getIllustrationComponent('components/button/states/base'),
        },
        {
          title: 'Hover',
          description:
            'The Button has a hover state. The style of the Button changes to visually communicate and provide feedback to the user that the Button is an interactive element.',
          media: getIllustrationComponent('components/button/states/hover'),
        },
        {
          title: 'Focus',
          description:
            'The Button in a focus state communicates that a user has highlighted a Button, using an input method such as a keyboard or voice.',
          media: getIllustrationComponent('components/button/states/focus'),
        },
        {
          title: 'Active',
          description:
            'The Button has an active state. The style of the Button changes to visually communicate and provide feedback to the user that the Button has been interacted with.',
          media: getIllustrationComponent('components/button/states/active'),
        },
        {
          title: 'Disabled',
          description:
            "The Button in a disabled state communicates that a Button exists, but is not available to the user in that scenario. When the user's cursor hovers over a Button in a disabled state, the cursor shows as not allowed. Disabled Buttons are often used to maintain layout consistency and communicate that a Button may become available if another condition has been met.",
          media: getIllustrationComponent('components/button/states/disabled'),
        },
        {
          title: 'Loading',
          description: (
            <>
              The Button in a loading state communicates that an action will
              become available when loading is complete, or that an action is
              being completed.
              <br />
              <br />
              The background colour of the Button changes, and a loading
              indicator is displayed.
            </>
          ),
          media: getIllustrationComponent('components/button/states/loading'),
        },
      ],
    }}
    behaviors={{
      introduction: 'The following guidance describes how a Button behaves.',
      cards: [
        {
          title: 'Fixed and full width',
          description: (
            <>
              Buttons can be displayed in two ways, but consideration should be
              made to how they will respond and react to containers around them;
              <br />
              <br />
              Fixed width - size dependant on content (Label, Icons)
              <br />
              <br />
              Full width - size responsive to the container it is applied to.
              <InlineMessage
                icon={infoIcon}
                role="region"
                aria-label="Full width Buttons"
                title="Note"
                overrides={{
                  marginBlockStart: 'space050',
                }}
              >
                Full width Buttons are intended for use on smaller screen sizes
                or in other components (such as{' '}
                <Link href="/components/card/">Cards</Link>), where the width is
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
            'When the Button is hovered over, or active, the backgroundColor, and/or borderColor transitions.',
          media: getIllustrationComponent(
            'components/button/behaviours/transition',
          ),
        },
        {
          title: 'Clickable area',
          description:
            'The Button has a minimum clickable area (also known as hit area, or touch target area). The size of the clickable area changes according to the size of the Button.',
          media: getIllustrationComponent(
            'components/button/behaviours/clickable-area',
          ),
        },
      ],
    }}
    usage={{
      introduction:
        'The following guidance describes how and when to appropriately use the Button component.',
      cards: [
        {
          description:
            'When Buttons are to be placed inline, they should maintain at least an 8px gap between the two (or more) Buttons.',
          kind: UsageKind.DO,
          media: getIllustrationComponent('components/button/usage/do1'),
        },
        {
          description:
            'Avoid using full-width Buttons in wide containers. They are generally appropriate for small devices or contained components.',
          kind: UsageKind.DONT,
          media: getIllustrationComponent('components/button/usage/dont1'),
        },
        {
          description:
            'Buttons can be displayed in two ways (fixed or full width), but consideration should be made to how they will respond and react to containers around them.',
          kind: UsageKind.DO,
          media: getIllustrationComponent('components/button/usage/do2'),
        },
        {
          description:
            'Avoid placing multiple buttons relating to action too far apart, ensure that they are placed next to each other so that associated actions are relative, and reduce cognitive load.',
          kind: UsageKind.DONT,
          media: getIllustrationComponent('components/button/usage/dont2'),
        },
        {
          description: (
            <>
              The <Link href="/components/tooltip/">Tooltip</Link> can be
              applied to the Icon Button in order to provide additional context
              relating to the intended action or destination for users.
            </>
          ),
          kind: UsageKind.DO,
          media: getIllustrationComponent('components/button/usage/do3'),
        },
        {
          description:
            'Avoid stacking Buttons when there is enough space to place side by side.',
          kind: UsageKind.DONT,
          media: getIllustrationComponent('components/button/usage/dont4'),
        },
        {
          description:
            'Avoid placing more than one primary (high emphasis) Button on a screen to help guide the user to the primary action.',
          kind: UsageKind.DONT,
          media: getIllustrationComponent('components/button/usage/dont3'),
        },
      ],
    }}
    accessibility={{
      introduction:
        'The Button has the following accessibility considerations:',
      focusOrder: {
        title: 'Focus order',
        tableRows: [
          {
            order: 1,
            element: 'Button container',
            role: 'Focusses to the Button container',
          },
        ],
      },
      interaction: {
        title: 'Keyboard Interactions',
        tableRows: [
          {
            command: ['_Space', '_Enter'],
            description: 'Activates the Button.',
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
              'Aria-label attribute is used to define a string that labels the action that will be performed when the user interacts with the Button.',
            userSupplied: true,
          },
          {
            element: 'required',
            attribute: 'aria-required',
            value: 'object',
            description:
              'This attribute informs the user that an element is required. When set to true, screen readers notify users that the element is required.',
            userSupplied: true,
          },
          {
            element: 'invalid',
            attribute: 'aria-required',
            value: 'object',
            description:
              'This attribute informs the user when there is an error. By default it’s set to false. Screen readers will alert users when the element is set to any value other than false.',
            userSupplied: true,
          },
        ],
      },
      infoNoticeAria: (
        <>
          The Button supports native{' '}
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
      introduction: 'Ensure icons have Alt Text applied.',
    }}
    componentAPI={{
      introduction:
        'The Button has a range of props that can be used to define an appropriate experience for different use cases.',
      components: [
        {
          title: 'Button',
          summary:
            'The Button has a range of props that can be used to define an appropriate experience for different use cases.',
          propsRows: commonPropsRows(),
          overridesRows: commonOverridesRows,
        },
        {
          title: 'Icon Button',
          summary: `The Icon Button has a range of props that can be used to define an appropriate experience for different use cases.`,
          propsRows: commonPropsRows('Icon'),
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
