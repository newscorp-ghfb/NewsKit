import React from 'react';
import {ComponentPageTemplate} from '../../templates/component-page-template';
import {LayoutProps} from '../../components/layout';

const TagComponent = (layoutProps: LayoutProps) => (
  <ComponentPageTemplate
    headTags={{
      title: 'Tag',
      description:
        'Tags are used to classify content, typically using keywords.',
    }}
    layoutProps={layoutProps}
    pageIntroduction={{
      type: 'Navigation',
      name: 'Tag',
      hero: {
        illustration: 'components/tag-illustration',
      },
      introduction:
        'Tags are used to classify content, typically using keywords.',
    }}
    componentDefaultsKey="tag"
  />
);

export default TagComponent;
