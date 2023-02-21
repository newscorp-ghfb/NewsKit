import React from 'react';
import {InlineMessage, toNewsKitIcon} from 'newskit';
import {Info as FilledInfo} from '@emotion-icons/material/Info';
import {Link} from '../../components/link';
import {UsageKind} from '../../components/usage-card';
import {InlineCode} from '../../components/markdown-elements';
import {TextArea} from '../../../src/text-area';
import {MetaStatus} from '../../components/meta/types';
import {LayoutProps} from '../../components/layout';
import {ComponentPageTemplate} from '../../templates/component-page-template';
import {getIllustrationComponent} from '../../components/illustrations/illustration-loader';
import {getLogicalPropsTable} from '../../components/component-api/common-logical-props';

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
    description: 'Defines the size of the FormInput TextArea.',
  },
  {
    name: 'state',
    type: ['valid', 'invalid', 'disabled'],
    description:
      'If provided, renders the FormInput TextArea in a valid, invalid, or disabled state. It can be submitted within a form.',
  },
  {
    name: 'resize',
    type: ['none', 'vertical', 'horizontal', 'both'],
    default: 'vertical',
    description: (
      <>
        If true, sets whether the FormInput TextArea is resizable, and if so, in
        which direction.
        <br />
        <br />
        If set to none, hides the resize handle that appears on the bottom right
        of the input container.
      </>
    ),
  },
  {
    name: 'eventOriginator',
    type: 'string',
    description: 'This prop allows users to add event originator custom name.',
  },
  {
    name: 'eventContext',
    type: 'object',
    description:
      'This prop allows users to add extra event data to focus events.',
  },
];

const commonOverridesRows = [
  {
    attribute: 'width',
    type: 'MQ<string>',
    default: '100%',
    description: 'If provided, this overrides the width of the Text Area.',
  },
  {
    attribute: 'height',
    type: 'MQ<string>',
    default: ['small = sizing100', 'medium = sizing110', 'large = sizing110'],
    description: 'If provided, this overrides the height of the Text Area.',
  },
  {
    attribute: 'maxHeight',
    type: 'MQ<string>',
    description: 'If provided, this limits the resize height of the Text Area.',
  },
  {
    attribute: 'maxWidth',
    type: 'MQ<string>',
    description: 'If provided, this limits the resize width of the Text Area.',
  },
  {
    attribute: 'minHeight',
    type: 'MQ<string>',
    default: ['small = sizing070', 'medium = sizing080', 'large = sizing090'],
    description:
      'If provided, this limits the minimum height of the Text Area.',
  },
  {
    attribute: 'minWidth',
    type: 'MQ<string>',
    description: 'If provided, this limits the minimum width of the Text Area.',
  },
  {
    attribute: 'stylePreset',
    type: 'MQ<string>',
    default: 'inputField',
    description: 'If provided, overrides the stylePreset of the Text Area.',
  },
  {
    attribute: 'typographyPreset',
    type: 'MQ<string>',
    default: [
      'small = utilityBody020',
      'medium = utilityBody020',
      'large = utilityBody030',
    ],
    description: 'If provided, this overrides the input & placeholder text.',
  },
  ...getLogicalPropsTable(undefined, undefined, {
    paddingBlock: ['small: space020', 'medium: space030', 'large: space040'],
    paddingInline: ['small: space020', 'medium: space030', 'large: space040'],
    marginBlockEnd: ['small: space020', 'medium: space020', 'large: space020'],
  }),
];

const TextAreaComponent = (layoutProps: LayoutProps) => (
  <ComponentPageTemplate
    headTags={{
      title: 'Text Area',
      description:
        'Text areas allow users to enter and edit multi-line text. They typically appear in forms.',
    }}
    layoutProps={layoutProps}
    pageIntroduction={{
      type: 'Actions & Inputs',
      name: 'Text Area',
      hero: {
        illustration: 'components/text-area-illustration',
      },
      introduction:
        'Text areas allow users to enter and edit multi-line text. They typically appear in forms.',
    }}
    componentDefaultsKey="textArea"
    meta={{
      status: MetaStatus.Supported,
      introduced: 'v6.1.0',
      codeUrl:
        'https://github.com/newscorp-ghfb/newskit/blob/main/src/text-area/text-area.tsx',
      figmaUrl:
        'https://www.figma.com/file/FSbCQa6SzVR3K48ZWLeD77/%F0%9F%9F%A2-NK-Web-Components',
      storybookId: 'components-text-area--text-area-sizes',
    }}
    interactiveDemo={{
      introduction:
        'This demo allows you to preview the text area component, its variations, and configuration options.',
      playground: {
        componentName: 'TextArea',
        component: state => <TextArea placeholder="Placeholder" {...state} />,
        knobs: [
          {
            name: 'Size',
            propName: 'size',
            options: [
              {
                label: 'Default',
                value: undefined,
                isDefault: true,
              },
              {
                label: 'Small',
                value: 'small',
              },
              {
                label: 'Medium',
                value: 'medium',
              },
              {
                label: 'Large',
                value: 'large',
              },
            ],
          },
          {
            name: 'State',
            propName: 'state',
            options: [
              {
                label: 'Default',
                value: undefined,
                isDefault: true,
              },
              {
                label: 'Valid',
                value: 'valid',
              },
              {
                label: 'Invalid',
                value: 'invalid',
              },
              {
                label: 'Disabled',
                value: 'disabled',
              },
            ],
          },
          {
            name: 'Resizes',
            propName: 'resize',
            options: [
              {
                label: 'None',
                value: 'none',
                isDefault: true,
              },
              {
                label: 'Vertical',
                value: 'vertical',
              },
              {
                label: 'Horizontal',
                value: 'horizontal',
              },
              {
                label: 'Both',
                value: 'both',
              },
            ],
          },
          {
            name: 'Overrides',
            propName: 'overrides',
            options: [
              {
                label: 'Default',
                value: undefined,
              },
              {
                label: 'Custom Style',
                value: {
                  stylePreset: 'customStyle',
                  typographyPreset: 'editorialHeadline010',
                  width: undefined,
                  minHeight: undefined,
                },
              },
              {
                label: 'Fixed width',
                value: {
                  width: '300px',
                  stylePreset: undefined,
                  typographyPreset: undefined,
                  minHeight: undefined,
                },
                isDefault: true,
              },
              {
                label: 'Fixed height',
                value: {
                  minHeight: '200px',
                  stylePreset: undefined,
                  typographyPreset: undefined,
                  width: undefined,
                },
              },
            ],
          },
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ] as any,
      },
    }}
    anatomy={{
      introduction:
        'Text areas contain three required elements and one optional element.',
      media: getIllustrationComponent('components/text-area/anatomy'),
      rows: [
        {
          name: 'Input container',
          description: 'Interactive input area.',
          component: 'HTML Textarea element',
          optional: undefined,
        },
        {
          name: 'Input & placeholder text',
          description: (
            <>
              Input text - a value the user has entered into an input.
              <br />
              <br />
              Placeholder text - a short hint that describes the expected value
              of an input.
            </>
          ),
          component: 'HTML attribute (placeholder text)',
          optional: undefined,
        },
        {
          name: 'Caret',
          description:
            'Thin vertical line that blinks to indicate where input will be inserted.',
          optional: undefined,
        },
        {
          name: 'Resize handle',
          description:
            'Indicator that appears in the bottom right corner of the input container.',
          optional: true,
        },
      ],
    }}
    options={{
      introduction:
        'The text area has options that can be used to provide an appropriate experience for different use cases.',
      cards: [
        {
          title: 'Size',
          description:
            'There are three sizes of text area: small, medium, and large. The label, input container, placeholder/input text, and assistive text change size.',
          media: getIllustrationComponent('components/text-area/options/size'),
        },
        {
          title: 'Width',
          description:
            'The width of a text area can be customised appropriately for its context, using full-width or a fixed-width value.',
          media: getIllustrationComponent('components/text-area/options/width'),
        },
        {
          title: 'Height',
          description:
            'The height of the text area input container is vertically scrollable when the set maxHeight or height is exceeded and a user inputs more information.',
          media: getIllustrationComponent(
            'components/text-area/options/height',
          ),
        },
        {
          title: 'Resize handle',
          description: (
            <>
              Text areas are resizable with a handle at the bottom right corner
              of the input container.
              <InlineMessage
                icon={infoIcon}
                role="region"
                aria-label="Resize handle"
                overrides={{marginBlockStart: 'space050'}}
              >
                The resize handle can be <InlineCode>disabled</InlineCode> in
                instances where the size of the input container is fixed.
              </InlineMessage>
            </>
          ),
          media: getIllustrationComponent(
            'components/text-area/options/resize-handle',
          ),
        },
        {
          title: 'Character count',
          description: (
            <>
              Text Areas can use{' '}
              <Link
                href="http://ncu-newskit-docs.s3-website-eu-west-1.amazonaws.com/ppdsc-2470-character-count-documentation/components/character-count/"
                target="_blank"
              >
                the character count component
              </Link>{' '}
              which lets users know how much text they can enter, displaying the
              number of characters available as a user types. The character
              limit is configurable.
            </>
          ),
          media: getIllustrationComponent(
            'components/text-area/options/character-count',
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
                icon={infoIcon}
                role="region"
                aria-label="Placeholder text"
                overrides={{marginBlockStart: 'space050'}}
              >
                Placeholder text is not accessible; use assistive text when
                providing instructions on completing a text area for clarity.
              </InlineMessage>
            </>
          ),
          media: getIllustrationComponent(
            'components/text-area/options/placeholder-text',
          ),
        },
        {
          title: 'Autocomplete',
          description: (
            <>
              The text area supports native HTML autocomplete functionality that
              provides a visual hint to users if enabled.
              <br />
              <br />
              <Link
                href="https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete"
                target="_blank"
              >
                For more information, please refer to the HTML autocomplete
                attribute.
              </Link>
            </>
          ),
          media: getIllustrationComponent(
            'components/text-area/options/autocomplete',
          ),
        },
        {
          title: 'Max and min length',
          description: (
            <>
              The text area supports native HTML max and min length value
              functionality that sets a maximum or minimum length of the number
              of characters entered, and is indicated to users via the character
              count.
              <br />
              <br />
              <Link
                href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attributes"
                target="_blank"
              >
                For more information, please refer to the HTML input attribute
                types.
              </Link>
            </>
          ),
          media: getIllustrationComponent(
            'components/text-area/options/max-and-min-length',
          ),
        },
        {
          title: 'Handling multiple text areas',
          description: (
            <>
              Selection controls (inputs), such as the FormInput TextArea, can
              be grouped together with other selection controls, labels, and
              assistive text together in a fieldset. The fieldset has a caption
              that gives a title attributed to the elements that appear in the
              fieldset, called a legend.
              <br />
              <br />
              The fieldset can also support other selection controls (inputs)
              such as the{' '}
              <Link href="/components/radio-button/">
                formInput RadioButton
              </Link>
              , and{' '}
              <Link href="/components/checkbox/">formInput checkbox.</Link>
            </>
          ),
          media: getIllustrationComponent(
            'components/text-area/options/multiple-text-areas',
          ),
        },
      ],
    }}
    states={{
      introduction:
        'The text area has the following states. They can be displayed with both placeholder content or user-inputted content:',
      layout: '3-span',
      cards: [
        {
          title: 'Base',
          description:
            'Text areas have a base state. This is the base style of the input before it has been interacted with by a user.',
          media: getIllustrationComponent('components/text-area/states/base'),
        },
        {
          title: 'Hover',
          description:
            'Text areas have a hover state. The style of the input changes to visually communicate and provide feedback to the user that the text area is an interactive element.',
          media: getIllustrationComponent('components/text-area/states/hover'),
        },
        {
          title: 'Focus',
          description:
            'Text areas have an active state. The style of the input changes to visually communicate and provide feedback to the user that the text area has been interacted.',
          media: getIllustrationComponent('components/text-area/states/focus'),
        },
        {
          title: 'Selected',
          description:
            'Text areas have a selected state. The style of the input changes and a caret element in the input is also visible to visually communicate and provide feedback to the user that the text area has been selected and they can input content.',
          media: getIllustrationComponent(
            'components/text-area/states/selected',
          ),
        },
        {
          title: 'Valid',
          description: (
            <>
              Text areas in a valid state change style and can display a valid
              icon when the inputted entry conforms to a specific format.
              <br />
              <br />
              The input style change and validation icon can appear as soon as a
              user types a valid entry in the input or on submit.
              <br />
              <br />
              The <Link href="/components/form/">form</Link> component is used
              to define this validation behaviour.
            </>
          ),
          media: getIllustrationComponent('components/text-area/states/valid'),
        },
        {
          title: 'Valid focus',
          description:
            'Text areas in a valid focus state change style when the inputted entry conforms to a specific condition or format, while focused.',
          media: getIllustrationComponent(
            'components/text-area/states/valid-focus',
          ),
        },
        {
          title: 'Valid hover',
          description:
            'Text areas in a valid hover state change style when the inputted entry conforms to a specific condition or format while hovering.',
          media: getIllustrationComponent(
            'components/text-area/states/valid-hover',
          ),
        },
        {
          title: 'Invalid',
          description: (
            <>
              Text areas in an invalid state change style and can display an
              invalid icon when the inputted entry doesn’t conform to a specific
              format.
              <br />
              <br />
              The input style change and validation icon can appear as soon as a
              user types a valid entry in the input or on submit.
              <br />
              <br />
              The <Link href="/components/form/">form</Link> component is used
              to define this validation behaviour.
            </>
          ),
          media: getIllustrationComponent(
            'components/text-area/states/invalid',
          ),
        },
        {
          title: 'Invalid focus',
          description:
            'Text areas in an invalid focus state change style when the inputted entry doesn’t conform to a specific condition or format, while focused.',
          media: getIllustrationComponent(
            'components/text-area/states/invalid-focus',
          ),
        },
        {
          title: 'Invalid hover',
          description:
            'Text areas in an invalid hover state change style when the inputted entry doesn’t conform to a specific condition or format while hovering.',
          media: getIllustrationComponent(
            'components/text-area/states/invalid-hover',
          ),
        },
        {
          title: 'Disabled',
          description: (
            <>
              Text areas in a disabled state show that an input exists, but is
              not available to the user in that scenario. When a user’s cursor
              hovers over a text area in a disabled state the cursor shows as
              not-allowed.
              <br />
              <br />
              Disabled text areas are often used to maintain layout consistency
              and communicate that the input may become available if another
              condition has been met, e.g. selecting a previous option in a
              form.
              <br />
              <br />
              Content and data in disabled text areas can not be submitted in a
              form.
            </>
          ),
          media: getIllustrationComponent(
            'components/text-area/states/disabled',
          ),
        },
        {
          title: 'Read-only',
          description: (
            <>
              Text areas in a read-only state communicate to the user that an
              input exists, but cannot be modified in that scenario (however, a
              user can tab to it, highlight it, and copy the text from it).
              <br />
              <br />
              Read-only text areas are often used to maintain layout consistency
              and communicate that the input may become available if another
              condition has been met, e.g. selecting a previous option in a
              form.
              <br />
              <br />
              Content and data in read-only text areas can be submitted in a
              form.
            </>
          ),
          media: getIllustrationComponent(
            'components/text-area/states/read-only',
          ),
        },
      ],
    }}
    behaviors={{
      introduction:
        'The following guidance describes how the text area component behaves.',
      cards: [
        {
          title: 'Input text overflow wrap and truncation',
          description: (
            <>
              When the input text is too long for the available horizontal
              space, it wraps to another line when text is inputted.
              <InlineMessage
                icon={infoIcon}
                role="region"
                aria-label="Input text overflow"
                overrides={{marginBlockStart: 'space050'}}
              >
                Truncation in the form of{' '}
                <InlineCode>text-overflow: elipsis</InlineCode> (…) is not
                supported for the text area.
              </InlineMessage>
            </>
          ),
          media: getIllustrationComponent(
            'components/text-area/behaviours/truncation',
          ),
        },
        {
          title: 'Validation',
          description: (
            <>
              The text area validation rules can be defined for onSubmit or
              onBlur, for both the initial validation and re-validation using
              the <Link href="/components/form/">form component.</Link>
              <InlineMessage
                icon={infoIcon}
                role="region"
                aria-label="Validation"
                overrides={{marginBlockStart: 'space050'}}
              >
                Validation only works if the FormInput TextArea uses the form
                component.
              </InlineMessage>
            </>
          ),
          media: getIllustrationComponent(
            'components/text-area/behaviours/validation',
          ),
        },
      ],
    }}
    usage={{
      introduction: 'Here’s how and when to use the text area:',
      cards: [
        {
          title: 'Do use propotional heights',
          description: (
            <>
              The height of the text area input container should be proportional
              to the amount of text the user is expected to enter. This can be
              set via the <InlineCode>maxHeight</InlineCode> property.
            </>
          ),
          kind: UsageKind.DO,
          media: getIllustrationComponent('components/text-area/usage/do-01'),
        },
        {
          title: "Don't use text areas for single line inputs",
          description: (
            <>
              Avoid using text areas if you need to let users enter shorter
              answers no longer than a single line. In this case, you should use
              the{' '}
              <Link href="/components/text-field/">text field component.</Link>
            </>
          ),
          kind: UsageKind.DONT,
          media: getIllustrationComponent('components/text-area/usage/dont-01'),
        },
        {
          title: 'Do allow users to copy and paste text',
          description:
            'Allow users to copy and paste text into the text area input container.',
          kind: UsageKind.DO,
          media: getIllustrationComponent('components/text-area/usage/do-02'),
        },
        {
          title:
            "Don't use text areas to capture multiple pieces of information",
          description:
            'Avoid using text areas to capture multiple pieces of information from users, as this increases cognitive load. Instead, consider using multiple text areas, or text fields.',
          kind: UsageKind.DONT,
          media: getIllustrationComponent('components/text-area/usage/dont-02'),
        },
        {
          title: 'Do provide a label for context',
          description: (
            <>
              Text areas should have a{' '}
              <Link href="/components/form/">label</Link> associated to give
              users context of what the text area represents.
            </>
          ),
          kind: UsageKind.DO,
          media: getIllustrationComponent('components/text-area/usage/do-03'),
        },
        {
          title: "Don't block a user from entering information",
          description:
            'Avoid limiting the number of characters users can enter unless there is a specific requirement for doing so.',
          kind: UsageKind.DONT,
          media: getIllustrationComponent('components/text-area/usage/dont-03'),
        },
      ],
    }}
    accessibility={{
      introduction:
        'The text area has the following accessibility considerations:',
      focusOrder: {
        title: 'Focus order',
        tableRows: [
          {
            order: 1,
            element: 'Text area',
            role: 'Focusses to the input container',
          },
        ],
      },
      interaction: {
        title: 'Keyboard Interactions',
        tableRows: [
          {
            command: ['Tab'],
            description:
              'When focus is outside of the text area, it moves focus to the input container.',
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
              'Aria-label attribute is used to define a string that labels the action that will be performed when the user interacts with the text area',
            userSupplied: true,
          },
          {
            element: 'required',
            attribute: 'aria-required',
            value: 'object',
            description:
              'This attribute informs the user that an input is required. When set to true, screen readers notify users that the input is required',
            userSupplied: true,
          },
        ],
      },
    }}
    componentAPI={{
      introduction: (
        <>
          The text area has a range of props that can be used to define an
          appropriate experience for different use cases.
          <InlineMessage
            icon={infoIcon}
            role="region"
            aria-label="textArea api"
            overrides={{marginBlockStart: 'space080'}}
          >
            There are two components exported from the package, one for use
            within the{' '}
            <Link href="/components/form/">NewsKit form component</Link>, and
            one for use as a controlled component.
          </InlineMessage>
        </>
      ),
      components: [
        {
          title: 'FormInput TextArea',
          summary: (
            <>
              The FormInput TextArea has a range of props that can be used to
              define an appropriate experience for different use cases. Use this
              component within the{' '}
              <Link href="/components/form/">NewsKit form component.</Link>
            </>
          ),
          propsRows: commonPropsRows,
          propsFooter: (
            <>
              <InlineMessage
                icon={infoIcon}
                role="region"
                aria-label="Value attribute"
                overrides={{marginBlockStart: 'space050'}}
              >
                In React, a &lt;textarea&gt; uses a{' '}
                <InlineCode>value</InlineCode> attribute. This way a form using
                a &lt;textarea&gt; can be written very similarly to a form that
                uses a single-line input. The &lt;textarea&gt; does not support
                the <InlineCode>value</InlineCode> attribute.
              </InlineMessage>
              <InlineMessage
                icon={infoIcon}
                role="region"
                aria-label="Addition to the props"
                overrides={{marginBlockStart: 'space030'}}
              >
                In addition to the props that come with the text area component,{' '}
                <Link
                  href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea#attributes"
                  target="_blank"
                >
                  native text area attributes
                </Link>{' '}
                are also supported by passing them down to the text area
                component.
              </InlineMessage>
              <InlineMessage
                icon={infoIcon}
                role="region"
                aria-label="Rules props"
                overrides={{marginBlockStart: 'space030'}}
              >
                The <InlineCode>name</InlineCode> &{' '}
                <InlineCode>rules</InlineCode> props are set on the form input
                level. If you want to add validation rules or set the name of
                this component,{' '}
                <Link href="/components/form/">
                  please refer to the form component.
                </Link>
              </InlineMessage>
              <InlineMessage
                icon={infoIcon}
                role="region"
                aria-label="Passing unset"
                overrides={{marginBlockStart: 'space030'}}
              >
                Native attributes <InlineCode>rows</InlineCode> &{' '}
                <InlineCode>cols</InlineCode> can be used by passing unset width
                and height down to the text area component.
              </InlineMessage>
            </>
          ),
          overridesRows: commonOverridesRows,
        },
        {
          title: 'Text area',
          summary:
            'The text area has a range of props that can be used to define an appropriate experience for different use cases. Use this component as a controlled component, for instance where you have a custom validation mechanism.',
          propsRows: [
            {
              name: 'name',
              type: 'string',
              description:
                'If provided, defines name of the input element, used when submitting an HTML form',
            },
            ...commonPropsRows,
          ],
          overridesRows: commonOverridesRows,
        },
      ],
    }}
    related={{
      related: ['Form', 'Text Field'],
    }}
  />
);

export default TextAreaComponent;
