import React from 'react';
import {InlineMessage, getSizingCssFromTheme, styled} from 'newskit';
import {HeadNextSeo} from '../../components/head-next-seo';
import Layout, {LayoutProps} from '../../components/layout';
import {PageIntroduction} from '../../components/page-introduction';
import {Link} from '../../components/link';
import {
  ContentSection,
  ContentPrimary,
  ContentSecondary,
  ContentColSpan,
} from '../../components/content-structure';
import {ComponentPageCell} from '../../components/layout-cells';

const PageIntroductionContainer = styled.div`
  ${getSizingCssFromTheme('marginTop', 'sizing100')};
  ${getSizingCssFromTheme('marginBottom', 'sizing090')}
`;

const Roadmap = (
  {path, ...props}: LayoutProps, //  TODO: remove path hack after all docs pages are done - https://nidigitalsolutions.jira.com/browse/PPDSE-312
) => (
  <Layout {...props} path={`${path}-new`}>
    <HeadNextSeo
      title="Roadmap"
      description="NewsKit’s Design System team is busy building and planning to help you build better products faster."
      image={{
        url: 'social/about.png',
        alt: 'Roadmap',
      }}
    />

    <PageIntroductionContainer>
      <PageIntroduction
        type="About"
        name="Roadmap"
        introduction="NewsKit’s Design System team is busy building and planning to help you
        build better products faster."
        hero={{
          illustration: 'components/hero-roadmap-illustration',
          illustrationProps: {viewBox: '0 0 1344 759'},
        }}
      />
    </PageIntroductionContainer>

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
  </Layout>
);

export default Roadmap;
