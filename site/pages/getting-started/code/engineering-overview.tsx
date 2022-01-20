import React from 'react';
import {GuidePageTemplate} from '../../../templates/guide-page-template/guide-page-template';
import {ComponentPageCell} from '../../../components/layout-cells';
import {LayoutProps} from '../../../components/layout';
import {
  Illustration,
  getIllustrationComponent,
} from '../../../components/illustrations/illustration-loader';
import {Link} from '../../../components/link';
import {MediaItem, MediaList} from '../../../components/media-list';
import {
  ContentSection,
  ContentPrimary,
} from '../../../components/content-structure';

const featureCardoverrides = {
  title: {
    typographyPreset: 'editorialHeadline030',
  },
  description: {
    typographyPreset: 'editorialParagraph020',
  },
};
const {title, description} = featureCardoverrides;

const PRINCIPLE_CARDS = [
  {
    media: () => (
      <Illustration path="guides/design-overview/design-made-easy" />
    ),
    title: 'Accessible',
    description: (
      <>
        NewsKit components folllow{' '}
        <Link
          overrides={{stylePreset: 'inkInverse'}}
          href="https://www.w3.org/WAI/standards-guidelines/wcag/"
          target="_blank"
        >
          WCAG guidelines
        </Link>
        , WAI Aria and{' '}
        <Link
          overrides={{stylePreset: 'inkInverse'}}
          href="https://www.w3.org/TR/wai-aria-practices/"
          target="_blank"
        >
          Aria-practices
        </Link>
        . Components are AA compliant with A11Y features built-in including
        props to extend their flexibility if required.
      </>
    ),
    stylePrefix: 'featureCard',
    overrides: {
      title,
      description,
    },
  },
  {
    media: () => (
      <Illustration path="guides/design-overview/complete-flexibility" />
    ),
    title: 'Adaptive',
    description: (
      <>
        NewsKit has an extensive
        <Link
          overrides={{stylePreset: 'inkInverse'}}
          href="foundations/overview/"
        >
          theming system
        </Link>
        that enables customization of style and layout. Additionally components
        support a range of properties to customise behaviour.
      </>
    ),
    stylePrefix: 'featureCard',
    overrides: {
      title,
      description,
    },
  },
  {
    media: () => (
      <Illustration path="guides/design-overview/complete-flexibility" />
    ),
    title: 'Productive',
    description:
      'Carefully crafted components ensure that teams using NewsKit can rapidly iterate on product requirements through re-use of common functionality. This promotes both consistency and common language across product development teams.',
    stylePrefix: 'featureCard',
    overrides: {
      title,
      description,
    },
  },
] as MediaItem[];

export default (layoutProps: LayoutProps) => (
  <GuidePageTemplate
    headTags={{
      title: 'Engineering overview | Newskit design system',
      description:
        'The NewsKit design system provides an npm package that exports a library of reusable React components and utilities that can be used as building blocks to compose web applications.',
    }}
    layoutProps={layoutProps}
    pageIntroduction={{
      type: 'Guides',
      name: 'Engineering overview',
      hero: {
        illustration: 'guides/design-overview/hero',
      },
      introduction: `The NewsKit design system provides an npm package that exports a library of reusable React components and utilities that can be used as building blocks to compose web applications.`,
    }}
    featureCard={{
      title: 'Need help?',
      description: 'Can’t find what you’re looking for?',
      href: 'about/contact-us/',
    }}
  >
    <ComponentPageCell>
      <ContentSection sectionName="why?">
        <ContentPrimary
          id="why"
          toc="Why?"
          headline="Why build products with NewsKit?"
          description="Systems thinking is at the core of digital product design. NewsKit improves design consistency and developer efficiency across teams with considered, reusable solutions, and shared best practices. The result is more robust products and more time for innovation."
          showSeparator
        >
          <MediaList
            layout="3-span"
            cardType="feature"
            cards={PRINCIPLE_CARDS}
          />
        </ContentPrimary>
      </ContentSection>

      <ContentSection sectionName="What’s included?">
        <ContentPrimary
          id="whats-included"
          toc="What’s included?"
          headline="What’s included?"
          showSeparator
        >
          <MediaList
            layout="1-span"
            cardsLayout="horizontal"
            cards={[
              {
                title: 'React web components',
                description: (
                  <>
                    A collection high quality React{' '}
                    <Link href="components/overview/">
                      web components built using
                    </Link>{' '}
                    <Link
                      href="https://www.typescriptlang.org/"
                      target="_blank"
                    >
                      TypeScript
                    </Link>{' '}
                    and{' '}
                    <Link
                      href="https://emotion.sh/docs/introduction"
                      target="_blank"
                    >
                      Emotion
                    </Link>
                    .
                  </>
                ),
                media: getIllustrationComponent(
                  'guides/design-overview/theme-library',
                ),
              },
              {
                title: 'Advanced theming system',
                description: (
                  <>
                    An advanced full-featured{' '}
                    <Link
                      href="https://newskit.co.uk/foundations/overview/"
                      target="_blank"
                    >
                      theming system
                    </Link>{' '}
                    with the flexibility to meet the requirement of a single or
                    multi-brand requirement, including both business and
                    consumer products.
                  </>
                ),
                media: getIllustrationComponent(
                  'guides/design-overview/web-components-library',
                ),
              },
              {
                title: 'Utility functions',
                description: (
                  <>
                    A host of{' '}
                    <Link
                      href="https://www.newskit.co.uk/getting-started/code/web/"
                      target="_blank"
                    >
                      utility functions
                    </Link>{' '}
                    for use in third-party or custom components.
                  </>
                ),
                media: getIllustrationComponent(
                  'guides/design-overview/icon-library',
                ),
              },
              {
                title: 'Guidance',
                description:
                  'Comprehensive online documentation and guidelines.',
                media: getIllustrationComponent(
                  'guides/design-overview/utilities-library',
                ),
              },
            ]}
          />
        </ContentPrimary>
      </ContentSection>

      <ContentSection sectionName="architecture">
        <ContentPrimary
          id="architecture"
          toc="Architecture"
          headline="Example architecture"
          description="Below is an example of how it is recommended to link Figma libraries to get the best out of the NewsKit Design System. This ensures that whenever the NewsKit Design System is updated, designs utilising this can automatically receive updates and enables contributing to the NewsKit Design System."
          showSeparator
        >
          <Illustration path="guides/design-overview/example-architecture" />
        </ContentPrimary>
      </ContentSection>
    </ComponentPageCell>
    {/* ToDo: Once design quickstart guide page is ready, need to enable this section.
    <RelatedComponentsSection
      title="What’s next?"
      id="whats-next"
      toc="What’s next?"
      introduction="Want to use NewsKit for your next product? Follow the next steps belows to learn more:"
      related={['Design quickstart guide']}
    /> */}
  </GuidePageTemplate>
);
