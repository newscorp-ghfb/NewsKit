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
      'If provided, renders the formInput select in a valid, invalid or disabled state. Can be submitted within a form',
  },
  {
    name: 'useModal',
    default: 'false',
    type: 'MQ<boolean>',
    description: (
      <>
        If provided, select options appear in a{' '}
        <Link href="/components/modal" target="_blank">
          modal
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
];

const commonOverridesRows = [
  {
    attribute: 'width',
    type: 'MQ<string>',
    default: '100%',
    description: `If provided, overrides the minWidth of the select.`,
  },
  {
    attribute: 'button.stylePreset',
    type: 'MQ<string>',
    default: 'inputField',
    description:
      'If provided, overrides the stylePreset of the select input container.',
  },
  {
    attribute: 'button.typographyPreset',
    type: 'MQ<string>',
    default: [
      'small = utilityBody020',
      'medium = utilityBody020',
      'large = utilityBody030',
    ],
    description: 'If provided, overrides the input and placeholder text.',
  },
  {
    attribute: 'button.spaceInset(deprecated)',
    type: 'MQ<string>',
    default: [
      'small = spaceInset020',
      'medium = spaceInset020',
      'large = spaceInset030',
    ],
    description: `Use paddingBlock and paddingInline instead. If provided, overrides the button padding.`,
  },
  {
    attribute: 'button.spaceStack(deprecated)',
    type: 'MQ<string>',
    default: 'space020',
    description:
      'This property is deprecated. Use marginBlockEnd instead. If provided, overrides the end margin.',
  },
  {
    attribute: 'button.spaceInline',
    type: 'MQ<string>',
    default: 'space020',
    description:
      'If provided, overrides the inline space of the select input container.',
  },

  {
    attribute: 'button.loadingIndicator.stylePreset',
    type: 'MQ<string>',
    default: 'indeterminateProgressIndicatorPrimary',
    description:
      'If provided, overrides the stylePreset of the select input container loading indicator.',
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
      'If provided, overrides the component passed to the start enhancer.',
  },
  {
    attribute: 'button.startEnhancer.inlineSpace',
    type: 'MQ<string>',
    default: 'space020',
    description:
      'If provided, overrides the inline space of the start enhancer.',
  },
  {
    attribute: 'button.endEnhancer.iconSize',
    type: 'MQ<string>',
    default: 'iconSize020',
    description:
      'If provided, overrides the component passed to the end enhancer.',
  },
  {
    attribute: 'button.endEnhancer.inlineSpace',
    type: 'MQ<string>',
    default: 'space020',
    description: 'If provided, overrides the inline space of the end enhancer.',
  },
  ...prefixLogicalProps(logicalPaddingOverrideProps, 'button'),
  ...prefixLogicalProps(logicalMarginOverrideProps, 'button'),
  {
    attribute: 'panel.stylePreset',
    type: 'MQ<string>',
    default: 'selectPanel',
    description: 'If provided, overrides the stylePreset of the select panel.',
  },
  {
    attribute: 'panel.maxHeight',
    type: 'MQ<string>',
    default: ['small = 184px', 'medium = 272px', 'large = 360px'],
    description: 'If provided, overrides the maxHeight of the select panel.',
  },
  {
    attribute: 'panel.spaceInset(deprecated)',
    type: 'MQ<string>',
    default: 'spaceInset020',
    description: `Use paddingBlock and paddingInline instead. If provided, overrides the panel padding.`,
  },
  {
    attribute: 'panel.spaceStack(deprecated)',
    type: 'MQ<string>',
    default: 'spaceStack010',
    description:
      'This property is deprecated. Use marginBlockEnd instead. If provided, overrides the end margin.',
  },
  // {
  //   attribute: 'panel.zIndex',
  //   type: 'layer | string',
  //   default: 'layer',
  //   description:
  //     'If provided, this overrides the zIndex of the select panel. When set to "layer" the panel renders in LayerOrganizer.',
  // },
  {
    attribute: 'modal.panel.width',
    type: 'MQ<string>',
    default: '60vw',
    description:
      'If provided, overrides the width property of the modal panel.',
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
    description: 'Defines the value of the selectOption',
  },
  {
    name: 'children',
    type: 'React.ReactNode',
    required: true,
    default: '',
    description: 'Label and icon(s) of the selectOption.',
  },
  {
    name: 'selected',
    type: 'boolean',
    default: '',
    description: 'If provided, renders the selectOption in a selected state.',
  },
  {
    name: 'defaultSelected',
    type: 'boolean',
    default: '',
    description:
      'If provided, renders the selectOption in a selected state by default.',
  },
  {
    name: 'selectedIcon',
    type: 'React.ReactNode',
    default: '',
    description: 'Icon rendered inside the selectOption.',
  },
  {
    name: 'selectedDisplay',
    type: 'React.ReactNode',
    default: '',
    description:
      'Display value rendered inside the selectOption (supports custom display).',
  },
];

const selectOverridesFooter = (
  <InlineMessage>
    Check out the <Link href="/components/modal">modal</Link> for all props and
    overrides
  </InlineMessage>
);

const SelectComponent = (layoutProps: LayoutProps) => (
  <ComponentPageTemplate
    headTags={{
      title: 'Select',
      description:
        'Selects let users select one option from a list. They typically appear in forms.',
    }}
    layoutProps={layoutProps}
    pageIntroduction={{
      type: 'Actions & Inputs',
      name: 'Select',
      hero: {
        illustration: 'components/select/select-illustration',
      },
      introduction: `Selects let users select one option from a list. They typically appear in forms.`,
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
          description: 'Interactable input area',
          component: ['HTML Input', 'Block'],
          optional: undefined,
        },
        {
          name: 'Start Enhancer',
          description:
            'Adds a component to the start of the input container (e.g. icon or button)',
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
          component: ['Text Block'],
          optional: undefined,
        },
        {
          name: 'Validation icon',
          description:
            'Indicate if the input is required and in a valid or invalid state. Use the form to set validation',
          component: 'Icon',
          optional: undefined,
        },
        {
          name: 'End enhancer',
          description:
            'Adds a component to the end of the input container (e.g. icon or button)',
          component: 'React.Reactnode',
          optional: true,
        },
        {
          name: 'Panel',
          description: 'Container with a list of option items',
          component: 'Block',
          optional: undefined,
        },
        {
          name: 'Option item',
          description: 'Option item that can be selected from multiple options',
          component: 'Div',
          optional: undefined,
        },
      ],
    }}
    options={{
      introduction: 'The select component has options for different use cases:',
      cards: [
        {
          title: 'Size',
          description:
            'The select component comes in small, medium and large. The input container, placeholder/input text and start/end enhancers change size. Selects should match the height of the button and other inputs (e.g. text field) when used together.',
          media: getIllustrationComponent('components/select/options/size'),
        },
        {
          title: 'Select for mobile',
          description: (
            <>
              Select options can appear in a modal (with overlay). This is
              intended for long lists of options (e.g. presenting a list of
              countries to select from in a form).
            </>
          ),
          media: getIllustrationComponent('components/select/options/mobile'),
        },
        {
          title: 'Width',
          description:
            'Customise the width of a select using full-width or a fixed-width value.',
          media: getIllustrationComponent('components/select/options/width'),
        },
        {
          title: 'Min-height',
          description:
            'Customise the minimum height of both a select input and the select panel (containing the option items).',
          media: getIllustrationComponent(
            'components/select/options/min-height',
          ),
        },
        {
          title: 'Placeholder text',
          description: (
            <>
              Use placeholder text to give the user a short hint about what to
              input (e.g. a sample value or short description of the expected
              format). The short hint is displayed in the input container before
              the user enters a value.
              <InlineMessage
                role="region"
                aria-label="Placeholder accessible"
                title="Note"
                overrides={{marginBlockStart: 'space030'}}
              >
                Placeholder text is not accessible. Use assistive text to give
                instructions to the user when they&apos;ve completed a select.
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
            'The select supports start enhancer property that allows for a component to be added to the start of the input container (e.g. an icon).',
          media: getIllustrationComponent(
            'components/select/options/start-enhancer',
          ),
        },
        {
          title: 'End enhancer',
          description:
            'Add a component to the end of the input container (e.g. an icon).',
          media: getIllustrationComponent(
            'components/select/options/end-enhancer',
          ),
        },
        {
          title: 'Pre-selected options',
          description:
            'Set a pre-selected option on the select. When specified, the option is displayed in the select upon page load.',
          media: getIllustrationComponent(
            'components/select/options/pre-selected-option',
          ),
        },
        {
          title: 'Custom selected display',
          description:
            'Define the select option item and the select input independently (e.g. you might have a list of countries in text format in the select option items, then, upon user selection, display the selected item as a country flag in the select input).',
          media: getIllustrationComponent(
            'components/select/options/custom-selected-display',
          ),
        },
      ],
    }}
    states={{
      introduction: 'The select has the following states:',
      layout: '3-span',
      cards: [
        {
          title: 'Base',
          description:
            'The default style before the user interacts with the select.',
          media: getIllustrationComponent('components/select/states/base'),
        },
        {
          title: 'Hover',
          description:
            'The select changes style to let the user know it’s interactive.',
          media: getIllustrationComponent('components/select/states/hover'),
        },
        {
          title: 'Focus',
          description:
            'The select changes style when the element is focussed (e.g. via keyboard or voice).',
          media: getIllustrationComponent('components/select/states/focus'),
        },
        {
          title: 'Selected',
          description:
            'The select changes style when the user’s selection conforms to a specific condition. This is the style of the input when the panel element is visible (open).',
          media: getIllustrationComponent('components/select/states/selected'),
        },
        {
          title: 'Valid',
          description: (
            <>
              The select changes style to let the user know the select is in a
              valid state.
              <br />
              <br />
              The input style change and validation icon can appear as soon as
              the user types a valid entry in the input or on submit.
              <br />
              <br />
              Use the form to validate behaviour.
            </>
          ),
          media: getIllustrationComponent('components/select/states/valid'),
        },
        {
          title: 'Valid focus',
          description: (
            <>
              The select changes style to communicates that a user has
              highlighted a valid select.
            </>
          ),
          media: getIllustrationComponent(
            'components/select/states/valid-focus',
          ),
        },
        {
          title: 'Valid hover',
          description:
            'The select changes style to let the user know the select is in a valid state, and hovered over.',
          media: getIllustrationComponent(
            'components/select/states/valid-focus',
          ),
        },
        {
          title: 'Invalid',
          description: (
            <>
              The select changes style to let the user know the select is in an
              invalid state.
              <br />
              <br />
              The input style change and validation icon can appear as soon as a
              user types a valid entry in the input or on submit.
              <br />
              <br />
              Use the form component to validate behaviour.
            </>
          ),
          media: getIllustrationComponent('components/select/states/invalid'),
        },
        {
          title: 'Invalid focus',
          description:
            'The select changes style to communicate that a user has highlighted an invalid select.',
          media: getIllustrationComponent(
            'components/select/states/invalid-focus',
          ),
        },
        {
          title: 'Invalid hover',
          description:
            'The select changes style to let the user know the select is in an invalid state, and hovered over.',
          media: getIllustrationComponent(
            'components/select/states/invalid-hover',
          ),
        },
        {
          title: 'Disabled',
          description: (
            <>
              Communicates to the user that an input exists, but cannot be
              modified in that scenario.
              <br />
              <br />
              Disabled selects maintain layout consistency and communicate that
              an input may become available if another condition is met (e.g.
              selecting a previous option in a form).
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
              user can tab to it, highlight it and copy the text from it).
              <br />
              <br />
              Read-only selects are often used to maintain layout consistency
              and communicate that an input may become available if another
              condition is met (e.g. selecting a previous option in a form).
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
      introduction: 'Here’s how the select behaves:',
      cards: [
        {
          title: 'Select input and select option item text-overflow truncation',
          description: (
            <>
              When the select input text or the select option item text is too
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
              Use the form to choose whether the select validates on submit or
              on blur, for both the initial validation and re-validation.
              <InlineMessage
                role="region"
                aria-label="Select validation"
                title="Note"
                overrides={{marginBlockStart: 'space050'}}
              >
                Validation only works if the select uses the form component.
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
              An icon indicates if the select is in a valid or invalid state.
              Use the form for validation.
            </>
          ),
          media: getIllustrationComponent(
            'components/select/behaviours/validation-icon',
          ),
        },
      ],
    }}
    usage={{
      introduction: 'Here’s how and when to use the select:',
      cards: [
        {
          title: 'Do use a select for multiple options',
          description:
            'Use a select to present multiple options where only one can be selected. If the user can select more than one option, use the checkbox instead.',
          kind: UsageKind.DO,
          media: getIllustrationComponent('components/select/usage/do-1'),
        },
        {
          title: "Don't use a select for few options",
          description: (
            <>
              Don&apos;t use a select when you have only a few options and
              enough space. Use a radio button instead. Selects can cause
              usability issues due to the number of interactions required. This
              can increase the likelihood of the user abandoning the task.
            </>
          ),
          kind: UsageKind.DONT,
          media: getIllustrationComponent('components/select/usage/dont-1'),
        },
        {
          title: 'Do use selects for four or more options',
          description:
            'Use a select when there are four or more options, and the user can only choose one.',
          kind: UsageKind.DO,
          media: getIllustrationComponent('components/select/usage/do-2'),
        },
        {
          title: 'Don’t have an empty select on page load',
          description:
            'If a default option isn’t appropriate, use a placeholder (e.g. ‘select an option’).',
          kind: UsageKind.DONT,
          media: getIllustrationComponent('components/select/usage/dont-3'),
        },
        {
          title: 'Don’t use selects for adding or removing options',
          description:
            'If you want the user to be able to add and remove options, use a text field with tags or a combobox instead.',
          kind: UsageKind.DONT,
          media: getIllustrationComponent('components/select/usage/dont-2'),
        },
      ],
    }}
    accessibility={{
      introduction: (
        <>
          The Select component has the following accessibility considerations:
          <Block spaceStack="space100" />
          <ContentText title="Grouping Selects" titleAs="span">
            Group selects and related elements (e.g. labels and assistive text)
            together using the fieldset component with a title attributed to the
            elements called a legend.
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
            element: 'Start enhancer',
            role:
              'Focusses to the start enhancer (if provided and interactive)',
          },
          {
            order: 2,
            element: 'Select',
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
              'When focus is outside the select, moves focus to the input container. If focus is on the input container, moves focus to the end enhancer (if provided, and interactive)',
          },
          {
            command: ['Space'],
            description: 'Launches/closes the select panel',
          },
          {
            command: ['Up'],
            description:
              'When focus is inside the select panel, moves focus upwards through the option items in the select panel',
          },
          {
            command: ['Down'],
            description:
              'When focus is inside the select panel, moves focus downwards through the option items in the select panel',
          },
          {
            command: ['Home'],
            description:
              'When focus is inside the select panel, moves to the first available option item in the select panel',
          },
          {
            command: ['End'],
            description:
              'When focus is inside the select panel, moves to the last available option item in the select panel',
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
              'Defines a string that labels the action that will be performed when the user interacts with the select',
            userSupplied: true,
          },
          {
            element: 'Label',
            attribute: 'aria-required',
            value: 'string',
            description:
              'Informs the user that an input is required. When set to ‘true’, screen readers notify users that the element is required',
            userSupplied: true,
          },
          {
            element: 'Label',
            attribute: 'aria-invalid',
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
          The select component is composed of three key elements. They have a
          range of props to define the experience in different use cases.
          <InlineMessage overrides={{marginBlockStart: 'space080'}}>
            There are two components exported from the package, one for use
            within the form and one for use as a controlled component.
          </InlineMessage>
        </>
      ),
      components: [
        {
          title: 'FormInputSelect',
          summary: `The form input select has a range of props to define the experience in different use cases. Use within the form.`,
          propsRows: commonPropsRows,
          overridesRows: commonOverridesRows,
          overridesFooter: selectOverridesFooter,
        },
        {
          title: 'Select',
          summary: `The select has a range of props to define the experience in different use cases. Use within the form.`,
          propsRows: [
            {
              name: 'name',
              type: 'string',
              description:
                'If provided, defines name of the input element. Use when submitting an HTML form.',
            },
            ...commonPropsRows,
          ],
          overridesRows: commonOverridesRows,
          overridesFooter: selectOverridesFooter,
        },
        {
          title: 'SelectOption',
          summary:
            'The selectOption has a range of props to define the experience in different use cases. Use within the form.',
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
