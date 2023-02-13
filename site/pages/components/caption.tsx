import React from 'react';
import {Caption} from 'newskit';
import {MetaStatus} from '../../components/meta/types';
import {LayoutProps} from '../../components/layout';
import {ComponentPageTemplate} from '../../templates/component-page-template/component-page-template';
import {getIllustrationComponent} from '../../components/illustrations/illustration-loader';
import {OverridesRowsProps} from '../../components/component-api';
import {commonLogicalProps} from '../../components/component-api/common-logical-props';
import {UsageKind} from '../../components/usage-card';

const CaptionComponent = (layoutProps: LayoutProps) => (
  <ComponentPageTemplate<typeof Caption>
    headTags={{
      title: 'Caption',
      description:
        'A caption is a text description of an image or video to describe what is showing.',
    }}
    layoutProps={layoutProps}
    pageIntroduction={{
      type: 'Text',
      name: 'Caption',
      hero: {
        illustration: 'components/caption-illustration',
      },
      introduction: `A caption is a text description of an image or video to describe what is showing.`,
    }}
    componentDefaultsKey="Caption"
    meta={{
      status: MetaStatus.Supported,
      introduced: 'v0.19.0',
      codeUrl: 'https://github.com/newscorp-ghfb/newskit/tree/main/src/caption',
      storybookId: 'components-caption--story-caption-default',
      figmaUrl:
        'https://www.figma.com/file/FSbCQa6SzVR3K48ZWLeD77/%F0%9F%9F%A2-NK-Web-Components?node-id=1967%3A5713&t=4rcwseDIwrZdWokj-0',
    }}
    interactiveDemo={{
      introduction:
        'This demo lets you preview the caption component, its variations, and configuration options.',
      playground: {
        componentName: 'Caption',
        component: props => <Caption {...props} />,
        knobs: [
          {
            name: 'Caption text',
            propName: 'children',
            value: 'Hathersage Moor in the Peak District',
          },
          {
            name: 'Credit text',
            propName: 'creditText',
            value: 'Credit by Matthew Taylor/Alamy',
          },
        ],
      },
    }}
    anatomy={{
      introduction:
        'The caption contains one required element and one optional element.',
      rows: [
        {
          name: 'Caption text',
          description: 'The text of the caption describing the image or video',
          component: 'Text Block',
          optional: undefined,
        },
        {
          name: 'Credit text',
          description: 'Optional text, crediting the source',
          component: 'Text Block',
          optional: true,
        },
      ],
      media: getIllustrationComponent('components/caption/anatomy/anatomy'),
    }}
    options={{
      introduction:
        'The caption has options that can be used to provide an appropriate experience for different use cases.',
      cards: [
        {
          title: 'Credit text',
          description:
            'A credit to the source can be added underneath the caption text.',
          media: getIllustrationComponent(
            'components/caption/options/credit-text',
          ),
        },
        {
          title: 'Inset spacing',
          description:
            'The caption can be inset with increased spacing. There are two sizes of inset: XS and MD.',
          media: getIllustrationComponent(
            'components/caption/options/inset-spacing',
          ),
        },
      ],
    }}
    usage={{
      introduction:
        'The following guidance describes how and when to use the caption component appropriately.',
      cards: [
        {
          title: 'Don’t include captions inside images',
          description:
            'Legibility can be poor and screen readers cannot read the words. Use live text instead.',
          kind: UsageKind.DONT,
          media: getIllustrationComponent(
            'components/caption/usage/inside-images',
          ),
        },
      ],
    }}
    accessibility={{
      introduction:
        'Captions help ensure that media like images and video are accessible to everyone by providing supplemental information about what the image is conveying. Captions are displayed within the main content and can be read by assistive technology.',
    }}
    componentAPI={{
      components: [
        {
          title: 'Caption',
          propsSummary:
            'The caption has a range of props that can be used to define an appropriate experience for different use cases.',
          overridesSummary:
            'The caption has a range of predefined elements and attributes that can be overridden to define its appearance.',
          propsRows: [
            {
              name: 'children',
              type: 'ReactNode',
              required: true,
              description: 'The text of the caption',
            },
            {
              name: 'creditText',
              type: 'string',
              description:
                'If provided, supplies the content for the component credit',
            },
          ],
          overridesRows: [
            {
              attribute: 'stylePreset',
              type: 'MQ<string>',
              default: 'inkBase',
              description:
                'If provided, this overrides the style preset of the caption',
            },
            {
              attribute: 'typographyPreset',
              type: 'MQ<string>',
              default: 'editorialCaption010',
              description:
                'If provided, this overrides the typography preset of the caption',
            },
            {
              attribute: 'spaceStack',
              type: 'MQ<string>',
              default: 'space040',
              description:
                'If provided, this overrides the spacing between the caption and the credit',
            },
            {
              attribute: 'credit.stylePreset',
              type: 'MQ<string>',
              default: 'uppercaseInkSubtle',
              description:
                'If provided, this overrides the style preset of the credit text',
            },
            {
              attribute: 'credit.typographyPreset',
              type: 'MQ<string>',
              default: 'utilityMeta010',
              description:
                'If provided, this overrides the typography preset of the credit text',
            },
            ...(commonLogicalProps() as OverridesRowsProps[]),
          ],
        },
      ],
    }}
    related={{
      related: ['Text Block'],
    }}
  />
);

export default CaptionComponent;
