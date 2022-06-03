import React from 'react';
import {LayoutProps} from '../../components/layout';
import {PatternPageTemplate} from '../../templates/pattern-page-template/pattern-page-template';
import {
  ContentSection,
  ContentPrimary,
} from '../../components/content-structure';
import {ComponentPageCell} from '../../components/layout-cells';

const BestPractice = (layoutProps: LayoutProps) => (
  <PatternPageTemplate
    headTags={{
      title: 'Best practice',
      description:
        'Help users to fill in forms quickly and accurately by following these industry best practices.',
    }}
    layoutProps={layoutProps}
    pageIntroduction={{
      type: 'Forms',
      name: 'Best practice',
      hero: {
        illustration: 'patterns/overview/hero',
      },
      introduction: `Help users to fill in forms quickly and accurately by following these industry best practices.`,
    }}
  >
    <ComponentPageCell>
      <ContentSection sectionName="introduction">
        <ContentPrimary
          headline="Introduction"
          description="Following best practices ensures that the user understands what data is being collected and why, is not overwhelmed by the information we are requesting, and knows the data they have entered is valid."
          showSeparator
        />
      </ContentSection>
    </ComponentPageCell>
  </PatternPageTemplate>
);

export default BestPractice;
