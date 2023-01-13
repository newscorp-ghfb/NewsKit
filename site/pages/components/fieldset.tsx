import React from 'react';
import {Block, InlineMessage, toNewsKitIcon} from 'newskit';
import {Info as FilledInfo} from '@emotion-icons/material/Info';
import {getIllustrationComponent} from '../../components/illustrations/illustration-loader';
import {ComponentPageTemplate} from '../../templates/component-page-template';
import {LayoutProps} from '../../components/layout';
import {ContentText} from '../../components/text-section/content-text';
import {MetaStatus} from '../../components/meta/types';
import {Link} from '../../components/link';
import {commonLogicalProps} from '../../components/component-api/common-logical-props';
import {OverridesRowsProps} from '../../components/component-api';

const IconFilledInfo = toNewsKitIcon(FilledInfo);

const infoIcon = (
  <IconFilledInfo
    overrides={{
      size: 'iconSize020',
    }}
  />
);

const FieldsetComponent = (layoutProps: LayoutProps) => (
  <ComponentPageTemplate
    headTags={{
      title: 'Fieldset',
      description:
        'Fieldsets provide contextual information around a group of form controls in a web form.',
    }}
    layoutProps={layoutProps}
    pageIntroduction={{
      type: 'Layout',
      name: 'Fieldset',
      hero: {
        illustration: 'components/fieldset/hero',
      },
      introduction: `Fieldsets provide contextual information around a group of form controls in a web form.`,
    }}
    componentDefaultsKey="fieldset"
    meta={{
      status: MetaStatus.Supported,
      introduced: 'v5.0.0',
      codeUrl:
        'https://github.com/newscorp-ghfb/newskit/tree/main/src/fieldset',
    }}
    anatomy={{
      introduction:
        'The fieldset contains two required elements and one optional element.',
      media: getIllustrationComponent('components/fieldset/anatomy'),
      rows: [
        {
          name: 'Container',
          description: 'The fieldset container',
          component: ['HTML fieldset'],
          optional: undefined,
        },
        {
          name: 'Legend',
          description: 'Provides a caption for the fieldset',
          component: 'HTML legend',
          optional: undefined,
        },
        {
          name: 'Children',
          description: 'Components passed into the fieldset',
          component: 'Text block',
          optional: true,
        },
      ],
    }}
    options={{
      introduction: 'The fieldset has options for different use cases:',
      cards: [
        {
          title: 'Legend',
          description:
            'Title the group of elements in the fieldset with a caption.',
          media: getIllustrationComponent('components/fieldset/options/legend'),
        },
        {
          title: 'Size',
          description: (
            <>
              The fieldset legend comes in small, medium and large. The default
              is medium.
              <InlineMessage
                icon={infoIcon}
                role="region"
                aria-label="Size"
                overrides={{
                  marginBlockStart: 'space050',
                }}
              >
                You can customise the size of the legend, and any{' '}
                <Link href="/components/form/">form</Link> selection controls,
                labels and assistive text, as required.
              </InlineMessage>
            </>
          ),
          media: getIllustrationComponent('components/fieldset/options/size'),
        },
      ],
    }}
    states={{
      introduction: 'The fieldset has the following states:',
      layout: '2-span',
      cards: [
        {
          title: 'Base',
          description: 'The default state.',
          media: getIllustrationComponent('components/fieldset/states/base'),
        },
        {
          title: 'Disabled',
          description:
            'Communicates that the grouped form selection controls exist, but aren’t available in that scenario. Disabled fieldsets maintain layout consistency in a form, and communicate that a form selection control may become available if another condition is met. The style of the legend (colour) changes to indicate that the form selection controls grouped with the fieldset are disabled.',
          media: getIllustrationComponent(
            'components/fieldset/states/disabled',
          ),
        },
      ],
    }}
    commonSection={{
      id: 'formstructure',
      title: 'Form structure',
      introduction:
        'The diagram below shows how to use the fieldset to group form controls and wrap them with the form to apply validation:',
      media: getIllustrationComponent('components/fieldset/form-structure'),
    }}
    accessibility={{
      introduction: (
        <>
          The fieldset has the following accessibility considerations:
          <Block spaceStack="space100" />
          <ContentText title="Legend" titleAs="span">
            The legend is a caption for a group of form controls. Use it to
            explain the function or purpose of the form controls.
          </ContentText>
          <InlineMessage icon={infoIcon} role="region" aria-label="Fieldset">
            Legends are important for users with screen readers. Screen readers
            will repeat the legend for each form control within a fieldset.
          </InlineMessage>
        </>
      ),
      focusOrder: {
        title: 'Focus order',
        tableRows: [
          {
            order: 1,
            element: 'Children',
            role:
              'Focusses on the children passed to in the fieldset in the order they appear.',
          },
        ],
      },
      aria: {
        title: 'WAI-ARIA',
        tableRows: [
          {
            element: 'labelledby',
            attribute: 'ariaLabel',
            value: 'string',
            description:
              'Defines a string that labels the action to be performed when the user interacts with the elements in the fieldset. Use when a legend prop isn’t provided',
            userSupplied: true,
          },
        ],
      },
    }}
    seo={{
      title: 'SEO',
      introduction:
        'If you’re including an image inside the fieldset, ensure alt text is applied.',
    }}
    componentAPI={{
      components: [
        {
          title: 'Fieldset',
          propsSummary:
            'The fieldset has a range of props and overrides to define the experience in different use cases, and a range of predefined elements and attributes that you can override to define their appearance.',
          overridesSummary:
            'The fieldset has a range of props and overrides to define the experience in different use cases, and a range of predefined elements and attributes that you can override to define their appearance.',
          propsRows: [
            {
              name: 'legend',
              type: 'React.ReactNode',
              default: 'heading (text)',
              description: 'Defines the legend',
            },
            {
              name: 'children',
              type: 'React.ReactNode',
              description:
                'If provided, passes the form selection controls as the children of the fieldset',
            },
            {
              name: 'size',
              type: ['small', 'medium', 'large'],
              description: 'Defines the size of the fieldset Legend.',
            },
            {
              name: 'disabled',
              type: 'state',
              default: 'false',
              description: 'If true, renders the fieldset in a disabled state.',
            },
          ],
          overridesRows: [
            {
              attribute: 'spaceInset',
              type: 'MQ<string>',
              description:
                'If provided, overrides the inset space (padding) applied to the fieldset',
            },
            {
              attribute: 'stylePreset',
              type: 'MQ<string>',
              description:
                'If provided, overrides the stylePreset of the fieldset',
            },
            {
              attribute: 'legend.typographyPreset',
              type: 'MQ<string>',
              default: [
                'Small = utilityLabel010',
                'Medium = utilityLabel020',
                'Large = utilityLabel030',
              ],
              description:
                'If provided, overrides the typographyPreset of the legend',
            },
            {
              attribute: 'legend.stylePreset',
              type: 'MQ<string>',
              default: ['base = inkContrast', 'disabled = inkNonEssential'],
              description:
                'If provided, overrides the stylePreset of the legend',
            },
            {
              attribute: 'legend.spaceStack',
              type: 'MQ<string>',
              default: ["spaceStack: 'space030'"],
              description:
                'If provided, overrides the stack space (margin) applied to the legend',
            },
            ...(commonLogicalProps() as OverridesRowsProps[]),
          ],
        },
      ],
    }}
    related={{
      related: ['Stack', 'Structured List', 'Visibility'],
    }}
  />
);

export default FieldsetComponent;
