import React from 'react';
import {MetaStatus} from '../../components/meta/types';
import {LayoutProps} from '../../components/layout';
import {ComponentPageTemplate} from '../../templates/component-page-template/component-page-template';
import {getIllustrationComponent} from '../../components/illustrations/illustration-loader';

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
  />
);

export default FormComponent;
