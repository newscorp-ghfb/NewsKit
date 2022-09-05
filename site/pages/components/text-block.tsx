import React from 'react';
import {MetaStatus} from '../../components/meta/types';
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
  />
);

export default TextBlockComponent;
