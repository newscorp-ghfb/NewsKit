import React from 'react';
import {Block, InlineMessage} from 'newskit';
import {MetaStatus} from '../../components/meta/types';
import {LayoutProps} from '../../components/layout';
import {ComponentPageTemplate} from '../../templates/component-page-template';
import {getIllustrationComponent} from '../../components/illustrations/illustration-loader';
import {ContentText} from '../../components/text-section/content-text';
import {InlineCode} from '../../components/markdown-elements';
import {Link} from '../../components/link';
import {UsageKind} from '../../components/usage-card';
import {
  logicalMarginOverrideProps,
  logicalPaddingOverrideProps,
  prefixLogicalProps,
} from '../../components/component-api/common-logical-props';

const commonPropsRows = [
  {
    name: 'size',
    type: ['small', 'medium', 'large'],
    default: 'medium',
    description: 'Defines the size of the Select.',
  },
  {
    name: 'state',
    type: ['valid', 'invalid', 'disabled'],
    description:
      'If provided, renders the FormInput Select in a valid, invalid, or disabled state. It can be submitted within a form.',
  },
  {
    name: 'useModal',
    default: 'false',
    type: 'MQ<boolean>',
    description: (
      <>
        If provided, Select options appear in a{' '}
        <Link href="/components/modal" target="_blank">
          Modal
        </Link>{' '}
        (with overlay).
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
    name: 'virtualized',
    type: 'number',
    description: `When the amount of options is greater than this number, the options list will be virtualized.`,
    default: '50',
  },
  {
    name: 'onOpenChange',
    type: '(value:boolean):void',
    description: `Callback fired when the select panel opens or close with value of true/false`,
  },
];

const commonOverridesRows = [
  {
    attribute: 'width',
    type: 'MQ<string>',
    default: '100%',
    description: `If provided, this overrides the minWidth of the Select.`,
  },
  {
    attribute: 'button.stylePreset',
    type: 'MQ<string>',
    default: 'inputField',
    description:
      'If provided, overrides the stylePreset of the Select input container.',
  },
  {
    attribute: 'button.typographyPreset',
    type: 'MQ<string>',
    default: [
      'small = utilityBody020',
      'medium = utilityBody020',
      'large = utilityBody030',
    ],
    description: 'If provided, this overrides the input & placeholder text.',
  },
  {
    attribute: 'button.spaceInset(deprecated)',
    type: 'MQ<string>',
    default: [
      'small = spaceInset020',
      'medium = spaceInset020',
      'large = spaceInset030',
    ],
    description: `Use paddingBlock and paddingInline instead. If provided, this overrides the button padding.`,
  },
  {
    attribute: 'button.spaceStack(deprecated)',
    type: 'MQ<string>',
    default: 'space020',
    description:
      'This property is deprecated. Use marginBlockEnd instead. If provided, this overrides the end margin.',
  },
  {
    attribute: 'button.spaceInline',
    type: 'MQ<string>',
    default: 'space020',
    description:
      'If provided, this overrides the inline space of the Select input container.',
  },

  {
    attribute: 'button.loadingIndicator.stylePreset',
    type: 'MQ<string>',
    default: 'indeterminateProgressIndicatorPrimary',
    description:
      'If provided, this overrides the stylePreset of the Select input container loading indicator.',
  },
  {
    attribute: 'button.indicatorIcon',
    type: 'Override<SelectButtonIcon>',
    description: 'If provided, overrides the icon',
  },
  {
    attribute: 'button.indicatorIcon.stylePreset',
    type: 'MQ<string>',
    default: 'iconDefault',
    description: 'If provided, overrides the stylePreset of the indicator icon',
  },
  {
    attribute: 'button.indicatorIcon.size',
    type: 'MQ<string>',
    default: 'iconSize020',
    description: 'If provided, overrides the size of the indicator icon',
  },
  {
    attribute: 'button.startEnhancer.iconSize',
    type: 'MQ<string>',
    default: 'iconSize020',
    description:
      'If provided, this overrides the component passed to the start enhancer.',
  },
  {
    attribute: 'button.startEnhancer.inlineSpace',
    type: 'MQ<string>',
    default: 'space020',
    description:
      'If provided, this overrides the inline space of the start enhancer.',
  },
  {
    attribute: 'button.endEnhancer.iconSize',
    type: 'MQ<string>',
    default: 'iconSize020',
    description:
      'If provided, this overrides the component passed to the end enhancer.',
  },
  {
    attribute: 'button.endEnhancer.inlineSpace',
    type: 'MQ<string>',
    default: 'space020',
    description:
      'If provided, this overrides the inline space of the end enhancer.',
  },
  ...prefixLogicalProps(logicalPaddingOverrideProps, 'button'),
  ...prefixLogicalProps(logicalMarginOverrideProps, 'button'),
  {
    attribute: 'panel.stylePreset',
    type: 'MQ<string>',
    default: 'selectPanel',
    description:
      'If provided, this overrides the stylePreset of the Select panel.',
  },
  {
    attribute: 'panel.maxHeight',
    type: 'MQ<string>',
    default: ['small = 184px', 'medium = 272px', 'large = 360px'],
    description:
      'If provided, this overrides the maxHeight of the Select panel.',
  },
  {
    attribute: 'panel.spaceInset(deprecated)',
    type: 'MQ<string>',
    default: 'spaceInset020',
    description: `Use paddingBlock and paddingInline instead. If provided, this overrides the panel padding.`,
  },
  {
    attribute: 'panel.spaceStack(deprecated)',
    type: 'MQ<string>',
    default: 'spaceStack010',
    description:
      'This property is deprecated. Use marginBlockEnd instead. If provided, this overrides the end margin.',
  },
  {
    attribute: 'panel.zIndex',
    type: 'layer | string',
    default: 'layer',
    description:
      'If provided, this overrides the zIndex of the select panel. When set to "layer" the panel renders in LayerOrganizer.',
  },
  {
    attribute: 'modal.panel.width',
    type: 'MQ<string>',
    default: '60vw',
    description:
      'If provided, this overrides the width property of the Modal panel.',
  },
  ...prefixLogicalProps(logicalPaddingOverrideProps, 'panel'),
  ...prefixLogicalProps(logicalMarginOverrideProps, 'panel'),
];

const selectOptionOverrides = [
  {
    attribute: 'stylePreset',
    type: 'MQ<string>',
    default: 'selectOptionItem',
    description:
      'If provided, this overrides the stylePreset of the Select option.',
  },
  {
    attribute: 'minHeight',
    type: 'MQ<string>',
    default: ['small = sizing060', 'medium = sizing080', 'large = sizing090'],
    description:
      'If provided, this overrides the minHeight of the Select option.',
  },
  {
    attribute: 'typographyPreset',
    type: 'MQ<string>',
    default: [
      'small = utilityBody020',
      'medium = utilityBody020',
      'large = utilityBody030',
    ],
    description:
      'If provided, this overrides the typographyPreset of the Select option.',
  },
  {
    attribute: 'spaceInset(deprecated)',
    type: 'MQ<string>',
    default: [
      'small = spaceInsetSquish010',
      'medium = spaceInset020',
      'large = spaceInsetStretch030',
    ],
    description: `Use paddingBlock and paddingInline instead.`,
  },
  {
    attribute: 'spaceInline',
    type: 'MQ<string>',
    default: 'space020',
    description:
      'If provided, this overrides the inline space of the Select option.',
  },
  ...logicalMarginOverrideProps,
  ...logicalPaddingOverrideProps,
];

const selectOptionProps = [
  {
    name: 'value',
    type: 'string',
    required: true,
    description: 'Defines the value of the SelectOption',
  },
  {
    name: 'children',
    type: 'React.ReactNode',
    required: true,
    default: '',
    description: 'Label and icon(s) of the SelectOption.',
  },
  {
    name: 'selected',
    type: 'boolean',
    default: '',
    description: 'If provided, renders the SelectOption in a selected state.',
  },
  {
    name: 'defaultSelected',
    type: 'boolean',
    default: '',
    description:
      'If provided, renders the SelectOption in a selected state by default.',
  },
  {
    name: 'selectedIcon',
    type: 'React.ReactNode',
    default: '',
    description: 'Icon rendered inside the SelectOption.',
  },
  {
    name: 'selectedDisplay',
    type: 'React.ReactNode',
    default: '',
    description:
      'Display value rendered inside the SelectOption (supports custom display).',
  },
];

const selectOverridesFooter = (
  <InlineMessage>
    Checkout <Link href="/components/modal">Modal component</Link> for all props
    and overrides
  </InlineMessage>
);

const SelectComponent = (layoutProps: LayoutProps) => (
  <ComponentPageTemplate
    headTags={{
      title: 'Select',
      description:
        'Select components allow users to select one option from a list. They typically appear in forms.',
    }}
    layoutProps={layoutProps}
    pageIntroduction={{
      type: 'Actions & Inputs',
      name: 'Select',
      hero: {
        illustration: 'components/select/select-illustration',
      },
      introduction: `Select components allow users to select one option from a list. They typically appear in forms.`,
    }}
    componentDefaultsKey="select"
    meta={{
      status: MetaStatus.Supported,
      introduced: 'v4.3.0',
      codeUrl: 'https://github.com/newscorp-ghfb/newskit/tree/main/src/select',
      figmaUrl:
        'https://www.figma.com/file/FSbCQa6SzVR3K48ZWLeD77/NK-Web-Components?node-id=4603%3A124656',
      storybookId: 'components-select--story-select-size',
    }}
    anatomy={{
      introduction:
        'The select component contains five required elements and two optional elements.',
      media: getIllustrationComponent('components/select/anatomy'),
      rows: [
        {
          name: 'Input Container',
          description: 'Interactive input area',
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
          name: 'Input & Placeholder Text',
          description: (
            <>
              Input text - a value the user has entered into an input.
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
            'An icon used to indicate if the input is required and in a valid or invalid state. Validation is set on the Form',
          component: 'Icon',
          optional: undefined,
        },
        {
          name: 'End Enhancer',
          description:
            'Used to add a component to the end of the input container. Eg. an Icon or Button',
          component: 'React.Reactnode',
          optional: true,
        },
        {
          name: 'Panel',
          description: 'Container that contained a list of option items',
          component: 'Block',
          optional: undefined,
        },
        {
          name: 'Option Item',
          description: 'Option item that can be selected from multiple options',
          component: 'Div',
          optional: undefined,
        },
      ],
    }}
    options={{
      introduction:
        'The Select component has options that can be used to provide an appropriate experience for different use cases.',
      cards: [
        {
          title: 'Size',
          description:
            'There are three sizes of Select; small, medium, and large. The input container, placeholder/input text, start and end enhancers change size. Selects match the same height as the Button and other inputs such as the Text Field, to align when used together.',
          media: getIllustrationComponent('components/select/options/size'),
        },
        {
          title: 'Select for mobile',
          description: (
            <>
              There is an option for Select options to appear in a Modal (with
              overlay), which is intended for long lists of options eg.
              presenting a list of countries to select from in a{' '}
              <Link href="/components/form/">Form.</Link>
            </>
          ),
          media: getIllustrationComponent('components/select/options/mobile'),
        },
        {
          title: 'Width',
          description:
            'The width of a Select can be customised appropriately for its context, using full-width or a fixed-width value.',
          media: getIllustrationComponent('components/select/options/width'),
        },
        {
          title: 'Min-height',
          description:
            'The minimum height of a Select input can be customised appropriately for its context. Additionally, the minimum height of the Select panel (containing the option items) can be customised appropriately for its context.',
          media: getIllustrationComponent(
            'components/select/options/min-height',
          ),
        },
        {
          title: 'Placeholder text',
          description: (
            <>
              Placeholder text can be displayed to provide the user with a short
              hint that describes the content that is expected to be inputted by
              the user (e.g. a sample value or a short description of the
              expected format).
              <br />
              <br />
              The short hint is displayed in the input container before the user
              enters a value.
              <InlineMessage
                role="region"
                aria-label="Placeholder accessible"
                title="Note"
                overrides={{marginBlockStart: 'space030'}}
              >
                Placeholder text is not accessible; use assistive text when
                providing instructions on completing a Select for clarity.
              </InlineMessage>
            </>
          ),
          media: getIllustrationComponent(
            'components/select/options/placeholder-text',
          ),
        },
        {
          title: 'Start enhancer',
          description:
            'The Select supports start enhancer property that allows for a component to be added to the start or end of the input container, for example, an icon.',
          media: getIllustrationComponent(
            'components/select/options/start-enhancer',
          ),
        },
        {
          title: 'End enhancer',
          description:
            'The Select supports end enhancer property that allows for a component to be added to the start or end of the input container, for example, an icon.',
          media: getIllustrationComponent(
            'components/select/options/end-enhancer',
          ),
        },
        {
          title: 'Pre-selected options',
          description:
            'A pre-selected option can be set on the Select. When specified, the option is displayed in the Select upon page load.',
          media: getIllustrationComponent(
            'components/select/options/pre-selected-option',
          ),
        },
        {
          title: 'Custom selected display',
          description:
            'The Select option item and the Select input can be defined independently. For example, a list of countries may be displayed in a text format in the Select option items and upon user selection, the selected item may display a country flag in the Select input.',
          media: getIllustrationComponent(
            'components/select/options/custom-selected-display',
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
          media: getIllustrationComponent('components/select/states/base'),
        },
        {
          title: 'Focus',
          description:
            'The select has a focus state. This is the style of the input when the element is focused via keyboard control.',
          media: getIllustrationComponent('components/select/states/focus'),
        },
        {
          title: 'Hover',
          description:
            'The select has a hover state. The style of the input changes to visually communicate and provide feedback to the user that the Select input is an interactive element.',
          media: getIllustrationComponent('components/select/states/hover'),
        },
        {
          title: 'Selected',
          description:
            'The Select in a selected state changes style when the Select selection conforms to a specific condition eg. the panel appearing. This is the style of the input when the panel element is visible (open).',
          media: getIllustrationComponent('components/select/states/selected'),
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
          media: getIllustrationComponent('components/select/states/valid'),
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
            'components/select/states/valid-focus',
          ),
        },
        {
          title: 'Valid hover',
          description:
            'The select in a valid hover state changes style when the selected option conforms to a specific condition eg. updating preferences in a form, while hovering.',
          media: getIllustrationComponent(
            'components/select/states/valid-focus',
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
          media: getIllustrationComponent('components/select/states/invalid'),
        },
        {
          title: 'Invalid focus',
          description:
            'The select in an invalid focus state changes style when the selected option conforms to a specific condition eg. not making a selection in a form, while focused.',
          media: getIllustrationComponent(
            'components/select/states/invalid-focus',
          ),
        },
        {
          title: 'Invalid hover',
          description:
            'The select in an invalid hover state changes style when the selected option conforms to a specific condition eg. not making a selection in a Form, while hovering',
          media: getIllustrationComponent(
            'components/select/states/invalid-hover',
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
          media: getIllustrationComponent('components/select/states/disabled'),
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
          media: getIllustrationComponent('components/select/states/read-only'),
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
            'components/select/behaviours/checked-vs-unchecked',
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
              <InlineMessage
                role="region"
                aria-label="Select validation"
                title="Note"
                overrides={{marginBlockStart: 'space050'}}
              >
                Validation only works if the Select component uses the Form
                component.
              </InlineMessage>
            </>
          ),
          media: getIllustrationComponent(
            'components/select/behaviours/validation',
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
            'components/select/behaviours/validation-icon',
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
          media: getIllustrationComponent('components/select/usage/do-1'),
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
          media: getIllustrationComponent('components/select/usage/dont-1'),
        },
        {
          description:
            'Use a Select when there are four or more options for a user to choose from.',
          kind: UsageKind.DO,
          media: getIllustrationComponent('components/select/usage/do-2'),
        },
        {
          description:
            'Don’t use a Select when a user can select more than one option, use a checkbox.',
          kind: UsageKind.DONT,
          media: getIllustrationComponent('components/select/usage/dont-2'),
        },
        {
          description: 'Where possible, define a default option.',
          kind: UsageKind.DO,
          media: getIllustrationComponent('components/select/usage/do-3'),
        },
        {
          description:
            'Have an empty Select upon page load. If a default option isn’t appropriate, define a placeholder such as “Select an option”.',
          kind: UsageKind.DONT,
          media: getIllustrationComponent('components/select/usage/dont-3'),
        },
        {
          description:
            'Don’t use a Select when a users can add and remove options, consider a Text Field with Tags or a Combobox.',
          kind: UsageKind.DONT,
          media: getIllustrationComponent('components/select/usage/dont-4'),
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
    componentAPI={{
      introduction: (
        <>
          The Select component is compromised of four key elements, these have a
          range of props that can be used to define an appropriate experience
          for different use cases.
          <InlineMessage overrides={{marginBlockStart: 'space080'}}>
            There are two components exported from the package, one for use
            within the NewsKit Form component, and one for use as a controlled
            component.
          </InlineMessage>
        </>
      ),
      components: [
        {
          title: 'FormInputSelect',
          summary: `The FormInputSelect has a range of props that can be used to define an appropriate experience for different use cases. Use this component within the NewsKit Form component.`,
          propsRows: commonPropsRows,
          overridesRows: commonOverridesRows,
          overridesFooter: selectOverridesFooter,
        },
        {
          title: 'Select',
          summary: `The Select has a range of props that can be used to define an appropriate experience for different use cases. Use this component within the NewsKit Form component.`,
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
          overridesFooter: selectOverridesFooter,
        },
        {
          title: 'SelectOption',
          summary:
            'The SelectOption has a range of props that can be used to define an appropriate experience for different use cases. Use this component within the NewsKit Form component.',
          propsRows: selectOptionProps,
          overridesRows: selectOptionOverrides,
        },
      ],
    }}
    related={{
      related: ['Button', 'Checkbox', 'Form', 'Text Field'],
    }}
  />
);

export default SelectComponent;
