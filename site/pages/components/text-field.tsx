import React from 'react';
import {InlineMessage, LinkInline, toNewsKitIcon} from 'newskit';
import {Info as FilledInfo} from '@emotion-icons/material/Info';
import {MetaStatus} from '../../components/meta/types';
import {LayoutProps} from '../../components/layout';
import {ComponentPageTemplate} from '../../templates/component-page-template';
import {getIllustrationComponent} from '../../components/illustrations/illustration-loader';
import {InlineCode} from '../../components/markdown-elements';
import {Link} from '../../components/link';
import {UsageKind} from '../../components/usage-card';
import {
  logicalMarginOverrideProps,
  logicalPaddingOverrideProps,
} from '../../components/component-api/common-logical-props';

const IconFilledInfo = toNewsKitIcon(FilledInfo);

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
    description: 'Defines the size of the formInput textField.',
  },
  {
    name: 'state',
    type: ['valid', 'invalid', 'disabled'],
    description:
      'If provided, renders the formInput textField in a valid, invalid or disabled state. Can be submitted within a form.',
  },
  {
    name: 'readOnly',
    default: 'false',
    type: 'boolean',
    description:
      'If true, renders the formInput textField in a read-only state. Can be selected but not changed by the user.',
  },
  {
    name: 'pattern',
    type: 'string',
    description: (
      <>
        If provided, defines the{' '}
        <LinkInline
          href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefpattern"
          target="_blank"
        >
          regex pattern
        </LinkInline>{' '}
        that the value of the input must match to be valid.
      </>
    ),
  },
  {
    name: 'startEnhancer',
    type: 'React.ReactNode',
    description: `If provided, gives the ability to add a component to the start of the input container.`,
  },
  {
    name: 'endEnhancer',
    type: 'React.ReactNode',
    description: `If provided, gives the ability to add a component to the end of the input container.`,
  },
  {
    name: 'spellCheck',
    type: 'boolean',
    description: `If provided, defines whether the HTML element will be checked for spelling errors or not.`,
    default: 'true',
  },
  {
    name: 'eventOriginator',
    type: 'string',
    description: `Allows users to add event originator custom name.`,
  },
  {
    name: 'eventContext',
    type: 'object',
    description: `Allows users to add extra event data to focus events.`,
  },
];

const commonOverridesRows = [
  {
    attribute: 'width',
    type: 'MQ<string>',
    default: '100%',
    description: `If provided, overrides the minWidth of the text field.`,
  },
  {
    attribute: 'minHeight',
    type: 'MQ<string>',
    default: ['small = sizing060', 'medium = sizing080', 'large = sizing090'],
    description: 'If provided, overrides the minHeight of the text field.',
  },
  {
    attribute: 'stylePreset',
    type: 'MQ<string>',
    default: 'inputField',
    description: 'If provided, overrides the stylePreset of the text field.',
  },
  {
    attribute: 'typographyPreset',
    type: 'MQ<string>',
    default: [
      'small = utilityBody020',
      'medium = utilityBody020',
      'large = utilityBody030',
    ],
    description: 'If provided, overrides the input & placeholder text.',
  },
  {
    attribute: 'spaceInset(deprecated)',
    type: 'MQ<string>',
    default: ['small = space020', 'medium = space030', 'large = space030'],
    description: `This property is deprecated. Use paddingInline and paddingBlock instead.`,
  },
  {
    attribute: 'startEnhancer.iconSize',
    type: 'MQ<string>',
    default: 'iconSize020',
    description:
      'If provided, overrides the component passed to the start enhancer.',
  },
  {
    attribute: 'startEnhancer.inlineSpace',
    type: 'MQ<string>',
    default: 'spaceInline: space020',
    description:
      'If provided, overrides the inline space of the start enhancer.',
  },
  {
    attribute: 'endEnhancer.iconSize',
    type: 'MQ<string>',
    default: 'iconSize020',
    description:
      'If provided, overrides the component passed to the end enhancer. ',
  },
  {
    attribute: 'endEnhancer.inlineSpace',
    type: 'MQ<string>',
    default: 'spaceInline: space020',
    description: 'If provided, overrides the inline space of the end enhancer.',
  },
  ...logicalMarginOverrideProps,
  ...logicalPaddingOverrideProps,
];

const formInputPropsFooter = (
  <>
    <InlineMessage
      icon={infoIcon}
      role="region"
      aria-label="Rules props"
      overrides={{marginBlockStart: 'space050'}}
    >
      The <InlineCode>name</InlineCode> & <InlineCode>rules</InlineCode> props
      are set on the form input level. To add validation rules, or set the name,{' '}
      <Link type="inline" href="/components/form">
        see the form component
      </Link>
    </InlineMessage>
    <InlineMessage
      icon={infoIcon}
      role="region"
      aria-label="TextField component"
      overrides={{marginBlockStart: 'space030'}}
    >
      The form input text field supports different native HTML attributes (e.g.
      defining the input type as password or email).
    </InlineMessage>
  </>
);

const textFieldPropsFooter = (
  <InlineMessage icon={infoIcon} role="region" aria-label="Text Field supports">
    The text field supports different{' '}
    <LinkInline
      href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#input_types"
      target="_blank"
    >
      native HTML attributes
    </LinkInline>
    (e.g. defining the input type as password or email).
  </InlineMessage>
);

const TextFieldComponent = (layoutProps: LayoutProps) => (
  <ComponentPageTemplate
    headTags={{
      title: 'Text Field',
      description:
        'Text fields let users enter and edit text. They typically appear in forms.',
    }}
    layoutProps={layoutProps}
    pageIntroduction={{
      type: 'Actions & Inputs',
      name: 'Text Field',
      hero: {
        illustration: 'components/text-field/hero',
      },
      introduction: `Text fields let users enter and edit text. They typically appear in forms.`,
    }}
    componentDefaultsKey="textField"
    meta={{
      status: MetaStatus.Supported,
      introduced: 'v3.13.0',
      codeUrl:
        'https://github.com/newscorp-ghfb/newskit/blob/develop/src/text-field/text-field.tsx',
      figmaUrl:
        'https://www.figma.com/file/FSbCQa6SzVR3K48ZWLeD77/%F0%9F%9F%A2-NK-Web-Components?node-id=4897%3A131265',
      storybookId: 'components-text-field--story-text-field-default',
    }}
    anatomy={{
      introduction:
        'The text field component contains four required elements and two optional elements.',
      media: getIllustrationComponent('components/text-field/anatomy'),
      rows: [
        {
          name: 'Input container',
          description: 'Interactable input area',
          component: ['HTML Input', 'Block'],
          optional: undefined,
        },
        {
          name: 'Start enhancer',
          description:
            'Adds a component to the start of the input container (e.g. icon or button)',
          component: 'React.ReactNode',
          optional: true,
        },
        {
          name: 'Caret',
          description:
            'Thin vertical line that blinks to indicate where input will be inserted',
          component: 'HTML Input',
          optional: undefined,
        },
        {
          name: 'Input & Placeholder text',
          description: (
            <>
              Input text - a value the user has entered into an input
              <br />
              <br />
              Placeholder text - a short hint that describes the expected value
              of an input
            </>
          ),
          component: [
            'Text Block (input)',
            'HTML attribute (placeholder text)',
          ],
          optional: undefined,
        },
        {
          name: 'Validation icon',
          description:
            'Indicates if the input is required and in a valid or invalid state. Use the form to set validation',
          component: 'Icon',
          optional: undefined,
        },
        {
          name: 'End enhancer',
          description:
            'Adds a component to the end of the input container (e.g. icon or button)',
          component: 'React.ReactNode',
          optional: true,
        },
      ],
    }}
    options={{
      introduction: 'The text field has options for different use cases:',
      cards: [
        {
          title: 'Size',
          description:
            'The text field comes in small, medium and large. The label, input container, placeholder/input text, start/end enhancers and assistive text change size. Text inputs should match the height of the button when used together.',
          media: getIllustrationComponent('components/text-field/options/size'),
        },
        {
          title: 'Width',
          description:
            'Customise the width of a text field using full-width or a fixed-width value.',
          media: getIllustrationComponent(
            'components/text-field/options/width',
          ),
        },
        {
          title: 'Placeholder text',
          description: (
            <>
              Use placeholder text to give the user a short hint about what they
              need to input (e.g. a sample value or a short description of the
              expected format).
              <br />
              <br />
              The short hint is displayed in the input container before the user
              enters a value.
              <InlineMessage
                icon={infoIcon}
                role="region"
                aria-label="Placeholder accessible"
                overrides={{marginBlockStart: 'space030'}}
              >
                Placeholder text is not accessible. Use assistive text to give
                instructions to the user when they’ve completed a text field.
              </InlineMessage>
            </>
          ),
          media: getIllustrationComponent(
            'components/text-field/options/placeholder-text',
          ),
        },
        {
          title: 'Start enhancer',
          description:
            'Add a component to the start of the input container (e.g. an icon).',
          media: getIllustrationComponent(
            'components/text-field/options/start-enhancer',
          ),
        },
        {
          title: 'End enhancer',
          description:
            'Add a component to the end of the input container (e.g. a button).',
          media: getIllustrationComponent(
            'components/text-field/options/end-enhancer',
          ),
        },
        {
          title: 'Autocomplete',
          description: (
            <>
              The text field supports native HTML autocomplete functionality
              that provides a visual hint to users if enabled. <br />
              <br />
              <Link
                href="https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete"
                target="_blank"
              >
                Learn more about HTML autocomplete at MDN Web Docs.
              </Link>
            </>
          ),
          media: getIllustrationComponent(
            'components/text-field/options/autocomplete',
          ),
        },
        {
          title: 'Max length',
          description: (
            <>
              The text field supports native HTML max length value functionality
              that sets a maximum length of the number of characters entered.
              <br />
              <br />
              <Link
                href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#maxlength"
                target="_blank"
              >
                Learn more about HTML input attribute types at MDN Web Docs.
              </Link>
            </>
          ),
          media: getIllustrationComponent(
            'components/text-field/options/max-length',
          ),
        },
        {
          title: 'Min length',
          description: (
            <>
              The text field supports native HTML max length value functionality
              that sets a minimum length of the number of characters entered.
              <br />
              <br />
              <Link
                href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#minlength"
                target="_blank"
              >
                Learn more about HTML input attribute types at MDN Web Docs.
              </Link>
            </>
          ),
          media: getIllustrationComponent(
            'components/text-field/options/min-length',
          ),
        },
        {
          title: 'Pattern',
          description: (
            <>
              The text field supports native HTML regex pattern functionality
              that the value of the input must match to be valid.
              <br />
              <br />
              <Link
                href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#pattern"
                target="_blank"
              >
                Learn more about HTML input attribute types at MDN Web Docs.
              </Link>
            </>
          ),
          media: getIllustrationComponent(
            'components/text-field/options/pattern',
          ),
        },
        {
          title: 'Type',
          description: (
            <>
              The text field supports type functionality that sets the type of
              text field to render to the user. The types supported include
              &apos;text&apos; (default for the text field), &apos;email&apos;,
              &apos;password&apos;, &apos;tel&apos; and &apos;number&apos;.
              <br />
              <br />
              <Link
                href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#type"
                target="_blank"
              >
                Learn more about HTML input types at MDN Web Docs.
              </Link>
            </>
          ),
          media: getIllustrationComponent('components/text-field/options/type'),
        },
        {
          title: 'Input mode',
          description: (
            <>
              The text field supports input mode functionality that hints at the
              type of data that might be entered by the user while editing the
              element or its contents. Supported input modes include
              &apos;text&apos;, &apos;email&apos;, &apos;tel&apos; and
              &apos;numeric&apos;.
              <br />
              <br />
              <Link href="https://html.spec.whatwg.org/multipage/interaction.html#input-modalities:-the-inputmode-attribute">
                Learn more about HTML input mode attribute types at HTML Living
                Standard.
              </Link>
            </>
          ),
          media: getIllustrationComponent(
            'components/text-field/options/input-mode',
          ),
        },
        {
          title: 'Handling multiple text fields',
          description: (
            <>
              You can group together selection controls (inputs), such as
              formInput, radio button and checkbox, as well as labels and
              assistive text, in a{' '}
              <Link href="/components/fieldset/">fieldset</Link>. Add a title
              caption to the grouped elements using the legend.
            </>
          ),
          media: getIllustrationComponent(
            'components/text-field/options/multiple-fields',
          ),
        },
      ],
    }}
    states={{
      introduction:
        'The text field has the following states. They can be displayed with both placeholder content or user-inputted content:',
      layout: '3-span',
      cards: [
        {
          title: 'Base',
          description:
            'The default style before the user interacts with the text field.',
          media: getIllustrationComponent('components/text-field/states/base'),
        },
        {
          title: 'Hover',
          description:
            'The select changes style to let the user know it’s interactive.',
          media: getIllustrationComponent('components/text-field/states/hover'),
        },
        {
          title: 'Active',
          description:
            'The text field changes style to let the user know they’ve interacted with it.',
          media: getIllustrationComponent(
            'components/text-field/states/active',
          ),
        },
        {
          title: 'Selected (focus)',
          description:
            'The text field changes style, and a caret element in the input is also visible, to let the user know the text field has been selected and they can input content.',
          media: getIllustrationComponent(
            'components/text-field/states/selected',
          ),
        },
        {
          title: 'Valid',
          description: (
            <>
              The text field changes style, and can display a valid icon, when
              the inputted entry conforms to a specific format (e.g. email
              address, credit card number, password requirements).
              <br />
              <br />
              The input style change and validation icon can appear as soon as a
              user types a valid entry in the input or on submit.
              <br />
              <br />
              Use the form for validation.
            </>
          ),
          media: getIllustrationComponent('components/text-field/states/valid'),
        },
        {
          title: 'Valid focus',
          description:
            'The text field changes style when the inputted entry conforms to a specific condition or format, while focused.',
          media: getIllustrationComponent(
            'components/text-field/states/valid-focus',
          ),
        },
        {
          title: 'Valid hover',
          description:
            'The text field changes style when the inputted entry conforms to a specific condition or format, while hovering.',
          media: getIllustrationComponent(
            'components/text-field/states/valid-hover',
          ),
        },
        {
          title: 'Invalid',
          description: (
            <>
              The text field changes style and can display an invalid icon when
              the inputted entry doesn&apos;t conform to a specific format (e.g.
              email address, credit card number, password requirements).
              <br />
              <br />
              The input style change and validation icon can appear as soon as a
              user types a valid entry in the input or on submit.
              <br />
              <br />
              Use the form for validation.
            </>
          ),
          media: getIllustrationComponent(
            'components/text-field/states/invalid',
          ),
        },
        {
          title: 'Invalid focus',
          description:
            'The text field changes style when the inputted entry doesn’t conform to a specific condition or format, while focused.',
          media: getIllustrationComponent(
            'components/text-field/states/invalid-focus',
          ),
        },
        {
          title: 'Invalid hover',
          description:
            'The text field changes style when the inputted entry doesn’t conform to a specific condition or format, while hovering.',
          media: getIllustrationComponent(
            'components/text-field/states/invalid-hover',
          ),
        },
        {
          title: 'Disabled',
          description: (
            <>
              Communicates that a text field exists, but isn&apos;t available in
              that scenario. When the user hovers over a text field in a
              disabled state, the cursor shows as &apos;not allowed&apos;.
              <br />
              <br />
              Disabled text fields maintain layout consistency and communicate
              that an input may become available if another condition is met
              (e.g. selecting a previous option in a form).
              <br />
              <br />
              You can’t submit content and data in a disabled text field in a
              form.
            </>
          ),
          media: getIllustrationComponent(
            'components/text-field/states/disabled',
          ),
        },
        {
          title: 'Read-only',
          description: (
            <>
              Communicates that an input exists, but cannot be modified in that
              scenario (however, a user can tab to it, highlight it and copy the
              text from it).
              <br />
              <br />
              Read-only text fields maintain layout consistency and communicate
              that an input may become available if another condition is met
              (e.g. selecting a previous option in a form).
              <br />
              <br />
              You can submit content and data in a read-only text field in a
              form.
            </>
          ),
          media: getIllustrationComponent(
            'components/text-field/states/read-only',
          ),
        },
      ],
    }}
    behaviors={{
      introduction: 'Here’s how the text field behaves:',
      cards: [
        {
          title: 'Input text overflow truncation',
          description: (
            <>
              When the text field text is too long for the available horizontal
              space, the text truncates when text is inputted.
              <br />
              <br />
              Truncation is visually indicated using{' '}
              <InlineCode>text-overflow: elipsis</InlineCode> via the style
              presets.
            </>
          ),
          media: getIllustrationComponent(
            'components/text-field/behaviours/input-text-overflow',
          ),
        },
        {
          title: 'Validation',
          description: (
            <>
              The text field validation rules can be defined for on submit or on
              blur, for both the initial validation and re-validation using the
              form.
              <br />
              <br />
              <InlineMessage
                icon={infoIcon}
                role="region"
                aria-label="TextField validation"
                overrides={{marginBlockStart: 'space050'}}
              >
                Validation only works if the form input text field uses the form
                component.
              </InlineMessage>
            </>
          ),
          media: getIllustrationComponent(
            'components/text-field/behaviours/validation',
          ),
        },
        {
          title: 'Validation icon',
          description: (
            <>
              Indicates if the text field is in a valid or invalid state. Use
              the form to validate.
            </>
          ),
          media: getIllustrationComponent(
            'components/text-field/behaviours/validation-icon',
          ),
        },
      ],
    }}
    usage={{
      introduction: 'Here’s how and when to use the text field:',
      cards: [
        {
          title: 'Do consider text field width',
          description: (
            <>
              The width of the text field should be proportional to the expected
              user input.
            </>
          ),
          kind: UsageKind.DO,
          media: getIllustrationComponent('components/text-field/usage/do-01'),
        },
        {
          title: 'Don’t capture multiple pieces of information in one field',
          description:
            'Avoid using a single text field to capture multiple pieces of information from users, as this increases cognitive load. Use an individual text field for each input.',
          kind: UsageKind.DONT,
          media: getIllustrationComponent(
            'components/text-field/usage/dont-01',
          ),
        },
        {
          title: 'Do use an appropriate input type for the data you collect',
          description:
            'Use the appropriate input field to help users enter information in the right format and avoid mistakes (e.g. use a password input field for users to input their password).',
          kind: UsageKind.DO,
          media: getIllustrationComponent('components/text-field/usage/do-03'),
        },
        {
          title: 'Don’t truncate or wrap input label text',
          description:
            "Input label text shouldn't be truncated or wrap over two or more lines. Keep it short, clear and fully visible.",
          kind: UsageKind.DONT,
          media: getIllustrationComponent(
            'components/text-field/usage/dont-02',
          ),
        },
        {
          title: 'Do provide a label for context',
          description:
            'Text fields should have a label associated to give users context of what the text area represents.',
          kind: UsageKind.DO,
          media: getIllustrationComponent('components/text-field/usage/do-02'),
        },
        {
          title: 'Don’t validate prematurely',
          description:
            'Avoid prematurely validating the input (e.g. avoid setting the input to invalid before the user has finished typing).',
          kind: UsageKind.DONT,
          media: getIllustrationComponent(
            'components/text-field/usage/dont-03',
          ),
        },
      ],
    }}
    accessibility={{
      introduction: '',
      focusOrder: {
        title: 'Focus order',
        tableRows: [
          {
            order: 1,
            element: 'Start enhancer',
            role:
              'Focusses to the start enhancer (if provided and interactive)',
          },
          {
            order: 2,
            element: 'Text Field',
            role: 'Focusses to the input container',
          },
          {
            order: 3,
            element: 'End enhancer',
            role: 'Focusses to the end enhancer (if provided and interactive)',
          },
        ],
      },
      interaction: {
        title: 'Keyboard Interactions',
        tableRows: [
          {
            command: ['Tab'],
            description:
              'When focus is outside the text field, moves focus to the input container. If focus is on the input container, moves focus to the end enhancer (if provided, and interactive).',
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
              'Defines a string that labels the action that will be performed when the user interacts with the text field.',
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
          {
            element: 'invalid',
            attribute: 'aria-required',
            value: 'object',
            description:
              'Informs the user when there’s an error. Set to ‘false’ by default. Values include true, spelling and grammar. Screen readers alert users when the element is set to any value other than ‘false’',
            userSupplied: true,
          },
        ],
      },
    }}
    componentAPI={{
      introduction: (
        <>
          This package exports two components: a form input text field for use
          within the form component, and a text field for use as a controlled
          component (e.g. where you have a custom validation mechanism).
          <br />
          <br />
          Both have a range of props to define the experience in different use
          cases.
        </>
      ),
      components: [
        {
          title: 'Form input text field',
          propsRows: commonPropsRows,
          propsFooter: formInputPropsFooter,
          overridesRows: commonOverridesRows,
        },
        {
          title: 'Text field',
          propsRows: [
            {
              name: 'name',
              type: 'string',
              description:
                'If provided, defines name of the input element. Use when submitting an HTML form.',
            },
            ...commonPropsRows,
          ],
          propsFooter: textFieldPropsFooter,
          overridesRows: commonOverridesRows,
        },
      ],
    }}
    related={{
      related: ['Button', 'Text Area', 'Form', 'Select'],
    }}
  />
);

export default TextFieldComponent;
