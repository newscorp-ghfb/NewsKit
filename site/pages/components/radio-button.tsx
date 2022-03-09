import React from 'react';
import {InlineMessage, Block} from 'newskit';
import {MetaStatus} from '../../components/meta/types';
import {LayoutProps} from '../../components/layout';
import {ComponentPageTemplate} from '../../templates/component-page-template';

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
      title: 'RadioButton',
      description: 'TODO',
    }}
    layoutProps={layoutProps}
    pageIntroduction={{
      type: 'Actions & Inputs',
      name: 'RadioButton',
      hero: {
        // illustration: 'components/select/select-illustration',
      },
      introduction: `TODO`,
    }}
    componentDefaultsKey="select"
    meta={{
      status: MetaStatus.Beta,
      introduced: 'v5.3',
      codeUrl:
        'https://github.com/newscorp-ghfb/newskit/tree/main/src/radio-button',
      figmaUrl:
        'https://www.figma.com/file/FSbCQa6SzVR3K48ZWLeD77/NK-Web-Components?node-id=4603%3A124656',
    }}
    componentAPI={{
      introduction: (
        <>
          TODO
          <Block spaceStack="space080" />
          <InlineMessage>
            There are two components exported from the package, one for use
            within the NewsKit Form component, and one for use as a controlled
            component.
          </InlineMessage>
        </>
      ),
      components: [
        {
          title: 'FormInputRadioButton',
          summary: `The FormInputRadioButton has a range of props that can be used to define an appropriate experience for different use cases. Use this component within the NewsKit Form component.`,
          propsRows: commonPropsRows,
          overridesRows: commonOverridesRows,
        },
        {
          title: 'RadioButton',
          summary: `The RadioButton has a range of props that can be used to define an appropriate experience for different use cases. Use this component within the NewsKit Form component.`,
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
          summary:
            'The RadioGroup has a range of props that can be used to define an appropriate experience for different use cases. Use this component within the NewsKit Form component.',
          propsRows: radioButtonPropsRows,
        },
      ],
    }}
  />
);

export default RadioButtonComponent;
