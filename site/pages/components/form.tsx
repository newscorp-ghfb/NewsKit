import React from 'react';
import {
  InlineMessage,
  TextBlock,
  toNewsKitIcon,
  UnorderedList,
  Block,
  Form,
  Button,
  styled,
  EmailInput,
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
import {IconFilledCircle} from '../../components/icons';
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

const commonOverridesRows = () => [
  {
    attribute: 'paddingInline',
    type: 'MQ<string>',
    description:
      'It can take one space token to specify the logical inline start and end padding of the container. This space token can also be used on breakpoints.',
  },
  {
    attribute: 'paddingInlineStart',
    type: 'MQ<string>',
    description:
      'It can take one space token to specify the logical inline start padding of the container. This space token can also be used on breakpoints.',
  },
  {
    attribute: 'paddingInlineEnd',
    type: 'MQ<string>',
    description:
      'It can take one space token to specify the logical inline end padding of the container. This space token can also be used on breakpoints.',
  },
  {
    attribute: 'paddingBlock',
    type: 'MQ<string>',
    description:
      'It can take one space token to specify the logical block start and end padding of the container. This space token can also be used on breakpoints.',
  },
  {
    attribute: 'paddingBlockStart',
    type: 'MQ<string>',
    description:
      'It can take one space token to specify the logical block start padding of the container. This space token can also be used on breakpoints.',
  },
  {
    attribute: 'paddingBlockEnd',
    type: 'MQ<string>',
    description:
      'It can take one space token to specify the logical block end padding of the container. This space token can also be used on breakpoints.',
  },
  {
    attribute: 'marginInline',
    type: 'MQ<string>',
    description:
      'It can take one space token to specify the logical inline start and end margin of the container. This space token can also be used on breakpoints.',
  },
  {
    attribute: 'marginInlineStart',
    type: 'MQ<string>',
    description:
      'It can take one space token to specify the logical inline start margin of the container. This space token can also be used on breakpoints.',
  },
  {
    attribute: 'marginInlineEnd',
    type: 'MQ<string>',
    description:
      'It can take one space token to specify the logical inline end margin of the container. This space token can also be used on breakpoints.',
  },
  {
    attribute: 'marginBlock',
    type: 'MQ<string>',
    description:
      'It can take one space token to specify the logical block start and end margin of the container. This space token can also be used on breakpoints.',
  },
  {
    attribute: 'marginBlockStart',
    type: 'MQ<string>',
    description:
      'It can take one space token to specify the logical block start margin of the container. This space token can also be used on breakpoints.',
  },
  {
    attribute: 'marginBlockEnd',
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
          The form component allows users to enter and edit information into a
          UI using form controls; based on{' '}
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
        'This demo allows you to preview the Block component, its variations, and configuration options.',
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
              description: 'Responsible for validating the context of a form',
              component: ['React Hook Form', 'Form HTML element'],
              optional: undefined,
            },
            {
              name: 'Form input',
              description:
                'FormInput components require passing in an object of rules to validate the fForm component',
              component: 'React component',
              optional: undefined,
            },
          ],
        },
        {
          title: 'FormInput components',
          summary:
            'These are the following FormInput components available for use with the form:',
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
              component: 'Text Block',
              optional: true,
            },
            {
              name: 'FormInputTextArea',
              description: 'Based on the text area component',
              component: 'Text Area',
              optional: true,
            },
            {
              name: 'FormInputTextField',
              description: 'Based on the text field component',
              component: 'Text Field',
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
              component: 'Radio Button',
              optional: true,
            },
          ],
        },
      ],
      rows: [],
    }}
    options={{
      introduction:
        'FormInput components have options that can be used to provide an appropriate experience for different use cases.',
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
                Labels should remain readable by screen readers by setting the
                aria-label attribute to the label text&lsquo;s value.
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
              <InlineCode>FormInputTextArea</InlineCode> component, depending on
              if validation is a success or error state. Read more.
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
                Read more.
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
              <Link href="/components/select/#component-api">Read more.</Link>
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
              <Link href="/components/checkbox/#component-api">Read more.</Link>
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
                Read more.
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
              Selection controls (inputs), such as the FormInputradioButton, and
              FormInputCheckbox, can be grouped together with other selection
              controls, labels, and assistive text together in a fieldset. The
              fieldset has a caption that gives a title attributed to the
              elements that appear in the fieldset, called a legend.{' '}
              <Link href="/components/fieldset/">Read more.</Link>
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
          The below diagram outlines how FormInput components can be used inside
          a <Link href="/components/fieldset/">fieldset</Link>, which can then
          be used to create a full form:
        </>
      ),
      media: getIllustrationComponent('components/form/form-structure'),
    }}
    behaviors={{
      introduction: (
        <>
          The following guidance describes how the FormInput components, and the
          form behave.
          <br />
          <br />
          <ContentText title="FormInput validation" titleAs="span">
            FormInput validation rules can be defined for onSubmit or onBlur,
            for both the initial validation and re-validation using the form.
            <br />
            <br />
            For more information about validation rules, refer to{' '}
            <Link
              href="https://react-hook-form.com/get-started/#Applyvalidation"
              target="_blank"
            >
              React Hook Form, apply validation.
            </Link>
            <br />
            <br />
            Each FormInput component (ie FormInputTextField) needs to be
            individually wrapped in the form component in order for validation
            to work eg:
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
            The form component supports schema validation. To use an external
            validation library, for example, <InlineCode>Yup</InlineCode>, you
            can pass <InlineCode>yupResolver(schema)</InlineCode>
            to the resolver prop. For more information about schema validation
            with React Hook Form, refer to{' '}
            <Link
              href="https://react-hook-form.com/get-started/#SchemaValidation"
              target="_blank"
            >
              React Hook Form, schema validation.
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
          title: 'Assistive Text Min-Height',
          description:
            'A minimum height can be applied to the assistive text container. This is used to prevent the layout shift in the page when the assistive text shows and hides.',
          media: getIllustrationComponent(
            'components/form/behaviours/assistive-text-min-height',
          ),
        },
        {
          title: 'Assistive Text overflow wrap',
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
          The following guidance describes how and when to appropriately use the
          form component.
          <br />
          <br />
          <Link href="/patterns/forms/overview/">
            For best practices to follow when creating a form, please refer to
            the Forms patterns guidance.
          </Link>
        </>
      ),
      cards: [
        {
          description:
            'Clear and simple forms help prevent confusion for users, and incorrect data submitted.',
          kind: UsageKind.DO,
          media: getIllustrationComponent('components/form/usage/do-1'),
        },
        {
          description:
            'Avoid unnecessarily long forms. Question each FormInput and eliminate unnecessary inputs by asking whether you could obtain the information in another way, or at a later, more convenient time for users.',
          kind: UsageKind.DONT,
          media: getIllustrationComponent('components/form/usage/dont-1'),
        },
        {
          description:
            'Ensure each FormInput component that needs validation is wrapped in a form.',
          kind: UsageKind.DO,
          media: getIllustrationComponent('components/form/usage/do-2'),
        },
        {
          description: (
            <>
              Avoid prematurely validating a FormInput e.g.avoid setting{' '}
              <Link href="/components/text-field/">text fields</Link> to invalid
              before the user has finished typing.
            </>
          ),
          kind: UsageKind.DONT,
          media: getIllustrationComponent('components/form/usage/dont-2'),
        },
        {
          description:
            'Where possible, use onBlur validation (when the user clicks out of a FormInput, it is validated). This way is an improved user experience and guides the user through the form completion.',
          kind: UsageKind.DO,
          media: getIllustrationComponent('components/form/usage/do-3'),
        },
        {
          description:
            'Write error text that communicates a solution. Error text should be written in no more than a few clear, concise and complete sentences.',
          kind: UsageKind.DO,
          media: getIllustrationComponent('components/form/usage/do-4'),
        },
        {
          description:
            'Labels and assistive text should be in sentence case. This helps with scannability and legibility.',
          kind: UsageKind.DO,
          media: getIllustrationComponent('components/form/usage/do-5'),
        },
        {
          description:
            "Labels shouldn't be truncated or wrap over two or more lines. Keep it short, clear, and fully visible.",
          kind: UsageKind.DONT,
          media: getIllustrationComponent('components/form/usage/dont-3'),
        },
        {
          description:
            'Labels and assistive text should be in close proximity to FormInput components to provide context for users.',
          kind: UsageKind.DO,
          media: getIllustrationComponent('components/form/usage/do-6'),
        },
        {
          description:
            'Assistive text is the preferred way to communicate information relating to instructions on completing an input or requirements.',
          kind: UsageKind.DO,
          media: getIllustrationComponent('components/form/usage/do-7'),
        },
        {
          description:
            'Swap assistive text with error text, or character count as required. Once the input is valid then the assistive text or character count is then shown again.',
          kind: UsageKind.DO,
          media: getIllustrationComponent('components/form/usage/do-8'),
        },
        {
          description:
            "FormInput components don't need to be direct children of the form component and can be nested inside other elements.",
          kind: UsageKind.DO,
          media: getIllustrationComponent('components/form/usage/do-9'),
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
              'This attribute informs the user that a FormInput component is required. When set to true, screen readers notify users of FormInputs that are required.',
          },
          {
            element: 'invalid',
            attribute: 'aria-invalid',
            value: "'true', 'false'",
            description:
              'This attribute informs the user when there is an error. By default it’s set to false. Values include true, spelling, and grammar. Screen readers will alert users when the FormInput component is set to any value other than false.',
          },
        ],
      },
    }}
    componentAPI={{
      components: [
        {
          title: 'Form',
          summary:
            'The Form component has a range of props and overrides that can be used to define an appropriate experience for different use cases.',
          propsRows: [
            {
              name: 'children',
              type: `Exclude<React.ReactNode, 'undefined'>`,
              description:
                'The Form requires to have at least a FormInput with a validation object and rules to validate each field. FormInput components should also be provided and wrapped inside FormInput such as FormInputTextfield,  FormInputRadioButton etc.',
              required: true,
            },
            {
              name: 'onSubmit',
              type: 'SubmitHandler',
              description: (
                <>
                  Function called when the Form is submitted without validation
                  errors. The data parameter consists of an object where the
                  input field names are associated with the input values.
                  <br />
                  <br />
                  <Link
                    href="https://react-hook-form.com/ts#SubmitHandler"
                    target="_blank"
                  >
                    For more information refer to the React Hook Form’s
                    documentation.
                  </Link>
                  When submitting the Form by clicking on a{' '}
                  <Link href="/components/button/">Button</Link>, is suggested
                  to keep the whole logic in the{' '}
                  <InlineCode>onSubmit</InlineCode> event, rather than split it
                  in both an <InlineCode>onClick</InlineCode> and{' '}
                  <InlineCode>onSubmit</InlineCode> event, for avoiding issues
                  at runtime.
                </>
              ),
              required: undefined,
            },
            {
              name: 'validationMode',
              type: 'onSubmit | onValidation',
              default: 'onSubmit',
              description: (
                <>
                  Allows you to configure when input fields are validated.
                  Currently <InlineCode>onSubmit</InlineCode> and{' '}
                  <InlineCode>onBlur</InlineCode> are supported.
                </>
              ),
              required: undefined,
            },
            {
              name: 'reValidationMode',
              type: 'onSubmit | onValidation',
              default: 'onBlur',
              description: (
                <>
                  Allows you to configure when input fields getting revalidated.
                  Currently <InlineCode>onSubmit</InlineCode> and{' '}
                  <InlineCode>onBlur</InlineCode> are supported.
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
                  when a component is first rendered, before a user interacts
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
                'The resolver will validate your input data against the schema and return with either errors or a valid result.',
              required: undefined,
            },
          ],
          overridesRows: [...commonOverridesRows()],
        },
        {
          title: 'FormInput',
          summary: `The FormInput component has a range of props that can be used to define an appropriate experience for different use cases.`,
          propsRows: [
            {
              name: 'name',
              type: 'string',
              description:
                'If provided, defines name of the input element, used when submitting an HTML form.',
            },
            {
              name: 'size',
              type: 'string',
              default: 'medium',
              description:
                'If provided, defines the size of the FormInput component.',
            },
            {
              name: 'rules',
              type: 'Record< string,string | object>',
              description:
                'Validation object with the rules required to validate your form.',
            },
            {
              name: 'children',
              type: 'Type JSX.Element  | JSX.Element []',
              description:
                'FormInput requires children to be wrapped between them. These children will be part of the FormInput components such a FormInputTextfield,  FormInputRadioButton etc.',
            },
            {
              name: 'id',
              type: 'string',
              description:
                'If provided, the id can be used to reference this element, for example from an aria-describedby attribute.',
            },
            {
              name: 'state',
              type: 'Type =  ‘disabled’ | ‘valid’ | ‘invalid’',
              description:
                'The state prop is optional and can be passed to FormInput to force everything wrapped inside FormInput into a certain state such as ‘disabled’ | ‘valid’ | ‘invalid’. If nothing is provided the state sets itself depending on the FormInput rules and whether the users input is invalid or not.',
            },
          ],
        },
        {
          title: 'FormInputAssistiveText',
          summary: `The FormInputAssistiveText component has a range of props that can be used to define an appropriate experience for different use cases. Use this component within the Form component.`,
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
                'The Form requires to have at least a Text Field and a submit Button.',
            },
            {
              name: 'startEnhancer',
              type: 'React.ReactNode',
              description:
                'An Icon can be added to the start of the Assistive Text',
            },
            {
              name: 'endEnhancer',
              type: 'React.ReactNode',
              description:
                'An Icon can be added to the end of the Assistive Text',
            },
          ],
          overridesRows: [
            {
              attribute: 'assistiveText.minHeight',
              type: 'MQ<string>',
              default: 'space030',
              description:
                'If provided, this overrides the minHeight of the FormInputAssistiveText.',
            },
            {
              attribute: 'assistiveText.stylePreset',
              type: 'MQ<string>',
              default: 'assistiveText',
              description:
                'If provided, overrides the stylePreset of the FormInputAssistiveText.',
            },
            {
              attribute: 'assistiveText.typographyPreset',
              type: 'MQ<string>',
              default: [
                'Small = utilityBody010',
                'Medium = utilityBody020',
                'Large = utilityBody030',
              ],
              description:
                'If provided, overrides the stylePreset of the FormInputAssistiveText.',
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
            ...commonOverridesRows(),
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
                Props and overrides for the Assistive Text component are the
                same as the FormInputAssistiveText component, as listed above.
              </InlineMessage>
            </>
          ),
        },
        {
          title: 'FormInputLabel',
          summary:
            'The FormInputLabel component has a range of props that can be used to define an appropriate experience for different use cases. Use this component within the Form component.',
          propsRows: [
            {
              name: 'size',
              type: 'string',
              default: 'medium',
              description: 'Defines the size of the Assistive Text.',
            },
            {
              name: 'state',
              type: 'Type = ‘disabled’ | ‘valid’ | ‘invalid’',
              description: 'If provided you can force state onto the Label',
            },
            {
              name: 'children',
              type: 'React.ReactNode',
              description: '',
              required: true,
            },
          ],
          overridesRows: [
            {
              attribute: 'label.stylePreset',
              type: 'MQ<string>',
              default: 'label',
              description:
                'If provided, overrides the stylePreset of the FormInputLabel.',
            },
            {
              attribute: 'label.typographyPreset',
              type: 'MQ<string>',
              default: [
                'Small = utilityLabel010',
                'Medium = utilityLabel020',
                'Large = utilityLabel030',
              ],
              description:
                'If provided, overrides the typographyPreset of the FormInputLabel.',
            },
            {
              attribute: 'label.spaceInline',
              type: 'MQ<string>',
              default: 'space010',
              description:
                'If provided, this overrides the inline space of the FormInputLabel.',
            },
            {
              attribute: 'label.spaceStack',
              type: 'MQ<string>',
              default: 'space040',
              description:
                'If provided, this overrides the stack space applied to the FormInputLabel.',
            },
            ...commonOverridesRows(),
          ],
          propsFooter: (
            <>
              <InlineMessage
                icon={infoIcon}
                role="region"
                aria-label="FormInputLabel Props and overrides"
                title="Note"
                overrides={{
                  marginBlockStart: 'space070',
                  marginBlockEnd: 'space050',
                }}
              >
                Props and overrides for the Label component are the same as the
                FormInputLabel component, as listed above.
              </InlineMessage>
              <InlineMessage
                icon={infoIcon}
                role="region"
                aria-label="FormInput component"
                title="Note"
              >
                Please refer to the following FormInput component pages for
                details of props & overrides:
                <UnorderedList
                  markerAlign="start"
                  listItemMarker={IconFilledCircle}
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
              </InlineMessage>
            </>
          ),
        },
      ],
    }}
    related={{
      related: [
        'Button',
        'Checkbox',
        'Radio Button',
        'Select',
        'Slider',
        'Text Field',
      ],
    }}
  />
);

export default FormComponent;
