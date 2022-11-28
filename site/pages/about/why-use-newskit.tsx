import React from 'react';
import {LinkStandalone, TextBlock} from 'newskit';
import {AboutPageTemplate} from '../../templates/about-page-template';
import {LayoutProps} from '../../components/layout';
import {MediaList} from '../../components/media-list';
import {ComponentPageCell} from '../../components/layout-cells';
import {
  ContentSection,
  ContentPrimary,
} from '../../components/content-structure';
import {Illustration} from '../../components/illustrations/illustration-loader';
import {BaseCardProps} from '../../components/base-card';

type LatestCardType = {
  title: string;
  description: string;
  author: string;
  url: string;
  linkLabel: string;
};

const LatestCard = ({
  title,
  description,
  author,
  url,
  linkLabel,
}: LatestCardType) => (
  <>
    <TextBlock
      typographyPreset="editorialLabel020"
      stylePreset="inkBase"
      marginBlockEnd="space050"
    >
      {title}
    </TextBlock>
    <TextBlock
      typographyPreset="editorialSubheadline010"
      stylePreset="inkContrast"
      marginBlockEnd="space050"
    >
      {description}
    </TextBlock>
    <TextBlock
      typographyPreset="editorialParagraph020"
      stylePreset="inkBase"
      marginBlockEnd="space050"
    >
      {author}
    </TextBlock>
    <LinkStandalone href={url}>{linkLabel}</LinkStandalone>
  </>
);

const benefitsCards = [
  {
    label: 'Speed',
    title: 'Speed',
    description:
      'Get to market faster. NewsKit takes care of the research, design and development so you can focus on your users.',
  },
  {
    label: 'Community',
    title: 'Community',
    description:
      'Be part of something bigger. When you join NewsKit’s open source community, problems only need solving once - then everyone benefits.',
  },
  {
    label: 'Accessibility',
    title: 'Accessibility',
    description:
      'Build products for everyone. NewsKit meets WCAG and WAI-ARIA standards, and supports keyboard navigation, screen readers and touchscreens.',
  },
  {
    label: 'Sustainability',
    title: 'Sustainability',
    description:
      'Do more with less. NewsKit lets you upgrade bit by bit and manage your needs - and costs - as you grow.',
  },
  {
    label: 'Customisation',
    title: 'Customisation',
    description:
      'Stand out from the crowd. NewsKit’s powerful theming system lets you tailor the look and feel of components to your unique brand or sub-brand.',
  },
  {
    label: 'Cohesion',
    title: 'Cohesion',
    description:
      'Get your teams talking. NewsKit establishes a common language between designer and engineer, so everyone’s on the same page.',
  },
];

const principleCardOverrides = {
  title: {
    typographyPreset: 'editorialHeadline030',
  },
  description: {
    typographyPreset: 'editorialParagraph020',
  },
};

const principlesCards = [
  {
    media: () => <Illustration path="about/principles/design-for-people" />,
    stylePrefix: 'featureCard',
    label: 'User focused',
    title: 'We design for people',
    description:
      'Everything revolves around our customers. Everything we do should make their lives a little easier - and sometimes a lot.',
    overrides: principleCardOverrides,
  },
  {
    media: () => <Illustration path="about/principles/inclusive" />,
    stylePrefix: 'featureCard',
    label: 'Inclusive',
    title: 'We’re inclusive first',
    description:
      'Every design decision has the potential to include or exclude. We aim to make everything - from words to images to fonts - simple, clear and accessible for everyone.',
    overrides: principleCardOverrides,
  },
  {
    media: () => <Illustration path="about/principles/open" />,
    stylePrefix: 'featureCard',
    label: 'Essential',
    title: 'We’re open (and open source)',
    description:
      'We share everything. We love feedback and contributions. And we look for great ideas everywhere.',
    overrides: principleCardOverrides,
  },
];

const latestCards = [
  {
    media: {
      src: 'static/about/latest-news-and-articles/news-ds-podcast-nick.png',
      alt: 'Card illustration',
    },
    href:
      'https://www.designsystemspodcast.com/episodes/episode/79799c42/47-nick-dorman-and-ellis-capon-from-news-uk-bridging-old-and-new-media-with-news-uks-design-system-newskit',
    description: (
      <LatestCard
        title="Podcast"
        description="Bridging old and new media with News UK’s design system"
        author="Nick Dorman & Ellis Capon"
        linkLabel="Listen to the podcast"
        url="https://www.designsystemspodcast.com/episodes/episode/79799c42/47-nick-dorman-and-ellis-capon-from-news-uk-bridging-old-and-new-media-with-news-uks-design-system-newskit"
      />
    ),
  },
  {
    media: {
      src:
        'static/about/latest-news-and-articles/news-zeroheight-podcast-geri.png',
      alt: 'Card illustration',
    },
    href:
      'https://open.spotify.com/episode/3mcQ3P2KEhTrDW8BjvNf2o?si=6fD_ElQERAmNaPlcR-7ouQ&nd=1',
    description: (
      <LatestCard
        title="Podcast"
        description="DesignOps Island Discs, zeroheight’s design systems podcast"
        author="Geri Reid"
        linkLabel="Listen to the podcast"
        url="https://open.spotify.com/episode/3mcQ3P2KEhTrDW8BjvNf2o?si=6fD_ElQERAmNaPlcR-7ouQ&nd=1"
      />
    ),
  },
  {
    media: {
      src: 'static/about/latest-news-and-articles/news-dslondon-xin.png',
      alt: 'Card illustration',
    },
    href: 'https://www.youtube.com/watch?v=Uz_n9B2rL0g&t=2387s',
    description: (
      <LatestCard
        title="Video"
        description="Theming in NewsKit design system, talk at Design Systems London"
        author="Xin Wang"
        linkLabel="Watch the video"
        url="https://www.youtube.com/watch?v=Uz_n9B2rL0g&t=2387s"
      />
    ),
  },
  {
    media: {
      src: 'static/about/latest-news-and-articles/news-wdc-geri.png',
      alt: 'Card illustration',
    },
    href: 'https://www.youtube.com/watch?v=xYoNxYirdOY',
    description: (
      <LatestCard
        title="Video"
        description="Designing the future of accessibility, talk at Web Dev Conference"
        author="Geri Reid"
        linkLabel="Watch the video"
        url="https://www.youtube.com/watch?v=xYoNxYirdOY"
      />
    ),
  },
  {
    media: {
      src: 'static/about/latest-news-and-articles/news-audioplayer-nick.png',
      alt: 'Card illustration',
    },
    href:
      'https://medium.com/newskit-design-system/how-an-audio-player-component-tells-the-story-of-newskit-design-systems-changing-strategy-8dc99d37ed67',
    description: (
      <LatestCard
        title="Blog"
        description="How an audio player component tells the story of NewsKit Design System’s changing strategy"
        author="Nick Dorman"
        linkLabel="Read the blog post"
        url="https://medium.com/newskit-design-system/how-an-audio-player-component-tells-the-story-of-newskit-design-systems-changing-strategy-8dc99d37ed67"
      />
    ),
  },
  {
    media: {
      src: 'static/about/latest-news-and-articles/news-dslondon-luke-marco.png',
      alt: 'Card illustration',
    },
    href: 'https://www.youtube.com/watch?v=fqh3dSsrmdI',
    description: (
      <LatestCard
        title="Video"
        description="Aligning multi-theme design tokens across design and code"
        author="Luke Finch & Marco Vanali"
        linkLabel="Watch the video"
        url="https://www.youtube.com/watch?v=fqh3dSsrmdI"
      />
    ),
  },
];

const pageName = 'Why use NewsKit?';
const pageDescription = `NewsKit makes building digital products quicker and simpler for everyone.`;

const WhyUseNewskit = (layoutProps: LayoutProps) => (
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
      hero: {
        illustration: 'about/why-use-newskit-hero-illustration',
        illustrationProps: {viewBox: '0 0 1344 759'},
      },
      showSeparator: true,
    }}
  >
    <ComponentPageCell>
      <ContentSection id="benefits" toc="Benefits">
        <ContentPrimary headline="Benefits" description=" " showSeparator>
          <MediaList layout="2-span" cards={benefitsCards} />
        </ContentPrimary>
      </ContentSection>
      <ContentSection id="principles" toc="Principles">
        <ContentPrimary
          headline="Principles"
          description="Our principles shape everything we do at NewsKit."
          showSeparator
        >
          <MediaList
            layout="3-span"
            cards={principlesCards}
            cardType="feature"
          />
        </ContentPrimary>
      </ContentSection>
      <ContentSection id="latest-news" toc="Latest news">
        <ContentPrimary headline="Latest news and articles" description=" ">
          <MediaList
            layout="3-span"
            cards={latestCards as BaseCardProps[]}
            cardType="base"
          />
        </ContentPrimary>
      </ContentSection>
    </ComponentPageCell>
  </AboutPageTemplate>
);

export default WhyUseNewskit;
