import React from 'react';
import {Block, InlineMessage, IconFilledInfo} from 'newskit';
import {MetaStatus} from '../../components/meta/types';
import {LayoutProps} from '../../components/layout';
import {ComponentPageTemplate} from '../../templates/component-page-template';
import {getIllustrationComponent} from '../../components/illustrations/illustration-loader';
import {InlineCode} from '../../components/markdown-elements';
import {Link} from '../../components/link';
import {UsageKind} from '../../components/usage-card';

const infoIcon = (
  <IconFilledInfo
    overrides={{
      size: 'iconSize020',
    }}
  />
);

const TextFieldComponent = (layoutProps: LayoutProps) => (
  <ComponentPageTemplate
    headTags={{
      title: 'Text Field',
      description:
        'Text Fields allow users to enter and edit text content into a UI. They typically appear in forms.',
    }}
    layoutProps={layoutProps}
    pageIntroduction={{
      type: 'Actions & Inputs',
      name: 'Text Field',
      hero: {
        illustration: 'components/text-field/hero',
      },
      introduction: `Text Fields allow users to enter and edit text content into a UI. They typically appear in forms.`,
    }}
    componentDefaultsKey="textfield"
    meta={{
      status: MetaStatus.Supported,
      introduced: 'v3.13.0',
      codeUrl:
        'https://github.com/newscorp-ghfb/ncu-newskit/blob/develop/src/text-field/text-field.tsx',
      figmaUrl:
        'https://www.figma.com/file/FSbCQa6SzVR3K48ZWLeD77/%F0%9F%9F%A2-NK-Web-Components?node-id=4897%3A131265',
    }}
    anatomy={{
      introduction:
        'Text Fields contain four required elements and two optional elements.',
      media: getIllustrationComponent('components/text-field/anatomy'),
      rows: [
        {
          name: 'Input Container',
          description: 'Interactable input area',
          component: ['HTML Input', 'Block'],
          optional: undefined,
        },
        {
          name: 'Start Enhancer',
          description:
            'Used to add a component to the start of the input container. Eg. an Icon or Button',
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
          name: 'Input & Placeholder Text',
          description:
            'Input text - a value the user has entered into a input. Placeholder text - a short hint that describes the expected value of an input',
          component: 'Text Block',
          optional: undefined,
        },
        {
          name: 'Validation icon',
          description:
            'An icon used to indicate if the input is required and in a valid or invalid state. Validation is set on the Form component',
          component: 'Icon',
          optional: undefined,
        },
        {
          name: 'End Enhancer',
          description:
            'Used to add a component to the end of the input container. Eg. an Icon or Button',
          component: 'React.ReactNode',
          optional: true,
        },
      ],
    }}
    options={{
      introduction:
        'The Text Field has options that can be used to provide an appropriate experience for different use cases.',
      cards: [
        {
          title: 'Size',
          description:
            'There are three sizes of Text Field; small, medium, and large. The label, input container, placeholder/input text, start and end enhancers, and assistive text change size. Text Inputs match the same height as the Button, to align when used together.',
          media: getIllustrationComponent('components/text-field/options/size'),
        },
        {
          title: 'Width',
          description:
            'The width of a Text Field can be customised appropriately for its context, using full-width or a fixed-width value.',
          media: getIllustrationComponent(
            'components/text-field/options/width',
          ),
        },
        {
          title: 'Placeholder text',
          description: (
            <>
              <Block spaceStack="space030">
                Placeholder text can be displayed to provide the user with a
                short hint that describes the content that is expected to be
                inputted by the user (e.g. a sample value or a short description
                of the expected format).
                <br />
                <br />
                The short hint is displayed in the input container before the
                user enters a value.
              </Block>
              <InlineMessage
                icon={infoIcon}
                role="region"
                aria-label="Placeholder accessible"
                title="Note"
              >
                Placeholder text is not accessible; use assistive text when
                providing instructions on completing a Text Field for clarity.
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
            'The Text Field supports start enhancer property that allows for a component to be added to the start or end of the input container, for example, an icon.',
          media: getIllustrationComponent(
            'components/text-field/options/start-enhancer',
          ),
        },
        {
          title: 'End enhancer',
          description:
            'The Text Field supports end enhancer property that allows for a component to be added to the start or end of the input container, for example, a Button.',
          media: getIllustrationComponent(
            'components/text-field/options/end-enhancer',
          ),
        },
        {
          title: 'Autocomplete',
          description: (
            <>
              The Text Field supports native HTML autocomplete functionality
              that provides a visual hint to users if enabled.{' '}
              <Link
                href="https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete"
                target="_blank"
              >
                For more information, please refer to the HTML autocomplete
                attribute
              </Link>
              .
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
              The Text Field supports native HTML max length value functionality
              that sets a maximum length of the number of characters entered.{' '}
              <Link
                href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attributes"
                target="_blank"
              >
                For more information, please refer to the HTML input attribute
                types
              </Link>
              .
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
              The Text Field supports native HTML max length value functionality
              that sets a minimum length of the number of characters entered.{' '}
              <Link
                href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attributes"
                target="_blank"
              >
                For more information, please refer to the HTML input attribute
                types
              </Link>
              .
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
              The Text Field supports native HTML regex pattern functionality
              that the value of the input must match to be valid.
              <Link
                href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attributes"
                target="_blank"
              >
                For more information, please refer to the HTML input attribute
                types
              </Link>
              .
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
              The Text Field supports type functionality that sets the type of
              text field to render to the user. The types supported include
              &apos;text&apos; (default for the Text Field component),
              &apos;email&apos;, &apos;password&apos;, &apos;tel&apos;, and
              &apos;number&apos;.
              <Link
                href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#input_types"
                target="_blank"
              >
                For more information, please refer to the HTML input types.
              </Link>
              .
            </>
          ),
          media: getIllustrationComponent('components/text-field/options/type'),
        },
        {
          title: 'Input mode',
          description: (
            <>
              Selection controls (inputs), such as the Form Input TextField, can
              be grouped together with other selection controls, Labels, and
              Assistive Text together in a Fieldset. The Fieldset has a caption
              that gives a title attributed to the elements that appear in the
              Fieldset, called a Legend.
              <br />
              <br />
              The Fieldset can also support other selection controls (inputs)
              such as the{' '}
              <Link href="/components/radio-button/">FormInput Radio</Link>,
              FormInput Switch, and{' '}
              <Link href="/components/checkbox/">FormInput Checkbox</Link>.
              <br />
              <br />
              For more information, please refer to the Fieldset component.
            </>
          ),
          media: getIllustrationComponent(
            'components/text-field/options/input-mode',
          ),
        },
        {
          title: 'Handling multiple Text Fields',
          description: (
            <>
              Selection controls (inputs), such as the Form Input TextField, can
              be grouped together with other selection controls, Labels, and
              Assistive Text together in a Fieldset. The Fieldset has a caption
              that gives a title attributed to the elements that appear in the
              Fieldset, called a Legend.
              <br />
              <br />
              The Fieldset can also support other selection controls (inputs)
              such as the{' '}
              <Link href="/components/radio-button/">FormInput Radio</Link>,
              FormInput Switch, and{' '}
              <Link href="/components/checkbox/">FormInput Checkbox</Link>.
              <br />
              <br />
              For more information, please refer to the Fieldset component.
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
        'The Text Field has the following states. They can be displayed with both placeholder content or user-inputted content:',
      layout: '3-span',
      cards: [
        {
          title: 'Base',
          description:
            'Text Fields have a base state. This is the base style of the input before it has been interacted with by a user.',
          media: getIllustrationComponent('components/text-field/states/base'),
        },
        {
          title: 'Hover',
          description:
            'Text Fields have a hover state. The style of the input changes to visually communicate and provide feedback to the user that the Text Field is an interactive element.',
          media: getIllustrationComponent('components/text-field/states/hover'),
        },
        {
          title: 'Active',
          description:
            'Text Fields have an active state. The style of the input changes to visually communicate and provide feedback to the user that the Text Field has been interacted with.',
          media: getIllustrationComponent(
            'components/text-field/states/active',
          ),
        },
        {
          title: 'Selected (Focus)',
          description:
            'Text Fields have a selected state. The style of the input changes and a caret element in the input is also visible to visually communicate and provide feedback to the user that the Text Field has been selected and they can input content.',
          media: getIllustrationComponent(
            'components/text-field/states/selected',
          ),
        },
        {
          title: 'Valid',
          description: (
            <>
              Text Fields in a valid state change style and can display a valid
              icon when the inputted entry conforms to a specific format (e.g.,
              email address, credit card number, password creation requirements,
              etc.).
              <br />
              <br />
              The input style change and validation icon can appear as soon as a
              user types a valid entry in the input or on submit.
              <br />
              <br />
              The <Link href="/components/form/">Form</Link> component is used
              to define this validation behaviour.
            </>
          ),
          media: getIllustrationComponent('components/text-field/states/valid'),
        },
        {
          title: 'Valid focus',
          description:
            'Text Fields in a valid focus state changes style when the inputted entry conforms to a specific condition or format, while focused.',
          media: getIllustrationComponent(
            'components/text-field/states/valid-focus',
          ),
        },
        {
          title: 'Valid hover',
          description:
            'Text Fields in a valid hover state changes style when the inputted entry conforms to a specific condition or format, while hovering.',
          media: getIllustrationComponent(
            'components/text-field/states/valid-hover',
          ),
        },
        {
          title: 'Invalid',
          description: (
            <>
              Text Fields in an invalid state change style and can display an
              invalid icon when the inputted entry doesn’t conform to a specific
              format (e.g., email address, credit card number, password creation
              requirements, etc.).
              <br />
              <br />
              The input style change and validation icon can appear as soon as a
              user types a valid entry in the input or on submit.
              <br />
              <br />
              The <Link href="/components/form/">Form</Link> component is used
              to define this validation behaviour.
            </>
          ),
          media: getIllustrationComponent(
            'components/text-field/states/invalid',
          ),
        },
        {
          title: 'Invalid focus',
          description:
            'Text Fields in an invalid focus state changes style when the inputted entry doesn’t conform to a specific condition or format, while focused.',
          media: getIllustrationComponent(
            'components/text-field/states/invalid-focus',
          ),
        },
        {
          title: 'Invalid hover',
          description:
            'Text Fields in an invalid hover state changes style when the inputted entry doesn’t conform to a specific condition or format, while hovering.',
          media: getIllustrationComponent(
            'components/text-field/states/invalid-hover',
          ),
        },
        {
          title: 'Disabled',
          description: (
            <>
              Text Fields in a disabled state show that an input exists, but is
              not available to the user in that scenario. When a user’s cursor
              hovers over a Text Fields in a disabled state the cursor shows as
              not-allowed.
              <br />
              <br />
              Disabled Text Fields are often used to maintain layout consistency
              and communicate that an input may become available if another
              condition has been met, e.g.selected a previous option in a form.
              <br />
              <br />
              Content and data in a disabled Text Field can not be submitted in
              a form.
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
              Text Fields in a read-only state communicate to the user that an
              input exists, but cannot be modified in that scenario (however, a
              user can tab to it, highlight it, and copy the text from it).
              <br />
              <br />
              Read-only Text Fields are often used to maintain layout
              consistency and communicate that an input may become available if
              another condition has been met, e.g. selected a previous option in
              a form.
              <br />
              <br />
              Content and data in a read-only Text Field can be submitted in a
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
      introduction:
        'The following guidance describes how the Text Field component behaves.',
      cards: [
        {
          title: 'Input Text Overflow Truncationn',
          description: (
            <>
              When the Text Field text is too long for the available horizontal
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
              The Text Field validation rules can be defined for onSubmit or
              onBlur, for both the initial validation and re-validation using
              the Form.
              <br />
              <br />
              <Link href="/components/form/">
                For more information, please refer to the Form component.
              </Link>
              <Block spaceStack="space050" />
              <InlineMessage
                icon={infoIcon}
                role="region"
                aria-label="TextField validation"
                title="Note"
              >
                Validation only works if the FormInput TextField uses the Form
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
              An icon is used to indicate if the select is in a valid or invalid
              state. Validation is set on the{' '}
              <Link href="/components/form/">Form</Link> component.
            </>
          ),
          media: getIllustrationComponent(
            'components/text-field/behaviours/validation-icon',
          ),
        },
      ],
    }}
    usage={{
      introduction:
        'The following guidance describes how and when to appropriately use a Select component.',
      cards: [
        {
          description: (
            <>
              The width of the Text Field should be proportional to the expected
              user input. For example, when capturing date of birth, the format
              should be split up into day/month/year i.e DD - MM - YYYY using
              multiple Text Fields, as this allows users to focus on inputting a
              specific value, reducing cognitive load. Using identical input
              widths for all Text Inputs in your forms will make them visually
              pleasing, but will be harder for a user to complete.
              <br />
              <br />
              Avoid using the Text Field if you need to let users enter longer
              answers that might span multiple lines.{' '}
              <Link
                target="_blank"
                href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea"
              >
                Consider using an alternative, such as Textarea.
              </Link>
            </>
          ),
          kind: UsageKind.DO,
          media: getIllustrationComponent('components/text-field/usage/do1'),
        },
        {
          description:
            'Avoid using Text Fields to capture multiple pieces of information from users, as this increases cognitive load. Instead, consider using multiple text fields in these cases.',
          kind: UsageKind.DONT,
          media: getIllustrationComponent('components/text-field/usage/dont1'),
        },
        {
          description:
            'Input labels and placeholder text should be in sentence case. This helps with scannability and legibility.',
          kind: UsageKind.DO,
          media: getIllustrationComponent('components/text-field/usage/do2'),
        },
        {
          description:
            "Input label text shouldn't be truncated or wrap over two or more lines. Keep it short, clear, and fully visible.",
          kind: UsageKind.DONT,
          media: getIllustrationComponent('components/text-field/usage/dont2'),
        },
        {
          description:
            'Use an appropriate input type for the data you collect. Providing the right type of input field for requested data will help users enter information in the right format and avoid mistakes, making the process as easy and efficient as possible. e.g. use a Password Input Field for users to input their password.',
          kind: UsageKind.DO,
          media: getIllustrationComponent('components/text-field/usage/do3'),
        },
        {
          description:
            'Use an appropriate input type for the data you collect. Providing the right type of input field for requested data will help users enter information in the right format and avoid mistakes, making the process as easy and efficient as possible. e.g. use a Password Input Field for users to input their password.',
          kind: UsageKind.DONT,
          media: getIllustrationComponent('components/text-field/usage/dont3'),
        },
        {
          description:
            'Swap Assistive Text with error text if the Text Field is invalid. Once the input is valid then the assistive is then shown again.',
          kind: UsageKind.DO,
          media: getIllustrationComponent('components/text-field/usage/do4'),
        },
        {
          description:
            'Avoid prematurely validating the input e.g. avoid setting the input to invalid before the user has finished typing.',
          kind: UsageKind.DONT,
          media: getIllustrationComponent('components/text-field/usage/dont4'),
        },
        {
          description:
            'Where possible, use onBlur validation (when the user clicks out the input, the input is validated). When the user’s inputs are checked as the user progresses through the form, as opposed to checking all the inputs in one process on submitting the form. This way is an improved user experience and guides the user through the form completion.',
          kind: UsageKind.DO,
          media: getIllustrationComponent('components/text-field/usage/do5'),
        },
        {
          description:
            'Write error text that communicates a solution. Error text should be written in no more than a few clear, concise and complete sentences.',
          kind: UsageKind.DO,
          media: getIllustrationComponent('components/text-field/usage/do6'),
        },
        {
          description:
            'Write error messaging in a human-centered way by guiding a user and communicating a solution. For example, if a user didn’t complete a required Text Field that asks for their date of birth, write the error text like you’re offering a hint to help them to understand what needs to go in the missing Text Input e.g: “Enter your date of birth.”',
          kind: UsageKind.DO,
          media: getIllustrationComponent('components/text-field/usage/do7'),
        },
      ],
    }}
    accessibility={{
      introduction:
        'The Text Field has the following accessibility considerations:',
      focusOrder: {
        title: 'Focus order',
        tableRows: [
          {
            order: 1,
            element: 'Start enhancer',
            role:
              'Focusses to the start enhancer (if provided, and interactive)',
          },
          {
            order: 2,
            element: 'Text Field',
            role: 'Focusses to the input container',
          },
          {
            order: 3,
            element: 'End enhancer',
            role:
              'Focusses to the end enhancer  (if provided, and interactive)',
          },
        ],
      },
      interaction: {
        title: 'Keyboard Interactions',
        tableRows: [
          {
            command: ['Tab'],
            description:
              'When focus is outside of the Text Field, it moves focus to the input container. If focus is on the input container it moves focus to the end enhancer (if provided, and interactive).',
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
              'Aria-label attribute is used to define a string that labels the action that will be performed when the user interacts with the Text Field.',
            userSupplied: true,
          },
          {
            element: 'required',
            attribute: 'aria-required',
            value: 'object',
            description:
              'This attribute informs the user that a field is required. When set to true, screen readers notify users that the field is required.',
            userSupplied: true,
          },
          {
            element: 'invalid',
            attribute: 'aria-required',
            value: 'object',
            description:
              'This attribute informs the user when there is an error. By default it’s set to false. Values include true, spelling, and grammar. Screen readers will alert users when the field is set to any value other than false',
            userSupplied: true,
          },
        ],
      },
    }}
    compliance={{
      variations: true,
      states: true,
      behaviours: true,
      usage: true,
      accessibility: true,
      performance: false,
      seo: true,
      props: true,
      uiKit: true,
      design: true,
      themes: true,
    }}
    related={{
      introduction: '',
      related: ['Form'],
    }}
  />
);

export default TextFieldComponent;
