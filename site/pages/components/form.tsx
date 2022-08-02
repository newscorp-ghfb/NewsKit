import React from 'react';
import {InlineMessage, TextBlock, toNewsKitIcon} from 'newskit';
import {Info as FilledInfo} from '@emotion-icons/material/Info';
import {ContentText} from '../../components/text-section/content-text';
import {MetaStatus} from '../../components/meta/types';
import {Link} from '../../components/link';
import {Code} from '../../components/code';
import {UsageKind} from '../../components/usage-card';
import {InlineCode} from '../../components/markdown-elements';
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
      introduction:
        'The form component allows users to enter and edit information into a UI using form controls; based on React Hook Form.',
    }}
    componentDefaultsKey="Form"
    meta={{
      status: MetaStatus.Supported,
      introduced: 'v0.19.0',
      codeUrl: 'https://github.com/newscorp-ghfb/newskit/tree/main/src/form',
    }}
    anatomy={{
      tabs: [
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
              optional: undefined,
            },
            {
              name: 'FormInputAssistiveText',
              description: 'Based on the assistive text component',
              component: 'Text Block',
              optional: undefined,
            },
            {
              name: 'FormInputTextArea',
              description: 'Based on the text area component',
              component: 'Text Area',
              optional: undefined,
            },
            {
              name: 'FormInputTextField',
              description: 'Based on the text field component',
              component: 'Text Field',
              optional: undefined,
            },
            {
              name: 'FormInputSelect',
              description: 'Based on the select component',
              component: 'Select',
              optional: undefined,
            },
            {
              name: 'FormInputCheckbox',
              description: 'Based on the checkbox component',
              component: 'Checkbox',
              optional: undefined,
            },
            {
              name: 'FormInputRadio Button',
              description: 'Based on the radio button component',
              component: 'Radio Button',
              optional: undefined,
            },
          ],
        },
      ],
      rows: [],
    }}
    tutorial={{
      introduction:
        'Learn how to use the form component effectively using the tutorial below.',
      cards: [
        {
          title: 'Form tutorial',
          description:
            'Tutorial for engineers to build a form using the form sub components.',
          href: '/components/form/',
          media: getIllustrationComponent('components/form/tutorials'),
        },
      ],
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
          <TextBlock typographyPreset="editorialLabel010">
            <Code>
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
            </Code>
          </TextBlock>
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
          <TextBlock typographyPreset="editorialLabel010">
            <Code>
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
            </Code>
          </TextBlock>
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
  />
);

export default FormComponent;
