import React from 'react';
import {Block, InlineMessage, IconFilledInfo} from 'newskit';
import {MetaStatus} from '../../components/meta/types';
import {LayoutProps} from '../../components/layout';
import {ComponentPageTemplate} from '../../templates/component-page-template/component-page-template';
import {getIllustrationComponent} from '../../components/illustrations/illustration-loader';
import {InlineCode} from '../../components/markdown-elements';
// import {Link} from '../../components/link';

const infoIcon = (
  <IconFilledInfo
    overrides={{
      size: 'iconSize020',
    }}
  />
);

const CheckboxComponent = (layoutProps: LayoutProps) => (
  <ComponentPageTemplate
    headTags={{
      title: 'Checkbox',
      description:
        'Checkboxes are selection controls that allow users to select one or multiple items from a group of options. They typically appear in forms.',
    }}
    layoutProps={layoutProps}
    pageIntroduction={{
      type: 'Actions & Inputs',
      name: 'Checkbox',
      hero: {
        illustration: 'components/checkbox/hero',
      },
      introduction:
        'Checkboxes are selection controls that allow users to select one or multiple items from a group of options. They typically appear in forms.',
    }}
    componentDefaultsKey="checkbox"
    meta={{
      status: MetaStatus.Supported,
      introduced: 'v4.2.0',
      codeUrl:
        'https://github.com/newscorp-ghfb/ncu-newskit/releases/tag/v4.2.0',
      figmaUrl:
        'https://www.figma.com/file/FSbCQa6SzVR3K48ZWLeD77/%F0%9F%9F%A2-NK-Web-Components',
    }}
    anatomy={{
      introduction:
        'The Checkbox contains one required element and three optional elements.',
      rows: [
        {
          name: 'Checkbox Input',
          description:
            'Selection control (input) that can be selected or unselected, and pushed into different states',
          component: ['Block'],
          optional: undefined,
        },
        {
          name: 'Icon',
          description: 'Icon that appears within the Checkbox input',
          component: ['Block'],
          optional: true,
        },
        {
          name: 'Feedback',
          description:
            'Non-interactive background element for visual feedback on state change eg. hover',
          component: ['Block'],
          optional: true,
        },
        {
          name: 'Label',
          description:
            'The Label is the text attributed to the Checkbox that provides context',
          component: ['Text Block'],
          optional: true,
        },
      ],
      media: getIllustrationComponent('components/checkbox/anatomy'),
    }}
    options={{
      introduction:
        'The Checkbox has options that can be used to provide an appropriate experience for different use cases.',
      cards: [
        {
          title: 'Size',
          description: (
            <>
              There are three sizes of Checkbox input and the feedback element;
              small, medium (default), and large.
              <br />
              <br />
              The icon that appears within the Checkbox input remains the same
              size at all three sizes but can be overridden.
            </>
          ),
          media: getIllustrationComponent('components/checkbox/options/size'),
        },
        {
          title: 'Icon',
          description:
            'The icon that appears within the Checkbox input can be overridden for the different Checkbox states.',
          media: getIllustrationComponent('components/checkbox/options/icon'),
        },
        {
          title: 'Feedback',
          description:
            'The feedback element is non-interactive and appears in the background behind the Checkbox input for visual feedback on state change, eg hover. ',
          media: getIllustrationComponent(
            'components/checkbox/options/feedback',
          ),
        },
        {
          title: 'Label',
          description: (
            <>
              <Block spaceStack="space030">
                The Checkbox has a label that appears to the right (end) of a
                Checkbox.
              </Block>
              <InlineMessage
                icon={infoIcon}
                role="region"
                aria-label="LabelPosition"
              >
                In the case of needing a label on the left (start) of a
                Checkbox, this can be set via the{' '}
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
              Selection controls (inputs), such as the FormInput, Radio Button,
              and Checkbox, can be grouped together with other selection
              controls, Labels, and Assistive Text together in a Fieldset. The
              Fieldset has a caption that gives a title attributed to the
              elements that appear in the Fieldset, called a Legend.
              <br />
              <br />
              The Fieldset can also support other selection controls (inputs)
              such as the FormInput, FormInput Switch, and FormInput TextField.
              <br />
              <br />
              For more information, please refer to the Fieldset component.
            </>
          ),
          media: getIllustrationComponent(
            'components/checkbox/options/fieldset',
          ),
        },
      ],
    }}
  />
);

export default CheckboxComponent;
