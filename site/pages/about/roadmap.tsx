import React from 'react';
import {InlineMessage} from 'newskit';
import {AboutPageTemplate} from '../../templates/about-page-template';
import {LayoutProps} from '../../components/layout';
import {Link} from '../../components/link';
import {
  ContentSection,
  ContentPrimary,
  ContentSecondary,
  ContentColSpan,
} from '../../components/content-structure';
import {ComponentPageCell} from '../../components/layout-cells';

const pageName = 'Roadmap';
const pageDescription =
  'NewsKit’s Design System team is busy building and planning to help you build better products faster.';

const Roadmap = (layoutProps: LayoutProps) => (
  <AboutPageTemplate
    headTags={{
      title: pageName,
      description: pageDescription,
    }}
    layoutProps={layoutProps}
    pageIntroduction={{
      type: 'About',
      name: pageName,
      introduction: pageDescription,
      hero: {illustration: 'components/hero-roadmap-illustration'},
      showSeparator: true,
    }}
  >
    <ComponentPageCell>
      <ContentSection sectionName="roadmap">
        <ContentPrimary
          headline="NewsKit Roadmap"
          description="Here is the team’s focus over the coming months. This is updated regularly as our priorities change over time."
        >
          <iframe
            title="airtable roadmap"
            className="airtable-embed"
            src="https://airtable.com/embed/shrbFPJXN4tVA0Yye?backgroundColor=blue"
            frameBorder="0"
            width="100%"
            height="533"
            style={{
              background: 'transparent',
              border: '1px solid #ccc',
            }}
          />
        </ContentPrimary>

        <ContentSecondary childrenColSpan={ContentColSpan.TEXT}>
          <InlineMessage>
            If you’d like to influence the roadmap,see the{' '}
            <Link href="/about/contribute">contribution page</Link> for further
            details.
          </InlineMessage>
        </ContentSecondary>
      </ContentSection>
    </ComponentPageCell>
  </AboutPageTemplate>
);

export default Roadmap;
