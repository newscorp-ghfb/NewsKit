import React from 'react';
import {LayoutProps} from '../../../components/layout';
import {GuidePageTemplate} from '../../../templates/guide-page-template/guide-page-template';
import {ComponentPageCell} from '../../../components/layout-cells';
import {
  ContentSection,
  ContentPrimary,
  ContentSecondary,
} from '../../../components/content-structure';

export default (layoutProps: LayoutProps) => (
  <GuidePageTemplate
    headTags={{
      title: 'Design quickstart',
      description:
        'This page describes how to get started designing a digital product with NewsKit.',
    }}
    layoutProps={layoutProps}
    pageIntroduction={{
      type: 'Guides',
      name: 'Design quickstart',
      hero: {
        illustration: 'guides/design-quickstart/hero',
      },
      introduction: `This page describes how to get started designing a digital product with NewsKit.`,
    }}
    featureCard={{
      title: 'Need help?',
      description: 'Can’t find what you’re looking for?',
      href: 'about/contact-us/',
    }}
  >
    <ComponentPageCell>
      <ContentSection sectionName="prerequisites">
        <ContentPrimary id="" toc="" headline="" description="" />
        <ContentSecondary showSeparator />
      </ContentSection>
    </ComponentPageCell>
  </GuidePageTemplate>
);
