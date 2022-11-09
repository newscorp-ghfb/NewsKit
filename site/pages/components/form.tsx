import React from 'react';
import {
  InlineMessage,
  TextBlock,
  toNewsKitIcon,
  Block,
  Form,
  Button,
  styled,
  EmailInput,
  UnorderedList,
} from 'newskit';
import {Info as FilledInfo} from '@emotion-icons/material/Info';
import {Link} from '../../components/link';
import {Code} from '../../components/code';
import {UsageKind} from '../../components/usage-card';
import {MetaStatus} from '../../components/meta/types';
import {InlineCode} from '../../components/markdown-elements';
import {ContentText} from '../../components/text-section/content-text';
import {LegacyBlock} from '../../components/legacy-block';
import {LayoutProps} from '../../components/layout';
import {ComponentPageTemplate} from '../../templates/component-page-template/component-page-template';
import {getIllustrationComponent} from '../../components/illustrations/illustration-loader';

const IconFilledInfo = toNewsKitIcon(FilledInfo);

const infoIcon = (
  <IconFilledInfo
    overrides={{
      size: 'iconSize020',
    }}
  />
);

const CodeBlock: React.FC<{children: string}> = ({children}) => (
  <TextBlock
    as="div"
    stylePreset="inkContrast"
    typographyPreset="editorialLabel010"
  >
    <Code>{children}</Code>
  </TextBlock>
);

const commonLogicalRows = () => [
  {
    name: 'paddingInline',
    type: 'MQ<string>',
    description:
      'It can take one space token to specify the logical inline start and end padding of the container. This space token can also be used on breakpoints.',
  },
  {
    name: 'paddingInlineStart',
    type: 'MQ<string>',
    description:
      'It can take one space token to specify the logical inline start padding of the container. This space token can also be used on breakpoints.',
  },
  {
    name: 'paddingInlineEnd',
    type: 'MQ<string>',
    description:
      'It can take one space token to specify the logical inline end padding of the container. This space token can also be used on breakpoints.',
  },
  {
    name: 'paddingBlock',
    type: 'MQ<string>',
    description:
      'It can take one space token to specify the logical block start and end padding of the container. This space token can also be used on breakpoints.',
  },
  {
    name: 'paddingBlockStart',
    type: 'MQ<string>',
    description:
      'It can take one space token to specify the logical block start padding of the container. This space token can also be used on breakpoints.',
  },
  {
    name: 'paddingBlockEnd',
    type: 'MQ<string>',
    description:
      'It can take one space token to specify the logical block end padding of the container. This space token can also be used on breakpoints.',
  },
  {
    name: 'marginInline',
    type: 'MQ<string>',
    description:
      'It can take one space token to specify the logical inline start and end margin of the container. This space token can also be used on breakpoints.',
  },
  {
    name: 'marginInlineStart',
    type: 'MQ<string>',
    description:
      'It can take one space token to specify the logical inline start margin of the container. This space token can also be used on breakpoints.',
  },
  {
    name: 'marginInlineEnd',
    type: 'MQ<string>',
    description:
      'It can take one space token to specify the logical inline end margin of the container. This space token can also be used on breakpoints.',
  },
  {
    name: 'marginBlock',
    type: 'MQ<string>',
    description:
      'It can take one space token to specify the logical block start and end margin of the container. This space token can also be used on breakpoints.',
  },
  {
    name: 'marginBlockStart',
    type: 'MQ<string>',
    description:
      'It can take one space token to specify the logical block start margin of the container. This space token can also be used on breakpoints.',
  },
  {
    name: 'marginBlockEnd',
    type: 'MQ<string>',
    description:
      'It can take one space token to specify the logical block end margin of the container. This space token can also be used on breakpoints.',
  },
];

const FormComponent = (layoutProps: LayoutProps) => (
  <ComponentPageTemplate
    headTags={{
      title: 'Form',
      description:
        'The form component allows users to enter and edit information into a UI using form controls; based on React Hook Form.',
    }}
    layoutProps={layoutProps}
    pageIntroduction={{
      type: 'Actions & Inputs',
      name: 'Form',
      hero: {
        illustration: 'components/form/hero',
      },
      introduction: (
        <>
          Forms let users enter and edit information using form controls. Based
          on{' '}
          <Link href="https://react-hook-form.com/" target="_blank">
            React Hook Form.
          </Link>
        </>
      ),
    }}
    componentDefaultsKey="Form"
    meta={{
      status: MetaStatus.Supported,
      introduced: 'v0.19.0',
      codeUrl: 'https://github.com/newscorp-ghfb/newskit/tree/main/src/form',
    }}
    interactiveDemo={{
      introduction:
        'This demo lets you preview the form component, its variations and configuration options.',
      playground: {
        componentName: 'Form',
        component: state => {
          const onSubmit = () => '';
          const Container = styled.div`
            width: 300px;
          `;
          return (
            <>
              <LegacyBlock display="flex">
                <Container>
                  <Form onSubmit={onSubmit} {...state}>
                    <Block>
                      <EmailInput
                        label="Email"
                        name="Email"
                        placeholder="Placeholder"
                        {...state}
                      />
                      <Block spaceStack="space040" />
                      <Button type="submit">Submit</Button>
                    </Block>
                  </Form>
                </Container>
              </LegacyBlock>
            </>
          );
        },
        knobs: [
          {
            name: 'Validation Mode',
            propName: 'validationMode',
            options: [
              {
                label: 'Default (onSubmit)',
                value: undefined,
              },
              {
                label: 'onBlur',
                value: 'onBlur',
              },
            ],
          },
          {
            name: 'ReValidation Mode',
            propName: 'reValidationMode',
            options: [
              {
                label: 'Default (onBlur)',
                value: undefined,
              },
              {
                label: 'onSubmit',
                value: 'onSubmit',
              },
            ],
          },
        ],
      },
    }}
    anatomy={{
      components: [
        {
          title: 'Form',
          summary:
            'The form component contains two required elements and no optional elements.',
          media: getIllustrationComponent(
            'components/form/anatomy/anatomy-form',
          ),
          rows: [
            {
              name: 'Form provider',
              description: 'Validates the context of a form',
              component: ['React Hook Form', 'Form HTML element'],
              optional: undefined,
            },
            {
              name: 'Form input',
              description:
                'Needs to be passed in an object of rules to validate the form',
              component: 'React component',
              optional: undefined,
            },
          ],
        },
        {
          title: 'Form input components',
          summary:
            'These are the form input components available for use with the form:',
          media: getIllustrationComponent(
            'components/form/anatomy/anatomy-forminput-components',
          ),
          rows: [
            {
              name: 'FormInputLabel',
              description: 'Based on the label component',
              component: 'Label',
              optional: true,
            },
            {
              name: 'FormInputAssistiveText',
              description: 'Based on the assistive text component',
              component: 'Text block',
              optional: true,
            },
            {
              name: 'FormInputTextArea',
              description: 'Based on the text area component',
              component: 'Text area',
              optional: true,
            },
            {
              name: 'FormInputTextField',
              description: 'Based on the text field component',
              component: 'Text field',
              optional: true,
            },
            {
              name: 'FormInputSelect',
              description: 'Based on the select component',
              component: 'Select',
              optional: true,
            },
            {
              name: 'FormInputCheckbox',
              description: 'Based on the checkbox component',
              component: 'Checkbox',
              optional: true,
            },
            {
              name: 'FormInputRadio Button',
              description: 'Based on the radio button component',
              component: 'Radio button',
              optional: true,
            },
          ],
        },
      ],
      rows: [],
    }}
    options={{
      introduction:
        'Form input components have options for different use cases:',
      cards: [
        {
          title: 'FormInputLabel',
          description: (
            <>
              When wrapped inside the <InlineCode>FormInput</InlineCode>{' '}
              component, the state can be passed down to the{' '}
              <InlineCode>FormInputLabel</InlineCode> component if the user
              desires.
              <InlineMessage
                icon={infoIcon}
                role="region"
                aria-label="Form input label"
                title="Note"
                overrides={{
                  marginBlockStart: 'space050',
                }}
              >
                Ensure screen readers can read labels by setting the aria-label
                attribute to the label text’s value.
              </InlineMessage>
            </>
          ),
          media: getIllustrationComponent('components/form/options/label'),
        },
        {
          title: 'FormInputAssistiveText',
          description: (
            <>
              When wrapped inside the <InlineCode>FormInput</InlineCode>, the
              state can be passed down to the
              <InlineCode>FormInputAssistiveText</InlineCode> component,
              depending on if validation is a success or error state.
              <br />
              <br />
              <InlineCode>FormInputAssistiveText</InlineCode> can also display a
              character count to let users know how much text they can enter,
              when there is a limit set on the number of characters on a{' '}
              <Link href="/components/text-field/#component-api">
                text field
              </Link>{' '}
              or text area.
            </>
          ),
          media: getIllustrationComponent(
            'components/form/options/assistive-text',
          ),
        },
        {
          title: 'FormInputTextArea',
          description: (
            <>
              When wrapped inside the <InlineCode>FormInput</InlineCode> the
              state can be passed down to the{' '}
              <InlineCode>FormInputTextField</InlineCode> component, depending
              on if validation is a success or error state.{' '}
              <Link href="/components/text-area/#component-api">
                Text area documentation.
              </Link>
            </>
          ),
          media: getIllustrationComponent('components/form/options/text-area'),
        },
        {
          title: 'FormInputTextField',
          description: (
            <>
              When wrapped inside the <InlineCode>FormInput</InlineCode> the
              state can be passed down to the{' '}
              <InlineCode>FormInputTextField</InlineCode> component, depending
              on if validation is a success or error state.{' '}
              <Link href="/components/text-field/#component-api">
                Text field documentation.
              </Link>
            </>
          ),
          media: getIllustrationComponent('components/form/options/text-field'),
        },
        {
          title: 'FormInputSelect',
          description: (
            <>
              When wrapped inside the <InlineCode>FormInput</InlineCode> the
              state can be passed down to the{' '}
              <InlineCode>FormInputSelect</InlineCode> component, depending on
              if validation is a success or error state.{' '}
              <Link href="/components/select/#component-api">
                Select documentation.
              </Link>
            </>
          ),
          media: getIllustrationComponent('components/form/options/select'),
        },
        {
          title: 'FormInputCheckbox',
          description: (
            <>
              When wrapped inside the <InlineCode>FormInput</InlineCode> the
              state can be passed down to the
              <InlineCode>FormInputCheckbox</InlineCode> component, depending on
              if validation is a success or error state.{' '}
              <Link href="/components/checkbox/#component-api">
                Checkbox documentation.
              </Link>
            </>
          ),
          media: getIllustrationComponent('components/form/options/checkbox'),
        },
        {
          title: 'FormInputRadioButton',
          description: (
            <>
              When wrapped inside the <InlineCode>FormInput</InlineCode> the
              state can be passed down to the
              <InlineCode>FormInputRadioButton</InlineCode> component, depending
              on if validation is a success or error state. Multiple can be
              grouped together using the radioGroup component.{' '}
              <Link href="/components/radio-button/#component-api">
                Radio Button documentation.
              </Link>
            </>
          ),
          media: getIllustrationComponent(
            'components/form/options/radio-button',
          ),
        },
        {
          title: 'Fieldset',
          description: (
            <>
              Selection controls (inputs), such as the{' '}
              <InlineCode>FormInputRadioButton</InlineCode>, and
              <InlineCode>FormInputCheckbox</InlineCode>, can be grouped
              together with other selection controls, labels and assistive text
              together in a fieldset. The fieldset has a caption that gives a
              title attributed to the elements that appear in the fieldset,
              called a legend.{' '}
              <Link href="/components/fieldset/">Fieldset documentation.</Link>
            </>
          ),
          media: getIllustrationComponent('components/form/options/fieldset'),
        },
      ],
    }}
    commonSection={{
      id: 'formstructure',
      title: 'Form structure',
      introduction: (
        <>
          This diagram shows how to use form input components inside a{' '}
          <Link href="/components/fieldset/">fieldset</Link>, which you can then
          use to create a full form:
        </>
      ),
      media: getIllustrationComponent('components/form/form-structure'),
    }}
    behaviors={{
      introduction: (
        <>
          Here’s how the form input components behave:
          <br />
          <br />
          <ContentText title="Form input validation" titleAs="span">
            Define FormInput validation rules for onSubmit or onBlur, for both
            the initial validation and re-validation using the form. Learn more
            about validation rules with{' '}
            <Link
              href="https://react-hook-form.com/get-started/#Applyvalidation"
              target="_blank"
            >
              React Hook Form.
            </Link>
            <br />
            <br />
            For validation to work, you need to individually wrap each form
            input component (e.g. FormInputTextField) in the form component. For
            example:
          </ContentText>
          <CodeBlock>
            {`<Form onSubmit={onSubmit}>
  <FormInput
    name="checkbox"   
    rules={{
      required: 'Required field',
    }}
  >
    <FormInputCheckbox value="tc" />
  </FormInput> 
  <FormInput
        name="select"
        rules={{
          required: 'Required field',
        }}
      >
    <FormInputSelect>
      <SelectOption value="Option 1">Option 1</SelectOption>
      <SelectOption value="Option 2">Option 2</SelectOption>
    </FormInputSelect>
  </FormInput>
  <Button type="submit">Submit</Button>
</Form>`}
          </CodeBlock>
          <br />
          <br />
          <ContentText title="Form yup schema" titleAs="span">
            The form supports schema validation with external validation
            libraries. To use <InlineCode>Yup</InlineCode>, for example, pass{' '}
            <InlineCode>yupResolver(schema)</InlineCode>
            to the resolver prop. Learn more about schema validation with{' '}
            <Link
              href="https://react-hook-form.com/get-started/#SchemaValidation"
              target="_blank"
            >
              React Hook Form.
            </Link>
          </ContentText>
          <CodeBlock>
            {`import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
  email: yup.string().email().required(),
  username: yup.string().required(),
});

<Form onSubmit={onSubmit} resolver={yupResolver(schema)}>
  <FormInput name="email">
    <FormInputLabel>E-mail</FormInputLabel>
    <FormInputTextField type="email" />
    <FormInputAssistiveText>Enter your email</FormInputAssistiveText>
  </FormInput>
  <FormInput name="username">
    <FormInputLabel>Username</FormInputLabel>
    <FormInputTextField />
    <FormInputAssistiveText>Enter username</FormInputAssistiveText>
  </FormInput>
  <Button type="submit">
    Submit
  </Button>
</Form>;
`}
          </CodeBlock>
        </>
      ),
      cards: [
        {
          title: 'Assistive text minimum height',
          description:
            'Apply a minimum height to the assistive text container to stop the layout of the page shifting when the assistive text shows and hides.',
          media: getIllustrationComponent(
            'components/form/behaviours/assistive-text-min-height',
          ),
        },
        {
          title: 'Assistive text overflow wrap',
          description:
            'When the assistive text is too long for the available horizontal space, it wraps to form another line.',
          media: getIllustrationComponent(
            'components/form/behaviours/assistive-text-overflow-wrap',
          ),
        },
      ],
    }}
    usage={{
      introduction: (
        <>
          Here’s how and when to use the form:
          <br />
          <br />
          For best practices to follow when creating a form, see the{' '}
          <Link href="/patterns/forms/overview/">forms patterns guidance.</Link>
        </>
      ),
      cards: [
        {
          description:
            'Clear, simple forms help prevent users from getting confused and submitting wrong information.',
          kind: UsageKind.DO,
          media: getIllustrationComponent('components/form/usage/do-1'),
        },
        {
          description:
            'Ask yourself if each form input is necessary or whether you can get the information in another way, or at a more convenient time.',
          kind: UsageKind.DONT,
          media: getIllustrationComponent('components/form/usage/dont-1'),
        },
        {
          description:
            'Ensure each form input component that needs validation is wrapped in a form.',
          kind: UsageKind.DO,
          media: getIllustrationComponent('components/form/usage/do-2'),
        },
        {
          description: (
            <>
              Avoid prematurely validating a form input (e.g. avoid setting text
              fields to invalid before the user has finished typing).
            </>
          ),
          kind: UsageKind.DONT,
          media: getIllustrationComponent('components/form/usage/dont-2'),
        },
        {
          description:
            'Where possible, validate using onBlur (i.e. when the user clicks out of a FormInput, it’s validated). Validating as the user goes along, rather than when they submit the whole form, improves the user experience and helps users complete forms.',
          kind: UsageKind.DO,
          media: getIllustrationComponent('components/form/usage/do-3'),
        },
        {
          description:
            'Error text should be clear, concise and written in complete sentences - and it should tell the user how to resolve the issue.',
          kind: UsageKind.DO,
          media: getIllustrationComponent('components/form/usage/do-4'),
        },
        {
          description:
            'Write labels and assistive text in sentence case to help with scannability and legibility.',
          kind: UsageKind.DO,
          media: getIllustrationComponent('components/form/usage/do-5'),
        },
        {
          description: 'Keep labels short, clear and fully visible.',
          kind: UsageKind.DONT,
          media: getIllustrationComponent('components/form/usage/dont-3'),
        },
        {
          description:
            'Labels and assistive text should be in close proximity to their form input components to provide context for users.',
          kind: UsageKind.DO,
          media: getIllustrationComponent('components/form/usage/do-6'),
        },
        {
          description:
            'Assistive text is the best way to communicate information relating to instructions on completing an input or requirements.',
          kind: UsageKind.DO,
          media: getIllustrationComponent('components/form/usage/do-7'),
        },
        {
          description:
            'Swap assistive text with error text or character count as required. Once the input is valid, show the assistive text or character count again.',
          kind: UsageKind.DO,
          media: getIllustrationComponent('components/form/usage/do-8'),
        },
        {
          description:
            "Form input components don't need to be direct children of the form component and can be nested inside other elements.",
          kind: UsageKind.DO,
          media: getIllustrationComponent('components/form/usage/do-9'),
        },
      ],
    }}
    tutorials={{
      introduction:
        'Learn how to use the form component effectively using the tutorial below.',
      cards: [
        {
          title: 'Form tutorial',
          description:
            'Tutorial for engineers to build a form using the form sub components.',
          media: getIllustrationComponent('guides/form-guide/hero'),
          href: '/getting-started/code/form-step-by-step/',
        },
      ],
    }}
    accessibility={{
      introduction: 'The form has the following accessibility considerations:',
      interaction: {
        title: 'Keyboard Interactions',
        tableRows: [
          {
            command: ['Enter'],
            description: `Submits the form`,
          },
        ],
      },
      aria: {
        title: 'WAI-ARIA',
        tableRows: [
          {
            element: 'required',
            attribute: 'aria-required',
            value: 'true, undefined',
            description:
              'Informs the user that a form input component is required. When set to true, screen readers notify users of FormInputs that are required',
          },
          {
            element: 'invalid',
            attribute: 'aria-invalid',
            value: 'true, false',
            description:
              'Informs the user when there’s an error. Set to false by default. Values include true, spelling, and grammar. Screen readers will alert users when the form input component is set to any value other than false',
          },
        ],
      },
    }}
    componentAPI={{
      components: [
        {
          title: 'Form',
          summary:
            'The form has a range of props to define the experience in different use cases.',
          propsRows: [
            {
              name: 'children',
              type: `Exclude<React.ReactNode, 'undefined'>`,
              description: (
                <>
                  The form requires at least a{' '}
                  <InlineCode>FormInput</InlineCode> with a validation object
                  and rules to validate each field. Provide{' '}
                  <InlineCode>FormInput</InlineCode> components and wrap them
                  inside a <InlineCode>FormInput</InlineCode> (e.g.{' '}
                  <InlineCode>FormInputTextField</InlineCode>,{' '}
                  <InlineCode>FormInputRadioButton</InlineCode>)
                </>
              ),
              required: true,
            },
            {
              name: 'onSubmit',
              type: 'SubmitHandler',
              description: (
                <>
                  Function called when the form is submitted without validation
                  errors. The data parameter consists of an object where the
                  input field names are associated with the input values.
                  <br />
                  <br />
                  <Link
                    href="https://react-hook-form.com/ts#SubmitHandler"
                    target="_blank"
                  >
                    Learn more about form validation at React Hook Form
                  </Link>
                  <br />
                  <br />
                  If users submit the form by clicking a{' '}
                  <Link href="/components/button/">Button</Link>, you should
                  keep the whole logic in the <InlineCode>onSubmit</InlineCode>{' '}
                  event, rather than splitting it into both an{' '}
                  <InlineCode>onClick</InlineCode> and{' '}
                  <InlineCode>onSubmit</InlineCode> event, in order to avoid
                  issues at runtime.
                </>
              ),
              required: undefined,
            },
            {
              name: 'validationMode',
              type: 'onBlur | onSubmit',
              default: 'onSubmit',
              description: (
                <>
                  Allows you to configure when input fields are validated.
                  Currently supports <InlineCode>onSubmit</InlineCode> and{' '}
                  <InlineCode>onBlur</InlineCode>.
                </>
              ),
              required: undefined,
            },
            {
              name: 'reValidationMode',
              type: 'onBlur | onSubmit',
              default: 'onBlur',
              description: (
                <>
                  Allows you to configure when input fields are revalidated.
                  Currently supports <InlineCode>onSubmit</InlineCode> and{' '}
                  <InlineCode>onBlur</InlineCode>.
                </>
              ),
              required: undefined,
            },
            {
              name: 'defaultValues',
              type: 'Record<string,string>',
              description: (
                <>
                  The defaultValue for an input is used as the initial value
                  when a component is first rendered, before the user interacts
                  with it. The <InlineCode>defaultValues</InlineCode> object
                  uses the form element names as keys.
                </>
              ),
              required: undefined,
            },
            {
              name: 'resolver',
              type: 'Resolver<Record<string, string>, object>',
              description:
                'Validates your input data against the schema and return with either errors or a valid result.',
              required: undefined,
            },
            ...commonLogicalRows(),
          ],
        },
        {
          title: 'Form input',
          summary: `The form input has a range of props to define the experience in different use cases.`,
          propsRows: [
            {
              name: 'name',
              type: 'string',
              description:
                'If provided, defines the name of the input element. Use when submitting an HTML form',
            },
            {
              name: 'size',
              type: `'small' | 'medium' | 'large'`,
              default: 'medium',
              description: (
                <>
                  If provided, defines the size of the{' '}
                  <InlineCode>FormInput</InlineCode> component
                </>
              ),
            },
            {
              name: 'rules',
              type: 'Record< string,string | object>',
              description:
                'Validation object with the rules required to validate your form',
            },
            {
              name: 'children',
              type: 'Type JSX.Element  | JSX.Element []',
              description: (
                <>
                  <InlineCode>FormInput</InlineCode> requires children to be
                  wrapped between them. These children will be part of the
                  <InlineCode>FormInput</InlineCode> components (e.g.{' '}
                  <InlineCode>FormInputTextField</InlineCode>,{' '}
                  <InlineCode>FormInputRadioButton</InlineCode>)
                </>
              ),
            },
            {
              name: 'id',
              type: 'string',
              description: (
                <>
                  If provided, the id can be used to reference this element
                  (e.g. from an
                  <InlineCode>aria-describedby</InlineCode> attribute)
                </>
              ),
            },
            {
              name: 'state',
              type: 'Type =  ‘disabled’ | ‘valid’ | ‘invalid’',
              description: (
                <>
                  The state prop is optional and can be passed to{' '}
                  <InlineCode>FormInput</InlineCode> to force everything wrapped
                  inside <InlineCode>FormInput</InlineCode> into a certain state
                  such as <InlineCode>‘disabled’</InlineCode>{' '}
                  <InlineCode>‘valid’</InlineCode>{' '}
                  <InlineCode>‘invalid’</InlineCode> If nothing is provided, the
                  state sets itself depending on the{' '}
                  <InlineCode>FormInput</InlineCode> rules and whether the
                  user’s input is invalid or not
                </>
              ),
            },
          ],
        },
        {
          title: 'Form input assistive text',
          summary: (
            <>
              The <InlineCode>FormInputAssistiveText</InlineCode> component has
              a range of props to define the experience in different use cases.
              Use within the form component.`,
            </>
          ),
          propsRows: [
            {
              name: 'size',
              type: ['small', 'medium', 'large'],
              default: 'medium',
              description: 'Defines the size of the Assistive Text.',
            },
            {
              name: 'state',
              type: 'Type = ‘disabled’ | ‘valid’ | ‘invalid’',
              description:
                'If provided you can force state onto the Assistive Text',
            },
            {
              name: 'children',
              type: 'React.ReactNode',
              description:
                'The form requires at least a text field and a submit button',
            },
            {
              name: 'startEnhancer',
              type: 'React.ReactNode',
              description: 'Adds an icon to the start of the assistive text',
            },
            {
              name: 'endEnhancer',
              type: 'React.ReactNode',
              description: 'Adds an icon to the end of the assistive text',
            },
            {
              name: 'validationIcon',
              type: 'MQ<boolean>',
              description:
                'If true, adds a validation icon next to the assistive text label',
            },
            ...commonLogicalRows(),
          ],
          overridesRows: [
            {
              attribute: 'assistiveText.minHeight',
              type: 'MQ<string>',
              default: 'space030',
              description: (
                <>
                  If provided, this overrides the{' '}
                  <InlineCode>minHeight</InlineCode> of the{' '}
                  <InlineCode>FormInputAssistiveText</InlineCode>
                </>
              ),
            },
            {
              attribute: 'assistiveText.stylePreset',
              type: 'MQ<string>',
              default: 'assistiveText',
              description: (
                <>
                  If provided, this overrides the{' '}
                  <InlineCode>stylePreset</InlineCode> of the{' '}
                  <InlineCode>FormInputAssistiveText</InlineCode>
                </>
              ),
            },
            {
              attribute: 'assistiveText.typographyPreset',
              type: 'MQ<string>',
              default: [
                'Small = utilityBody010',
                'Medium = utilityBody020',
                'Large = utilityBody030',
              ],
              description: (
                <>
                  If provided, this overrides the{' '}
                  <InlineCode>stylePreset</InlineCode> of the{' '}
                  <InlineCode>FormInputAssistiveText</InlineCode>
                </>
              ),
            },
            {
              attribute: 'assistiveText.startEnhancer.iconSize',
              type: 'MQ<string>',
              default: [
                'Small = iconSize010',
                'Medium = iconSize020',
                'Large = iconSize020',
              ],
              description:
                'If provided, overrides the size of the start enhancer.',
            },
            {
              attribute: 'assistiveText.startEnhancer.spaceInline',
              type: 'MQ<string>',
              default: [
                'Small = space020',
                'Medium = space020',
                'Large = space030',
              ],
              description:
                'If provided, overrides the inline space of the start enhancer.',
            },
            {
              attribute: 'assistiveText.endEnhancer.iconSize',
              type: 'MQ<string>',
              default: [
                'Small = iconSize010',
                'Medium = iconSize020',
                'Large = iconSize020',
              ],
              description:
                'If provided, overrides the size of the end enhancer. ',
            },
            {
              attribute: 'assistiveText.endEnhancer.spaceInline',
              type: 'MQ<string>',
              default: [
                'Small = space020',
                'Medium = space020',
                'Large = space030',
              ],
              description:
                'If provided, overrides the inline space of the end enhancer.',
            },
          ],
          propsFooter: (
            <>
              <InlineMessage
                icon={infoIcon}
                role="region"
                aria-label="Assistive Text component"
                title="Note"
                overrides={{
                  marginBlockStart: 'space070',
                }}
              >
                Props and overrides for the assistive text component are the
                same as the form input assistive text component, as listed
                above.
              </InlineMessage>
            </>
          ),
        },
        {
          title: 'Form input label',
          summary: (
            <>
              The <InlineCode>FormInputLabel</InlineCode> has a range of props
              to define the experience in different use cases. Use within the
              form.
            </>
          ),
          propsRows: [
            {
              name: 'size',
              type: `'small' | 'medium' | 'large'`,
              default: 'medium',
              description: 'Defines the size of the label',
            },
            {
              name: 'state',
              type: 'Type = ‘disabled’ | ‘valid’ | ‘invalid’',
              description: 'If provided, forces state onto the label',
            },
            {
              name: 'children',
              type: 'React.ReactNode',
              description: '',
              required: true,
            },
            ...commonLogicalRows(),
          ],
          overridesRows: [
            {
              attribute: 'label.stylePreset',
              type: 'MQ<string>',
              default: 'label',
              description: (
                <>
                  If provided, overrides the{' '}
                  <InlineCode>stylePreset</InlineCode> of the{' '}
                  <InlineCode>FormInputLabel</InlineCode>
                </>
              ),
            },
            {
              attribute: 'label.typographyPreset',
              type: 'MQ<string>',
              default: [
                'Small = utilityLabel010',
                'Medium = utilityLabel020',
                'Large = utilityLabel030',
              ],
              description: (
                <>
                  If provided, overrides the{' '}
                  <InlineCode>typographyPreset</InlineCode> of the{' '}
                  <InlineCode>FormInputLabel</InlineCode>
                </>
              ),
            },
            {
              attribute: 'label.spaceInline',
              type: 'MQ<string>',
              default: 'space010',
              description: (
                <>
                  If provided, overrides the inline space of the{' '}
                  <InlineCode>FormInputLabel</InlineCode>
                </>
              ),
            },
            {
              attribute: 'label.spaceStack',
              type: 'MQ<string>',
              default: 'space040',
              description: (
                <>
                  If provided, overrides the stack space applied to the{' '}
                  <InlineCode>FormInputLabel</InlineCode>
                </>
              ),
            },
          ],
          propsFooter: (
            <>
              <InlineMessage
                icon={infoIcon}
                role="region"
                aria-label="FormInput component"
                title="Note"
                overrides={{
                  marginBlockStart: 'space070',
                  marginBlockEnd: 'space050',
                }}
              >
                <>
                  Props and overrides for the label component are the same as
                  the <InlineCode />
                  FormInputLabel component, as listed above. For details of
                  props and overrides:
                  <UnorderedList
                    markerAlign="start"
                    overrides={{
                      spaceStack: 'space040',
                      content: {
                        typographyPreset: 'editorialParagraph010',
                      },
                      marginBlockStart: 'space050',
                    }}
                  >
                    <>
                      <Link href="/components/text-field/#component-api">
                        FormInputTextField
                      </Link>
                    </>
                    <>
                      <Link href="/components/select/#component-api">
                        FormInputSelect
                      </Link>
                    </>
                    <>
                      <Link href="/components/checkbox/#component-api">
                        FormInputCheckbox
                      </Link>
                    </>
                    <>
                      <Link href="/components/radio-button/#component-api">
                        FormInputRadioButton
                      </Link>
                    </>
                  </UnorderedList>
                </>
              </InlineMessage>
            </>
          ),
        },
      ],
    }}
    related={{
      related: ['Checkbox', 'Text Field', 'Radio Button', 'Text Area'],
    }}
  />
);

export default FormComponent;
