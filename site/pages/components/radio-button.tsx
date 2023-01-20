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
    description: `If true, renders the ${type}  radio button in a valid, invalid or disabled state. Can be submitted within a form.`,
  },
  {
    name: 'size',
    type: ['small', 'medium', 'large'],
    default: 'medium',
    description: `Defines the size of the ${type} radio button.`,
  },
  {
    name: 'labelPosition',
    type: ['start', 'end'],
    default: 'end',
    description: 'Defines the position of the label.',
  },
  {
    name: 'labelAttributes',
    type: 'React.LabelHTMLAttributes<HTMLLabelElement>',
    default: '',
    description: 'Passes HTML attributes to the label.',
  },
];

const commonOverridesRows = [
  {
    attribute: 'spaceStack(deprecated)',
    type: 'MQ<string>',
    default: 'space000',
    description: `This property is deprecated. Use marginBlockEnd instead. If provided, overrides the stack space applied to the radio button.`,
  },
  {
    attribute: 'input.stylePreset',
    type: 'MQ<string>',
    default: 'radioButtonInput',
    description:
      'If provided, overrides the stylePreset of the radio button input.',
  },
  {
    attribute: 'input.size',
    type: 'MQ<string>',
    default: ['small = sizing050', 'medium = sizing060', 'large = sizing070'],
    description: 'If provided, overrides the size of the radio button input.',
  },
  {
    attribute: 'input.spaceInline',
    type: 'MQ<string>',
    default: ['small = space030', 'medium = space030', 'large = space040'],
    description:
      'If provided, overrides the inline space between the radio button input and label.',
  },
  {
    attribute: 'input.transitionPreset',
    type: 'MQ<string>',
    default: ['backgroundColorChange', 'borderColorChange'],
    description:
      'If provided, overrides the transitionPreset of the radio button input.',
  },
  {
    attribute: 'feedback.size',
    type: 'MQ<string>',
    default: ['small = sizing070', 'medium = sizing080', 'large = sizing090'],
    description: 'If provided, overrides the size of the feedback element.',
  },
  {
    attribute: 'feedback.stylePreset',
    type: 'MQ<string>',
    default: 'radioButtonFeedback',
    description:
      'If provided, overrides the stylePreset of the feedback element.',
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
    description: 'If provided, overrides the stylePreset of the label.',
  },
  {
    attribute: 'label.typographyPreset',
    type: 'MQ<string>',
    default: [
      'small = utilityBody020',
      'medium = utilityBody020',
      'large = utilityBody030',
    ],
    description: 'If provided, overrides the typographyPreset of the label.',
  },
  {
    attribute: 'icon.size',
    type: 'MQ<string>',
    default: [
      'small = iconSize010',
      'medium = iconSize020',
      'large = iconSize030',
    ],
    description: 'If provided, overrides the size of the radio button icon.',
  },
  ...(commonLogicalProps() as OverridesRowsProps[]),
];

const radioButtonPropsRows = [
  {
    name: 'name',
    type: 'string',
    default: '',
    description: 'Defines the name of the radio button.',
  },
  {
    name: 'defaultValue',
    type: 'string',
    default: '',
    description:
      'Defines the value of the initially checked radio button (uncontrolled).',
  },
  {
    name: 'value',
    type: 'string',
    default: '',
    description: 'Defines the value of the checked radio button (controlled).',
  },
  {
    name: 'onChange',
    type: 'string',
    default: '(event: ChangeEvent) => void',
    description: 'Fires callback when radio button changes.',
  },
];

const RadioButtonComponent = (layoutProps: LayoutProps) => (
  <ComponentPageTemplate
    headTags={{
      title: 'Radio Button',
      description:
        'Radio buttons let users make a single selection from multiple options in a radio group.',
    }}
    layoutProps={layoutProps}
    pageIntroduction={{
      type: 'Actions & Inputs',
      name: 'Radio Button',
      hero: {
        illustration: 'components/radio-button/hero',
      },
      introduction: `Radio buttons let users make a single selection from multiple options in a radio group. They typically appear in forms.`,
    }}
    componentDefaultsKey="radioButton"
    meta={{
      status: MetaStatus.Supported,
      introduced: 'v5.3.0',
      codeUrl:
        'https://github.com/newscorp-ghfb/newskit/tree/main/src/radio-button',
      figmaUrl:
        'https://www.figma.com/file/FSbCQa6SzVR3K48ZWLeD77/%F0%9F%9F%A2-NK-Web-Components?node-id=5918%3A132664',
    }}
    anatomy={{
      introduction:
        'The radio button component contains one required element and three optional elements.',
      media: getIllustrationComponent('components/radio-button/anatomy'),
      rows: [
        {
          name: 'Radio Input (unchecked)',
          description:
            'Selection control (input) that is the unselected state of the radio button input',
          component: ['Block'],
          optional: undefined,
        },
        {
          name: 'Radio Input  (checked)',
          description:
            'The icon that appears within the radio button input when in a checked state',
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
          description: 'Text attributed to the radio button to provide context',
          component: 'Text Block',
          optional: true,
        },
      ],
    }}
    options={{
      introduction: 'The radio button has options for different use cases:',
      cards: [
        {
          title: 'Size',
          description: (
            <>
              The radio button input and feedback element both come in small,
              medium (default) and large.
              <br />
              <br />
              The icon that appears within the radio button input changes at all
              three sizes of radio button but can be overridden.
            </>
          ),
          media: getIllustrationComponent(
            'components/radio-button/options/size',
          ),
        },
        {
          title: 'Icon',
          description:
            'Override the icon within the radio button input for different states.',
          media: getIllustrationComponent(
            'components/radio-button/options/icon',
          ),
        },
        {
          title: 'Feedback',
          description:
            'The feedback element is non-interactive and appears in the background behind the radio button input on hover.',
          media: getIllustrationComponent(
            'components/radio-button/options/feedback',
          ),
        },
        {
          title: 'Label',
          description: (
            <>
              Add a label to the right (end) of the radio button to provide
              context.
              <InlineMessage
                overrides={{marginBlockStart: 'space030'}}
                icon={infoIcon}
                role="region"
                aria-label="Radio label position"
              >
                You can add a label on the left (start) of a radio button using
                the <InlineCode>labelPosition</InlineCode> prop.
              </InlineMessage>
            </>
          ),
          media: getIllustrationComponent(
            'components/radio-button/options/label',
          ),
        },
        {
          title: 'Radio Group',
          description: 'Use the radio group to group radio buttons.',
          media: getIllustrationComponent(
            'components/radio-button/options/radio-group',
          ),
        },
        {
          title: 'Fieldset',
          description: (
            <>
              Group selection controls (e.g. form input, radio button and
              checkbox) together in a{' '}
              <Link href="/components/fieldset/">fieldset</Link>, along with
              labels and assistive text. Add a title to the grouped elements
              using the legend.
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
            'The default style before the user interacts with the radio button.',
          media: getIllustrationComponent(
            'components/radio-button/states/base',
          ),
        },
        {
          title: 'Hover',
          description:
            'The radio button changes style to let the user know it’s interactive. The style of the label remains the same. Users can interact with (hover) the label to check the radio button.',
          media: getIllustrationComponent(
            'components/radio-button/states/hover',
          ),
        },
        {
          title: 'Focus',
          description:
            'Communicates that a user has highlighted a radio button (e.g. via keyboard or voice).',
          media: getIllustrationComponent(
            'components/radio-button/states/focus',
          ),
        },
        {
          title: 'Focus Hover',
          description:
            'Communicates that a user has highlighted and hovered over a radio button (e.g. via keyboard or voice).',
          media: getIllustrationComponent(
            'components/radio-button/states/focus-hover',
          ),
        },
        {
          title: 'Checked',
          description:
            'The radio box input changes style to let the user know the radio box is checked. The style of the label remains the same.',
          media: getIllustrationComponent(
            'components/radio-button/states/checked',
          ),
        },
        {
          title: 'Checked Hover',
          description:
            'The radio box input changes style to let the user know the radio box is checked and hovered over. The style of the label remains the same.',
          media: getIllustrationComponent(
            'components/radio-button/states/checked-hover',
          ),
        },
        {
          title: 'Checked Focus',
          description:
            'Communicates that a user has highlighted a radio button (e.g. via keyboard or voice).',
          media: getIllustrationComponent(
            'components/radio-button/states/checked-focus',
          ),
        },
        {
          title: 'Checked Focus Hover',
          description:
            'Communicates that a user has highlighted and hovered over a radio button (e.g. via keyboard or voice).',
          media: getIllustrationComponent(
            'components/radio-button/states/checked-focus-hover',
          ),
        },
        {
          title: 'Invalid',
          description: (
            <>
              The radio button changes style when radio button selection doesn’t
              conform to a specific format (e.g. attempting to proceed without
              selecting a required radio button in a form). Use the form
              component to validate behaviour. The style of the label remains
              the same.
            </>
          ),
          media: getIllustrationComponent(
            'components/radio-button/states/invalid',
          ),
        },
        {
          title: 'Invalid Focus',
          description:
            'Communicates that a user has highlighted an invalid radio button (e.g. via keyboard or voice).',
          media: getIllustrationComponent(
            'components/radio-button/states/invalid-focus',
          ),
        },
        {
          title: 'Invalid Hover',
          description:
            'The radio button changes style to let the user know the radio button is in an invalid state and hovered over. The style of the label remains the same.',
          media: getIllustrationComponent(
            'components/radio-button/states/invalid-hover',
          ),
        },
        {
          title: 'Invalid Focus Hover',
          description:
            'Communicates that a user has highlighted and hovered over an invalid radio button (e.g. via keyboard or voice).',
          media: getIllustrationComponent(
            'components/radio-button/states/invalid-focus-hover',
          ),
        },
        {
          title: 'Checked Invalid',
          description:
            'The radio button input changes style to let the user know the radio button is checked and in an invalid state. The style of the label remains the same.',
          media: getIllustrationComponent(
            'components/radio-button/states/checked-invalid',
          ),
        },
        {
          title: 'Checked Invalid Focus',
          description:
            'Communicates that a user has highlighted a checked, invalid radio button (e.g. via keyboard or voice).',
          media: getIllustrationComponent(
            'components/radio-button/states/checked-invalid-focus',
          ),
        },
        {
          title: 'Checked Invalid Hover',
          description:
            'The radio button input changes style to let the user know the radio button is checked, in an invalid state and hovered over. The style of the label remains the same.',
          media: getIllustrationComponent(
            'components/radio-button/states/checked-invalid-hover',
          ),
        },
        {
          title: 'Checked Invalid Focus Hover',
          description:
            'Communicates that a user has highlighted and hovered over a checked, invalid radio button (e.g. via keyboard or voice).',
          media: getIllustrationComponent(
            'components/radio-button/states/checked-invalid-focus-hover',
          ),
        },
        {
          title: 'Valid',
          description: (
            <>
              The radio button changes style when radio button selection
              conforms to a specific format (e.g. updating preferences in a
              form). Use the form to validate behaviour. The style of the label
              remains the same.
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
              Communicates that a user has highlighted a valid radio button
              (e.g. via keyboard or voice).
            </>
          ),
          media: getIllustrationComponent(
            'components/radio-button/states/valid-focus',
          ),
        },
        {
          title: 'Valid Hover',
          description:
            'The radio button input changes style to let the user know the radio button is in a valid state and hovered over. The style of the label remains the same.',
          media: getIllustrationComponent(
            'components/radio-button/states/valid-hover',
          ),
        },
        {
          title: 'Valid Focus Hover',
          description:
            'Communicates that a user has highlighted and hovered over a valid radio button (e.g. via keyboard or voice).',
          media: getIllustrationComponent(
            'components/radio-button/states/valid-focus-hover',
          ),
        },
        {
          title: 'Checked Valid',
          description:
            'The radio button input changes style to let the user know the radio button is checked and in a valid state. The style of the label remains the same.',
          media: getIllustrationComponent(
            'components/radio-button/states/checked-valid',
          ),
        },
        {
          title: 'Checked Valid Focus',
          description:
            'Communicates that a user has highlighted a checked, valid radio button (e.g. via keyboard or voice).',
          media: getIllustrationComponent(
            'components/radio-button/states/checked-valid-focus',
          ),
        },
        {
          title: 'Checked Valid Hover',
          description:
            'The radio button input changes style to let the user know the radio button is checked, in a valid state and hovered over. The style of the label remains the same.',
          media: getIllustrationComponent(
            'components/radio-button/states/checked-valid-hover',
          ),
        },
        {
          title: 'Checked Valid Focus Hover',
          description:
            'Communicates that a user has highlighted and hovered over a valid radio button (e.g. via keyboard or voice).',
          media: getIllustrationComponent(
            'components/radio-button/states/checked-valid-focus-hover',
          ),
        },
        {
          title: 'Disabled',
          description: (
            <>
              Communicates that a radio button exists, but isn’t available in
              that scenario. When the user hovers over a radio button in a
              disabled state, the cursor shows as ‘not allowed’.
              <br />
              <br />
              Disabled radio buttons maintain layout consistency and communicate
              that a radio button may become available if another condition is
              met. The style of the label (colour) changes to indicate that the
              radio button is disabled.
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
              Communicates that a radio button exists, but isn’t available in
              that scenario. When the user hovers over a radio button in a
              checked disabled state, the cursor shows as ‘not allowed’.
              <br />
              <br />
              Disabled checked radio buttons maintain layout consistency and
              communicate that a radio button may become available if another
              condition is met. The style of the label (colour) changes to
              indicate that the radio button is checked and disabled.
            </>
          ),
          media: getIllustrationComponent(
            'components/radio-button/states/checked-disabled',
          ),
        },
      ],
      notice:
        'The feedback element becomes visible (configurable) on state change (e.g. hover).',
    }}
    behaviors={{
      introduction: 'Here’s how the radio button behaves:',
      cards: [
        {
          title: 'Label overflow wrap',
          description:
            'When a label is too long for the available horizontal space, it wraps to form another line.',
          media: getIllustrationComponent(
            'components/radio-button/behaviours/label-overflow-wrap',
          ),
        },
        {
          title: 'Clickable area',
          description:
            'The radio button feedback element indicates the minimum clickable area for the radio button input (also known as hit area or touch target area). The size of the clickable area changes according to the size of the radio button. The associated label is also clickable.',
          media: getIllustrationComponent(
            'components/radio-button/behaviours/clickable-area',
          ),
        },
        {
          title: 'Focusable area',
          description:
            'The radio button input and label are both interactive, and a user can hover over either, but only the radio button input is focusable (e.g. via keyboard or voice).',
          media: getIllustrationComponent(
            'components/radio-button/behaviours/focusable-area',
          ),
        },
        {
          title: 'Validation',
          description: (
            <>
              Use the form to choose whether the radio button validates onSubmit
              or onBlur, for both the initial validation and re-validation. See
              the form page for more.
              <br />
              <br />
              <InlineMessage
                icon={infoIcon}
                role="region"
                aria-label="Radio validation"
                title="Note"
                overrides={{marginBlockStart: 'space050'}}
              >
                Validation only works if the form input radio button uses the
                form component.
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
            'Checking a radio button in a radio group will uncheck all other radio buttons in that group.',
          media: getIllustrationComponent(
            'components/radio-button/behaviours/autofocus',
          ),
        },
        {
          title: 'Autofocus',
          description:
            'You can auto-focus on the radio button on page load (when mounted).',
          media: getIllustrationComponent(
            'components/radio-button/behaviours/autofocus',
          ),
        },
        {
          title: 'Default checked',
          description: (
            <>
              The Radio Button&apos;s initial state can be set to checked or
              unchecked by default (controlled or uncontrolled).
              <br />
              <br />
              Add checked to the native HTML element to select the radio button
              by default.
              <br />
              <br />
              Screen readers will read the radio button aloud to the user and
              let them know it’s selected.
            </>
          ),
          media: getIllustrationComponent(
            'components/radio-button/behaviours/default-checked',
          ),
        },
      ],
    }}
    usage={{
      introduction: 'Here’s how and when to use the radio button:',
      cards: [
        {
          title: 'Do use radio buttons for selecting one option',
          description:
            'Use radio buttons when a user can select only one option from a list.',
          kind: UsageKind.DO,
          media: getIllustrationComponent('components/radio-button/usage/do-1'),
        },
        {
          title: "Don't use radio buttons for selecting multiple options",
          description:
            'If users can select multiple options from a list, use checkboxes instead.',
          kind: UsageKind.DONT,
          media: getIllustrationComponent(
            'components/radio-button/usage/dont-1',
          ),
        },
        {
          title: 'Do give radio buttons a label',
          description:
            'Radio buttons should have an associated label to give users context.',
          kind: UsageKind.DO,
          media: getIllustrationComponent('components/radio-button/usage/do-2'),
        },
        {
          title: 'Do put labels on the right of the radio buttons',
          description:
            'When grouping multiple radio buttons, put the label on the right (end) so that, when used together in forms, radio button inputs align vertically. This makes them easier to find, especially for users of screen magnifiers.',
          kind: UsageKind.DO,
          media: getIllustrationComponent('components/radio-button/usage/do-5'),
        },
        {
          title: 'Do display radio buttons vertically',
          description:
            'Radio buttons should be displayed vertically, and stacked for consistent alignment and positioning across different breakpoints.',
          kind: UsageKind.DO,
          media: getIllustrationComponent('components/radio-button/usage/do-4'),
        },
        {
          title: 'Do provide context with assistive text',
          description: (
            <>
              Use assistive text to provide context to the radio button group
              (e.g. why a selection is required).{' '}
            </>
          ),
          kind: UsageKind.DO,
          media: getIllustrationComponent('components/radio-button/usage/do-3'),
        },
      ],
    }}
    accessibility={{
      introduction: (
        <>
          <Block spaceStack="space100" />
          <ContentText title="Group radio buttons" titleAs="span">
            Group radio buttons and related elements (such as labels and
            assistive text) together using the fieldset component with a title
            attributed to the elements called a legend.
            <br />
            <br />A fieldset groups related form controls, making them easier to
            understand. It can also allow users to focus on smaller and more
            manageable chunks, rather than trying to grasp the entire form at
            once.
          </ContentText>
        </>
      ),
      focusOrder: {
        title: 'Focus order',
        tableRows: [
          {
            order: 1,
            element: 'Radio button input',
            role: 'Focusses on the radio button input',
          },
        ],
      },
      interaction: {
        title: 'Keyboard interactions',
        tableRows: [
          {
            command: ['Tab', 'Shift'],
            description:
              'Moves focus into and out of the radio group. If a radio button is checked, focus is set on the checked radio button. If none of the radio buttons are checked, focus is set on the first radio button in the group.',
          },
          {
            command: ['Right arrow', 'Down arrow'],
            description: 'Go forward and select next radio button.',
          },
          {
            command: ['Left arrow', 'Up arrow'],
            description: 'Go back and select previous radio button.',
          },
          {
            command: ['Space'],
            description: (
              <>
                If the radio button with focus isn’t checked, changes the state
                to <InlineCode>checked</InlineCode>, Otherwise, does nothing.
                <Block spaceStack="space030" />
                <InlineMessage
                  icon={infoIcon}
                  role="region"
                  aria-label="Space"
                  title="Note"
                >
                  The state where a radio button is not checked only occurs on
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
              'Defines a string that labels the action that will be performed when the user interacts with the radio button.',
            userSupplied: true,
          },
          {
            element: 'required',
            attribute: 'aria-required',
            value: 'object',
            description:
              'Informs the user that an element is required. When set to ‘true’, screen readers notify users that the element is required.',
            userSupplied: true,
          },
        ],
      },
    }}
    componentAPI={{
      introduction: (
        <>
          This package exports three components: a form input radio button for
          use within the <Link href="/components/form/">form component</Link> a
          radio button for use as a controlled component (e.g. where you have a
          custom validation mechanism) and the radio group for grouping radio
          buttons together.
          <br />
          <br />
          All have a range of props to define the experience in different use
          cases.
        </>
      ),
      components: [
        {
          title: 'Form input radio button',
          propsRows: commonPropsRows('FormInput'),
          overridesRows: commonOverridesRows,
        },
        {
          title: 'Radio button',
          propsRows: [
            {
              name: 'name',
              type: 'string',
              description: (
                <>
                  If provided, defines name of the input element. Use when
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
