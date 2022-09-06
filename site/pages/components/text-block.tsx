import React from 'react';
import {TextBlock, TextBlockProps, styled} from 'newskit';
import {Link} from '../../components/link';
import {UsageKind} from '../../components/usage-card';
import {MetaStatus} from '../../components/meta/types';
import {InlineCode} from '../../components/markdown-elements';
import {LayoutProps} from '../../components/layout';
import {ComponentPageTemplate} from '../../templates/component-page-template';
import {getIllustrationComponent} from '../../components/illustrations/illustration-loader';

const PlaygroundContainer = styled.div`
  display: flex;
  width: 100%;
  height: 200px;
  align-items: center;
  justify-content: center;
`;

const TextBlockComponent = (layoutProps: LayoutProps) => (
  <ComponentPageTemplate
    headTags={{
      title: 'Text Block',
      description:
        'Text block provides a simple way to display text. It supports text cropping, style presets, and typography presets.',
    }}
    layoutProps={layoutProps}
    pageIntroduction={{
      type: 'Text',
      name: 'Text Block',
      hero: {
        illustration: 'components/text-block-illustration',
      },
      introduction:
        'Text block provides a simple way to display text. It supports text cropping, style presets, and typography presets.',
    }}
    componentDefaultsKey="textblock"
    meta={{
      status: MetaStatus.Supported,
      introduced: '0.17.0',
      codeUrl:
        'https://github.com/newscorp-ghfb/ncu-newskit/blob/develop/src/text-block/text-block.tsx',
    }}
    interactiveDemo={{
      introduction:
        'This demo allows you to preview the Text Block, its variations, and configuration options.',
      playground: {
        componentName: 'TextBlock',
        component: (props: TextBlockProps) => (
          <PlaygroundContainer>
            <TextBlock {...props} />
          </PlaygroundContainer>
        ),
        knobs: [
          {
            name: 'Content',
            propName: 'children',
            value: 'TextBlock Content',
          },
          {
            name: 'No Crop',
            propName: 'noCrop',
            options: [
              {
                label: 'Default (false)',
                value: undefined,
                isDefault: true,
              },
              {
                label: 'true',
                value: true,
              },
            ],
          },
          {
            name: 'Render Styled Text as',
            propName: 'as',
            options: [
              {
                label: 'Default (p)',
                value: undefined,
                isDefault: true,
              },
              {
                label: 'h1',
                value: 'h1',
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
                label: 'div',
                value: 'div',
              },
              {
                label: 'span',
                value: 'span',
              },
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
            ] as any,
          },
        ],
      },
    }}
    anatomy={{
      introduction: 'The text block contains one element.',
      media: getIllustrationComponent('components/text-block/anatomy'),
      rows: [
        {
          name: 'Text block',
          description: 'The text container',
          optional: undefined,
        },
      ],
    }}
    options={{
      introduction:
        'The text block has options that can be used to provide an appropriate experience for different use cases.',
      cards: [
        {
          title: 'Render as',
          description:
            'By using Render as, the text block can be converted to another heading element or div.',
          media: getIllustrationComponent(
            'components/text-block/options/render',
          ),
        },
        {
          title: 'Text crop',
          description: (
            <>
              Text cropping functionality can be disabled on the text block.{' '}
              <Link href="/theme/foundation/fonts/#textcrop">Read more.</Link>
            </>
          ),
          media: getIllustrationComponent(
            'components/text-block/options/text-crop',
          ),
        },
        {
          title: 'Styling',
          description: (
            <>
              Styling can be applied to the text block by using{' '}
              <Link href="/theme/presets/style-presets/">style presets</Link>{' '}
              and{' '}
              <Link href="/theme/presets/typography-presets/">
                typography presets.
              </Link>
            </>
          ),
          media: getIllustrationComponent(
            'components/text-block/options/styling',
          ),
        },
        {
          title: 'Drop cap',
          description: (
            <>
              The drop cap can be applied to a paragraph to increase the size of
              the first <InlineCode>initial</InlineCode> letter. It has a number
              of defaults which define the space around, and the visual
              appearance of the drop cap.
            </>
          ),
          media: getIllustrationComponent(
            'components/text-block/options/drop-cap',
          ),
        },
      ],
    }}
    usage={{
      introduction:
        'The following guidance describes how and when to appropriately use the text block.',
      cards: [
        {
          description:
            'Use the text block for any text content, which can apply typography presets and style presets.',
          kind: UsageKind.DO,
          media: getIllustrationComponent('components/text-block/usage/do-01'),
        },
      ],
    }}
    accessibility={{
      introduction: (
        <>
          As this is an HTML element, this component can utilise any aria
          attribute, such as{' '}
          <Link
            href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions"
            target="_blank"
          >
            region.
          </Link>
          <br />
          <br />
          By default, the text block will render as span. When using,
          consideration should be given as to what semantic level the text
          should be set at. This is to aid in the navigation of the page for
          users using assistive technologies. This can be configured with the as
          property.
        </>
      ),
    }}
    seo={{
      title: 'SEO',
      introduction: (
        <>
          Similar to accessibility, text should be set at the correct semantic
          level (eg{' '}
          <Link
            href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements"
            target="_blank"
          >
            &#60;h1&#62; to &#60;h6&#62;
          </Link>
          ), to enable crawlers to better index the page.
        </>
      ),
    }}
    componentAPI={{
      introduction:
        'The text block has a range of props that can be used to define an appropriate experience for different use cases.',
      components: [
        {
          propsRows: [
            {
              name: 'children',
              type: 'string',
              default: '',
              description: 'Content to be rendered inside the text element.',
              required: true,
            },
            {
              name: 'as',
              type: `'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'div' | 'span'`,
              default: `'p'`,
              description:
                'Defines the HTML element that the text block is rendered as.',
            },
            {
              name: 'noCrop',
              type: 'boolean',
              default: 'false',
              description:
                'If true, this disables text cropping functionality on the text block.',
            },
            {
              name: 'stylePreset',
              type: 'MQ<string>',
              description:
                'If provided, this overrides the style preset applied to the text block.',
            },
            {
              name: 'typographyPreset',
              type: 'MQ<string>',
              description:
                'If provided, this overrides the typography preset applied to the text block.',
            },
          ],
        },
      ],
    }}
    related={{
      related: ['Stack', 'Block'],
    }}
  />
);

export default TextBlockComponent;
