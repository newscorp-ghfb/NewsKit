import React from 'react';
import {Block, InlineMessage, toNewsKitIcon} from 'newskit';
import {Info as FilledInfo} from '@emotion-icons/material/Info';
import {MetaStatus} from '../../components/meta/types';
import {LayoutProps} from '../../components/layout';
import {ComponentPageTemplate} from '../../templates/component-page-template';
import {getIllustrationComponent} from '../../components/illustrations/illustration-loader';
import {ContentText} from '../../components/text-section/content-text';
import {InlineCode} from '../../components/markdown-elements';
import {UsageKind} from '../../components/usage-card';
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

const commonPropsRows = (type?: string) => [
  {
    name: 'state',
    type: ['valid', 'invalid', 'disabled'],
    description: `If true, renders the ${type} Radio Button in a valid, invalid, or disabled state. It can be submitted within a form.`,
  },
  {
    name: 'size',
    type: ['small', 'medium', 'large'],
    default: 'medium',
    description: `Defines the size of the ${type} Radio Button.`,
  },
  {
    name: 'labelPosition',
    type: ['start', 'end'],
    default: 'end',
    description: 'Defines the position of the Label.',
  },
  {
    name: 'labelAttributes',
    type: 'React.LabelHTMLAttributes<HTMLLabelElement>',
    default: '',
    description: 'Used to pass HTML attributes to the Label.',
  },
];

const commonOverridesRows = [
  {
    attribute: 'spaceStack(deprecated)',
    type: 'MQ<string>',
    default: 'space000',
    description: `This property is deprecated. Use marginBlockEnd instead. If provided, this overrides the stack space applied to the Radio Button.`,
  },
  {
    attribute: 'input.stylePreset',
    type: 'MQ<string>',
    default: 'radioButtonInput',
    description:
      'If provided, overrides the stylePreset of the Radio Button input.',
  },
  {
    attribute: 'input.size',
    type: 'MQ<string>',
    default: ['small = sizing050', 'medium = sizing060', 'large = sizing070'],
    description:
      'If provided, this overrides the size of the Radio Button input.',
  },
  {
    attribute: 'input.spaceInline',
    type: 'MQ<string>',
    default: ['small = space030', 'medium = space030', 'large = space040'],
    description:
      'If provided, this overrides the inline space between the Radio Button input and Label.',
  },
  {
    attribute: 'input.transitionPreset',
    type: 'MQ<string>',
    default: ['backgroundColorChange', 'borderColorChange'],
    description:
      'If provided, overrides the transitionPreset of the Radio Button input.',
  },
  {
    attribute: 'feedback.size',
    type: 'MQ<string>',
    default: ['small = sizing070', 'medium = sizing080', 'large = sizing090'],
    description:
      'If provided, this overrides the size of the feedback element.',
  },
  {
    attribute: 'feedback.stylePreset',
    type: 'MQ<string>',
    default: 'radioButtonFeedback',
    description:
      'If provided, this overrides the stylePreset of the feedback element.',
  },
  // THIS IS NOT IMPLEMENTED YET, UNCOMMENT WHEN THIS FUNCTIONALITY IS ADDED
  // {
  //   attribute: 'feedback.transitionPreset',
  //   type: 'MQ<string>',
  //   default: ['fade', 'grow'],
  //   description:
  //     'If provided, overrides the transitionPreset of the feedback element.',
  // },
  {
    attribute: 'label.stylePreset',
    type: 'MQ<string>',
    default: 'controlLabel',
    description: 'If provided, this overrides the stylePreset of the Label.',
  },
  {
    attribute: 'label.typographyPreset',
    type: 'MQ<string>',
    default: [
      'small = utilityBody020',
      'medium = utilityBody020',
      'large = utilityBody030',
    ],
    description:
      'If provided, this overrides the typographyPreset of the Label.',
  },
  {
    attribute: 'icon.size',
    type: 'MQ<string>',
    default: [
      'small = iconSize010',
      'medium = iconSize020',
      'large = iconSize030',
    ],
    description: 'If provided, overrides the size of the Radio Button icon.',
  },
  ...(commonLogicalProps() as OverridesRowsProps[]),
];

const radioButtonPropsRows = [
  {
    name: 'name',
    type: 'string',
    default: '',
    description: 'Defines the name of the RadioButton.',
  },
  {
    name: 'defaultValue',
    type: 'string',
    default: '',
    description:
      'Defines the value of the initially checked RadioButton (uncontrolled).',
  },
  {
    name: 'value',
    type: 'string',
    default: '',
    description: 'Defines the value of the checked RadioButton (controlled).',
  },
  {
    name: 'onChange',
    type: 'string',
    default: '(event: ChangeEvent) => void',
    description: 'Callback fired when RadioButton changes.',
  },
];

const RadioButtonComponent = (layoutProps: LayoutProps) => (
  <ComponentPageTemplate
    headTags={{
      title: 'Radio Button',
      description:
        'Radio Buttons are selection controls that are typically used in forms.',
    }}
    layoutProps={layoutProps}
    pageIntroduction={{
      type: 'Actions & Inputs',
      name: 'Radio Button',
      hero: {
        illustration: 'components/radio-button/hero',
      },
      introduction: `Radio Buttons are selection controls that are typically used in forms. They are used for exclusive selection - allowing users to select one of multiple options in a Radio Group.`,
    }}
    componentDefaultsKey="radioButton"
    meta={{
      status: MetaStatus.Beta,
      introduced: 'v5.3.0',
      codeUrl:
        'https://github.com/newscorp-ghfb/newskit/tree/main/src/radio-button',
      figmaUrl:
        'https://www.figma.com/file/FSbCQa6SzVR3K48ZWLeD77/%F0%9F%9F%A2-NK-Web-Components?node-id=5918%3A132664',
    }}
    anatomy={{
      introduction:
        'The Radio Button contains one required element and three optional elements.',
      media: getIllustrationComponent('components/radio-button/anatomy'),
      rows: [
        {
          name: 'Radio Input (unchecked)',
          description:
            'Selection control (input) that is the unselected state of the Radio Button input',
          component: ['Block'],
          optional: undefined,
        },
        {
          name: 'Radio Input  (checked)',
          description:
            'The Icon that appears within the Radio Button input when in a checked state',
          component: 'Icon',
          optional: true,
        },
        {
          name: 'Feedback',
          description:
            'Non-interactive background element for visual feedback on hover',
          component: 'Block',
          optional: true,
        },
        {
          name: 'Label',
          description:
            'The Label is the text attributed to the Radio Button that provides context',
          component: 'Text Block',
          optional: true,
        },
      ],
    }}
    options={{
      introduction:
        'The Radio Button has options that can be used to provide an appropriate experience for different use cases.',
      cards: [
        {
          title: 'Size',
          description: (
            <>
              There are three sizes of the Radio Button input and the feedback
              element; small, medium (default), and large.
              <br />
              <br />
              The icon that appears within the Radio Button input changes at all
              three sizes of Radio Button but can be overridden.
            </>
          ),
          media: getIllustrationComponent(
            'components/radio-button/options/size',
          ),
        },
        {
          title: 'Icon',
          description:
            'The icon that appears within the Radio Button input can be overridden across different states.',
          media: getIllustrationComponent(
            'components/radio-button/options/icon',
          ),
        },
        {
          title: 'Feedback',
          description:
            'The feedback element is non-interactive and appears in the background behind the Radio Button input for visual feedback on hover.',
          media: getIllustrationComponent(
            'components/radio-button/options/feedback',
          ),
        },
        {
          title: 'Label',
          description: (
            <>
              <Block spaceStack="space030">
                The Radio Button has a label that appears to the right (end) of
                a Radio Button, for context.
              </Block>
              <InlineMessage
                icon={infoIcon}
                role="region"
                aria-label="Radio label position"
              >
                In the case of needing a label on the left (start) of a Radio
                Button, this can be set via the
                <InlineCode>labelPosition</InlineCode> prop.
              </InlineMessage>
            </>
          ),
          media: getIllustrationComponent(
            'components/radio-button/options/label',
          ),
        },
        {
          title: 'Radio Group',
          description:
            'The Radio Group component is used to group Radio Buttons together.',
          media: getIllustrationComponent(
            'components/radio-button/options/radio-group',
          ),
        },
        {
          title: 'Fieldset',
          description: (
            <>
              Selection controls (inputs), such as the FormInput, Radio Button,
              and <Link href="/components/checkbox/">Checkbox</Link>, can be
              grouped together with other selection controls, Labels, and
              Assistive Text together in a Fieldset. The Fieldset has a caption
              that gives a title attributed to the elements that appear in the
              Fieldset, called a Legend.
              <br />
              <br />
              The Fieldset can also support other selection controls (inputs)
              such as the{' '}
              <Link href="/components/radio-button/">FormInput</Link>, FormInput
              Switch, and FormInput TextField.
              <br />
              <br />
              For more information, please refer to the Fieldset component.
            </>
          ),
          media: getIllustrationComponent(
            'components/radio-button/options/fieldset',
          ),
        },
      ],
    }}
    states={{
      introduction: 'The Radio Button has the following states:',
      layout: '3-span',
      cards: [
        {
          title: 'Base',
          description:
            'The Radio Button has a base (default) state. This is the base style of the Radio Button before it has been interacted with by a user.',
          media: getIllustrationComponent(
            'components/radio-button/states/base',
          ),
        },
        {
          title: 'Hover',
          description:
            'The Radio Button has a hover state. The style of the Radio Button changes to visually communicate and provide feedback to the user that the Radio Button is an interactive element. The style of the label remains the same. The label can also be interacted with (hovered) to check the Radio Button.',
          media: getIllustrationComponent(
            'components/radio-button/states/hover',
          ),
        },
        {
          title: 'Focus',
          description:
            'The Radio Button in a focus state communicates that a user has highlighted a Radio Button, using an input method such as a keyboard or voice.',
          media: getIllustrationComponent(
            'components/radio-button/states/focus',
          ),
        },
        {
          title: 'Focus Hover',
          description:
            'The Radio Button in a focus hover state communicates that a user has highlighted a Radio Button, using an input method such as a keyboard or voice.',
          media: getIllustrationComponent(
            'components/radio-button/states/focus-hover',
          ),
        },
        {
          title: 'Checked',
          description:
            'The Radio Button has a checked state. The style of the Radio Button input changes to visually communicate and provide feedback to the user that the Radio Button has been checked. The style of the label remains the same.',
          media: getIllustrationComponent(
            'components/radio-button/states/checked',
          ),
        },
        {
          title: 'Checked Hover',
          description:
            'The Radio Button has a checked hover state. The style of the Radio Button input changes to visually communicate and provide feedback to the user that the Radio Button has been checked and hovered over. The style of the label remains the same.',
          media: getIllustrationComponent(
            'components/radio-button/states/checked-hover',
          ),
        },
        {
          title: 'Checked Focus',
          description:
            'The Radio Button in a checked focus state communicates that a user has highlighted a Radio Button, using an input method such as a keyboard or voice.',
          media: getIllustrationComponent(
            'components/radio-button/states/checked-focus',
          ),
        },
        {
          title: 'Checked Focus Hover',
          description:
            'The Radio Button in a checked focus hover state communicates that a user has highlighted a Radio Button, using an input method such as a keyboard or voice.',
          media: getIllustrationComponent(
            'components/radio-button/states/checked-focus-hover',
          ),
        },
        {
          title: 'Invalid',
          description: (
            <>
              The Radio Button in an invalid state changes style when the Radio
              Button selection doesn’t conform to a specific format eg.
              attempting to proceed without selecting a required Radio Group in
              a <Link href="/components/form/">Form</Link>. The Form component
              is used to apply validation behaviour. The style of the label
              remains the same.
            </>
          ),
          media: getIllustrationComponent(
            'components/radio-button/states/invalid',
          ),
        },
        {
          title: 'Invalid Focus',
          description:
            'The Radio Button in an invalid focus state communicates that a user has highlighted a Radio Button, using an input method such as a keyboard or voice.',
          media: getIllustrationComponent(
            'components/radio-button/states/invalid-focus',
          ),
        },
        {
          title: 'Invalid Hover',
          description:
            'The Radio Button has an invalid hover state. The style of the Radio Button input changes to visually communicate and provide feedback to the user that the Radio Button is in an invalid state and hovered over. The style of the label remains the same.',
          media: getIllustrationComponent(
            'components/radio-button/states/invalid-hover',
          ),
        },
        {
          title: 'Invalid Focus Hover',
          description:
            'The Radio Button in an invalid focus hover state communicates that a user has highlighted a Radio Button, using an input method such as a keyboard or voice.',
          media: getIllustrationComponent(
            'components/radio-button/states/invalid-focus-hover',
          ),
        },
        {
          title: 'Checked Invalid',
          description:
            'The Radio Button has a checked invalid state. The style of the Radio Button input changes to visually communicate and provide feedback to the user that the Radio Button has been checked and is in an invalid state. The style of the label remains the same.',
          media: getIllustrationComponent(
            'components/radio-button/states/checked-invalid',
          ),
        },
        {
          title: 'Checked Invalid Focus',
          description:
            'The Radio Button in a checked invalid focus state communicates that a user has highlighted a Radio Button, using an input method such as a keyboard or voice.',
          media: getIllustrationComponent(
            'components/radio-button/states/checked-invalid-focus',
          ),
        },
        {
          title: 'Checked Invalid Hover',
          description:
            'The Radio Button has a checked invalid hover state. The style of the Radio Button input changes to visually communicate and provide feedback to the user that the Radio Button has been checked and is in an invalid state, and hovered over. The style of the label remains the same.',
          media: getIllustrationComponent(
            'components/radio-button/states/checked-invalid-hover',
          ),
        },
        {
          title: 'Checked Invalid Focus Hover',
          description:
            'The Radio Button in a checked invalid focus hover state communicates that a user has highlighted a Radio Button, using an input method such as a keyboard or voice.',
          media: getIllustrationComponent(
            'components/radio-button/states/checked-invalid-focus-hover',
          ),
        },
        {
          title: 'Valid',
          description: (
            <>
              The Radio Button in a valid state changes style when the Radio
              Button selection conforms to a specific format eg. updating
              preferences in a <Link href="/components/form/">Form</Link>. The
              Form component is used to apply validation behaviour. The style of
              the label remains the same.
            </>
          ),
          media: getIllustrationComponent(
            'components/radio-button/states/valid',
          ),
        },
        {
          title: 'Valid Focus',
          description: (
            <>
              The Radio Button in a valid focus state communicates that a user
              has highlighted a{' '}
              <Link href="/components/checkbox/">Checkbox</Link>, using an input
              method such as a keyboard or voice.
            </>
          ),
          media: getIllustrationComponent(
            'components/radio-button/states/valid-focus',
          ),
        },
        {
          title: 'Valid Hover',
          description:
            'The Radio Button has a valid hover state. The style of the Radio Button input changes to visually communicate and provide feedback to the user that the Radio Button is in a valid state and hovered over. The style of the label remains the same.',
          media: getIllustrationComponent(
            'components/radio-button/states/valid-hover',
          ),
        },
        {
          title: 'Valid Focus Hover',
          description:
            'The Radio Button in a valid focus hover state communicates that a user has highlighted a Radio Button, using an input method such as a keyboard or voice.',
          media: getIllustrationComponent(
            'components/radio-button/states/valid-focus-hover',
          ),
        },
        {
          title: 'Checked Valid',
          description:
            'The Radio Button has a checked valid state. The style of the Radio Button input changes to visually communicate and provide feedback to the user that the Radio Button has been checked and is in a valid state. The style of the label remains the same.',
          media: getIllustrationComponent(
            'components/radio-button/states/checked-valid',
          ),
        },
        {
          title: 'Checked Valid Focus',
          description:
            'The Radio Button in a checked valid focus state communicates that a user has highlighted a Radio Button, using an input method such as a keyboard or voice.',
          media: getIllustrationComponent(
            'components/radio-button/states/checked-valid-focus',
          ),
        },
        {
          title: 'Checked Valid Hover',
          description:
            'The Radio Button has a checked valid hover state. The style of the Radio Button input changes to visually communicate and provide feedback to the user that the Radio Button has been checked and is in a valid state, and hovered over. The style of the label remains the same.',
          media: getIllustrationComponent(
            'components/radio-button/states/checked-valid-hover',
          ),
        },
        {
          title: 'Checked Valid Focus Hover',
          description:
            'The Radio Button in a checked valid focus hover state communicates that a user has highlighted a Radio Button, using an input method such as a keyboard or voice.',
          media: getIllustrationComponent(
            'components/radio-button/states/checked-valid-focus-hover',
          ),
        },
        {
          title: 'Disabled',
          description: (
            <>
              The Radio Button in a disabled state communicates that a Radio
              Button exists, but is not available to the user in that scenario.
              When the user&apos;s cursor hovers over a Radio Button in a
              disabled state, the cursor shows as not allowed.
              <br />
              <br />
              Disabled Radio Buttons are often used to maintain layout
              consistency and communicate that a Radio Button may become
              available if another condition has been met. The style of the
              label (colour) also changes to indicate that the Radio Button is
              disabled.
            </>
          ),
          media: getIllustrationComponent(
            'components/radio-button/states/disabled',
          ),
        },
        {
          title: 'Checked Disabled',
          description: (
            <>
              The Radio Button in a checked disabled state communicates that a
              Radio Button exists, but is not available to the user in that
              scenario. When the user&apos;s cursor hovers over a Radio Button
              in a checked disabled state, the cursor shows as not allowed.
              <br />
              <br />
              Disabled checked Radio Buttons are often used to maintain layout
              consistency and communicate that a Radio Button may become
              available if another condition has been met. The style of the
              label (colour) also changes to indicate that the Radio Button is
              checked and disabled.
            </>
          ),
          media: getIllustrationComponent(
            'components/radio-button/states/checked-disabled',
          ),
        },
      ],
      notice:
        'The Feedback element becomes visible (configurable) on state change, eg hover.',
    }}
    behaviors={{
      introduction:
        'The following guidance describes how the Radio Button component behaves.',
      cards: [
        {
          title: 'Label overflow wrap',
          description:
            'When a Label is too long for the available horizontal space, it wraps to form another line.',
          media: getIllustrationComponent(
            'components/radio-button/behaviours/label-overflow-wrap',
          ),
        },
        {
          title: 'Clickable area',
          description:
            'The Radio Button feedback element indicates the minimum clickable area for the Radio Button input (also known as hit area, or touch target area). The size of the clickable area changes according to the size of the Radio Button. The associated Label is also clickable next to the Radio Button.',
          media: getIllustrationComponent(
            'components/radio-button/behaviours/clickable-area',
          ),
        },
        {
          title: 'Focusable area',
          description:
            'Both the Radio Button input and Label are interactive, and a user can hover over either, but only the Radio Button input itself is focusable by using an input method such as a keyboard or voice.',
          media: getIllustrationComponent(
            'components/radio-button/behaviours/focusable-area',
          ),
        },
        {
          title: 'Validation',
          description: (
            <>
              The Radio Button validation rules can be defined for onSubmit or
              onBlur, for both the initial validation and re-validation using
              the Form.
              <br />
              <br />
              <Link href="/components/form/">
                For more information, please refer to the Form component
              </Link>
              .
              <Block spaceStack="space050" />
              <InlineMessage
                icon={infoIcon}
                role="region"
                aria-label="Radio validation"
                title="Note"
              >
                Validation only works if the FormInput Radio Button uses the
                Form component.
              </InlineMessage>
            </>
          ),
          media: getIllustrationComponent(
            'components/radio-button/behaviours/validation',
          ),
        },
        {
          title: 'Exclusive selection',
          description:
            'Checking a Radio Button in a Radio Group will uncheck all other Radio Buttons in that group.',
          media: getIllustrationComponent(
            'components/radio-button/behaviours/autofocus',
          ),
        },
        {
          title: 'Autofocus',
          description:
            'The Radio Button can be set to be auto-focused on page load (when mounted).',
          media: getIllustrationComponent(
            'components/radio-button/behaviours/autofocus',
          ),
        },
        {
          title: 'Default checked',
          description: (
            <>
              The Radio Button&apos;s initial state can be set to be checked or
              unchecked by default (controlled or uncontrolled).
              <br />
              <br />
              Adding <InlineCode>checked</InlineCode> to the native HTML element
              will set the Radio Button as selected by default.
              <br />
              <br />
              Voiceover will read out the Radio Button to the user and let them
              know it is selected.
            </>
          ),
          media: getIllustrationComponent(
            'components/radio-button/behaviours/default-checked',
          ),
        },
      ],
    }}
    usage={{
      introduction:
        'The following guidance describes how and when to appropriately use the Radio Button component.',
      cards: [
        {
          description:
            'Use Radio Buttons when a user can select only one option from a list.',
          kind: UsageKind.DO,
          media: getIllustrationComponent('components/radio-button/usage/do-1'),
        },
        {
          description:
            'Don’t use Radio Buttons when a user can select multiple options from a list. In this case, use a group of Checkboxes.',
          kind: UsageKind.DONT,
          media: getIllustrationComponent(
            'components/radio-button/usage/dont-1',
          ),
        },
        {
          description:
            'Radio Buttons should always have an associated Label to give users context of what the Radio Button represents.',
          kind: UsageKind.DO,
          media: getIllustrationComponent('components/radio-button/usage/do-2'),
        },
        {
          description:
            'Avoid placing Labels to the left (start) of Radio Buttons when there are multiple Radio Buttons grouped together to avoid layout misalignment. Instead place Labels to the right (end) so that when used together in forms, Radio Button inputs align vertically, which makes them easier to find, especially for users of screen magnifiers.',
          kind: UsageKind.DONT,
          media: getIllustrationComponent(
            'components/radio-button/usage/dont-2',
          ),
        },
        {
          description:
            'Radio Buttons should be displayed stacked vertically for consistent alignment and positioning across different breakpoints.',
          kind: UsageKind.DO,
          media: getIllustrationComponent('components/radio-button/usage/do-3'),
        },
        {
          description:
            'Use Assistive Text to provide context to the Radio Button group. For example, why a selection is required.',
          kind: UsageKind.DO,
          media: getIllustrationComponent('components/radio-button/usage/do-4'),
        },
      ],
    }}
    accessibility={{
      introduction: (
        <>
          The Radio Button has the following accessibility considerations:
          <Block spaceStack="space100" />
          <ContentText title="Grouping Radio Buttons" titleAs="span">
            It is recommended to{' '}
            <Link
              target="_blank"
              href="https://www.w3.org/TR/wai-aria-1.2/#group"
            >
              group
            </Link>{' '}
            Radio Buttons together in a RadioGroup. Other related elements such
            as Labels and Assistive Text should be grouped together using the
            Fieldset component, with a title attributed to the elements that
            appear in the Fieldset, called a Legend.
          </ContentText>
        </>
      ),
      focusOrder: {
        title: 'Focus order',
        tableRows: [
          {
            order: 1,
            element: 'Radio Button input',
            role: 'Focusses to the Radio Button input',
          },
        ],
      },
      interaction: {
        title: 'Keyboard Interactions',
        tableRows: [
          {
            command: ['Tab', 'Shift'],
            description:
              'Move focus into and out of the Radio Group. When focus moves into a Radio Group. If a Radio Button is checked, focus is set on the checked Radio Button. If none of the Radio Buttons are checked, focus is set on the first Radio Rutton in the group.',
          },
          {
            command: ['Right arrow', 'Down arrow'],
            description: 'To go forward and select next Radio Button.',
          },
          {
            command: ['Left arrow', 'Up arrow'],
            description: 'To go back and select previous Radio Button.',
          },
          {
            command: ['Space'],
            description: (
              <>
                If the Radio Button with focus is not checked, changes the state
                to <InlineCode>checked</InlineCode>, otherwise, does nothing.
                <Block spaceStack="space030" />
                <InlineMessage
                  icon={infoIcon}
                  role="region"
                  aria-label="Space"
                  title="Note"
                >
                  The state where a Radio Button is not checked only occurs on
                  page load.
                </InlineMessage>
              </>
            ),
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
              'Aria-label attribute is used to define a string that labels the action that will be performed when the user interacts with the Radio Button.',
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
        ],
      },
    }}
    componentAPI={{
      introduction: (
        <>
          The Radio Button has a range of props that can be used to define an
          appropriate experience for different use cases.
          <Block spaceStack="space080" />
          <InlineMessage>
            There are three components exported from the package; one for use
            within the{' '}
            <Link href="/components/form/">NewsKit Form component</Link>, one
            for use as a controlled component, and the RadioGroup component that
            is used to group Radio Buttons together.
          </InlineMessage>
        </>
      ),
      components: [
        {
          title: 'FormInput Radio Button',
          summary: (
            <>
              The FormInput Radio Button has a range of props that can be used
              to define an appropriate experience for different use cases. Use
              this component within the{' '}
              <Link href="/components/form/">NewsKit Form component</Link>.
            </>
          ),
          propsRows: commonPropsRows('FormInput'),
          overridesRows: commonOverridesRows,
        },
        {
          title: 'RadioButton',
          summary: `The Radio Button has a range of props that can be used to define an appropriate experience for different use cases. Use this component as a controlled component, for instance where you have a custom validation mechanism.`,
          propsRows: [
            {
              name: 'name',
              type: 'string',
              description: (
                <>
                  If provided, defines name of the input element, used when
                  submitting an{' '}
                  <Link href="/components/radio-button/">HTML form</Link>.
                </>
              ),
            },
            ...commonPropsRows(),
          ],
          overridesRows: commonOverridesRows,
        },
        {
          title: 'RadioGroup',
          summary: `The Radio Group has a range of props that can be used to define an appropriate experience for different use cases. Use this component to group Radio Buttons together.`,
          propsRows: radioButtonPropsRows,
        },
      ],
    }}
    related={{
      related: ['Button', 'Checkbox', 'Form', 'Select'],
    }}
  />
);

export default RadioButtonComponent;
