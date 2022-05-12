import React from 'react';
import {MetaStatus} from '../../components/meta/types';
import {LayoutProps} from '../../components/layout';
import {ComponentPageTemplate} from '../../templates/component-page-template';

const StructuredListComponent = (layoutProps: LayoutProps) => (
  <ComponentPageTemplate
    headTags={{
      title: 'StructuredList',
      description: '',
    }}
    layoutProps={layoutProps}
    pageIntroduction={{
      type: 'Layout',
      name: 'Structured List',
      hero: {
        src: 'static/button-hero.svg',
        alt: 'structured-list-demo-image',
      },
      introduction:
        'Structured lists group content that is similar or related.',
    }}
    componentDefaultsKey="structuredList"
    meta={{
      status: MetaStatus.Beta,
      introduced: 'v3.3.0',
      codeUrl: 'https://github.com/newscorp-ghfb/newskit',
      figmaUrl: 'https://github.com/newscorp-ghfb/newskit',
    }}
  />
);

export default StructuredListComponent;
