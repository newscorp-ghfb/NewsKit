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
    title: 'We design for people',
    description:
      'Everything revolves around our customers. Everything we do should make their lives a little easier - and sometimes a lot.',
    overrides: principleCardoverrides,
  },
  {
    media: {
      src: 'static/about-principles-02.svg',
      alt: '',
    },
    stylePrefix: 'principleCard',
    label: 'Inclusive',
    title: 'We’re inclusive first',
    description:
      'Every design decision has the potential to include or exclude. We aim to make everything - from words to images to fonts - simple, clear and accessible for everyone.',
    overrides: principleCardoverrides,
  },
  {
    media: {
      src: 'static/about-principles-03.svg',
      alt: '',
    },
    stylePrefix: 'principleCard',
    label: 'Essential',
    title: 'We’re open (and open source)',
    description:
      'We share everything. We love feedback and contributions. And we look for great ideas everywhere.',
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
        introduction="NewsKit makes building digital products quicker and simpler for everyone."
        hero={{
          illustration: 'about/introduction-hero-stepping-stones-illustration',
        }}
      />
    </PageIntroductionContainer>

    <ComponentPageCell>
      <ContentSection sectionName="benefits">
        <ContentPrimary headline="Benefits" />

        <ContentSecondary
          headline="Speed"
          description="Get to market faster. NewsKit takes care of the research, design and development so you can focus on your users."
        />

        <ContentSecondary
          headline="Community"
          description="Be part of something bigger. When you join NewsKit’s open source community, problems only need solving once - then everyone benefits."
        />

        <ContentSecondary
          headline="Accessibility"
          description={
            <>
              Build products for everyone. NewsKit meets Build products for
              everyone. NewsKit meets{' '}
              <Link href="https://www.w3.org/TR/WCAG21/" target="_blank">
                WCAG
              </Link>{' '}
              and WAI-ARIA standards, and supports keyboard navigation, screen
              readers and touchscreens.
            </>
          }
        />

        <ContentSecondary
          headline="Sustainability"
          description="Do more with less. NewsKit lets you upgrade bit by bit and manage your needs - and costs - as you grow."
        />

        <ContentSecondary
          headline="Customisation"
          description="Stand out from the crowd. NewsKit’s powerful theming system lets you tailor the look and feel of components to your unique brand or sub-brand."
        />

        <ContentSecondary
          headline="Cohesion"
          description="Get your teams talking. NewsKit establishes a common language between designer and engineer, so everyone’s on the same page."
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
