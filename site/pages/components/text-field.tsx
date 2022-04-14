import React from 'react';
import {Block, InlineMessage, IconFilledInfo} from 'newskit';
import {MetaStatus} from '../../components/meta/types';
import {LayoutProps} from '../../components/layout';
import {ComponentPageTemplate} from '../../templates/component-page-template';
import {getIllustrationComponent} from '../../components/illustrations/illustration-loader';
import {ContentText} from '../../components/text-section/content-text';
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
      introduction: 'The Select component has the following states:',
      layout: '3-span',
      cards: [
        {
          title: 'Base',
          description:
            'The select has a base state. This is the base style of the input before it has been interacted with by a user.',
          media: getIllustrationComponent('components/text-field/states/base'),
        },
        {
          title: 'Focus',
          description:
            'The select has a focus state. This is the style of the input when the element is focused via keyboard control.',
          media: getIllustrationComponent('components/text-field/states/focus'),
        },
        {
          title: 'Hover',
          description:
            'The select has a hover state. The style of the input changes to visually communicate and provide feedback to the user that the Select input is an interactive element.',
          media: getIllustrationComponent('components/text-field/states/hover'),
        },
        {
          title: 'Selected',
          description:
            'The Select in a selected state changes style when the Select selection conforms to a specific condition eg. the panel appearing. This is the style of the input when the panel element is visible (open).',
          media: getIllustrationComponent(
            'components/text-field/states/selected',
          ),
        },
        {
          title: 'Valid',
          description: (
            <>
              The select in a valid state changes style when the selected option
              conforms to a specific condition eg. updating preferences in a
              form.
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
          description: (
            <>
              The select in a valid state changes style when the selected option
              conforms to a specific condition eg. updating preferences in a
              form.
              <br />
              <br />
              The input style change and validation icon can appear as soon as a
              user types a valid entry in the input or on submit.
              <br />
              <br />
              The Form component is used to define this validation behaviour.
            </>
          ),
          media: getIllustrationComponent(
            'components/text-field/states/valid-focus',
          ),
        },
        {
          title: 'Valid hover',
          description:
            'The select in a valid hover state changes style when the selected option conforms to a specific condition eg. updating preferences in a form, while hovering.',
          media: getIllustrationComponent(
            'components/text-field/states/valid-focus',
          ),
        },
        {
          title: 'Invalid',
          description: (
            <>
              The select in an invalid state changes style when the selected
              option doesn’t conform to a specific condition eg. not making a
              selection in a form.
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
            'The select in an invalid focus state changes style when the selected option conforms to a specific condition eg. not making a selection in a form, while focused.',
          media: getIllustrationComponent(
            'components/text-field/states/invalid-focus',
          ),
        },
        {
          title: 'Invalid hover',
          description:
            'The select in an invalid hover state changes style when the selected option conforms to a specific condition eg. not making a selection in a Form, while hovering',
          media: getIllustrationComponent(
            'components/text-field/states/invalid-hover',
          ),
        },
        {
          title: 'Disabled',
          description: (
            <>
              The select in a disabled state communicates to the user that an
              input exists, but cannot be modified in that scenario.
              <br />
              <br />
              Disabled selects are often used to maintain layout consistency and
              communicate that an input may become available if another
              condition has been met, e.g. selecting a previous option in a
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
              The select in a read-only state communicates to the user that an
              input exists, but cannot be modified in that scenario (however, a
              user can tab to it, highlight it, and copy the text from it).
              <br />
              <br />
              Read-only selects are often used to maintain layout consistency
              and communicate that an input may become available if another
              condition has been met, e.g. selecting a previous option in a
              form.
              <br />
              <br />
              Content and data in a read-only select can be submitted in a form.
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
        'The following guidance describes how the Select component behaves.',
      cards: [
        {
          title: 'Select Input and Select option item text-overflow truncation',
          description: (
            <>
              When the Select input text or the Select option item text is too
              long for the available horizontal space, the text truncates.
              <br />
              <br />
              Truncation is visually indicated using{' '}
              <InlineCode>text-overflow:elipsis</InlineCode> via the style
              presets.
            </>
          ),
          media: getIllustrationComponent(
            'components/text-field/behaviours/checked-vs-unchecked',
          ),
        },
        {
          title: 'Validation',
          description: (
            <>
              The Select validation rules can be defined for onSubmit or onBlur,
              for both the initial validation and re-validation using the Form.
              <br />
              <br />
              <Link href="/components/form/">
                For more information, please refer to the Form component.
              </Link>
              .
              <Block spaceStack="space050" />
              <InlineMessage
                role="region"
                aria-label="Select validation"
                title="Note"
              >
                Validation only works if the Select component uses the Form
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
          description:
            'Use a Select to present multiple options where only one can be selected.',
          kind: UsageKind.DO,
          media: getIllustrationComponent('components/text-field/usage/do-1'),
        },
        {
          description: (
            <>
              Don&apos;t use a Select when you have only a few options and
              enough space; use a radio.
              <br />
              <br />A select can cause usability issues due to the number of
              interactions it takes to select an option.This can increase the
              likelihood of abandonment of a user task.
            </>
          ),
          kind: UsageKind.DONT,
          media: getIllustrationComponent('components/text-field/usage/dont-1'),
        },
        {
          description:
            'Use a Select when there are four or more options for a user to choose from.',
          kind: UsageKind.DO,
          media: getIllustrationComponent('components/text-field/usage/do-2'),
        },
        {
          description:
            'Don’t use a Select when a user can select more than one option, use a checkbox.',
          kind: UsageKind.DONT,
          media: getIllustrationComponent('components/text-field/usage/dont-2'),
        },
        {
          description: 'Where possible, define a default option.',
          kind: UsageKind.DO,
          media: getIllustrationComponent('components/text-field/usage/do-2'),
        },
        {
          description:
            'Have an empty Select upon page load. If a default option isn’t appropriate, define a placeholder such as “Select an option”.',
          kind: UsageKind.DONT,
          media: getIllustrationComponent('components/text-field/usage/dont-3'),
        },
        {
          description:
            'Don’t use a Select when a users can add and remove options, consider a Text Field with Tags or a Combobox.',
          kind: UsageKind.DONT,
          media: getIllustrationComponent('components/text-field/usage/dont-4'),
        },
      ],
    }}
    accessibility={{
      introduction: (
        <>
          The Select component has the following accessibility considerations:
          <Block spaceStack="space100" />
          <ContentText title="Grouping Selects" titleAs="span">
            It is recommended to{' '}
            <Link
              target="_blank"
              href="https://www.w3.org/TR/wai-aria-1.2/#group"
            >
              group
            </Link>{' '}
            selects and other related elements such as Labels and Assistive Text
            together using the Fieldset component, with a title attributed to
            the elements that appear in the Fieldset, called a Legend.
          </ContentText>
        </>
      ),
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
            element: 'Select',
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
              'When focus is outside of the Select, it moves focus to the input container. If focus is on the input container it moves focus to the end enhancer (if provided, and interactive)',
          },
          {
            command: ['Space'],
            description: 'Launches/closes the Select panel',
          },
          {
            command: ['Up'],
            description:
              'When focus is inside the Select panel, it moves focus upwards through the option items in the Select panel',
          },
          {
            command: ['Down'],
            description:
              'When focus is inside the Select panel, it moves focus downwards through the option items in the Select panel',
          },
          {
            command: ['Home'],
            description:
              'When focus is inside the Select panel, it moves to the first available option item in the Select panel',
          },
          {
            command: ['End'],
            description:
              'When focus is inside the Select panel, it moves to the last available option item in the Select panel',
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
              'Aria-label attribute is used to define a string that labels the action that will be performed when the user interacts with the Select.',
            userSupplied: true,
          },
          {
            element: 'Label',
            attribute: 'aria-required',
            value: 'object',
            description:
              'This attribute informs the user that a field is required. When set to true, screen readers notify users that the field is required.',
            userSupplied: true,
          },
          {
            element: 'Label',
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
      performance: true,
      seo: true,
      props: true,
      uiKit: false,
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
