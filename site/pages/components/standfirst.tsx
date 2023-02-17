import React from 'react';
import {Standfirst, styled} from 'newskit';
import {ComponentPageTemplate} from '../../templates/component-page-template';
import {getIllustrationComponent} from '../../components/illustrations/illustration-loader';
import {LayoutProps} from '../../components/layout';
import {MetaStatus} from '../../components/meta';
import {UsageKind} from '../../components/usage-card';
import {InlineCode} from '../../components/markdown-elements';

const PlaygroundContainer = styled.div`
  display: flex;
  width: 100%;
  height: 200px;
  align-items: center;
  justify-content: center;
`;

const StandfirstComponent = (layoutProps: LayoutProps) => (
  <ComponentPageTemplate<typeof Standfirst>
    headTags={{
      title: 'Standfirst',
      description:
        "Standfirst is an introductory paragraph in an article which summarises the article's content.",
    }}
    layoutProps={layoutProps}
    pageIntroduction={{
      type: 'Component',
      name: 'Standfirst',
      hero: {
        illustration: 'components/standfirst/01-hero/hero',
      },
      introduction:
        "Standfirst is an introductory paragraph in an article which summarises the article's content.",
    }}
    componentDefaultsKey="standfirst"
    meta={{
      status: MetaStatus.Supported,
      introduced: 'v0.16.0',
      codeUrl:
        'https://github.com/newscorp-ghfb/newskit/tree/main/src/standfirst',
      storybookId: 'components-standfirst--story-default',
    }}
    interactiveDemo={{
      introduction:
        'This demo lets you preview the standfirst component, its variations, and configuration options.',
      playground: {
        componentName: 'Standfirst',
        component: props => (
          <PlaygroundContainer>
            <Standfirst {...props} />
          </PlaygroundContainer>
        ),
        knobs: [
          {
            name: 'Children',
            propName: 'children',
            value: 'This is a standfirst',
          },
          {
            name: 'As',
            propName: 'as',
            options: [
              {
                label: 'h1',
                value: 'h1',
                isDefault: true,
              },
              {
                label: 'h2',
                value: 'h2',
              },
              {
                label: 'h3',
                value: 'h3',
              },
              {
                label: 'h4',
                value: 'h4',
              },
              {
                label: 'h5',
                value: 'h5',
              },
              {
                label: 'h6',
                value: 'h6',
              },
              {
                label: 'span',
                value: 'span',
              },
            ],
          },
        ],
      },
    }}
    anatomy={{
      introduction: 'Standfirst contains one required element.',
      rows: [
        {
          name: 'Standfirst',
          description: 'The text container.',
          component: ['Text block'],
        },
      ],
      media: getIllustrationComponent(
        'components/standfirst/02-anatomy/anatomy',
      ),
    }}
    options={{
      introduction: 'The standfirst has options for different use cases:',
      cards: [
        {
          title: 'Heading level',
          description:
            'The standfirst defaults to a <h2> but this can be changed to fit the semantic order.',
          media: getIllustrationComponent(
            'components/standfirst/03-options/heading-level',
          ),
        },
      ],
    }}
    usage={{
      introduction:
        'The following guidance describes how and when to use the standfirst component appropriately.',
      layout: '2-span',
      cards: [
        {
          title: 'Do use larger or bolder type than paragraph text',
          description:
            'Give the standfirst visual prominence to attract user attention to the article.',
          kind: UsageKind.DO,
          media: getIllustrationComponent(
            'components/standfirst/04-dos-donts/do-01',
          ),
        },
      ],
    }}
    componentAPI={{
      components: [
        {
          title: 'Standfirst',
          propsRows: [
            {
              name: 'children',
              type: 'string',
              description:
                'The content of the standfirst is passed as the child of the component',
              required: true,
            },
            {
              name: 'as',
              type: 'h1 | h2 | h3 | h4 | h5 | h6 | span',
              description: (
                <>
                  Change the underlying HTML element on the header. Standfirst
                  defaults to a <InlineCode>h2</InlineCode>&nbsp; but it can be
                  converted to another heading element or span by{' '}
                  <InlineCode>renderStyledTextAs</InlineCode> prop
                </>
              ),
            },
          ],
          overridesRows: [
            {
              attribute: 'stylePreset',
              type: 'MQ<string>',
              default: 'inkBase',
              description:
                'If provided, this overrides the style preset applied to the passed styled text',
            },
            {
              attribute: 'typographyPreset',
              type: 'MQ<string>',
              default: [
                'xs: editorialSubheadline010',
                'lg: editorialSubheadline020',
              ],
              description:
                'If provided, this overrides the typography preset applied to the styled text',
            },
            {
              attribute: 'logicalProps',
              type: 'MQ<string>',
              description:
                'Can take one space token to specify the logical inline start and end padding of the container. Can be used on breakpoints',
            },
          ],
        },
      ],
    }}
    related={{
      related: ['Text Block'],
    }}
  />
);

export default StandfirstComponent;
