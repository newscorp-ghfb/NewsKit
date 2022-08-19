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
        'The Fieldset is used to provide contextual information around a group of form controls in a web form.',
    }}
    layoutProps={layoutProps}
    pageIntroduction={{
      type: 'Layout',
      name: 'Fieldset',
      hero: {
        illustration: 'components/fieldset/hero',
      },
      introduction: `The Fieldset is used to provide contextual information around a group of form controls in a web form.`,
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
        'The Fieldset contains two required elements and one optional element.',
      media: getIllustrationComponent('components/fieldset/anatomy'),
      rows: [
        {
          name: 'Container',
          description: 'The Fieldset container',
          component: ['HTML Fieldset'],
          optional: undefined,
        },
        {
          name: 'Legend',
          description: 'Provides a caption for the Fieldset',
          component: 'HTML Legend',
          optional: undefined,
        },
        {
          name: 'Children',
          description: 'Provides a caption for the Fieldset',
          component: 'Text Block',
          optional: true,
        },
      ],
    }}
    options={{
      introduction:
        'The Fieldset has options that can be used to provide an appropriate experience for different use cases.',
      cards: [
        {
          title: 'Legend',
          description:
            'The Fieldset has a caption that gives a title attributed to the elements that appear in the Fieldset, called a Legend.',
          media: getIllustrationComponent('components/fieldset/options/legend'),
        },
        {
          title: 'Size',
          description: (
            <>
              There are three sizes of Fieldset Legend; small, medium, and
              large.
              <InlineMessage
                icon={infoIcon}
                role="region"
                aria-label="Size"
                title="Note"
                overrides={{
                  marginBlockStart: 'space050',
                }}
              >
                The size of the Legend, and any{' '}
                <Link href="/components/form/">Form</Link> selection controls,
                Labels, and Assistive Text can also be customised as required.
              </InlineMessage>
            </>
          ),
          media: getIllustrationComponent('components/fieldset/options/size'),
        },
      ],
    }}
    states={{
      introduction: 'The Fieldset has the following states:',
      layout: '2-span',
      cards: [
        {
          title: 'Base',
          description: 'The Fieldset has a base (default) state.',
          media: getIllustrationComponent('components/fieldset/states/base'),
        },
        {
          title: 'Disabled',
          description:
            'The Fieldset in a disabled state communicates that the grouped form selection controls exist, but are not available to the user in that scenario. Disabled Fieldsets are often used to maintain layout consistency in a Form, and communicate that a form selection control may become available if another condition has been met. The style of the Legend (colour) also changes to indicate that the form selection controls grouped with the Fieldset are disabled.',
          media: getIllustrationComponent(
            'components/fieldset/states/disabled',
          ),
        },
      ],
    }}
    commonSection={{
      id: 'formstructure',
      title: 'Form structure',
      introduction: (
        <>
          The below diagram outlines how form controls are grouped together
          using the Fieldset, and wrapped with the{' '}
          <Link href="/components/form/">Form</Link> component that applies
          validation:
        </>
      ),
      media: getIllustrationComponent('components/fieldset/form-structure'),
    }}
    accessibility={{
      introduction: (
        <>
          The Fieldset has the following accessibility considerations:
          <Block spaceStack="space100" />
          <ContentText title="Legend" titleAs="span">
            The legend is a caption that provides a higher-level description of
            the form controls in a group, which is important, particularly for
            users with screen readers. Provide details for the function or
            purpose of the form controls within a Fieldset using the legend.
          </ContentText>
          <InlineMessage
            icon={infoIcon}
            role="region"
            aria-label="Fieldset"
            overrides={{
              marginBlockStart: 'space100',
            }}
          >
            The legend will be repeated to users with screen readers for each
            form control within a Fieldset.
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
              'Focusses on the children passed to in the Fieldset in the order they appear.',
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
              'Aria-label attribute is used to define a string that labels the action that will be performed when the user interacts with the elements in the Fieldset. Should be used when a legend prop is not provided.',
            userSupplied: true,
          },
        ],
      },
    }}
    seo={{
      title: 'SEO',
      introduction: (
        <>
          If another form of{' '}
          <Link
            href="https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Content_categories#phrasing_content"
            target="_blank"
          >
            phrasing content
          </Link>{' '}
          is used (eg. an image, or button), ensure that Alt Text is applied if
          required.
        </>
      ),
    }}
    componentAPI={{
      components: [
        {
          propsSummary:
            'The Fieldset has a range of props that can be used to define an appropriate experience for different use cases.',
          overridesSummary:
            'The Fieldset has a range of predefined elements and attributes that can be overridden to define their appearance.',
          propsRows: [
            {
              name: 'legend',
              type: 'React.ReactNode',
              default: 'heading (text)',
              description:
                'Defines the Legend (caption displayed at the top of the Fieldset).',
            },
            {
              name: 'children',
              type: 'React.ReactNode',
              description:
                'If provided, the form selection controls are passed as the children of the Fieldset component',
            },
            {
              name: 'size',
              type: ['small', 'medium', 'large'],
              description: 'Defines the size of the Fieldset Legend.',
            },
            {
              name: 'disabled',
              type: 'state',
              default: 'false',
              description: 'If true, renders the Fieldset in a disabled state.',
            },
          ],
          overridesRows: [
            {
              attribute: 'spaceInset',
              type: 'MQ<string>',
              description:
                'If provided, this overrides the inset space (padding) applied to the Fieldset.',
            },
            {
              attribute: 'stylePreset',
              type: 'MQ<string>',
              description:
                'If provided, overrides the stylePreset of the Fieldset.',
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
                'If provided, overrides the typographyPreset of the Legend.',
            },
            {
              attribute: 'legend.stylePreset',
              type: 'MQ<string>',
              default: ['base = inkContrast', 'disabled = inkNonEssential'],
              description:
                'If provided, overrides the stylePreset of the Legend.',
            },
            {
              attribute: 'legend.spaceStack',
              type: 'MQ<string>',
              default: ["spaceStack: 'space030'"],
              description:
                'If provided, this overrides the stack space (margin) applied to the Legend.',
            },
            ...(commonLogicalProps() as OverridesRowsProps[]),
          ],
        },
      ],
    }}
    compliance={{
      variations: true,
      states: true,
      behaviours: undefined,
      usage: true,
      accessibility: true,
      performance: false,
      seo: true,
      props: true,
      uiKit: undefined,
      design: true,
      themes: true,
    }}
    related={{
      related: [
        'Block',
        'Card',
        'Divider',
        'Drawer',
        'Grid',
        'Grid Layout',
        'Modal',
        'Popover',
        'Stack',
        'Structured List',
        'Visibility',
      ],
    }}
  />
);

export default FieldsetComponent;
