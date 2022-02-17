import React from 'react';
import {LinkInline, InlineMessage, Block} from 'newskit';
import {MetaStatus} from '../../components/meta/types';
import {LayoutProps} from '../../components/layout';
import {ComponentPageTemplate} from '../../templates/component-page-template';

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
        If provided, Select options appear in a
        <LinkInline href="/components/modal" target="_blank">
          Modal
        </LinkInline>{' '}
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
    attribute: 'button.spaceInset',
    type: 'MQ<string>',
    default: [
      'small = spaceInset020',
      'medium = spaceInset020',
      'large = spaceInset030',
    ],
    description:
      'If provided, this overrides the inset space within the Select input container.',
  },
  {
    attribute: 'button.spaceStack',
    type: 'MQ<string>',
    default: 'space020',
    description:
      'If provided, this overrides the stack space of the Select input container.',
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
    attribute: 'panel.spaceInset',
    type: 'MQ<string>',
    default: 'spaceInset020',
    description:
      'If provided, this overrides the inset space within the Select panel.',
  },
  {
    attribute: 'panel.spaceStack',
    type: 'MQ<string>',
    default: 'spaceStack010',
    description:
      'If provided, this overrides the stack space of the Select panel.',
  },
  {
    attribute: 'modal.panel.width',
    type: 'MQ<string>',
    default: '60vw',
    description:
      'If provided, this overrides the width property of the Modal panel.',
  },
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
    attribute: 'spaceInset',
    type: 'MQ<string>',
    default: [
      'small = spaceInsetSquish010',
      'medium = spaceInset020',
      'large = spaceInsetStretch030',
    ],
    description:
      'If provided, this overrides the inset space within the Select option.',
  },
  {
    attribute: 'spaceInline',
    type: 'MQ<string>',
    default: 'space020',
    description:
      'If provided, this overrides the inline space of the Select option.',
  },
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
    Checkout <LinkInline href="/components/modal">Modal component</LinkInline>{' '}
    for all props and overrides
  </InlineMessage>
);

const Select = (layoutProps: LayoutProps) => (
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
      status: MetaStatus.Beta,
      introduced: 'v4.3.0',
      codeUrl: 'https://github.com/newscorp-ghfb/newskit/tree/main/src/select',
      figmaUrl:
        'https://www.figma.com/file/FSbCQa6SzVR3K48ZWLeD77/NK-Web-Components?node-id=4603%3A124656',
    }}
    componentAPI={{
      introduction: (
        <>
          The Select component is compromised of four key elements, these have a
          range of props that can be used to define an appropriate experience
          for different use cases.
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
  />
);

export default Select;
