import React from 'react';
import {Block, InlineMessage, IconFilledInfo} from 'newskit';
import {MetaStatus} from '../../components/meta/types';
import {LayoutProps} from '../../components/layout';
import {ComponentPageTemplate} from '../../templates/component-page-template/component-page-template';
import {getIllustrationComponent} from '../../components/illustrations/illustration-loader';
import {InlineCode} from '../../components/markdown-elements';
import {Link} from '../../components/link';

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
            'Non-interactive background element for visual feedback on hover',
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
            'The feedback element is non-interactive and appears in the background behind the Checkbox input for visual feedback on hover.',
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
    states={{
      introduction:
        'Tab items have states including, base, hover, active, disabled, and focus. They can be displayed with both, base or selected. By default, Tabs have one Tab item in a selected state.',
      layout: '3-span',
      cards: [
        {
          title: 'Base',
          description:
            'The Checkbox has a base (default) state. This is the base style of the Checkbox before it has been interacted with by a user.',
          media: getIllustrationComponent('components/checkbox/states/base'),
        },
        {
          title: 'Hover',
          description:
            'The Checkbox has a hover state. The style of the Checkbox changes to visually communicate and provide feedback to the user that the Checkbox is an interactive element. The style of the label remains the same. The label can also be interacted with (hovered) to check the Checkbox.',
          media: getIllustrationComponent('components/checkbox/states/hover'),
        },
        {
          title: 'Focus',
          description:
            'The Checkbox in a focus state communicates that a user has highlighted a Checkbox, using an input method such as a keyboard or voice.',
          media: getIllustrationComponent('components/checkbox/states/focus'),
        },
        {
          title: 'Focus Hover',
          description:
            'The Checkbox in a focus hover state communicates that a user has highlighted a Checkbox, using an input method such as a keyboard or voice.',
          media: getIllustrationComponent(
            'components/checkbox/states/focus-hover',
          ),
        },
        {
          title: 'Checked',
          description:
            'The Checkbox has a checked state. The style of the Checkbox input changes to visually communicate and provide feedback to the user that the Checkbox has been checked. The style of the label remains the same.',
          media: getIllustrationComponent('components/checkbox/states/checked'),
        },
        {
          title: 'Checked Hover',
          description:
            'The Checkbox has a checked hover state. The style of the Checkbox input changes to visually communicate and provide feedback to the user that the Checkbox has been checked and hovered over. The style of the label remains the same.',
          media: getIllustrationComponent(
            'components/checkbox/states/checked-hover',
          ),
        },
        {
          title: 'Checked Focus',
          description:
            'The Checkbox in a checked focus state communicates that a user has highlighted a Checkbox, using an input method such as a keyboard or voice.',
          media: getIllustrationComponent(
            'components/checkbox/states/checked-focus',
          ),
        },
        {
          title: 'Checked Focus Hover',
          description:
            'The Checkbox in a checked focus hover state communicates that a user has highlighted a Checkbox, using an input method such as a keyboard or voice.',
          media: getIllustrationComponent(
            'components/checkbox/states/checked-focus-hover',
          ),
        },
        {
          title: 'Invalid',
          description: (
            <>
              The Checkbox in an invalid state changes style when the Checkbox
              selection doesn’t conform to a specific format eg. attempting to
              proceed without selecting a required Checkbox in a{' '}
              <Link href="/components/form/">Form</Link>. The Form component is
              used to apply validation behaviour. The style of the label remains
              the same.
            </>
          ),
          media: getIllustrationComponent('components/checkbox/states/invalid'),
        },
        {
          title: 'Invalid Focus',
          description:
            'The Checkbox in an invalid focus state communicates that a user has highlighted a Checkbox, using an input method such as a keyboard or voice.',
          media: getIllustrationComponent(
            'components/checkbox/states/invalid-focus',
          ),
        },
        {
          title: 'Invalid Hover',
          description:
            'The Checkbox has an invalid hover state. The style of the Checkbox input changes to visually communicate and provide feedback to the user that the Checkbox is in an invalid state and hovered over. The style of the label remains the same.',
          media: getIllustrationComponent(
            'components/checkbox/states/invalid-hover',
          ),
        },
        {
          title: 'Invalid Focus Hover',
          description:
            'The Checkbox in an invalid focus hover state communicates that a user has highlighted a Checkbox, using an input method such as a keyboard or voice.',
          media: getIllustrationComponent(
            'components/checkbox/states/invalid-focus-hover',
          ),
        },
        {
          title: 'Checked Invalid',
          description:
            'The Checkbox has a checked invalid state. The style of the Checkbox input changes to visually communicate and provide feedback to the user that the Checkbox has been checked and is in an invalid state. The style of the label remains the same.',
          media: getIllustrationComponent(
            'components/checkbox/states/checked-invalid',
          ),
        },
        {
          title: 'Checked Invalid Focus',
          description:
            'The Checkbox in a checked invalid focus state communicates that a user has highlighted a Checkbox, using an input method such as a keyboard or voice.',
          media: getIllustrationComponent(
            'components/checkbox/states/checked-invalid-focus',
          ),
        },
        {
          title: 'Checked Invalid Hover',
          description:
            'The Checkbox has a checked invalid hover state. The style of the Checkbox input changes to visually communicate and provide feedback to the user that the Checkbox has been checked and is in an invalid state, and hovered over. The style of the label remains the same.',
          media: getIllustrationComponent(
            'components/checkbox/states/checked-invalid-hover',
          ),
        },
        {
          title: 'Checked Invalid Focus Hover',
          description:
            'The Checkbox in a checked invalid focus hover state communicates that a user has highlighted a Checkbox, using an input method such as a keyboard or voice.',
          media: getIllustrationComponent(
            'components/checkbox/states/checked-invalid-focus-hover',
          ),
        },
        {
          title: 'Valid',
          description: (
            <>
              The Checkbox in an valid state changes style when the Checkbox
              selection conforms to a specific format eg.updating preferences in
              a <Link href="/components/form/"> Form</Link>.The Form component
              is used to apply validation behaviour.The style of the label
              remains the same.
            </>
          ),
          media: getIllustrationComponent('components/checkbox/states/valid'),
        },
        {
          title: 'Valid Focus',
          description:
            'The Checkbox in a valid focus state communicates that a user has highlighted a Checkbox, using an input method such as a keyboard or voice.',
          media: getIllustrationComponent(
            'components/checkbox/states/valid-focus',
          ),
        },
        {
          title: 'Valid Hover',
          description:
            'The Checkbox has a valid hover state. The style of the Checkbox input changes to visually communicate and provide feedback to the user that the Checkbox is in a valid state and hovered over. The style of the label remains the same.',
          media: getIllustrationComponent(
            'components/checkbox/states/valid-hover',
          ),
        },
        {
          title: 'Valid Focus Hover',
          description:
            'The Checkbox in a valid focus hover state communicates that a user has highlighted a Checkbox, using an input method such as a keyboard or voice.',
          media: getIllustrationComponent(
            'components/checkbox/states/valid-focus-hover',
          ),
        },
        {
          title: 'Checked Valid',
          description:
            'The Checkbox has a checked valid state. The style of the Checkbox input changes to visually communicate and provide feedback to the user that the Checkbox has been checked and is in a valid state. The style of the label remains the same.',
          media: getIllustrationComponent(
            'components/checkbox/states/checked-valid',
          ),
        },
        {
          title: 'Checked Valid Focus',
          description:
            'The Checkbox in a checked valid focus state communicates that a user has highlighted a Checkbox, using an input method such as a keyboard or voice.',
          media: getIllustrationComponent(
            'components/checkbox/states/checked-valid-hover',
          ),
        },
        {
          title: 'Checked Valid Hover',
          description:
            'The Checkbox has a checked valid hover state. The style of the Checkbox input changes to visually communicate and provide feedback to the user that the Checkbox has been checked and is in a valid state, and hovered over. The style of the label remains the same.',
          media: getIllustrationComponent(
            'components/checkbox/states/checked-valid-hover',
          ),
        },
        {
          title: 'Checked Valid Focus Hover',
          description:
            'The Checkbox in a checked valid focus hover state communicates that a user has highlighted a Checkbox, using an input method such as a keyboard or voice.',
          media: getIllustrationComponent(
            'components/checkbox/states/checked-valid-focus-hover',
          ),
        },
        {
          title: 'Disabled',
          description: (
            <>
              The Checkbox in a disabled state communicates that a Checkbox
              exists, but is not available to the user in that scenario. When
              the user&apos;s cursor hovers over a Checkbox in a disabled state,
              the cursor shows as not allowed.
              <br />
              <br />
              Disabled Checkboxes are often used to maintain layout consistency
              and communicate that a Checkbox may become available if another
              condition has been met. The style of the label (colour) also
              changes to indicate that the Checkbox is disabled.
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
              The Checkbox in a checked disabled state communicates that a
              Checkbox exists, but is not available to the user in that
              scenario. When the user&apos;s cursor hovers over a Checkbox in a
              checked disabled state, the cursor shows as not allowed.
              <br />
              <br />
              Disabled checked Checkboxes are often used to maintain layout
              consistency and communicate that a Checkbox may become available
              if another condition has been met. The style of the label (colour)
              also changes to indicate that the Checkbox is checked and
              disabled.
            </>
          ),
          media: getIllustrationComponent(
            'components/checkbox/states/checked-disabled',
          ),
        },
      ],
      notice:
        'The Feedback element becomes visible (configurable) on state change, eg hover.',
    }}
  />
);

export default CheckboxComponent;
