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
    description: `Defines the size of the ${type} checkbox.`,
  },
  {
    name: 'state',
    type: ['valid', 'invalid', 'disabled'],
    description: `If true, renders the ${type} checkbox in a valid, invalid, or disabled state. Can be submitted within a form.`,
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
    description: `Passes HTML attributes to the label`,
  },
];

const commonOverridesRows = [
  {
    attribute: 'input.size',
    type: 'checkboxSize',
    default: ['Small = sizing050', 'Medium = sizing060', 'Large =sizing070'],
    description: 'If provided, overrides the size of the checkbox input',
  },
  {
    attribute: 'input.stylePreset',
    type: 'MQ<string>',
    default: 'inputField',
    description: 'If provided, overrides the stylePreset of the checkbox input',
  },
  {
    attribute: 'input.transitionPreset',
    type: 'MQ<string>',
    default: 'backgroundColorChange, borderColorChange',
    description:
      'If provided, overrides the transitionPreset of the checkbox input',
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
      'If provided, overrides the inline space between the checkbox input and label',
  },
  {
    attribute: 'spaceStack(deprecated)',
    type: 'MQ<string>',
    default: '',
    description:
      'This property is deprecated. Use marginBlockEnd instead. If provided, overrides the stack space applied to the checkbox',
  },
  {
    attribute: 'icon',
    type: 'MQ<string>',
    default: 'check',
    description: 'If provided, overrides the checkbox icon',
  },
  {
    attribute: 'icon.size',
    type: 'MQ<string>',
    default: 'iconSize020',
    description: 'If provided, overrides the size of the checkbox icon',
  },
  {
    attribute: 'icon.stylePreset',
    type: 'MQ<string>',
    default: 'inkInverse',
    description: 'If provided, overrides the stylePreset of the checkbox icon',
  },
  {
    attribute: 'feedback.size',
    type: 'feedbackSize',
    default: ['Small = sizing070', 'Medium = sizing080', 'Large = sizing090'],
    description: 'If provided, this overrides the size of the feedback element',
  },
  {
    attribute: 'feedback.stylePreset',
    type: 'feedbackSize',
    default: '',
    description:
      'If provided, this overrides the stylePreset of the feedback element',
  },
  {
    attribute: 'feedback.transitionPreset',
    type: 'MQ<string>',
    default: 'fade',
    description:
      'If provided, overrides the transitionPreset of the feedback element',
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
      'If provided, this overrides the typographyPreset of the Label',
  },
  {
    attribute: 'label.stylePreset',
    type: 'MQ<string>',
    default: 'inkBase',
    description: 'If provided, this overrides the stylePreset of the Label',
  },
  ...(commonLogicalProps() as OverridesRowsProps[]),
];

const CheckboxComponent = (layoutProps: LayoutProps) => (
  <ComponentPageTemplate
    headTags={{
      title: 'Checkbox',
      description:
        'Checkboxes let users select one or multiple items from a group of options. They typically appear in forms.',
    }}
    layoutProps={layoutProps}
    pageIntroduction={{
      type: 'Actions & Inputs',
      name: 'Checkbox',
      hero: {
        illustration: 'components/checkbox/hero',
      },
      introduction:
        'Checkboxes let users select one or multiple items from a group of options. They typically appear in forms.',
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
        'The checkbox component contains one required element and three optional elements.',
      rows: [
        {
          name: 'Checkbox input',
          description:
            'Selection control (input) that can be selected or unselected, and pushed into different states',
          component: ['Block'],
          optional: undefined,
        },
        {
          name: 'Icon',
          description: 'Appears within the checkbox input',
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
          description: 'Text attributed to the checkbox for context',
          component: ['Text lock'],
          optional: true,
        },
      ],
      media: getIllustrationComponent('components/checkbox/anatomy'),
    }}
    options={{
      introduction: 'The checkbox has options for different use cases:',
      cards: [
        {
          title: 'Size',
          description:
            'The checkbox input and feedback element both come in small, medium (default) and Large.',
          media: getIllustrationComponent('components/checkbox/options/size'),
        },
        {
          title: 'Icon',
          description:
            'Override the icon within the checkbox input for different checkbox states.',
          media: getIllustrationComponent('components/checkbox/options/icon'),
        },
        {
          title: 'Feedback',
          description:
            'The feedback element is non-interactive and appears in the background behind the checkbox input on hover.',
          media: getIllustrationComponent(
            'components/checkbox/options/feedback',
          ),
        },
        {
          title: 'Label',
          description: (
            <>
              Add a label to the right (end) of the checkbox to provide context.
              <InlineMessage
                overrides={{marginBlockStart: 'space030'}}
                icon={infoIcon}
                role="region"
                aria-label="checkbox label position"
              >
                You can add a label on the left (start) of a checkbox using the{' '}
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
              Group together selection controls (e.g. for input, radio button
              and checkbox) in a{' '}
              <Link href="/components/fieldset/">fieldset</Link> , along with
              labels and assistive text. Add a title to the grouped elements
              using the legend.
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
            'The default style before the user interacts with the checkbox.',
          media: getIllustrationComponent('components/checkbox/states/base'),
        },
        {
          title: 'Hover',
          description:
            'The checkbox changes style to let the user know it’s interactive. The style of the label remains the same. Users can interact with (hover) the label to check the checkbox.',
          media: getIllustrationComponent('components/checkbox/states/hover'),
        },
        {
          title: 'Focus',
          description:
            'Communicates that the user has highlighted a checkbox (e.g. via keyboard or voice).',
          media: getIllustrationComponent('components/checkbox/states/focus'),
        },
        {
          title: 'Focus Hover',
          description:
            'Communicates that the user has highlighted and hovered over a checkbox (e.g. via keyboard or voice).',
          media: getIllustrationComponent(
            'components/checkbox/states/focus-hover',
          ),
        },
        {
          title: 'Checked',
          description:
            'The checkbox input changes style to let the user know the checkbox is checked. The style of the label remains the same.',
          media: getIllustrationComponent('components/checkbox/states/checked'),
        },
        {
          title: 'Checked Hover',
          description:
            'The checkbox input changes style to let the user know the checkbox is checked and hovered over. The style of the label remains the same.',
          media: getIllustrationComponent(
            'components/checkbox/states/checked-hover',
          ),
        },
        {
          title: 'Checked Focus',
          description:
            'Communicates that the user has highlighted a checkbox (e.g. via keyboard or voice).',
          media: getIllustrationComponent(
            'components/checkbox/states/checked-focus',
          ),
        },
        {
          title: 'Checked Focus Hover',
          description:
            'Communicates that the user has highlighted and hovered over a checkbox (e.g. via keyboard or voice).',
          media: getIllustrationComponent(
            'components/checkbox/states/checked-focus-hover',
          ),
        },
        {
          title: 'Invalid',
          description: `The checkbox changes style when checkbox selection doesn’t conform to a specific format (e.g. attempting to proceed without selecting a required checkbox in a form). Use the form component to validate behaviour. The style of the label remains the same.`,
          media: getIllustrationComponent('components/checkbox/states/invalid'),
        },
        {
          title: 'Invalid Focus',
          description:
            'Communicates that the user has highlighted an invalid checkbox (e.g. via keyboard or voice).',
          media: getIllustrationComponent(
            'components/checkbox/states/invalid-focus',
          ),
        },
        {
          title: 'Invalid Hover',
          description:
            'The checkbox input changes style to let the user know the checkbox is in an invalid state and hovered over. The style of the label remains the same.',
          media: getIllustrationComponent(
            'components/checkbox/states/invalid-hover',
          ),
        },
        {
          title: 'Invalid Focus Hover',
          description:
            'Communicates that the user has highlighted and hovered over an invalid checkbox (e.g. via keyboard or voice).',
          media: getIllustrationComponent(
            'components/checkbox/states/invalid-focus-hover',
          ),
        },
        {
          title: 'Checked Invalid',
          description:
            'The checkbox input changes style to let the user know the checkbox is checked and in an invalid state. The style of the label remains the same.',
          media: getIllustrationComponent(
            'components/checkbox/states/checked-invalid',
          ),
        },
        {
          title: 'Checked Invalid Focus',
          description:
            'Communicates that the user has highlighted an invalid checkbox (e.g. via keyboard or voice).',
          media: getIllustrationComponent(
            'components/checkbox/states/checked-invalid-focus',
          ),
        },
        {
          title: 'Checked Invalid Hover',
          description:
            'The checkbox input changes style to let the user know the checkbox is checked, in an invalid state and hovered over. The style of the label remains the same.',
          media: getIllustrationComponent(
            'components/checkbox/states/checked-invalid-hover',
          ),
        },
        {
          title: 'Checked Invalid Focus Hover',
          description:
            'Communicates that the user has highlighted and hovered over an invalid checkbox (e.g. via keyboard or voice).',
          media: getIllustrationComponent(
            'components/checkbox/states/checked-invalid-focus-hover',
          ),
        },
        {
          title: 'Valid',
          description:
            'The checkbox changes style when checkbox selection criteria are met (e.g. updating preferences in a form). Use the form component to validate behaviour. The style of the label remains the same.',
          media: getIllustrationComponent('components/checkbox/states/valid'),
        },
        {
          title: 'Valid Focus',
          description:
            'Communicates that the user has highlighted a valid checkbox (e.g. via keyboard or voice).',
          media: getIllustrationComponent(
            'components/checkbox/states/valid-focus',
          ),
        },
        {
          title: 'Valid Hover',
          description:
            'The checkbox input changes style to let the user know the checkbox is in a valid state and hovered over. The style of the label remains the same.',
          media: getIllustrationComponent(
            'components/checkbox/states/valid-hover',
          ),
        },
        {
          title: 'Valid Focus Hover',
          description:
            'Communicates that the user has highlighted and hovered over a valid checkbox (e.g. via keyboard or voice).',
          media: getIllustrationComponent(
            'components/checkbox/states/valid-focus-hover',
          ),
        },
        {
          title: 'Checked Valid',
          description:
            'The checkbox input changes style to let the user know the checkbox is checked and in a valid state. The style of the label remains the same.',
          media: getIllustrationComponent(
            'components/checkbox/states/checked-valid',
          ),
        },
        {
          title: 'Checked Valid Focus',
          description:
            'Communicates that the user has highlighted a valid checkbox (e.g. via keyboard or voice).',
          media: getIllustrationComponent(
            'components/checkbox/states/checked-valid-focus',
          ),
        },
        {
          title: 'Checked Valid Hover',
          description:
            'The checkbox input changes style to let the user know the checkbox is checked, in a valid state and hovered over. The style of the label remains the same.',
          media: getIllustrationComponent(
            'components/checkbox/states/checked-valid-hover',
          ),
        },
        {
          title: 'Checked Valid Focus Hover',
          description:
            'Communicates that the user has highlighted and hovered over a valid checkbox (e.g. via keyboard or voice).',
          media: getIllustrationComponent(
            'components/checkbox/states/checked-valid-focus-hover',
          ),
        },
        {
          title: 'Disabled',
          description: (
            <>
              Communicates that a checkbox exists, but isn’t available in that
              scenario. When the user hovers over a checkbox in a disabled
              state, the cursor shows as ‘not allowed’.
              <br />
              <br />
              Disabled checkboxes maintain layout consistency and communicate
              that a checkbox may become available if another condition is met.
              The style of the label (colour) changes to indicate that the
              checkbox is disabled.
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
              Communicates that a checkbox exists, but isn’t available in that
              scenario. When the user hovers over a checkbox in a checked
              disabled state, the cursor shows as ‘not allowed’.
              <br />
              <br />
              Disabled checked checkboxes maintain layout consistency and
              communicate that a checkbox may become available if another
              condition is met. The style of the label (colour) changes to
              indicate that the checkbox is checked and disabled.
            </>
          ),
          media: getIllustrationComponent(
            'components/checkbox/states/checked-disabled',
          ),
        },
      ],
      notice:
        'The feedback element becomes visible (configurable) on state change (e.g. hover).',
    }}
    behaviors={{
      introduction:
        'The following guidance describes how the Checkbox component behaves.',
      cards: [
        {
          title: 'Checked vs unchecked',
          description:
            'Checkboxes can be checked or unchecked. An icon appears in the centre of the checkbox to indicate the checked state.',
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
              When the checkbox is checked, the ‘check’ icon fades up in the
              centre of the checkbox and{' '}
              <InlineCode>backgroundColor</InlineCode> and{' '}
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
            'The checkbox feedback element indicates the minimum clickable area for the checkbox input (also known as hit area or touch target area). The size of the clickable area changes according to the size of the checkbox. The associated label is also clickable.',
          media: getIllustrationComponent(
            'components/checkbox/behaviours/clickable-area',
          ),
        },
        {
          title: 'Focussable area',
          description:
            'The checkbox input and label are both interactive, and a user can hover over either, but only the checkbox input is focussable (e.g. via keyboard or voice).',
          media: getIllustrationComponent(
            'components/checkbox/behaviours/focusable-area',
          ),
        },
        {
          title: 'Validation',
          description: (
            <>
              Use the form to choose whether the checkbox validates on submit or
              on blur, for both the initial validation and re-validation.
              <br />
              <InlineMessage
                overrides={{marginBlockStart: 'space050'}}
                icon={infoIcon}
                role="region"
                aria-label="formInput checkbox validation"
                title="Note"
              >
                Validation only works if the form input checkbox uses the form
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
            'You can auto-focus on the checkbox on page load (when mounted).',
          media: getIllustrationComponent(
            'components/checkbox/behaviours/autofocus',
          ),
        },
        {
          title: 'Default checked',
          description:
            'The checkbox’s initial state can be set to checked or unchecked by default (controlled or uncontrolled).',
          media: getIllustrationComponent(
            'components/checkbox/behaviours/default-checked',
          ),
        },
      ],
    }}
    usage={{
      introduction: 'Here’s how and when to use the checkbox:',
      cards: [
        {
          title: 'Do use checkboxes for up to 7 options',
          description:
            'If you have more than 7 checkboxes in a group, use a select.',
          kind: UsageKind.DO,
          media: getIllustrationComponent('components/checkbox/usage/do-1'),
        },
        {
          title: 'Do use checkboxes for selecting multiple options',
          description:
            'Use checkboxes either for selecting multiple options from a list, or to check or uncheck a control. If users can only select a single option, use the radio button instead.',
          kind: UsageKind.DO,
          media: getIllustrationComponent('components/checkbox/usage/do-2'),
        },
        {
          title: 'Do give checkboxes a label',
          description:
            'Checkboxes should have an associated label to give users context.',
          kind: UsageKind.DO,
          media: getIllustrationComponent('components/checkbox/usage/do-3'),
        },
        {
          title: 'Do put labels on the right of grouped checkboxes',
          description:
            'Align checkbox inputs vertically. This makes them easier to find, especially for users of screen magnifiers.',
          kind: UsageKind.DO,
          media: getIllustrationComponent('components/checkbox/usage/do-4'),
        },
        {
          title: 'Do display checkboxes vertically',
          description:
            'Align checkbox inputs vertically. This makes them easier to find, especially for users of screen magnifiers.',
          kind: UsageKind.DO,
          media: getIllustrationComponent('components/checkbox/usage/do-5'),
        },
        {
          title: "Don't check options by default",
          description:
            'Avoid default checked options. Users might not realise they’ve missed a question and submit an unintended answer.',
          kind: UsageKind.DONT,
          media: getIllustrationComponent('components/checkbox/usage/dont-1'),
        },
        {
          title: 'Do make error text clear and simple',
          description:
            'Error text should be clear, concise and written in complete sentences - and it should tell the user how to resolve the issue.',
          kind: UsageKind.DO,
          media: getIllustrationComponent('components/checkbox/usage/do-6'),
        },
      ],
    }}
    accessibility={{
      introduction: (
        <>
          The Checkbox has the following accessibility considerations:
          <Block spaceStack="space100" />
          <ContentText title="Grouping Checkboxes">
            Group checkboxes and related elements (e.g. labels and assistive
            text) together using the fieldset component with a title attributed
            to the elements called a legend.
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
            description: 'Moves focus to the checkbox input',
          },
          {
            command: ['Space'],
            description: 'Checks and unchecks the checkbox ',
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
              'Defines a string that labels the action that will be performed when the user interacts with the checkbox',
            userSupplied: true,
          },
          {
            element: 'required',
            attribute: 'aria-required',
            value: 'object',
            description:
              'Informs the user that an input is required. When set to ‘true’, screen readers notify users that the element is required',
            userSupplied: true,
          },
          {
            element: 'invalid',
            attribute: 'aria-invalid',
            value: 'object',
            description:
              'Informs the user when there’s an error. Set to ‘false’ by default. Screen readers alert users when the element is set to any value other than ‘false’',
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
          <InlineMessage
            role="region"
            aria-label="api introduction"
            overrides={{marginBlockStart: 'space080'}}
          >
            This package exports two components: a form input checkbox for use
            within the <Link href="/components/form/">form</Link> component, and
            a checkbox for use as a controlled component (e.g. where you have a
            custom validation mechanism). Both have a range of props to define
            the experience in different use cases.
          </InlineMessage>
        </>
      ),
      components: [
        {
          title: 'Form input checkbox',
          summary: (
            <>
              The form input checkbox has a range of props that can be used to
              define an appropriate experience for different use cases. Use this
              component within the <Link href="/components/form/">form</Link>{' '}
              component.
            </>
          ),
          propsRows: commonPropsRows('form input'),
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
                level. To add validation rules, or set the name of this
                component, see the <Link href="/components/form/">form</Link>{' '}
                page
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
                  If provided, define the name of the input element. Use when
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
    related={{
      related: ['Button', 'Form', 'Radio Button', 'Select'],
    }}
  />
);

export default CheckboxComponent;
