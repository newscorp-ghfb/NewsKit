import React from 'react';
import {InlineMessage, toNewsKitIcon} from 'newskit';
import {Info as FilledInfo} from '@emotion-icons/material/Info';
import {MetaStatus} from '../../components/meta/types';
import {Link} from '../../components/link';
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
              <Link href="components/text-field/#component-api">
                text field
              </Link>{' '}
              or text area.
            </>
          ),
          media: getIllustrationComponent(
            '/components/form/options/assistive-text',
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
  />
);

export default FormComponent;
