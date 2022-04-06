import React from 'react';
import {Block, LinkInline, InlineMessage, IconFilledInfo} from 'newskit';
import {MetaStatus} from '../../components/meta/types';
import {LayoutProps} from '../../components/layout';
import {ComponentPageTemplate} from '../../templates/component-page-template';
import {getIllustrationComponent} from '../../components/illustrations/illustration-loader';
import {Link} from '../../components/link';

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
      status: MetaStatus.Beta,
      introduced: 'v4.3.0',
      codeUrl: 'https://github.com/newscorp-ghfb/newskit/tree/main/src/select',
      figmaUrl:
        'https://www.figma.com/file/FSbCQa6SzVR3K48ZWLeD77/NK-Web-Components?node-id=4603%3A124656',
    }}
    anatomy={{
      introduction:
        'The select component contains five required elements and two optional elements',
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
            'Used to add a component to the start of the input container. Eg. an Icon or Button',
          component: 'React.ReactNode',
          optional: true,
        },
        {
          name: 'Input & Placeholder Text',
          description:
            'Input text - a value the user has entered into a input. Placeholder text - a short hint that describes the expected value of an input',
          component: 'Text block',
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
        'The Radio Button has options that can be used to provide an appropriate experience for different use cases.',
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
              <Link href="/components/radio-button/">Form.</Link>
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

export default SelectComponent;
