import React from 'react';
import {Block, InlineMessage, toNewsKitIcon} from 'newskit';
import {Info as InfoFilled} from '@emotion-icons/material/Info';
import {MetaStatus} from '../../components/meta/types';
import {LayoutProps} from '../../components/layout';
import {ComponentPageTemplate} from '../../templates/component-page-template/component-page-template';
import {getIllustrationComponent} from '../../components/illustrations/illustration-loader';
import {ContentText} from '../../components/text-section/content-text';
import {InlineCode} from '../../components/markdown-elements';
import {UsageKind} from '../../components/usage-card';
import {Link} from '../../components/link';
import {commonLogicalProps} from '../../components/component-api/common-logical-props';
import {OverridesRowsProps} from '../../components/component-api';

const IconFilledInfo = toNewsKitIcon(InfoFilled);

const infoIcon = (
  <IconFilledInfo
    overrides={{
      size: 'iconSize020',
    }}
  />
);

const commonPropsRows = (type?: string) => [
  {
    name: 'size',
    type: ['small', 'medium', 'large'],
    default: 'medium',
    description: `Defines the size of the ${type} Checkbox.`,
  },
  {
    name: 'state',
    type: ['valid', 'invalid', 'disabled'],
    description: `If true, renders the ${type} Checkbox in a valid, invalid, or disabled state. It can be submitted within a form.`,
  },
  {
    name: 'labelPosition',
    type: ['start', 'end'],
    default: 'end',
    description: `Defines the position of the Label.`,
  },
  {
    name: 'labelAttributes',
    type: 'React.LabelHTMLAttributes<HTMLLabelElement>',
    description: `Used to pass HTML attributes to the Label.`,
  },
];

const commonOverridesRows = [
  {
    attribute: 'input.size',
    type: 'checkboxSize',
    default: ['Small = sizing050', 'Medium = sizing060', 'Large =sizing070'],
    description: 'If provided, this overrides the size of the Checkbox input.',
  },
  {
    attribute: 'input.stylePreset',
    type: 'MQ<string>',
    default: 'inputField',
    description:
      'If provided, overrides the stylePreset of the Checkbox input.',
  },
  {
    attribute: 'input.transitionPreset',
    type: 'MQ<string>',
    default: 'backgroundColorChange, borderColorChange',
    description:
      'If provided, overrides the transitionPreset of the Checkbox input.',
  },
  {
    attribute: 'input.spaceInline',
    type: 'MQ<string>',
    default: [
      'spaceInline030',
      'Medium = spaceInline030',
      'Large = spaceInline040',
    ],
    description:
      'If provided, this overrides the inline space between the Checkbox input and Label.',
  },
  {
    attribute: 'spaceStack(deprecated)',
    type: 'MQ<string>',
    default: '',
    description:
      'This property is deprecated. Use marginBlockEnd instead. If provided, this overrides the stack space applied to the Checkbox.',
  },
  {
    attribute: 'icon',
    type: 'MQ<string>',
    default: 'check',
    description: 'If provided, overrides the Checkbox icon.',
  },
  {
    attribute: 'icon.size',
    type: 'MQ<string>',
    default: 'iconSize020',
    description: 'If provided, overrides the size of the Checkbox icon.',
  },
  {
    attribute: 'icon.stylePreset',
    type: 'MQ<string>',
    default: 'inkInverse',
    description: 'If provided, overrides the stylePreset of the Checkbox icon.',
  },
  {
    attribute: 'feedback.size',
    type: 'feedbackSize',
    default: ['Small = sizing070', 'Medium = sizing080', 'Large = sizing090'],
    description:
      'If provided, this overrides the size of the feedback element.',
  },
  {
    attribute: 'feedback.stylePreset',
    type: 'feedbackSize',
    default: '',
    description:
      'If provided, this overrides the stylePreset of the feedback element.',
  },
  {
    attribute: 'feedback.transitionPreset',
    type: 'MQ<string>',
    default: 'fade',
    description:
      'If provided, overrides the transitionPreset of the feedback element.',
  },
  {
    attribute: 'label.typographyPreset',
    type: 'MQ<string>',
    default: [
      'Small = utilityBody020',
      ' Medium = utilityBody020',
      'Large = utilityBody030',
    ],
    description:
      'If provided, this overrides the typographyPreset of the Label.',
  },
  {
    attribute: 'label.stylePreset',
    type: 'MQ<string>',
    default: 'inkBase',
    description: 'If provided, this overrides the stylePreset of the Label.',
  },
  ...(commonLogicalProps() as OverridesRowsProps[]),
];

const CheckboxComponent = (layoutProps: LayoutProps) => (
  <ComponentPageTemplate
    headTags={{
      title: 'Checkbox',
      description:
        'Checkboxes are selection controls that allow users to select one or multiple items from a group of options. They typically appear in forms.',
    }}
    layoutProps={layoutProps}
    pageIntroduction={{
      type: 'Actions & Inputs',
      name: 'Checkbox',
      hero: {
        illustration: 'components/checkbox/hero',
      },
      introduction:
        'Checkboxes are selection controls that allow users to select one or multiple items from a group of options. They typically appear in forms.',
    }}
    componentDefaultsKey="checkbox"
    meta={{
      status: MetaStatus.Supported,
      introduced: 'v4.2.0',
      codeUrl:
        'https://github.com/newscorp-ghfb/newskit/blob/develop/src/checkbox/checkbox.tsx',
      figmaUrl:
        'https://www.figma.com/file/FSbCQa6SzVR3K48ZWLeD77/%F0%9F%9F%A2-NK-Web-Components?node-id=3712%3A75609',
    }}
    anatomy={{
      introduction:
        'The Checkbox contains one required element and three optional elements.',
      rows: [
        {
          name: 'Checkbox Input',
          description:
            'Selection control (input) that can be selected or unselected, and pushed into different states',
          component: ['Block'],
          optional: undefined,
        },
        {
          name: 'Icon',
          description: 'Icon that appears within the Checkbox input',
          component: ['Block'],
          optional: true,
        },
        {
          name: 'Feedback',
          description:
            'Non-interactive background element for visual feedback on hover',
          component: ['Block'],
          optional: true,
        },
        {
          name: 'Label',
          description:
            'The Label is the text attributed to the Checkbox that provides context',
          component: ['Text Block'],
          optional: true,
        },
      ],
      media: getIllustrationComponent('components/checkbox/anatomy'),
    }}
    options={{
      introduction:
        'The Checkbox has options that can be used to provide an appropriate experience for different use cases.',
      cards: [
        {
          title: 'Size',
          description: (
            <>
              There are three sizes of Checkbox input and the feedback element;
              small, medium (default), and large.
              <br />
              <br />
              The icon that appears within the Checkbox input remains the same
              size at all three sizes but can be overridden.
            </>
          ),
          media: getIllustrationComponent('components/checkbox/options/size'),
        },
        {
          title: 'Icon',
          description:
            'The icon that appears within the Checkbox input can be overridden for the different Checkbox states.',
          media: getIllustrationComponent('components/checkbox/options/icon'),
        },
        {
          title: 'Feedback',
          description:
            'The feedback element is non-interactive and appears in the background behind the Checkbox input for visual feedback on hover.',
          media: getIllustrationComponent(
            'components/checkbox/options/feedback',
          ),
        },
        {
          title: 'Label',
          description: (
            <>
              <Block spaceStack="space030">
                The Checkbox has a label that appears to the right (end) of a
                Checkbox.
              </Block>
              <InlineMessage
                icon={infoIcon}
                role="region"
                aria-label="checkbox label position"
              >
                In the case of needing a label on the left (start) of a
                Checkbox, this can be set via the{' '}
                <InlineCode>labelPosition</InlineCode> prop.
              </InlineMessage>
            </>
          ),
          media: getIllustrationComponent('components/checkbox/options/label'),
        },
        {
          title: 'Fieldset',
          description: (
            <>
              Selection controls (inputs), such as the FormInput,{' '}
              <Link href="/components/radio-button/">Radio Button</Link>, and
              Checkbox, can be grouped together with other selection controls,
              Labels, and Assistive Text together in a Fieldset. The Fieldset
              has a caption that gives a title attributed to the elements that
              appear in the Fieldset, called a Legend.
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
            'components/checkbox/options/fieldset',
          ),
        },
      ],
    }}
    states={{
      introduction: 'The Checkbox has the following states:',
      layout: '3-span',
      cards: [
        {
          title: 'Base',
          description:
            'The Checkbox has a base (default) state. This is the base style of the Checkbox before it has been interacted with by a user.',
          media: getIllustrationComponent('components/checkbox/states/base'),
        },
        {
          title: 'Hover',
          description:
            'The Checkbox has a hover state. The style of the Checkbox changes to visually communicate and provide feedback to the user that the Checkbox is an interactive element. The style of the label remains the same. The label can also be interacted with (hovered) to check the Checkbox.',
          media: getIllustrationComponent('components/checkbox/states/hover'),
        },
        {
          title: 'Focus',
          description:
            'The Checkbox in a focus state communicates that a user has highlighted a Checkbox, using an input method such as a keyboard or voice.',
          media: getIllustrationComponent('components/checkbox/states/focus'),
        },
        {
          title: 'Focus Hover',
          description:
            'The Checkbox in a focus hover state communicates that a user has highlighted a Checkbox, using an input method such as a keyboard or voice.',
          media: getIllustrationComponent(
            'components/checkbox/states/focus-hover',
          ),
        },
        {
          title: 'Checked',
          description:
            'The Checkbox has a checked state. The style of the Checkbox input changes to visually communicate and provide feedback to the user that the Checkbox has been checked. The style of the label remains the same.',
          media: getIllustrationComponent('components/checkbox/states/checked'),
        },
        {
          title: 'Checked Hover',
          description:
            'The Checkbox has a checked hover state. The style of the Checkbox input changes to visually communicate and provide feedback to the user that the Checkbox has been checked and hovered over. The style of the label remains the same.',
          media: getIllustrationComponent(
            'components/checkbox/states/checked-hover',
          ),
        },
        {
          title: 'Checked Focus',
          description:
            'The Checkbox in a checked focus state communicates that a user has highlighted a Checkbox, using an input method such as a keyboard or voice.',
          media: getIllustrationComponent(
            'components/checkbox/states/checked-focus',
          ),
        },
        {
          title: 'Checked Focus Hover',
          description:
            'The Checkbox in a checked focus hover state communicates that a user has highlighted a Checkbox, using an input method such as a keyboard or voice.',
          media: getIllustrationComponent(
            'components/checkbox/states/checked-focus-hover',
          ),
        },
        {
          title: 'Invalid',
          description: (
            <>
              The Checkbox in an invalid state changes style when the Checkbox
              selection doesn’t conform to a specific format eg. attempting to
              proceed without selecting a required Checkbox in a{' '}
              <Link href="/components/form/">Form</Link>. The Form component is
              used to apply validation behaviour. The style of the label remains
              the same.
            </>
          ),
          media: getIllustrationComponent('components/checkbox/states/invalid'),
        },
        {
          title: 'Invalid Focus',
          description:
            'The Checkbox in an invalid focus state communicates that a user has highlighted a Checkbox, using an input method such as a keyboard or voice.',
          media: getIllustrationComponent(
            'components/checkbox/states/invalid-focus',
          ),
        },
        {
          title: 'Invalid Hover',
          description:
            'The Checkbox has an invalid hover state. The style of the Checkbox input changes to visually communicate and provide feedback to the user that the Checkbox is in an invalid state and hovered over. The style of the label remains the same.',
          media: getIllustrationComponent(
            'components/checkbox/states/invalid-hover',
          ),
        },
        {
          title: 'Invalid Focus Hover',
          description:
            'The Checkbox in an invalid focus hover state communicates that a user has highlighted a Checkbox, using an input method such as a keyboard or voice.',
          media: getIllustrationComponent(
            'components/checkbox/states/invalid-focus-hover',
          ),
        },
        {
          title: 'Checked Invalid',
          description:
            'The Checkbox has a checked invalid state. The style of the Checkbox input changes to visually communicate and provide feedback to the user that the Checkbox has been checked and is in an invalid state. The style of the label remains the same.',
          media: getIllustrationComponent(
            'components/checkbox/states/checked-invalid',
          ),
        },
        {
          title: 'Checked Invalid Focus',
          description:
            'The Checkbox in a checked invalid focus state communicates that a user has highlighted a Checkbox, using an input method such as a keyboard or voice.',
          media: getIllustrationComponent(
            'components/checkbox/states/checked-invalid-focus',
          ),
        },
        {
          title: 'Checked Invalid Hover',
          description:
            'The Checkbox has a checked invalid hover state. The style of the Checkbox input changes to visually communicate and provide feedback to the user that the Checkbox has been checked and is in an invalid state, and hovered over. The style of the label remains the same.',
          media: getIllustrationComponent(
            'components/checkbox/states/checked-invalid-hover',
          ),
        },
        {
          title: 'Checked Invalid Focus Hover',
          description:
            'The Checkbox in a checked invalid focus hover state communicates that a user has highlighted a Checkbox, using an input method such as a keyboard or voice.',
          media: getIllustrationComponent(
            'components/checkbox/states/checked-invalid-focus-hover',
          ),
        },
        {
          title: 'Valid',
          description: (
            <>
              The Checkbox in an valid state changes style when the Checkbox
              selection conforms to a specific format eg.updating preferences in
              a <Link href="/components/form/">Form</Link>. The Form component
              is used to apply validation behaviour.The style of the label
              remains the same.
            </>
          ),
          media: getIllustrationComponent('components/checkbox/states/valid'),
        },
        {
          title: 'Valid Focus',
          description:
            'The Checkbox in a valid focus state communicates that a user has highlighted a Checkbox, using an input method such as a keyboard or voice.',
          media: getIllustrationComponent(
            'components/checkbox/states/valid-focus',
          ),
        },
        {
          title: 'Valid Hover',
          description:
            'The Checkbox has a valid hover state. The style of the Checkbox input changes to visually communicate and provide feedback to the user that the Checkbox is in a valid state and hovered over. The style of the label remains the same.',
          media: getIllustrationComponent(
            'components/checkbox/states/valid-hover',
          ),
        },
        {
          title: 'Valid Focus Hover',
          description:
            'The Checkbox in a valid focus hover state communicates that a user has highlighted a Checkbox, using an input method such as a keyboard or voice.',
          media: getIllustrationComponent(
            'components/checkbox/states/valid-focus-hover',
          ),
        },
        {
          title: 'Checked Valid',
          description:
            'The Checkbox has a checked valid state. The style of the Checkbox input changes to visually communicate and provide feedback to the user that the Checkbox has been checked and is in a valid state. The style of the label remains the same.',
          media: getIllustrationComponent(
            'components/checkbox/states/checked-valid',
          ),
        },
        {
          title: 'Checked Valid Focus',
          description:
            'The Checkbox in a checked valid focus state communicates that a user has highlighted a Checkbox, using an input method such as a keyboard or voice.',
          media: getIllustrationComponent(
            'components/checkbox/states/checked-valid-focus',
          ),
        },
        {
          title: 'Checked Valid Hover',
          description:
            'The Checkbox has a checked valid hover state. The style of the Checkbox input changes to visually communicate and provide feedback to the user that the Checkbox has been checked and is in a valid state, and hovered over. The style of the label remains the same.',
          media: getIllustrationComponent(
            'components/checkbox/states/checked-valid-hover',
          ),
        },
        {
          title: 'Checked Valid Focus Hover',
          description:
            'The Checkbox in a checked valid focus hover state communicates that a user has highlighted a Checkbox, using an input method such as a keyboard or voice.',
          media: getIllustrationComponent(
            'components/checkbox/states/checked-valid-focus-hover',
          ),
        },
        {
          title: 'Disabled',
          description: (
            <>
              The Checkbox in a disabled state communicates that a Checkbox
              exists, but is not available to the user in that scenario. When
              the user&apos;s cursor hovers over a Checkbox in a disabled state,
              the cursor shows as not allowed.
              <br />
              <br />
              Disabled Checkboxes are often used to maintain layout consistency
              and communicate that a Checkbox may become available if another
              condition has been met. The style of the label (colour) also
              changes to indicate that the Checkbox is disabled.
            </>
          ),
          media: getIllustrationComponent(
            'components/checkbox/states/disabled',
          ),
        },
        {
          title: 'Checked Disabled',
          description: (
            <>
              The Checkbox in a checked disabled state communicates that a
              Checkbox exists, but is not available to the user in that
              scenario. When the user&apos;s cursor hovers over a Checkbox in a
              checked disabled state, the cursor shows as not allowed.
              <br />
              <br />
              Disabled checked Checkboxes are often used to maintain layout
              consistency and communicate that a Checkbox may become available
              if another condition has been met. The style of the label (colour)
              also changes to indicate that the Checkbox is checked and
              disabled.
            </>
          ),
          media: getIllustrationComponent(
            'components/checkbox/states/checked-disabled',
          ),
        },
      ],
      notice:
        'The Feedback element becomes visible (configurable) on state change, eg hover.',
    }}
    behaviors={{
      introduction:
        'The following guidance describes how the Checkbox component behaves.',
      cards: [
        {
          title: 'Checked vs unchecked',
          description:
            'Checkboxes can be checked or unchecked. A Checkbox in a checked state is indicated with an icon that appears in the centre of the checkbox.',
          media: getIllustrationComponent(
            'components/checkbox/behaviours/checked-vs-unchecked',
          ),
        },
        {
          title: 'Label overflow wrap',
          description:
            'When a Label is too long for the available horizontal space, it wraps to form another line.',
          media: getIllustrationComponent(
            'components/checkbox/behaviours/label-overflow-wrap',
          ),
        },
        {
          title: 'Transition',
          description: (
            <>
              When the Checkbox is checked, the ‘check’ icon fades up in the
              centre of the Checkbox, and the{' '}
              <InlineCode>backgroundColor</InlineCode>, and{' '}
              <InlineCode>borderColor</InlineCode> transition simultaneously.
            </>
          ),
          media: getIllustrationComponent(
            'components/checkbox/behaviours/transition',
          ),
        },
        {
          title: 'Clickable area',
          description:
            'The Checkbox feedback element indicates the minimum clickable area for the Checkbox input (also known as hit area, or touch target area). The size of the clickable area changes according to the size of the Checkbox. The associated Label is also clickable next to the Checkbox.',
          media: getIllustrationComponent(
            'components/checkbox/behaviours/clickable-area',
          ),
        },
        {
          title: 'Focusable area',
          description:
            'Both the Checkbox input and Label are interactive, and a user can hover over either, but only the Checkbox input itself is focusable by using an input method such as a keyboard or voice.',
          media: getIllustrationComponent(
            'components/checkbox/behaviours/focusable-area',
          ),
        },
        {
          title: 'Validation',
          description: (
            <>
              The Checkbox validation rules can be defined for onSubmit or
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
                aria-label="formInput checkbox validation"
                title="Note"
              >
                Validation only works if the FormInput Checkbox uses the Form
                component.
              </InlineMessage>
            </>
          ),
          media: getIllustrationComponent(
            'components/checkbox/behaviours/validation',
          ),
        },
        {
          title: 'Autofocus',
          description:
            'The Checkbox can be set to be auto-focused on page load (when mounted).',
          media: getIllustrationComponent(
            'components/checkbox/behaviours/autofocus',
          ),
        },
        {
          title: 'Default checked',
          description:
            'The Checkbox initial state can be set to be checked or unchecked by default (controlled or uncontrolled).',
          media: getIllustrationComponent(
            'components/checkbox/behaviours/default-checked',
          ),
        },
      ],
    }}
    usage={{
      introduction:
        'The following guidance describes how and when to appropriately use the Checkbox component.',
      cards: [
        {
          description:
            'Group Checkboxes along with other selection controls, Labels, and Assistive Text together with the Fieldset component and the Legend that gives a title attributed to the elements that appear in the Fieldset.',
          kind: UsageKind.DO,
          media: getIllustrationComponent('components/checkbox/usage/do-1'),
        },
        {
          description: (
            <>
              When medium or large Checkboxes are too visually prominent, small
              checkboxes can work well on information dense screens/pages.
              <br />
              <br />
              For example, smaller checkboxes may let users see more options in
              a form at a glance.
            </>
          ),
          kind: UsageKind.DO,
          media: getIllustrationComponent('components/checkbox/usage/do-2'),
        },
        {
          description: (
            <>
              Checkboxes should be used to help users select multiple options
              from a list or to check or uncheck a single option. Unlike{' '}
              <Link href="/components/radio-button/">Radios</Link>, users can
              select multiple options from a list of Checkboxes.
            </>
          ),
          kind: UsageKind.DO,
          media: getIllustrationComponent('components/checkbox/usage/do-3'),
        },
        {
          description: (
            <>
              Avoid using the Checkbox component if users can only choose one
              option from a selection. In this case, use the{' '}
              <Link href="/components/radio-button/">
                Radio Button component
              </Link>
              .
            </>
          ),
          kind: UsageKind.DONT,
          media: getIllustrationComponent('components/checkbox/usage/dont-1'),
        },
        {
          description:
            'Checkboxes should always have a Label associated to give users context of what the Checkbox represents.',
          kind: UsageKind.DO,
          media: getIllustrationComponent('components/checkbox/usage/do-4'),
        },
        {
          description:
            'Avoid placing Labels to the left (start) of Checkboxes when there are multiple Checkboxes grouped together to avoid layout misalignment. Instead place Labels to the right (end) so that when used together in forms, Checkbox inputs align vertically, which makes them easier to find, especially for users of screen magnifiers.',
          kind: UsageKind.DONT,
          media: getIllustrationComponent('components/checkbox/usage/dont-2'),
        },
        {
          description:
            'Checkboxes should be displayed vertically, stacked for consistent alignment and positioning across different breakpoints.',
          kind: UsageKind.DO,
          media: getIllustrationComponent('components/checkbox/usage/do-5'),
        },
        {
          description:
            'Avoid using Checkboxes in a horizontal orientation to avoid issues with alignment and legibility when there are multiple Checkboxes grouped together.',
          kind: UsageKind.DONT,
          media: getIllustrationComponent('components/checkbox/usage/dont-3'),
        },
        {
          description:
            'If needed Assistive Text should be used to hint at the action the user is being asked to do, for example, ‘Select all that apply’.',
          kind: UsageKind.DO,
          media: getIllustrationComponent('components/checkbox/usage/do-6'),
        },
        {
          description:
            'Avoid default checked options where possible as this makes it more likely that users will not realise they’ve missed a question, or submit the wrong answer when not intended.',
          kind: UsageKind.DONT,
          media: getIllustrationComponent('components/checkbox/usage/dont-4'),
        },
        {
          description:
            'Swap Assistive Text with error text if the Checkbox is invalid. Once the Checkbox is valid then the assistive is then shown again.',
          kind: UsageKind.DO,
          media: getIllustrationComponent('components/checkbox/usage/do-7'),
        },
        {
          description:
            'Write error text that communicates a solution. Error text should be written in no more than a few clear, concise and complete sentences.',
          kind: UsageKind.DO,
          media: getIllustrationComponent('components/checkbox/usage/do-8'),
        },
      ],
    }}
    accessibility={{
      introduction: (
        <>
          The Checkbox has the following accessibility considerations:
          <Block spaceStack="space100" />
          <ContentText title="Grouping Checkboxes" titleAs="span">
            It is recommended to{' '}
            <Link
              target="_blank"
              href="https://www.w3.org/TR/wai-aria-1.2/#group"
            >
              group
            </Link>{' '}
            Checkboxes and other related elements such as Labels and Assistive
            Text together using the Fieldset component, with a title attributed
            to the elements that appear in the Fieldset, called a Legend.
          </ContentText>
        </>
      ),
      focusOrder: {
        title: 'Focus order',
        tableRows: [
          {
            order: 1,
            element: 'Checkbox input',
            role: 'Focusses to the Checkbox input',
          },
        ],
      },
      interaction: {
        title: 'Keyboard Interactions',
        tableRows: [
          {
            command: ['Tab'],
            description: 'Moves focus to the Checkbox input',
          },
          {
            command: ['Space'],
            description: 'Checks & unchecks the Checkbox ',
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
              'Aria-label attribute is used to define a string that labels the action that will be performed when the user interacts with the Checkbox',
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
            attribute: 'aria-invalid',
            value: 'object',
            description:
              'This attribute informs the user when there is an error. By default it’s set to false. Screen readers will alert users when the element is set to any value other than false.',
            userSupplied: true,
          },
        ],
      },
    }}
    componentAPI={{
      introduction: (
        <>
          The Checkbox has a range of props that can be used to define an
          appropriate experience for different use cases.
          <Block spaceStack="space080" />
          <InlineMessage role="region" aria-label="api introduction">
            There are two components exported from the package, one for use
            within the{' '}
            <Link href="/components/form/">NewsKit Form component</Link>, and
            one for use as a controlled component.
          </InlineMessage>
        </>
      ),
      components: [
        {
          title: 'FormInput Checkbox',
          summary: (
            <>
              The FormInput Checkbox has a range of props that can be used to
              define an appropriate experience for different use cases.Use this
              component within the{' '}
              <Link href="/components/form/">NewsKit Form component.</Link>
            </>
          ),
          propsRows: commonPropsRows('FormInput'),
          overridesRows: commonOverridesRows,
          propsFooter: (
            <>
              <Block spaceStack="space030" />
              <InlineMessage
                role="region"
                aria-label="rules props"
                title="Note"
              >
                The <InlineCode>name</InlineCode> &{' '}
                <InlineCode>rules</InlineCode> props are set on the form input
                level. If you want to add validation rules or set the name of
                this component, please refer to the{' '}
                <Link href="/components/form/">Form</Link> component
              </InlineMessage>
              <Block spaceStack="space050" />
              <InlineMessage
                role="region"
                aria-label="engineer validation"
                title="Note"
              >
                Engineer to check the validation related props at the time of
                implementation.
              </InlineMessage>
            </>
          ),
        },

        {
          title: 'Checkbox',
          summary:
            'The Checkbox has a range of props that can be used to define an appropriate experience for different use cases. Use this component as a controlled component, for instance where you have a custom validation mechanism.',
          propsRows: [
            {
              name: 'name',
              type: 'string',
              description: (
                <>
                  If provided, defines name of the input element, used when
                  submitting an{' '}
                  <Link
                    target="_blank"
                    href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefname"
                  >
                    HTML form
                  </Link>
                  .
                </>
              ),
            },
          ],
          overridesRows: commonOverridesRows,
        },
      ],
    }}
    compliance={{
      variations: true,
      states: true,
      behaviours: true,
      usage: true,
      accessibility: true,
      performance: false,
      seo: null,
      props: true,
      uiKit: true,
      design: true,
      themes: true,
    }}
    related={{
      related: [
        'Button',
        'Form',
        'Radio Button',
        'Select',
        'Slider',
        'Text Field',
      ],
    }}
  />
);

export default CheckboxComponent;
