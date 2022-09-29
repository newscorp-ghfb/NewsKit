import React from 'react';
import {MetaStatus} from '../../components/meta/types';
import {LayoutProps} from '../../components/layout';
import {ComponentPageTemplate} from '../../templates/component-page-template';
import {getIllustrationComponent} from '../../components/illustrations/illustration-loader';

const ScrollComponent = (layoutProps: LayoutProps) => (
  <ComponentPageTemplate
    headTags={{
      title: 'Scroll',
      description:
        'The scroll component adds scroll behaviour to overflowed content.',
    }}
    layoutProps={layoutProps}
    pageIntroduction={{
      type: 'Navigation',
      name: 'Scroll',
      hero: {
        illustration: 'components/scroll-illustration',
      },
      introduction:
        'The scroll component adds scroll behaviour to overflowed content.',
    }}
    componentDefaultsKey="scroll"
    meta={{
      status: MetaStatus.Supported,
      introduced: 'v0.8.0',
      codeUrl: 'https://github.com/newscorp-ghfb/newskit/tree/main/src/scroll',
      figmaUrl:
        'https://www.figma.com/file/FSbCQa6SzVR3K48ZWLeD77/%F0%9F%9F%A2-NK-Web-Components?node-id=2141%3A40757',
    }}
    anatomy={{
      introduction:
        'The scroll component contains one required element and two optional elements.',
      rows: [
        {
          name: 'Controls',
          description: 'Icon buttons for moving content left/right or up/down.',
          component: 'Icon Button',
          optional: true,
        },
        {
          name: 'Overlay',
          description:
            'A gradient overlays the scrollable element to indicate there is more content out of view.',
          component: 'Block',
          optional: true,
        },
        {
          name: 'Scroll bar',
          description:
            'A bar that indicates the horizontal or vertical position of the content being scrolled.',
          component: 'Block',
          optional: true,
        },
      ],
      media: getIllustrationComponent('components/scroll/anatomy'),
    }}
  />
);

export default ScrollComponent;
