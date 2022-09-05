import React from 'react';
import {Link} from '../../components/link';
import {MetaStatus} from '../../components/meta/types';
import {InlineCode} from '../../components/markdown-elements';
import {LayoutProps} from '../../components/layout';
import {ComponentPageTemplate} from '../../templates/component-page-template';
import {getIllustrationComponent} from '../../components/illustrations/illustration-loader';

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
      introduction: `Text block provides a simple way to display text. It supports text cropping, style presets, and typography presets.`,
    }}
    componentDefaultsKey="textblock"
    meta={{
      status: MetaStatus.Supported,
      introduced: '0.17.0',
      codeUrl:
        'https://github.com/newscorp-ghfb/ncu-newskit/blob/develop/src/text-block/text-block.tsx',
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
  />
);

export default TextBlockComponent;
