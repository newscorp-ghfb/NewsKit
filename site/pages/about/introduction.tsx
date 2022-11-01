import React from 'react';
import {getSizingCssFromTheme, styled} from 'newskit';
import Layout, {LayoutProps} from '../../components/layout';
import {PageIntroduction} from '../../components/page-introduction';
import {MediaList} from '../../components/media-list';
import {ComponentPageCell} from '../../components/layout-cells';
import {Link} from '../../components/link';
import {HeadNextSeo} from '../../components/head-next-seo';
import {
  ContentSection,
  ContentPrimary,
  ContentSecondary,
} from '../../components/content-structure';

const principleCardoverrides = {
  title: {
    typographyPreset: 'editorialHeadline030',
  },
  description: {
    typographyPreset: 'editorialParagraph020',
  },
};

const PageIntroductionContainer = styled.div`
  ${getSizingCssFromTheme('marginTop', 'sizing100')};
  ${getSizingCssFromTheme('marginBottom', 'sizing090')}
`;

const cards = [
  {
    media: {
      src: 'static/about-principles-01.svg',
      alt: '',
    },
    stylePrefix: 'principleCard',
    label: 'User focused',
    title:
      'We design for people. Whether the product teams using our components or the customers using the end products',
    description:
      'We establish insights into our user needs through qualitative and quantitative data; we continually test our components and the overall design system and seek feedback to ensure it meets these needs.',
    overrides: principleCardoverrides,
  },
  {
    media: {
      src: 'static/about-principles-02.svg',
      alt: '',
    },
    stylePrefix: 'principleCard',
    label: 'Inclusive',
    title:
      'We’re inclusive first to ensure our solutions meet the needs of as many users as possible',
    description:
      'Every design decision has the potential to include or exclude users. The components are accessible to WCAG 2.1 AA standards. We strive for clarity around everything we do, simplifying the complex. We use simple language, avoid acronyms and offer more detail when required. Our users should always be able to understand and act with confidence.',
    overrides: principleCardoverrides,
  },
  {
    media: {
      src: 'static/about-principles-03.svg',
      alt: '',
    },
    stylePrefix: 'principleCard',
    label: 'Essential',
    title:
      'Every component serves a user’s need that is shared by multiple services or products',
    description:
      "We never build something 'just in case'. Every design decision and component has a clear purpose and contributes to a larger goal; it shouldn't be there if it doesn't.",
    overrides: principleCardoverrides,
  },
  {
    media: {
      src: 'static/about-principles-04.svg',
      alt: '',
    },
    stylePrefix: 'principleCard',
    label: 'Collaborative',
    title: 'Great ideas come from everywhere',
    description:
      'Everyone is encouraged to contribute. We share everything we are doing at every step: designs, code, ideas, successes or failures. We encourage and seek feedback, suggestions and contributions. We all take responsibility for the output of the team and reject ownership.',
    overrides: principleCardoverrides,
  },
];

const Introduction = (
  {path, ...props}: LayoutProps, //  TODO: remove path hack after all docs pages are done - https://nidigitalsolutions.jira.com/browse/PPDSE-312
) => (
  <Layout {...props} path={`${path}-new`}>
    <HeadNextSeo
      title="About"
      description="NewsKit provides components, guidelines and standards to enable digital product
      teams to create high-quality, consistent products quickly. NewsKit is built on modular design
      principles and backed by best practice guidance for design and development."
      image={{
        url: 'social/about.png',
        alt: 'Introduction',
      }}
    />

    <PageIntroductionContainer>
      <PageIntroduction
        type="About"
        name="Introduction"
        introduction="NewsKit provides components, guidelines and standards to enable digital product teams to create high-quality, consistent products quickly. NewsKit is built on modular design principles and backed by best practice guidance for design and development."
        hero={{
          illustration: 'about/introduction-hero-stepping-stones-illustration',
          illustrationProps: {viewBox: '0 0 1344 759'},
        }}
      />
    </PageIntroductionContainer>

    <ComponentPageCell>
      <ContentSection sectionName="benefits">
        <ContentPrimary
          headline="Benefits"
          description="Design systems have become the gold standard for product development. Some benefits include:"
        />

        <ContentSecondary
          headline="Speed to market"
          description="Upfront research, design and development allows teams to build new
        features or products quickly and with confidence. Rapid creation
        translates to the increased pace of innovation."
        />

        <ContentSecondary
          headline="Shared knowledge"
          description="NewsKit is built through collaboration and is available to all.
        Feedback from a diverse range of consumers produces a more robust,
        considered and flexible product. In addition, NewsKit allows teams
        to benefit from the research and experience of other teams and solve
        problems once."
        />

        <ContentSecondary
          headline="Best Practice"
          description={
            <>
              All NewsKit components support keyboard navigation, screen readers
              and touch screens, conforming to{' '}
              <Link href="https://www.w3.org/TR/WCAG21/" target="_blank">
                W3C&apos;s WCAG 2.1 guidelines
              </Link>{' '}
              for accessibility. In addition, the components take in SEO
              considerations where relevant and are rigorously tested. Finally,
              detailed guidance documentation ensures clarity.
            </>
          }
        />

        <ContentSecondary
          headline="Sustainability"
          description="NewsKit allows teams to do more with less; components are maintained
        centrally, enabling teams to achieve incremental upgrades and manage
        their digital product needs as they grow."
        />

        <ContentSecondary
          headline="Flexibility"
          description="The powerful theming system allows styling to be tailored to the
        needs of any brand. Themes can be applied globally or per component,
        enabling visual differences between sections, sub-brands or
        unlocking user preferences like dark mode or page density settings.
        In addition, all components are designed to ensure they can be
        applied to multiple use cases."
        />

        <ContentSecondary
          headline="Consistency"
          description="NewsKit establishes a common language between designer and engineer
        and applies a systematic approach to all aspects of the interface.
        Infinitely reusable components and clear guidance around design and
        engineering best practices enable teams to build consistency across
        products and teams."
          showSeparator
        />
      </ContentSection>

      <ContentSection sectionName="principles">
        <ContentPrimary
          headline="Principles"
          description="NewsKit design system and the NewsKit team is guided by a set of principles."
        >
          <MediaList
            layout="2-span"
            cards={cards}
            cardType="feature"
            gridProps={{xsRowGutter: 'space050'}}
          />
        </ContentPrimary>
      </ContentSection>
    </ComponentPageCell>
  </Layout>
);

export default Introduction;
