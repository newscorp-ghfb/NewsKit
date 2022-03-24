import React from 'react';
import {Block, InlineMessage, IconFilledInfo} from 'newskit';
import {MetaStatus} from '../../components/meta/types';
import {LayoutProps} from '../../components/layout';
import {ComponentPageTemplate} from '../../templates/component-page-template';
import {getIllustrationComponent} from '../../components/illustrations/illustration-loader';
import {InlineCode} from '../../components/markdown-elements';
import {Link} from '../../components/link';

const infoIcon = (
  <IconFilledInfo
    overrides={{
      size: 'iconSize020',
    }}
  />
);

const commonPropsRows = [
  {
    name: 'size',
    type: ['small', 'medium', 'large'],
    default: 'medium',
    description: 'Defines the size of the RadioButton.',
  },
  {
    name: 'state',
    type: ['valid', 'invalid', 'disabled'],
    description:
      'If provided, renders the RadioButton in a valid, invalid, or disabled state. It can be submitted within a form.',
  },
  {
    name: 'labelPosition',
    type: ['start', 'end'],
    default: 'end',
    description: 'Defines the position of the Label.',
  },
  {
    name: 'labelAttributes',
    type: 'LabelHTMLAttributes',
    default: '',
    description: 'Used to pass HTML attributes to the Label.',
  },
];

const commonOverridesRows = [
  {
    attribute: 'spaceStack',
    type: 'MQ<string>',
    default: 'space000',
    description: `If provided, this overrides the stack space applied to the Radio Button.`,
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
        illustration: 'components/radio-button/radio-button-illustration',
      },
      introduction: `Radio Buttons are selection controls that are typically used in forms. They are used for exclusive selection - allowing users to select one of multiple options in a Radio Group.`,
    }}
    componentDefaultsKey="radio"
    meta={{
      status: MetaStatus.Beta,
      introduced: 'v5.3',
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
            'The icon that appears within the Checkbox input can be overridden for the different Checkbox states.',
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
              and Checkbox, can be grouped together with other selection
              controls, Labels, and Assistive Text together in a Fieldset. The
              Fieldset has a caption that gives a title attributed to the
              elements that appear in the Fieldset, called a Legend.
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
          description:
            'The Radio Button in a valid focus state communicates that a user has highlighted a Checkbox, using an input method such as a keyboard or voice.',
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
    componentAPI={{
      introduction: (
        <>
          The Radio Button has a range of props that can be used to define an
          appropriate experience for different use cases.
          <Block spaceStack="space080" />
          <InlineMessage>
            There are three components exported from the package; one for use
            within the NewsKit Form component, one for use as a controlled
            component, and the RadioGroup component that is used to group Radio
            Buttons together.
          </InlineMessage>
        </>
      ),
      components: [
        {
          title: 'FormInputRadioButton',
          summary: `The FormInput Radio Button has a range of props that can be used to define an appropriate experience for different use cases. Use this component within the NewsKit Form component.`,
          propsRows: commonPropsRows,
          overridesRows: commonOverridesRows,
        },
        {
          title: 'RadioButton',
          summary: `The Radio Button has a range of props that can be used to define an appropriate experience for different use cases. Use this component as a controlled component, for instance where you have a custom validation mechanism.`,
          propsRows: [
            {
              name: 'name',
              type: 'string',
              description:
                'If provided, defines name of the input element, used when submitting an HTML form.',
            },
            ...commonPropsRows,
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
  />
);

export default RadioButtonComponent;
