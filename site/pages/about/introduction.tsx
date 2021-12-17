import React from 'react';
import {Block, getSizingCssFromTheme, Grid, styled, Divider} from 'newskit';
import Head from 'next/head';
import Layout, {LayoutProps} from '../../components/layout';
import {PageIntroduction} from '../../components/page-introduction';
import {SectionIntroduction} from '../../components/section-introduction';
import {MediaList} from '../../components/media-list';
import {ComponentPageCell} from '../../components/layout-cells';
import {ContentText} from '../../components/text-section';
import {Link} from '../../components/link';

const principleCardoverrides = {
  title: {
    typographyPreset: 'editorialHeadline030',
  },
  description: {
    typographyPreset: 'editorialParagraph020',
  },
};
const {title, description} = principleCardoverrides;

const WrapperWithPadding = styled.div`
  ${getSizingCssFromTheme('paddingTop', 'sizing080')};
  ${getSizingCssFromTheme('marginBottom', 'sizing080')}
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
    overrides: {
      title,
      description,
    },
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
    overrides: {
      title,
      description,
    },
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
    overrides: {
      title,
      description,
    },
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
    overrides: {
      title,
      description,
    },
  },
];

export default ({path, ...props}: LayoutProps) => (
  //  TODO: remove path hack after all docs pages are done - https://nidigitalsolutions.jira.com/browse/PPDSE-312
  <Layout {...props} path={`${path}-new`}>
    <Head>
      <title key="title">About | NewsKit design system</title>
      <meta
        name="Description"
        content="NewsKit provides components, guidelines and standards to enable digital product teams to create high-quality, consistent products quickly. NewsKit is built on modular design principles and backed by best practice guidance for design and development."
      />
    </Head>
    <WrapperWithPadding />
    <Grid lgMargin="sizing000" xsRowGutter="space000">
      <PageIntroduction
        type="About"
        name="Introduction"
        introduction="NewsKit provides components, guidelines and standards to enable digital product teams to create high-quality, consistent products quickly. NewsKit is built on modular design principles and backed by best practice guidance for design and development."
        hero={{
          illustration: 'about/introduction-hero-stepping-stones-illustration',
        }}
      />
      <ComponentPageCell>
        <Block spaceStack="space050" />
      </ComponentPageCell>
      <SectionIntroduction title="Benefits" cellProps={{lg: 8}}>
        <>
          <ContentText>
            Design systems have become the gold standard for product
            development. Some benefits include:
          </ContentText>
          <ContentText title="Speed to market">
            Upfront research, design and development allows teams to build new
            features or products quickly and with confidence. Rapid creation
            translates to the increased pace of innovation.
          </ContentText>
          <ContentText title="Shared knowledge">
            NewsKit is built through collaboration and is available to all.
            Feedback from a diverse range of consumers produces a more robust,
            considered and flexible product. In addition, NewsKit allows teams
            to benefit from the research and experience of other teams and solve
            problems once.
          </ContentText>
          <ContentText title="Best Practice">
            All NewsKit components support keyboard navigation, screen readers
            and touch screens, conforming to{' '}
            <Link href="https://www.w3.org/TR/WCAG21/" target="_blank">
              W3C&apos;s WCAG 2.1 guidelines
            </Link>{' '}
            for accessibility. In addition, the components take in SEO
            considerations where relevant and are rigorously tested. Finally,
            detailed guidance documentation ensures clarity.
          </ContentText>
          <ContentText title="Sustainability">
            NewsKit allows teams to do more with less; components are maintained
            centrally, enabling teams to achieve incremental upgrades and manage
            their digital product needs as they grow.
          </ContentText>
          <ContentText title="Flexibility">
            The powerful theming system allows styling to be tailored to the
            needs of any brand. Themes can be applied globally or per component,
            enabling visual differences between sections, sub-brands or
            unlocking user preferences like dark mode or page density settings.
            In addition, all components are designed to ensure they can be
            applied to multiple use cases.
          </ContentText>
          <ContentText title="Consistency">
            NewsKit establishes a common language between designer and engineer
            and applies a systematic approach to all aspects of the interface.
            Infinitely reusable components and clear guidance around design and
            engineering best practices enable teams to build consistency across
            products and teams.
          </ContentText>
        </>
      </SectionIntroduction>
      <ComponentPageCell>
        <Block spaceStack="space100">
          <Divider />
        </Block>
      </ComponentPageCell>
      <SectionIntroduction title="Principles" cellProps={{lg: 8}}>
        NewsKit design system and the NewsKit team is guided by a set of
        principles.
      </SectionIntroduction>
      <Block spaceStack="space090">
        <MediaList
          layout="2-span"
          cards={cards}
          cardType="feature"
          gridProps={{xsRowGutter: 'space050'}}
        />
      </Block>
    </Grid>
  </Layout>
);
